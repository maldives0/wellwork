import { Test, TestingModule } from '@nestjs/testing';
import { WorkingTimeController } from './working-time.controller';

describe('WorkingTimeController', () => {
  let controller: WorkingTimeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkingTimeController],
    }).compile();

    controller = module.get<WorkingTimeController>(WorkingTimeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
