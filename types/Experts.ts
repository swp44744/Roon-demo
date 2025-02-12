export interface Label {
    id: string;
    name: string;
    display_order: number;
    is_organization: boolean;
  }
  
  export interface Specialty {
    id: string;
    name: string;
    display_order: number;
  }
  
  export interface Expert {
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
  }
  
  export interface Experts {
    count: number;
    next: string | null;
    previous: string | null;
    labels: Label[];
    experts: Expert[];
  }
  