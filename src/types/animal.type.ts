import { TCategory } from "./category.type";


export type TAnimal = {
    _id: string;
    name: string;
    category: TCategory;
    image: string;
}