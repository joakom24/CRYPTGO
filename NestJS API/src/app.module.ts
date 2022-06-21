import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { BlackjackController } from './blackjack/blackjack.controller';
import { PokerController } from './poker/poker.controller';
import { BlackjackModule } from './blackjack/blackjack.module';
import { AuthModule } from './auth/auth.module';
import { RouletteModule } from './roulette/roulette.module';
import { AppController } from './app.controller';
import config from './config/keys';
import { RouletteController } from './roulette/roulette.controller';
import { AppGateway } from './app.gateway';
import { PokerOfflineModule } from './poker-offline/poker-offline.module';
import { PokerOfflineController } from './poker-offline/poker-offline.controller';

@Module({
  imports: [UsersModule, MongooseModule.forRoot(config.mongoURI), BlackjackModule, RouletteModule, PokerOfflineModule, AuthModule],
  controllers: [AppController, UsersController, BlackjackController, PokerController, RouletteController, PokerOfflineController],
  providers: [AppGateway],
})
export class AppModule {}
