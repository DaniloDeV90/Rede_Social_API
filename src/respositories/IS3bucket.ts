export interface IparamsS3  {
    Bucket: string,
    Key: string,
    Body: Buffer,
    ACL: string,
    ContentType: string

}

export interface IdeleteImageBucket {
    Bucket: string,
    Key: string
}
export interface IS3Bucket {
    S3upload (options: IparamsS3): Promise <boolean>
    S3delete (options: IdeleteImageBucket): Promise <boolean>
}