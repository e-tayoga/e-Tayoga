export type Topic = {
    name: string;
    description: string;
}

export type Category = {
    name: string;
    description: string;
}

export type Comment = {
    farmerId: number;
    message: string;
    createdAt: string;
    isEdited: boolean;
}

export type Discussion = {
    id: number;
    title: string;
    description: string;
    topic: Topic;
    comments: Comment[];
    createdAt: string;
}

export type Forum = {
    id: number;
    title: string;
    description: string;
    category: Category;
    discussions: Discussion[];
    createdAt: string;
}