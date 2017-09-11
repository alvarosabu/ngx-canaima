import { InputBase } from './input-base';

export class TextInput extends InputBase<string> {
  public controlType = 'textbox';
  public type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
