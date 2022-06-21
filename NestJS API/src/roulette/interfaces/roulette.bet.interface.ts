import { Bet } from "src/blackjack/interfaces/bet.interface";

export interface RouletteBet {
    number?: number;
    quarter?: any[];
    double?: any[];
    isOdd?: boolean;
    color?: string;
    row?: number;
    column?: number;
    lessThanEighteen?: boolean;
    dozen?: number;
    bet: Bet;
    type: string;
    won?: boolean;
}