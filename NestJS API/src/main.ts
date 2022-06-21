import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as cookieParser from 'cookie-parser';
import mongoURI from './config/keys'

const MongoStore = require('connect-mongo');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: ['http://localhost:3000'], credentials: true, methods: 'GET,PUT,POST,DELETE,UPDATE,OPTIONS' });
  app.use(cookieParser());
  app.use('/',
    session({
      secret: 'mitsecret',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 3600000, sameSite: 'none', httpOnly: false },
      store: MongoStore.create({
        mongoUrl: 'mongodb+srv://casinoAdmin:12345@mitcasino.mkuab.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
      })
    }),
  );
  await app.listen(process.env.PORT || 5000);
}
bootstrap();