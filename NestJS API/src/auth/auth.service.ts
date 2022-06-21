import { Injectable, Request } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
const bcrypt = require('bcrypt');

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}
  
  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findByUsername(username);
    if(user === null){
      return {error: "User not found"}
    }else{
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        return {error: "Password or Username is incorrect"};
      }
      return user;
    }
  }
  
  
  async login(user: any) {
    if(user.error){
      return user;
    }else{
      const payload = { userId: user._id, sub: user._id.toString() };
      console.log('User', user.username, 'logged in.')
      return {
        access_token: this.jwtService.sign(payload),
      };
    }
  }

  async getUserData(access_token: string): Promise<any> {
    if(!access_token){
      return {error: 'User not logged in'}
    }else{
      // @ts-ignore
      const {userId} = this.jwtService.decode(access_token)
      return await this.usersService.findOne(userId);
    }
  }

}
