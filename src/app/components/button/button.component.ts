import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() variant?: 'default' | 'outline' | 'text' = 'default';
  @Input() size?: 'sm' | 'md' | 'lg';
  @Input() color?: 'primary' | 'secondary' | 'danger';
  @Input() disableShadow?: string;
  @Input() disabled?: string;
  @Input() startIcon?: string;
  @Input() endIcon?: string;

  get startIconClass() {
    return this.startIcon ? `icon-${this.startIcon}` : '';
  }

  get endIconClass() {
    return this.endIcon ? `icon-${this.endIcon}` : '';
  }
  constructor() {}

  ngOnInit(): void {}
}
