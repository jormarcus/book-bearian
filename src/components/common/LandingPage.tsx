import React from 'react';
import Carousel from '../common/Carousel';

interface ILandingPageState {}

class LandingPage extends React.Component<{}, ILandingPageState> {
  state = {};

  render() {
    return (
      <div className="container">
        <Carousel />
      </div>
    );
  }
}

export default LandingPage;
