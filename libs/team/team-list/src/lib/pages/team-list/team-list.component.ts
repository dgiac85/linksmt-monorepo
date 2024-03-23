import { Component } from '@angular/core';
import { TeamApiService } from '@linksmt/team/data-access';

@Component({
  selector: 'linksmt-team-list',
  template: `
    <div class="linksmt-team-list flex row">
      <div class="col-4" *ngFor="let team of teams$ | async">
        <linksmt-team-viewer [team]="team"></linksmt-team-viewer>
      </div>
    </div>
  `,
  styles: [
    `
      .linksmt-team-list {
        margin: 20px 0;
      }
    `,
  ],
})
export class TeamListComponent {
  teams$ = this.teamApiSv.getTeams();

  constructor(protected teamApiSv: TeamApiService) {}
}
