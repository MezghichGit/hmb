export interface User{
    id:number,
    nom:string,
    prenom:string,
    tel:string,
    adresse:string
}

export interface rdv{
 typeRdv:string,
 date:Date
}

export interface Employer{
    id:number,
    name:string,
    username:string,
    email:string,
    address:string
}