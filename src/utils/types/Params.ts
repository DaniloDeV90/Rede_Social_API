export type CustomError = {
    error: Error;
    ErrorStatus: number;
  };
export  type paramsS3 = {
    Bucket: string,
    Key: string,
    Body: Buffer,
    ACL: string,
    ContentType: string

}
export type  Contains = {
    data: {
        ProfileId: string,
        descricao: string | null
        imgPost: {
            create: {
                imgUrl: string
            }
        }
    }
}

export type  noContains = {
    data: {
        ProfileId: string,
        descricao: string | null,


    }
}

export type PostTypes = {
    FileConfig: {
      Filename: string,
      FileSize: number,

      FileBuffer: ArrayBuffer,
      FileType: string
    } | null,
    textArea: string | null,
    id: string
  }