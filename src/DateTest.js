/*
 * Gomoot T.
 */
import React, { Component } from 'react';
import MomentUtils from '@date-io/moment';
import moment from 'moment';
import 'moment/locale/th';
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

export class ThUtils extends MomentUtils {
  constructor(props) {
    super(props);
    this.locale = 'th';
    this.moment.locale('th');
  }

  getWeekdays() {
    this.moment.locale('th');
    return this.moment.weekdaysShort(true);
  }
  getDatePickerHeaderText(date) {
    // console.log(moment(date).format('DD MMM'));
    return moment(date).format('DD MMM');
  }
  
  getDateTimePickerHeaderText(date) {
    return moment(date).format('DD MMM');
  }
}

export class EnUtils extends MomentUtils {
  constructor(props) {
    super(props);
    this.locale = 'en';
    this.moment.locale('en');
  }

  getWeekdays() {
    this.moment.locale('en');
    return this.moment.weekdaysShort(false);
  }
  getDatePickerHeaderText(date) {
    console.log(moment(date).format('DD MMM'));
    return moment(date).format('DD MMM');
  }
  getDateTimePickerHeaderText(date) {
    console.log(moment(date).format('DD MMM'));
    return moment(date).format('DD MMM');
  }
}

class DateTest extends Component {
  constructor(props) {
    super(props);
    let addYear = props.locale == 'th' ? 543 : 0;
    this.state = {
      selectedDate: moment()
        .add('years', addYear)
        .toDate(),
      maxDate: moment()
        .add('years', addYear + 2)
        .toDate(),
      locale: props.locale
    };
    moment.locale(props.locale);
    console.log('constru');
  }

  //const [selectedDate, handleDateChange] = useState(new Date());
  handleDateChange = newDate => {
    console.log(moment(newDate).format('DD MMM YYYY'));
    this.setState({ selectedDate: newDate });
  };

  render() {
    //console.log('render' + this.props.locale);
    moment.locale(this.props.locale);
    return (
      <MuiPickersUtilsProvider
        libInstance={moment}
        utils={this.props.locale === 'th' ? ThUtils : EnUtils}
        locale={this.props.locale}
      >
        <DateTimePicker
          value={this.state.selectedDate}
          onChange={this.handleDateChange}
          ampm={false}
          // locale={this.props.locale}
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
