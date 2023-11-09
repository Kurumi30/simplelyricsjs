declare class Letras {
    constructor();
    search(search_term: string): Promise<Doc|null>;
    getLyrics(result: Doc): Promise<string | null>;
}

declare interface Result {
    response: Response;
}

declare interface Response {
    numFound: number;
    start: number;
    maxScore: number;
    docs: Doc[];
    highlighting: any;
}

declare interface Doc {
    art: string;
    dns: string;
    full_txt: string;
    extra_txt: string;
    txt: string;
    g: string;
    h: number;
    iar: number;
    imu: number;
    id: string;
    img: string;
    img_alt_text: string;
    t: string;
    url: string;
    score: string;
}

export {
    Letras
};