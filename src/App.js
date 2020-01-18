import React, { Component } from 'react';
import DateTest from './DateTest';
import DateTestEn from './DateTestEn';


class App extends Component {
  constructor(props) {
    super(props);
   
  }


  render() {
    //MomentUtils
    // MomentUtils.locale = this.state.locale;
    return (
      <div>
        <DateTest locale='th' />
        <DateTest locale='en' />
        {/* <DateTestEn locale='en' /> */}
      </div>
    );
  }
};


export default App;
