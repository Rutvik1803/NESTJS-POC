import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class EmployeesService {
  constructor(private readonly databaseService: DatabaseService) { } //Dependency Injection

  async create(createEmployeeDto: Prisma.EmployeeCreateInput) {
    return this.databaseService.employee.create({ data: createEmployeeDto });
  }

  async findAll(role?: 'INTERN' | 'MANAGER' | 'ADMIN') {
    if(role) return this.databaseService.employee.findMany({ where: { role: role } });
    else return this.databaseService.employee.findMany();
  }

  async findOne(id: number) {
    return this.databaseService.employee.findUnique({ where: { id: id } });
  }

  async update(id: number, updateEmployeeDto: Prisma.EmployeeUpdateInput) {
    return this.databaseService.employee.update({ where: { id: id }, data: updateEmployeeDto });
  }

  async remove(id: number) {
    return this.databaseService.employee.delete({ where: { id: id } });
  }
}
