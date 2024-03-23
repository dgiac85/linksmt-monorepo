import { Module } from '@nestjs/common';
import { TeamControllersModule } from '@linksmt/team/controllers';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [TeamControllersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
