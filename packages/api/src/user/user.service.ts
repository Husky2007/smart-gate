import { Injectable, NotFoundException } from '@nestjs/common';
import { Role } from '../auth/role.enum';
import { UserEntity } from '../database/entities/user.entity';

@Injectable()
export class UserService {
  private users = [
    {
      id: '1',
      email: 'admin',
      password: '123',
      firstName: 'Anna',
      lastName: 'Doe',
      roles: [Role.Admin],
    },
    {
      id: '2',
      email: 'user',
      password: '123',
      firstName: 'Joe',
      lastName: 'Doe',
      roles: [Role.User],
    },
  ] as Array<UserEntity>;

  async findOne(email: string): Promise<UserEntity | undefined> {
    return this.users.find((user) => user.email === email);
  }

  async create(user: UserEntity): Promise<UserEntity> {
    if (!this.users.includes(user)) {
      this.users.push(user);
    }
    return user;
  }

  public async getUserByEmail(userEmail: string): Promise<UserEntity> {
    const foundUser = this.users.find(({ email }) => email === userEmail);

    if (!foundUser) {
      throw new NotFoundException(`User with email=${userEmail} not found`);
    }

    return foundUser;
  }
}
