import { User } from "../entities/User";

export interface IvalidationUser {
    UserIsValidate (User: User):  void
}