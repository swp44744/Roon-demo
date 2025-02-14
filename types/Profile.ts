interface Answer {
    id: string;
    display_order: number;
    duration: number;
    thumbnail: string;
    respondent: Respondent;
}

interface Respondent {
    id: string;
    thumbnail: string;
    specialty: string;
    organization: string | null;
    respondent_thumbnail: string;
    respondent_background: string;
}

export interface Question {
    id: string;
    question: string;
    display_order: number;
    role: string;
    condition_id: string;
    is_canonical: boolean;
    answers_count: number;
    answers: Answer[];
    respondent_profiles: Respondent[];
    answer_id: string;
}

interface Link {
    url: string;
    name: string;
    type: string;
}

interface Specialty {
    id: string;
    name: string;
    display_order: number;
}

export interface Label {
    condition_id: string;
}

export interface ProfileResponse {
    count: number;
    next: string;
    previous: string | null;
    bio: string;
    is_featured: boolean;
    thumbnail: string;
    display_order: number;
    id: string;
    prefix: string;
    first_name: string;
    last_name: string;
    suffix: string;
    full_name: string;
    display_name: string;
    condition_id: string;
    is_followed_by_me: boolean;
    specialty: Specialty;
    organization: string | null;
    respondent_background: string;
    respondent_thumbnail: string;
    labels: Label[];
    years_of_experience: number;
    work_institution: string;
    location: string | null;
    education: string[];
    educations: string[];
    links: Link[];
    questions: Question[];
}
