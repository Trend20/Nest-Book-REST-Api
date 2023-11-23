import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { BooksService } from './books/books.service';
import { BooksController } from './books/books.controller';
import { BooksModule } from './books/books.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, BooksModule, AuthModule],
  providers: [BooksService],
  controllers: [BooksController],
})
export class AppModule {}
