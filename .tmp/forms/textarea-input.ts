import { InputBase } from './input-base';

export class TextAreaInput extends InputBase<string> {
  public controlType = 'textareabox';
  public type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
