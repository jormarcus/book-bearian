import React from 'react';

const BookCarousel = (props) => {
  return (
    <div className="wrapper">
      <section id="section1">
        <a href="#section3">{'<'}</a>
        <div className="item">
          <img
            src="https://images.dog.ceo/breeds/puggle/IMG_075427.jpg"
            alt="book"
          />
        </div>
        <div className="item">
          <img
            src="https://images.dog.ceo/breeds/whippet/n02091134_14363.jpg"
            alt="book"
          />
        </div>
        <div className="item">
          <img
            src="https://images.dog.ceo/breeds/collie-border/n02106166_4733.jpg"
            alt="book"
          />
        </div>
        <div className="item">
          <img
            src="https://images.dog.ceo/breeds/spaniel-cocker/n02102318_7110.jpg"
            alt="book"
          />
        </div>
        <div className="item">
          <img
            src="https://images.dog.ceo/breeds/dane-great/n02109047_17629.jpg"
            alt="book"
          />
        </div>
        <a href="#section2">{'>'}</a>
      </section>
    </div>
  );
};

export default BookCarousel;
