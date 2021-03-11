import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { WorkingTimeModule } from './working-time/working-time.module';
import { ApplyModule } from './apply/apply.module';

@Module({
  imports: [UsersModule, WorkingTimeModule, ApplyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
