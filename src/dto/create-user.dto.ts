import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsEnum(['INTERN', 'MANAGER', 'ADMIN'], { message: 'Role must be one of INTERN, MANAGER, ADMIN' })
    role: 'INTERN' | 'MANAGER' | 'ADMIN';
}
