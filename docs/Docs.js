import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import './Docs.less';

import PublicNavigation, { LANGUAGES } from '../src';
import PropControls from './PropControls';

class Docs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inverse: true,
      language: LANGUAGES.includes('en') ? 'en' : LANGUAGES[0],
    };
  }

  createStateLink(name) {
    return value => this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <div
          className={`navbar-background${this.state.inverse ? ' navbar-background--inverse' : ''}`}
        />

        <PublicNavigation inverse={this.state.inverse} language={this.state.language} />

        <div className="container">
          <PropControls
            inverse={this.state.inverse}
            onInverseChange={this.createStateLink('inverse')}
            languages={LANGUAGES}
            language={this.state.language}
            onLanguageChange={this.createStateLink('language')}
          />
        </div>
      </div>
    );
  }
}

export default hot(module)(Docs);
