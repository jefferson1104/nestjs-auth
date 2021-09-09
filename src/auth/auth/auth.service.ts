import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

const users = [
  {
    id: 1,
    username: 'jefferson1104',
    password: '$2b$10$RP6c0t.vF.RFsOIrJhcoguUCn8/Ln5G5cVOUwtsBlh67X9BC0f63O',
    role: 'admin',
  },
  {
    id: 2,
    username: 'joel3007',
    password: '$2b$10$RP6c0t.vF.RFsOIrJhcoguUCn8/Ln5G5cVOUwtsBlh67X9BC0f63O',
    role: 'user',
  },
  {
    id: 3,
    username: 'arthur2104',
    password: '$2b$10$RP6c0t.vF.RFsOIrJhcoguUCn8/Ln5G5cVOUwtsBlh67X9BC0f63O',
    role: 'user',
  },
];

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  login(username, password) {
    const user = this.validateCredentials(username, password);

    const payload = {
      sub: user.id,
      username: user.username,
      role: user.role,
    };

    return this.jwtService.sign(payload);
  }

  validateCredentials(username: string, password: string) {
    const user = users.find(
      (u) =>
        u.username === username && bcrypt.compareSync(password, u.password),
    );

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }
}
