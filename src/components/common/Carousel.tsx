import React from 'react';

const Carousel = () => {
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
      <section id="section2">
        <a href="#section1">{'<'}</a>
        <div className="item">
          <img
            src="https://images.dog.ceo/breeds/terrier-irish/n02093991_281.jpg"
            alt="book"
          />
        </div>
        <div className="item">
          <img
            src="https://images.dog.ceo/breeds/deerhound-scottish/n02092002_2129.jpg"
            alt="book"
          />
        </div>
        <div className="item">
          <img
            src="https://images.dog.ceo/breeds/spaniel-welsh/n02102177_2755.jpg"
            alt="book"
          />
        </div>
        <div className="item">
          <img
            src="https://images.dog.ceo/breeds/retriever-curly/n02099429_1468.jpg"
            alt="book"
          />
        </div>
        <div className="item">
          <img
            src="https://images.dog.ceo/breeds/cattledog-australian/IMG_2432.jpg"
            alt="book"
          />
        </div>
        <a href="#section3">{'>'}</a>
      </section>
      <section id="section3">
        <a href="#section2">{'<'}</a>
        <div className="item">
          <img
            src="https://images.dog.ceo/breeds/mountain-swiss/n02107574_3270.jpg"
            alt="book"
          />
        </div>
        <div className="item">
          <img
            src="https://images.dog.ceo/breeds/labrador/n02099712_475.jpg"
            alt="book"
          />
        </div>
        <div className="item">
          <img
            src="https://images.dog.ceo/breeds/corgi-cardigan/n02113186_1016.jpg"
            alt="book"
          />
        </div>
        <div className="item">
          <img
            src="https://images.dog.ceo/breeds/cockapoo/bubbles1.jpg"
            alt="book"
          />
        </div>
        <div className="item">
          <img
            src="https://images.dog.ceo/breeds/terrier-russell/jack1.jpg"
            alt="book"
          />
        </div>
        <a href="#section1">{'>'}</a>
      </section>
    </div>
  );
};

export default Carousel;
