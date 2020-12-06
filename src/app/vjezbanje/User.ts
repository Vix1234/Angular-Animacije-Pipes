export class User{
    id:number;
       ime:string;
        email:string;
        tipUsera:string;
        slika:string;


    constructor( 
       id:number,
       ime:string,
        email:string,
        tipUsera:string,
        slika:string){ 
            this.id=id,
            this.ime=ime,
            this.email = email,
            this.tipUsera=tipUsera,
            this.slika=slika}    
}
