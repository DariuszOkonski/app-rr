import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../styles/Header.css';

import img1 from '../images/header1.jpg';
import img2 from '../images/header2.jpg';
import img3 from '../images/header3.jpg';
import img4 from '../images/header4.jpg';
import img5 from '../images/header5.jpg'

const imgList = [img1, img2, img3, img4, img5];

const Header = () => {

  const randomImg = imgList[Math.floor(Math.random() * imgList.length)];

  return (
    <>
      <Switch>
        <Route exact path='/' render={() => <img src={img1} alt="city" />} />
        <Route path='/products' render={() => <img src={img2} alt="city" />} />
        <Route path='/product/:id' render={() => <img src={randomImg} alt="city" />} />
        <Route path='/contact' render={() => <img src={img3} alt="city" />} />
        <Route path="/admin" render={() => <img src={img4} alt="city" />} />
        <Route path="/login" render={() => <img src={img5} alt="city" />} />
        <Route render={() => (
          <div>
            <img src={img5} alt="city" />
            <h3>Error 404: Page has not been found!!!</h3>
          </div>
        )} />
      </Switch>
    </>
  );
}

export default Header;