import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'linksmt-comp-sample',
  templateUrl: './comp-sample.component.html',
  styleUrl: './comp-sample.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompSampleComponent {}
