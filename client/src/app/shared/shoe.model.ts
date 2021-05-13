import { Colors } from "./colors.model";

export interface Shoe {
    idScarpa: number;
    shoeName: string;
    model: string;
    imageURL: string;
    version: string;
    price: string;
    colors?: Colors;
}
