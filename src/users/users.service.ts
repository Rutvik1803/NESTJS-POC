import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { UpdateUserDto } from 'src/dto/update-user.dto';

@Injectable()
export class UsersService {
    private users = [
        { "id": 1, "name": 'Alice' ,"email": "alice@email.com", "role": 'ADMIN' },
        { "id": 2, "name": 'Bob' ,"email": "bob@email.com", "role": 'MANAGER' },
        { "id": 3, "name": 'Charlie' ,"email": "charlie@email.com", "role": 'INTERN'},
        { "id": 4, "name": 'David' ,"email": "David@email.com", "role": 'INTERN'},
        { "id": 5, "name": 'Eve' ,"email": "eve@email.com", "role": 'MANAGER'}
    ];

    getUsers(role?: 'INTERN' | 'MANAGER' | 'ADMIN') {
        if(role)
            {
                const rolesArray = this.users.filter(user => user.role === role);
                if(rolesArray.length === 0)
                    throw new NotFoundException('Role not found');
                return rolesArray;
            }
        else
            return this.users;
        // return role ? this.users.filter(user => user.role === role) : this.users;
    }

    getUser(id: number){
        const user = this.users.find(user=> user.id ===  id);
        if (!user) throw new NotFoundException('User not found');
        return user;
    }

    createUser(user: CreateUserDto) {
        const userByHighestId = [...this.users].sort((a, b) => b.id - a.id);
        const newUser = { id: userByHighestId[0].id + 1, ...user };
        this.users.push(newUser);
        return newUser;
    }

    updateUser(id: number, user: UpdateUserDto) {
        const updatedUser = this.users.find(user => user.id === id);
        Object.assign(updatedUser, user);
        return updatedUser;
    }

    deleteUser(id: number) {
        const deletedUser = this.users.find(user => user.id === id);
        this.users = this.users.filter(user => user.id !== id);
        return 'Delete user ' + deletedUser.name;
    }
      
}
