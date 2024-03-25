import { Component, OnInit } from '@angular/core';
import { linksmtMonorepoCommonlib as localHour } from '@linksmt-monorepo/linksmt-monorepo-commonlib';

@Component({
  selector: 'linksmt-root',
  template: `<div class="p-5"><h1>The Formula 1 most important Constructor Teams</h1></div><linksmt-team-list></linksmt-team-list><h1>{{getHour}}</h1>`,
})
export class AppComponent implements OnInit{

  get getHour(){
    return 'LOCAL HOUR IS: ' + localHour();
  }

  ngOnInit(): void {
      setInterval(()=>{this.getHour},1000)
  }


}
