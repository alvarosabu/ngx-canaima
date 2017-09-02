import { InputBase } from './input-base';

export class RadioInput extends InputBase<string> {
  public controlType = 'radio';
  public type: string;
  public options: {key: string, value: string}[] = [];
  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
    this.options = options['options'] || [];
  }
}
