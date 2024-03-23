import { Component, Input } from '@angular/core';
import { TeamDTO } from '@linksmt/team/api-interfaces';
@Component({
  selector: 'linksmt-team-viewer',
  template: `
    <div class="card">
      <img [src]="team?.image" class="card-img-top" [alt]="team?.name" />
      <div class="card-body">
        <div class="card-text">
          <b>{{ team?.name }}</b>
          <ul>
            <li>Reliability: {{ team?.powerstats?.reliability }}</li>
            <li>Strength: {{ team?.powerstats?.strength }}</li>
            <li>Speed: {{ team?.powerstats?.speed }}</li>
            <li>Durability: {{ team?.powerstats?.durability }}</li>
            <li>Power: {{ team?.powerstats?.power }}</li>
            <li>Combat: {{ team?.powerstats?.combat }}</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      ul {
        padding: 0;
      }
      ul li {
        list-style-type: none;
      }
    `,
  ],
})
export class TeamViewerComponent {
@Input() team: TeamDTO | undefined;
}
