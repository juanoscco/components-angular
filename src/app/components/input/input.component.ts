import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() variant?: 'default' = 'default';
  @Input() disabled?: string;
  @Input() error?: string;

  // icon
  @Input() startIcon?: string;
  @Input() endIcon?: string;

  // sizes
  @Input() size?: 'sm' | 'md';
  @Input() fullWidth?: string;

  isInputFocused = false;
  isInputHovered = false;

  @Input() helperText: string = '';
  @Input() value: string = '';

  @Input() multiline: boolean = false;

  @Input() rows: number = 0;


  constructor() {}

  ngOnInit(): void {}
}
