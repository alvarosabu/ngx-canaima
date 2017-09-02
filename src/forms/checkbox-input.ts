import { InputBase } from './input-base';

export class CheckboxInput extends InputBase<string> {
  public controlType = 'checkbox';
  public type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
