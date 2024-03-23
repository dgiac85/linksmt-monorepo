import { Test, TestingModule } from '@nestjs/testing';
import { TeamControllerController } from './team-controller.controller';

describe('TeamControllerController', () => {
  let controller: TeamControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TeamControllerController],
    }).compile();

    controller = module.get<TeamControllerController>(TeamControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
