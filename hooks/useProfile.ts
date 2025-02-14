import { makeRequest } from '@/networking';
import { QueryKey, QueryMethod } from './../networking/index';
import { useQuery } from '@tanstack/react-query';
import { Config } from '@/Config';
import { Label, ProfileResponse, Question } from '@/types/Profile';
import { Tab, TransformedData } from '@/types/TabView';

type Props = {
    expertId: string;
};

// Fetch expert profile data
const fetchExpert = async ({ expertId }: Props): Promise<ProfileResponse> => {
    return makeRequest<ProfileResponse>({
        url: `/expert/${expertId}`,
        method: QueryMethod.GET,
    }).then(response => response.data);
};

// Transform response into tab view data
const transformTabViewData = (response: ProfileResponse): TransformedData => {
    const tabs: Tab[] = response.labels.map((label, index) => ({
        id: label.condition_id,
        title: label.condition_id,
      }));
  
    const content: Record<string, Question[]> = response.labels.reduce(
      (acc, label) => {
        acc[label.condition_id] = response.questions.filter(
          (question) => question.condition_id === label.condition_id
        );
        return acc;
      },
      {} as Record<string, Question[]>
    );
  
    return { tabs, content };
  };

export const useProfile = ({ expertId }: Props) => {
    const query = useQuery<ProfileResponse>({
        queryKey: [QueryKey.Profile, expertId],
        queryFn: () => fetchExpert({ expertId }),
        staleTime: Config.defaultStaleTime,
    });

    return {
        ...query,
        data: query.data ? { ...query.data, ...transformTabViewData(query.data) } : undefined,
    };
};
