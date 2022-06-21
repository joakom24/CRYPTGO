import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { Coins } from './interfaces/bjcoins.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

const bcrypt = require('bcrypt');


@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly users: Model<User>) {}
    
    async findAll(): Promise<User[]> {
        return await this.users.find();
    }

    async findOne(id: string): Promise<User> {
        return await this.users.findOne({ _id: id });
    }

    async findByUsername(username: string): Promise<User> {
        return await this.users.findOne({ username });
    }

    async create(user: User): Promise<any> {
        return await this.users.findOne({username: user.username}).then( async (result) => {
            if (result) {
                return {error: "Username already exists"};
            } else {
                return await this.users.create(user);
            }
        })
    }

    async delete(id: string): Promise<User> {
        return await this.users.findByIdAndRemove(id);
    }

    async update(id: string, user: User): Promise<User> {
        return await this.users.findByIdAndUpdate(id, user, { new: true });
    }

    async updateCoins(id: string, bjCoins: Coins): Promise<User> {
        return await this.users.findByIdAndUpdate(id, { coins: bjCoins }, { new: true });
    }
    
    async deleteCoins(id: string): Promise<User> {
        return await this.users.findByIdAndUpdate(id, { coins: null }, { new: true });
    }
    
}