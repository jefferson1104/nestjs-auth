import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

const users = [
  {
    id: 1,
    name: 'Jefferson Soares',
    username: 'jefferson1104',
    email: 'jefferson@soaresdev.com',
    password: '$2b$10$2QHAEW0XFWmCrxeJGBKa2eSXXvPcsWp.WWsohEfqzn1LWs/4NLvrS',
    role: 'admin',
  },
  {
    id: 2,
    name: 'Joel Soares',
    username: 'joel3007',
    email: 'joel@soaresdev.com',
    password: '$2b$10$2QHAEW0XFWmCrxeJGBKa2eSXXvPcsWp.WWsohEfqzn1LWs/4NLvrS',
    role: 'admin',
  },
  {
    id: 3,
    name: 'Arthur Lopes',
    username: 'arthur2104',
    email: 'arthur@soaresdev.com',
    password: '$2b$10$2QHAEW0XFWmCrxeJGBKa2eSXXvPcsWp.WWsohEfqzn1LWs/4NLvrS',
    role: 'user',
  },
];

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  addZeroDate(numero) {
    if (numero <= 9) return '0' + numero;
    else return numero;
  }

  login(username, password) {
    const user = this.validateCredentials(username, password);

    const today = new Date();
    const formatedData =
      this.addZeroDate(today.getDate().toString()) +
      '/' +
      this.addZeroDate(today.getMonth() + 1).toString() +
      '/' +
      today.getFullYear();

    const payload = {
      sub: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      role: user.role,
      loginDate: formatedData,
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
