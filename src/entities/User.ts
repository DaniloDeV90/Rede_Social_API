

export class User {


    public id?: string;
    public nome: string;
    public password: string;
    public data_nasc: Date;
    public email: string;


    
    constructor(props: User) {
        this.nome = props.nome
        this.password = props.password
        this.data_nasc = props.data_nasc
        this.email = props.email
        this.id = props.id
     
    }




}