import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { Role } from '../role.decorator';
import { RoleGuard } from '../role.guard';
import { AuthService } from './auth.service';
import { JwtGuard } from './jwt.guard';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login(@Body() body) {
    return { token: this.authService.login(body.username, body.password) };
  }

  @Role('admin')
  @UseGuards(JwtGuard, RoleGuard)
  @Get('test-auth')
  test(@Req() req) {
    return {
      name: req.user.name,
      username: req.user.username,
      email: req.user.email,
      role: req.user.role,
      description: `Login realizado em ${req.user.loginDate}`,
    };
  }

  @UseGuards(JwtGuard)
  @Get('user')
  user(@Req() req) {
    return req.user;
  }
}
