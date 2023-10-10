import { User } from "./User";

export class Token {

    public token: string  | null;
    public cadastroId?: string;
    public cadastro?: User;
    
    constructor(props: Token) {
        this.cadastro = props.cadastro
        this.token = props.token
        this.cadastro = props.cadastro
  
    }

}