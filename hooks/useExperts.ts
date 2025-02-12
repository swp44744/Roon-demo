import { QueryMethod, QueryKey } from './../networking/index';
import { makeRequest } from "@/networking"
import { Experts } from "@/types/Experts"
import { useInfiniteQuery } from '@tanstack/react-query';
import { Config } from "@/Config";

const fetchExperts = async ({ pageParam = 0, specialty }: { pageParam: number, specialty?: string }) => {
    const limit = Config.paginationLimitDefault;
    const offset = pageParam * limit;
    const params: Record<string, any> = { limit, offset };

    if (specialty) {
        params.specialty__name = specialty;
    }

    const response = await makeRequest<Experts>({
        url: '/fertility/expert/list',
        method: QueryMethod.GET,
        params: params,
    });

    const totalCount = response.data?.count ?? 0;
    const isLastPage = totalCount === 0 || totalCount < limit;
    const nextCursor = isLastPage ? undefined : pageParam + 1;

    return { data: response.data, nextCursor };
};

type Props = {
    specialty?: string
}
export const useExperts = ({ specialty }: Props) => {
    const query = useInfiniteQuery({
        queryKey: [QueryKey.Experts],
        initialPageParam: 0,
        getNextPageParam: (lastPage) => lastPage?.nextCursor,
        queryFn: ({ pageParam }) => fetchExperts({ pageParam, specialty }),
        staleTime: Config.defaultStaleTime,
    });

    function handleEndReached() {
        if (query.hasNextPage && !query.isFetching) {
            query.fetchNextPage()
        }
    }

    const experts = query.data?.pages.flatMap(page => page.data.experts) || []

    return {
        ...query,
        handleEndReached,
        experts
    };
};
