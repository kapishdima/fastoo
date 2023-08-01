import { Datepicker } from 'vanillajs-datepicker';

export const format = (date) => {
  return Datepicker.formatDate(date, 'yyyy-mm-dd');
};
