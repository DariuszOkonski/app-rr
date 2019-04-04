import React from 'react';
import '../styles/Footer.css';
import { Route } from 'react-router-dom';

const Footer = () => {

  return (
    <div>
      <h2>Stopka</h2>
      <Route path="/" exact render={(props) => {
        return (
          <p>Jesteś na <span>stronie głównej</span></p>
        )
      }} />

      <Route path="/:page" exact render={(props) => {
        return (
          <div>
            <p>Jesteś na <span>{props.match.params.page}</span></p>
            <p>Jesteś na <span>{props.match.url}</span></p>
            <p>Jesteś na <span>{props.match.path}</span></p>
          </div>
        )
      }} />

      <Route path="/:page/:idProduct" exact render={(props) => {
        return (
          <div>
            <p>Jesteś na <span>{props.match.params.page}</span></p>
            <p>Jesteś na <span>{props.match.url}</span></p>
            <p>Jesteś na <span>{props.match.path}</span></p>
          </div>
        )
      }} />
    </div>
  );
}

export default Footer;