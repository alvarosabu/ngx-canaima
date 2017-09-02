import { Validation } from './../validation';
export class InputBase<T> {
  public value: T;
  public key: string;
  public label: string;
  public validations: Validation[];
  public order: number;
  public controlType: string;
  public customClass: string;
  constructor(options: {
      value?: T,
      key?: string,
      label?: string,
      validations?: Validation[];
      order?: number,
      controlType?: string,
      customClass?: string
    } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.validations = options.validations;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.customClass = options.customClass === undefined ? 'fcol-xs-12' : options.customClass;
  }
}
