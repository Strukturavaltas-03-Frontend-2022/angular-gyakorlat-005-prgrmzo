import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  template: `<i class="fa" [class]="icon"></i>`,
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  @Input() icon: string = '';

  constructor() {}

  ngOnInit(): void {}
}
