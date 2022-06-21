import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlackjackController } from './blackjack.controller';
import { BlackjackService } from './blackjack.service';
import { BlackjackShema } from './schemas/blackjack.schema';
import { UserSchema } from '../users/schemas/user.schema'


@Module({
  imports: [MongooseModule.forFeature([{ name: 'Blackjack', schema: BlackjackShema }]), MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [BlackjackController],
  providers: [BlackjackService],
  exports: [BlackjackService]
})
export class BlackjackModule {}
