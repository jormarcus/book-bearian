import React from 'react';
import BookList from '../common/BookList';

interface ILandingPageState {}

class LandingPage extends React.Component<{}, ILandingPageState> {
  state = {};

  render() {
    return (
      <div className="container">
        <BookList />
      </div>
    );
  }
}

export default LandingPage;
