import { Module } from '@nestjs/common';
import { TeamControllerController } from './controllers/team-controller/team-controller.controller';

@Module({
  controllers: [TeamControllerController],
  providers: [],
  exports: [],
})
export class TeamControllersModule {}
