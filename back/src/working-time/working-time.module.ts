import { Module } from '@nestjs/common';
import { WorkingTimeService } from './working-time.service';
import { WorkingTimeController } from './working-time.controller';

@Module({
  providers: [WorkingTimeService],
  controllers: [WorkingTimeController]
})
export class WorkingTimeModule {}
