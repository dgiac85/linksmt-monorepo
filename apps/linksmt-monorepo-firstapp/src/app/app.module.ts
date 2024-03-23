import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { TeamTeamListModule } from '@linksmt/team/team-list';
import { BASE_API_URL } from '@linksmt/common/tokens';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, TeamTeamListModule],
  providers: [
    {
      provide: BASE_API_URL,
      useValue: '',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
