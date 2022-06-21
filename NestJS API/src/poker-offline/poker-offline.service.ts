import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'; 
import { Bet } from 'src/blackjack/interfaces/bet.interface';
import { User } from 'src/users/interfaces/user.interface';
import {addCoins, addBet} from './functions/addCoins.function';
import { calculateHand } from './functions/poker.functions';
import { PokerOffline } from './interfaces/poker_offline.interface';

const Deck =  require('classic-deck');

@Injectable()
export class PokerOfflineService {
    constructor(@InjectModel('PokerOffline') private readonly pokerOffline: Model<PokerOffline>, @InjectModel('User') private readonly users: Model<User>) {}
    async findAll(): Promise<PokerOffline[]> {
        return await this.pokerOffline.find();
    }
    async startGame(userId: string, bet: Bet): Promise<any> {
        return await this.pokerOffline.findOne({userId: userId}).then( async (result) => {
            if (result == null){
                let deck = new Deck().deck;
                deck.sort(() => Math.random() - 0.5);
                let user = await this.users.findOne({_id: userId});
                if(user == null){
                    return {error: 'User not found'};
                }
                const game = new this.pokerOffline();
                const dealerHand = [deck[0], deck[1]];
                deck.splice(0, 2);
                const currenHand = [deck[0], deck[1]];
                deck.splice(0, 2);
                game.tie = false;
                game.userWon = false;
                game.dealerWon = false;
                game.userFloped = false;
                game.userId = userId;
                game.startBet = bet;
                game.bet = bet;
                game.dealerHand = dealerHand;
                game.currentHand = currenHand;
                game.deck = deck;
                user.coins = addCoins(user, game, -1);
                user.markModified('coins');
                await user.save();
                await game.save();
                let visibleGame = game;
                visibleGame.dealerHand = null;
                visibleGame.deck = null;
                return visibleGame;
            }else{
                let visibleGame = result;
                visibleGame.dealerHand = null;
                visibleGame.deck = null;
                return visibleGame;
            }
        })
    }
    async fold(userId: string): Promise<any> {
        return await this.pokerOffline.findOne({userId: userId}).then( async (result) => {
            if (result == null){
                return {error: 'No game found'};
            }else{
                let game = await this.pokerOffline.findOne({userId});
                if(game.userFloped){
                    return {error: 'You cant Fold'};
                }
                await game.delete();
                return {success: 'Game deleted'};
            }
        })
    }
    
    async flop(userId: string): Promise<any> {
        return await this.pokerOffline.findOne({userId: userId}).then( async (result) => {
            if (result == null){
                return {error: 'No game found'};
            }else{
                let game = await this.pokerOffline.findOne({userId});
                if(game.userFloped){
                    return {error: 'You already floped'};
                }
                let user = await this.users.findOne({_id: userId});
                user.coins = addCoins(user, game, -2);
                user.markModified('coins');
                game.bet = addBet(game, 2);
                game.markModified('bet');
                game.userFloped = true;
                game.deckHand = [game.deck[0], game.deck[1], game.deck[2]];
                game.deck.splice(0, 3);
                await user.save();
                await game.save();
                let visibleGame = game;
                visibleGame.dealerHand = null;
                visibleGame.deck = null;
                return visibleGame;
            }
        })
    }

    async bet(userId: string): Promise<any> {
        return await this.pokerOffline.findOne({userId: userId}).then( async (result) => {
            if (result == null){
                return {error: 'No game found'};
            }else{
                let game = await this.pokerOffline.findOne({userId});
                if(!game.userFloped){
                    return {error: "You didn't floped"};
                }
                let user = await this.users.findOne({_id: userId});
                if(game.deckHand.length == 3){
                    game.deckHand.push(game.deck[0]);
                    game.deck.splice(0, 1);
                    game.markModified('deckHand');
                    game.markModified('deck');
                    user.coins = addCoins(user, game, -1);
                    user.markModified('coins');
                    game.bet = addBet(game, 1);
                    game.markModified('bet');
                }else if(game.deckHand.length == 4){
                    game.deckHand.push(game.deck[0]);
                    game.deck.splice(0, 1);
                    game.markModified('deckHand');
                    game.markModified('deck');
                    user.coins = addCoins(user, game, -1);
                    user.markModified('coins');
                    game.bet = addBet(game, 1);
                    game.markModified('bet');
                    let results = calculateHand(game);
                    if(results.winner == 'user'){
                        game.userWon = true;
                        game.markModified('userWon');
                    } else if(results.winner == 'tie'){
                        game.tie = true;
                    } else {
                        game.dealerWon = true;
                        game.markModified('dealerWon');
                    }
                    game.deck = null;
                    const visibleGame = game;
                    game.delete();
                    return {winnerHand: results.winnerHand, game: visibleGame};
                }
                await user.save();
                await game.save();
                let visibleGame = game;
                visibleGame.dealerHand = null;
                visibleGame.deck = null;
                return visibleGame;
            }
        });
    }

    async check(userId: string): Promise<any> {
        return await this.pokerOffline.findOne({userId: userId}).then( async (result) => {
            if (result == null){
                return {error: 'No game found'};
            }else{
                let game = await this.pokerOffline.findOne({userId});
                if(!game.userFloped){
                    return {error: "You didn't floped"};
                }
                let user = await this.users.findOne({_id: userId});
                if(game.deckHand.length == 3){
                    game.deckHand.push(game.deck[0]);
                    game.deck.splice(0, 1);
                    game.markModified('deckHand');
                    game.markModified('deck');
                }else if(game.deckHand.length == 4){
                    game.deckHand.push(game.deck[0]);
                    game.deck.splice(0, 1);
                    game.markModified('deckHand');
                    game.markModified('deck');
                    let results = calculateHand(game);
                    if(results.winner == 'user'){
                        game.userWon = true;
                        game.markModified('userWon');
                    } else if(results.winner == 'tie'){
                        game.tie = true;
                    } else {
                        game.dealerWon = true;
                        game.markModified('dealerWon');
                    }
                    game.deck = null;
                    const visibleGame = game;
                    game.delete();
                    return {winnerHand: results.winnerHand, game: visibleGame};
                }
                await user.save();
                await game.save();
                let visibleGame = game;
                visibleGame.dealerHand = null;
                visibleGame.deck = null;
                return visibleGame;
            }
        });
    }
}
