import React, { Component } from 'react';

import moment from 'moment';
import MomentUtils from '@date-io/moment';

import {DateTimePicker,MuiPickersUtilsProvider} from '@material-ui/pickers';

export  class LocalizedUtilsEn extends MomentUtils {
  constructor(props) {
    super(props); 
   // this.moment.locale = 'en';
    this.locale = 'en';
    console.log( 'LocalizedUtilsEn ' + this.getWeekdays());
    this.moment.locale('en');
    console.log(this.moment.weekdaysShort(false));
  }

  getWeekdays() {
    this.moment.locale('en');
    console.log(this.locale);
    console.log(super.getWeekdays());
    console.log( this.moment.weekdaysShort(true) );
    
    return this.moment.weekdaysShort(false);
  }
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

class DateTestEn extends Component {
  constructor(props) {
    super(props);
    let addYear = props.locale == 'th' ? 543 : 0;
    this.state = {
      selectedDate: moment().add('years', addYear).toDate(),
      maxDate: moment().add('years', addYear+2).toDate(),
      locale: props.locale,
    };
   // moment.locale(props.locale);
    console.log('constru');
  }

  //const [selectedDate, handleDateChange] = useState(new Date());
  handleDateChange = newDate => {
    console.log(moment(newDate).format('DD MMM YYYY'));
    this.setState({ selectedDate: newDate });
  };

  render() {
    console.log('render' + this.props.locale);
   // moment.locale(this.props.locale);
    return (
      <MuiPickersUtilsProvider
        libInstance={moment}
        utils={LocalizedUtilsEn}
        locale={this.props.locale}
      >
        <DateTimePicker
          value={this.state.selectedDate}
          onChange={this.handleDateChange}
          ampm={false}
          locale={this.props.locale}
          variant={'inline'} // dialog
          minDate={this.state.selectedDate}
          maxDate={this.state.maxDate}
          format='DD MMM YYYY HH:mm'
        />
      </MuiPickersUtilsProvider>
    );
  }
}

export default DateTestEn;
