import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import Image1 from '../img/lake.jpg';
import Image2 from '../img/landscape.jpg';
import Image3 from '../img/sunset.jpg';
import Image4 from '../img/camel.jpg';


const items = [
  {
    src: Image1 ,
    altText: '',
    caption: '',
    header: '',
    key: '1'
  },
  {
    src: Image2,
    altText: '',
    caption: '',
    header: '',
    key: '2'
  },
  {
    src: Image4,
    altText: '',
    caption: '',
    header: '',
    key: '3'
  },
  {
    src: Image3,
    altText: '',
    caption: '',
    header: '',
    key: '4'
  }
];


const Example = () => <UncontrolledCarousel items={items} />;

export default Example;