import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/users/interfaces/user.interface';
import { RouletteNumber, rouletteNumbers } from './classes/roulette.number.class';
import { checkOut } from './functions/checkout';
import { verifyBet } from './functions/get_total_bet';
import { RouletteBet } from './interfaces/roulette.bet.interface';
import { Roulette } from './interfaces/roulette.interface';

@Injectable()
export class RouletteService {
    constructor(@InjectModel('User') private readonly users: Model<User>) {}
    async createRoulette(userId: string, rouletteBets: RouletteBet[]): Promise<any> {
        let user = await this.users.findOne({ _id: userId });
        let number = Math.random()*360;
        let slice = number/9.72
        let sliceNumber = Math.floor(slice)
        while(sliceNumber > 36){
            sliceNumber = sliceNumber - 36
        }
        let rouletteNumber = rouletteNumbers[sliceNumber]
        let totalBets = verifyBet(rouletteBets, user);
        if(!totalBets.status){
            return { status : false, message: totalBets.message }
        }
        user.coins.one -= totalBets.totalCoins[0];
        user.coins.five -= totalBets.totalCoins[1];
        user.coins.ten -= totalBets.totalCoins[2];
        user.coins.twentyfive -= totalBets.totalCoins[3];
        user.coins.fifty -= totalBets.totalCoins[4];
        user.coins.hundred -= totalBets.totalCoins[5];
        user.coins.twohundred -= totalBets.totalCoins[6];
        user.coins.fivehundred -= totalBets.totalCoins[7];
        user.coins.thousand -= totalBets.totalCoins[8];
        user.markModified('coins');
        await user.save();
        checkOut(user, rouletteNumber, rouletteBets)
        await user.save();
        let totalRotation = sliceNumber + 360*randomIntFromInterval(5,13)
        return { bets: rouletteBets, rouletteNumber: rouletteNumber, status: true, rotation: totalRotation }
    }
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}