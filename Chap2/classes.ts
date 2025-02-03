class Country{
    constructor(private lang: string){}
    // lang: string;

    language(){
        console.log(this.lang)
    }
}

const TZ = new Country("TANZANIA");
// TZ.lang = "Swahili";
TZ.language()