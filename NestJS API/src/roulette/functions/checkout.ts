import { RouletteNumber } from "../classes/roulette.number.class";
import { RouletteBet } from "../interfaces/roulette.bet.interface";

export const checkOut = (user, roulleteNumber: RouletteNumber, rouletteBets: RouletteBet[]) => {
    rouletteBets.forEach(_bet => {
        if(_bet.type == 'number'){
            if(_bet.number == roulleteNumber.number){
                user.coins.one += _bet.bet["one"]*36;
                user.coins.five += _bet.bet["five"]*36;
                user.coins.ten += _bet.bet["ten"]*36;
                user.coins.twentyfive += _bet.bet["twentyfive"]*36;
                user.coins.fifty += _bet.bet["fifty"]*36;
                user.coins.hundred += _bet.bet["hundred"]*36;
                user.coins.twohundred += _bet.bet["twohundred"]*36;
                user.coins.fivehundred += _bet.bet["fivehundred"]*36;
                user.coins.thousand += _bet.bet["thousand"]*36;
                user.markModified('coins');
                _bet.won = true;
            }
        } else if (_bet.type == 'quarter'){
            for(let i = 0; i < roulleteNumber.quarters.length; i++){
                if(arraysEqual(roulleteNumber.quarters[i], _bet.quarter)){
                    user.coins.one += _bet.bet["one"]*9;
                    user.coins.five += _bet.bet["five"]*9;
                    user.coins.ten += _bet.bet["ten"]*9;
                    user.coins.twentyfive += _bet.bet["twentyfive"]*9;
                    user.coins.fifty += _bet.bet["fifty"]*9;
                    user.coins.hundred += _bet.bet["hundred"]*9;
                    user.coins.twohundred += _bet.bet["twohundred"]*9;
                    user.coins.fivehundred += _bet.bet["fivehundred"]*9;
                    user.coins.thousand += _bet.bet["thousand"]*9;
                    user.markModified('coins');
                    _bet.won = true;
                }
            }
        } else if (_bet.type == 'double'){
            for(let i = 0; i < roulleteNumber.doubles.length; i++){
                if(arraysEqual(roulleteNumber.doubles[i], _bet.double)){
                    user.coins.one += _bet.bet["one"]*18;
                    user.coins.five += _bet.bet["five"]*18;
                    user.coins.ten += _bet.bet["ten"]*18;
                    user.coins.twentyfive += _bet.bet["twentyfive"]*18;
                    user.coins.fifty += _bet.bet["fifty"]*18;
                    user.coins.hundred += _bet.bet["hundred"]*18;
                    user.coins.twohundred += _bet.bet["twohundred"]*18;
                    user.coins.fivehundred += _bet.bet["fivehundred"]*18;
                    user.coins.thousand += _bet.bet["thousand"]*18;
                    user.markModified('coins');
                    _bet.won = true;
                }
            }
        } else if (_bet.type == 'isOdd'){
            if(roulleteNumber.isOdd == _bet.isOdd){
                user.coins.one += _bet.bet["one"]*2;
                user.coins.five += _bet.bet["five"]*2;
                user.coins.ten += _bet.bet["ten"]*2;
                user.coins.twentyfive += _bet.bet["twentyfive"]*2;
                user.coins.fifty += _bet.bet["fifty"]*2;
                user.coins.hundred += _bet.bet["hundred"]*2;
                user.coins.twohundred += _bet.bet["twohundred"]*2;
                user.coins.fivehundred += _bet.bet["fivehundred"]*2;
                user.coins.thousand += _bet.bet["thousand"]*2;
                user.markModified('coins');
                _bet.won = true;
            }
        } else if (_bet.type == 'color'){
            if(roulleteNumber.color == _bet.color){
                user.coins.one += _bet.bet["one"]*2;
                user.coins.five += _bet.bet["five"]*2;
                user.coins.ten += _bet.bet["ten"]*2;
                user.coins.twentyfive += _bet.bet["twentyfive"]*2;
                user.coins.fifty += _bet.bet["fifty"]*2;
                user.coins.hundred += _bet.bet["hundred"]*2;
                user.coins.twohundred += _bet.bet["twohundred"]*2;
                user.coins.fivehundred += _bet.bet["fivehundred"]*2;
                user.coins.thousand += _bet.bet["thousand"]*2;
                user.markModified('coins');
                _bet.won = true;
            }
        } else if (_bet.type == 'row'){
            if(roulleteNumber.row == _bet.row){
                user.coins.one += _bet.bet["one"]*12;
                user.coins.five += _bet.bet["five"]*12;
                user.coins.ten += _bet.bet["ten"]*12;
                user.coins.twentyfive += _bet.bet["twentyfive"]*12;
                user.coins.fifty += _bet.bet["fifty"]*12;
                user.coins.hundred += _bet.bet["hundred"]*12;
                user.coins.twohundred += _bet.bet["twohundred"]*12;
                user.coins.fivehundred += _bet.bet["fivehundred"]*12;
                user.coins.thousand += _bet.bet["thousand"]*12;
                user.markModified('coins');
                _bet.won = true;
            }
        } else if (_bet.type == 'column'){
            if(roulleteNumber.column == _bet.column){
                user.coins.one += _bet.bet["one"]*2;
                user.coins.five += _bet.bet["five"]*2;
                user.coins.ten += _bet.bet["ten"]*2;
                user.coins.twentyfive += _bet.bet["twentyfive"]*2;
                user.coins.fifty += _bet.bet["fifty"]*2;
                user.coins.hundred += _bet.bet["hundred"]*2;
                user.coins.twohundred += _bet.bet["twohundred"]*2;
                user.coins.fivehundred += _bet.bet["fivehundred"]*2;
                user.coins.thousand += _bet.bet["thousand"]*2;
                user.markModified('coins');
                _bet.won = true;
            }
        } else if (_bet.type == 'lessThanEighteen'){
            if(roulleteNumber.lessThanEighteen == _bet.lessThanEighteen){
                user.coins.one += _bet.bet["one"]*2;
                user.coins.five += _bet.bet["five"]*2;
                user.coins.ten += _bet.bet["ten"]*2;
                user.coins.twentyfive += _bet.bet["twentyfive"]*2;
                user.coins.fifty += _bet.bet["fifty"]*2;
                user.coins.hundred += _bet.bet["hundred"]*2;
                user.coins.twohundred += _bet.bet["twohundred"]*2;
                user.coins.fivehundred += _bet.bet["fivehundred"]*2;
                user.coins.thousand += _bet.bet["thousand"]*2;
                user.markModified('coins');
                _bet.won = true;
            }
        } else if (_bet.type == 'dozen'){
            if(roulleteNumber.dozens == _bet.dozen){
                user.coins.one += _bet.bet["one"]*2;
                user.coins.five += _bet.bet["five"]*2;
                user.coins.ten += _bet.bet["ten"]*2;
                user.coins.twentyfive += _bet.bet["twentyfive"]*2;
                user.coins.fifty += _bet.bet["fifty"]*2;
                user.coins.hundred += _bet.bet["hundred"]*2;
                user.coins.twohundred += _bet.bet["twohundred"]*2;
                user.coins.fivehundred += _bet.bet["fivehundred"]*2;
                user.coins.thousand += _bet.bet["thousand"]*2;
                user.markModified('coins');
                _bet.won = true;
            }
        }
    });
}

function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    
    return true;
  }