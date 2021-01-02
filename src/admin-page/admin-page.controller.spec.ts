import { Test, TestingModule } from '@nestjs/testing';
import { AdminPageController } from './admin-page.controller';

describe('AdminPageController', () => {
  let controller: AdminPageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminPageController],
    }).compile();

    controller = module.get<AdminPageController>(AdminPageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
