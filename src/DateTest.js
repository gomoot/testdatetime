import React, { Component, useState, useCallback } from 'react';

import moment from 'moment';
import MomentUtils from '@date-io/moment';
import 'moment/locale/th';

import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider
} from '@material-ui/pickers';



class LocalizedUtils extends MomentUtils {
  getDatePickerHeaderText(date) {
    console.log(moment(date).format('DD MMM'));
    return moment(date).format('DD MMM');
    //moment(date).fotmat("d MMM yyyy", { locale: this.locale });
  }
  getDateTimePickerHeaderText(date) {
    console.log(moment(date).format('DD MMM'));
    return moment(date).format('DD MMM');
    //moment(date).fotmat("d MMM yyyy", { locale: this.locale });
  }
}

class DateTest extends Component {
  constructor(props) {
    super(props);
    //  const [locale, setLocale] = useState("fr");
    let dd = moment().add('years', 543);
    let addYear = props.locale == 'th' ? 543 : 0;
    this.state = {
      selectedDate: moment().add('years', addYear).toDate(),
      maxDate: moment().add('years', addYear+2).toDate(),
      locale: props.locale,
    };
    moment.locale = this.state.locale;
    console.log(this.state.selectedDate);
  }

  //const [selectedDate, handleDateChange] = useState(new Date());
  handleDateChange = newDate => {
    console.log(moment(newDate).format('DD MMM'));
    this.setState({ selectedDate: newDate });
  };

  render() {
    return (
      <MuiPickersUtilsProvider
        libInstance={moment}
        utils={LocalizedUtils}
        locale={this.state.locale}
      >
        <DateTimePicker
          value={this.state.selectedDate}
          onChange={this.handleDateChange}
          ampm={false}
          locale={this.state.locale}
          variant={'inline'} // dialog
          minDate={this.state.selectedDate}
          maxDate={this.state.maxDate}
          format='DD MMM YYYY HH:mm'
        />
      </MuiPickersUtilsProvider>
    );
  }
}

export default DateTest;
