import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

//CUSTOM MODULES IMPORT
import { UsersController } from './controller/users/users.controller';
import { UsersService } from './services/users/users.service';
import { ExampleMiddleware } from './middlewares/example/example.middleware';


@Module({
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ExampleMiddleware).forRoutes(UsersController);
  }
  
}
