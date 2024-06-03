export type TUser = {
    id?: number;
    firstname: string;
    lastname: string;
    gender: string;
    postcode: number;
    dietary?: string[];
    availability: string[];
    images?: string[];
};

export type TDate = {
    id?: number;
    users: number[];
    datetime: Date;
    venue: string;
};
