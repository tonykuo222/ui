import React, { Component } from 'react';
import { HyperlinkButton } from '@blankapp/ui';
import DemoScreen from '../../components/DemoScreen';

class HyperlinkButtonStateLoading extends Component {
  static navigationOptions = {
    title: 'Demo',
  };

  render() {
    return (
      <DemoScreen>
        <HyperlinkButton text={'HyperlinkButton'} loading />
      </DemoScreen>
    );
  }
}

export default HyperlinkButtonStateLoading;
