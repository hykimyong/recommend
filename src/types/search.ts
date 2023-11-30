export interface ISearch {
    result:           number;
    history:          History;
    suggest_bj:       SuggestBj[];
    suggest_contents: string[];
    charset:          string;
    t:                string;
}

export interface History {
    isActive: number;
    list:     List;
    d:        string;
}

export interface List {
}

export interface SuggestBj {
    user_id:      string;
    user_nick:    string;
    station_logo: string;
    medal:        boolean;
    broad_no:     string;
}
