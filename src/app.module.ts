import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { AdminPageController } from './admin-page/admin-page.controller';

@Module({
  imports: [],
  controllers: [AppController, CatsController, AdminPageController],
  providers: [AppService],
})
export class AppModule {}
