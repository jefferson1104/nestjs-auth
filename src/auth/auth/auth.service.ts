import { Injectable } from '@nestjs/common';
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
  login(username, password) {
    console.log(username, password);
  }
}
