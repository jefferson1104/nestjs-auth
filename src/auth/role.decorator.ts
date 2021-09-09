import { SetMetadata } from '@nestjs/common';

export const Role = (role: string) => {
  return SetMetadata('role', role);
};

/*
UM DECORATOR SERVE PARA:
  - alterar o comportamento de uma variavel, funcão, método ou classe
  - trabalhar com meta dados
*/
