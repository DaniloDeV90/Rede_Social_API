export class Profile {
    public id?: string;
    public username: string;
    public sexo: string;
    public ImgPerfil?: {

        imgUrl: string
    }


    constructor(props: Profile) {
        this.id = props.id,
            this.sexo = props.sexo,
            this.username = props.username

    }

}