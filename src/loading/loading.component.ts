import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'as-loading',
  templateUrl: 'loading.component.html'
})

export class LoadingComponent implements OnInit {
  @Input('loading') public loading = false;
  @Input('fixed') public fixed = false;
  @Input('animation') public animation = 'donnut';
  @Input('text') public text: string;
  @Input('backdrop') public backdrop = false;
  @Input('container') public container = false;
  constructor() { }

  public ngOnInit() { }
}
