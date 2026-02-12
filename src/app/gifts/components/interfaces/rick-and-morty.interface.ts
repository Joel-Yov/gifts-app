export interface RickAndMortyResponse {
    info:    Info;
    results: RickResult[];
}

export interface Info {
    count: number;
    pages: number;
    next:  string;
    prev:  null;
}

export interface RickResult {
    id:       number;
    name:     string; //Esto me interesa
    status:   Status; //Esto me interesa
    species:  Species; //Esto me interesa
    type:     string;
    gender:   Gender;
    origin:   Location;
    location: Location;
    image:    string;  //Esto me interesa
    episode:  string[];
    url:      string;
    created:  Date;
}

export enum Gender {
    Female = "Female",
    Male = "Male",
    Unknown = "unknown",
}

export interface Location {
    name: string;
    url:  string;
}

export enum Species {
    Alien = "Alien",
    Human = "Human",
}

export enum Status {
    Alive = "Alive",
    Dead = "Dead",
    Unknown = "unknown",
}
