interface ICreateUserDto {
    name: string;
    username: string;
    email: string;
    password: string;
    drivers_license: string;
}

export { ICreateUserDto }