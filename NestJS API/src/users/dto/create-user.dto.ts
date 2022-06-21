export class CreateUserDto {
    readonly username: string;
    password: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    readonly phone: string;
    readonly status: boolean;
    readonly date: Date;
}

export class UpdateUserDto {
    readonly username: string;
    password: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    readonly phone: string;
    readonly status: boolean;
    readonly date: Date;
}

