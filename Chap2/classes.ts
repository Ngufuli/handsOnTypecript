class Country{
    constructor(){}
    lang: string;

    language(){
        console.log(this.lang)
    }
}

const TZ = new Country;
TZ.lang = "Swahili";
TZ.language()