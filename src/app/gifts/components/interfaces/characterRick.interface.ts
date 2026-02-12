import { Species } from "./rick-and-morty.interface";

export interface CharacterRick {
    id: number;
    name: string;
    species: Species;
    image: string;
}