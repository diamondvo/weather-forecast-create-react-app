import moment from 'moment';

export class Ext {
  static dateFormat = 'DD/MM/YYYY';
  static Date = {
    format: (date: number, pattern: string = Ext.dateFormat) => moment(date).format(pattern)
  }
}


