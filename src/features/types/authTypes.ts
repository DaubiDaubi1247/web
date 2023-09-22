export interface UserInfo {
    login : string,
    password : string,
}

export interface AuthTypes {
    login : string | null,
    password : string | null,
    isAuth : boolean
}