import React, { Component, useState, useCallback } from 'react';
import DateTest from './DateTest';
// pick a date util library
//import DateFnsUtils from '@date-io/date-fns'; // choose your lib
// import moment from 'moment';
// import MomentUtils from '@date-io/moment';
// import 'moment/locale/th';

import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider
} from '@material-ui/pickers';

// class LocalizedUtils extends MomentUtils {
//   getDatePickerHeaderText(date) {
//     console.log(moment(date).format('DD MMM'));
//     return moment(date).format('DD MMM');
//     //moment(date).fotmat("d MMM yyyy", { locale: this.locale });
//   }
//   getDateTimePickerHeaderText(date) {
//     console.log(moment(date).format('DD MMM'));
//     return moment(date).format('DD MMM');
//     //moment(date).fotmat("d MMM yyyy", { locale: this.locale });
//   }
// }

class App extends Component {
  constructor(props) {
    super(props);
    //  const [locale, setLocale] = useState("fr");
//    let dd = moment().add('years', 543);

    // this.state = {
    //   selectedDate: moment()
    //     .add('years', 543)
    //     .toDate(),
    //   maxDate: moment()
    //     .add('years', 545)
    //     .toDate(),
    //   selectedDateEn: moment().toDate(),
    //   maxDateEn: moment()
    //     .add('years', 2)
    //     .toDate(),
    //   locale: props
    //   //localeEn: 'en',
    // };
// 
    // console.log(this.state.selectedDate);
  }

  // //const [selectedDate, handleDateChange] = useState(new Date());
  // handleDateChange = newDate => {
  //   console.log(moment(newDate).format('DD MMM'));
  //   this.setState({ selectedDate: newDate });
  // };

  // handleDateChangeEn = newDate => {
  //   this.setState({ selectedDateEn: newDate });
  // };

  render() {
    //MomentUtils
    // MomentUtils.locale = this.state.locale;
    return (
      
      // <MuiPickersUtilsProvider
      //   libInstance={moment}
      //   utils={LocalizedUtils}
      //   // locale={this.state.locale}
      // >
      //   <DateTimePicker
      //     value={this.state.selectedDate}
      //     onChange={this.handleDateChange}
      //     ampm={false}
      //     locale={this.state.locale}
      //     variant={'inline'} // dialog
      //     minDate={this.state.selectedDate}
      //     maxDate={this.state.maxDate}
      //     format='DD MMM YYYY HH:mm'
      //   />
      //   <DateTimePicker
      //     value={this.state.selectedDateEn}
      //     onChange={this.handleDateChangeEn}
      //     ampm={false}
      //     locale={this.state.localeEn}
      //     variant={'inline'} // dialog
      //     minDate={this.state.selectedDateEn}
      //     maxDate={this.state.maxDateEn}
      //     format='DD MMM YYYY HH:mm'
      //   />
      // </MuiPickersUtilsProvider>
      <div>
        <DateTest locale='th' />
        <DateTest locale='en' />
      </div>
    );
  }
};


export default App;
