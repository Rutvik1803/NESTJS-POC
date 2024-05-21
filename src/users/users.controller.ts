import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { UpdateUserDto } from 'src/dto/update-user.dto';


@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Get()
    getUsers(@Query('role') role?: 'INTERN' | 'MANAGER' | 'ADMIN') {
        return this.usersService.getUsers(role);
    }

    @Get(':id')
    getUser(@Param('id', ParseIntPipe) id: number) {
        console.log("Find",id)
        return this.usersService.getUser(id) //Unary plus operator
    }

    @Post()
    createUser(@Body(ValidationPipe) user: CreateUserDto) {
        return this.usersService.createUser(user);
    }
    @Patch(':id')
    updateUser(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) user: UpdateUserDto) {
        return this.usersService.updateUser(id, user);
    }

    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.deleteUser(id);
    }
}
