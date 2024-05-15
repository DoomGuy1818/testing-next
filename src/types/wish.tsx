export interface Wish {
    ID: string;
    Name: string;
    Price: string;
    Photo: string;
    Description: string;
    Link: string;
    Category: string;
}

interface WishData {
    wishes: Wish[];
}