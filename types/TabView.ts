import { Question } from "./Profile";

export type Tab = {
    id: string,
    title: string;
};

export type TransformedData = {
    tabs: Tab[];
    content: Record<string, Question[]>;
};