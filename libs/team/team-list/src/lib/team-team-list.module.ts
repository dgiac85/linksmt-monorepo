import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamViewerComponent } from './components/team-viewer/team-viewer.component';
import { TeamListComponent } from './pages/team-list/team-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TeamViewerComponent, TeamListComponent],
  exports: [TeamViewerComponent, TeamListComponent],
})
export class TeamTeamListModule {}
