import 'raf/polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from '../src/components/app';
import { location } from '../src/data/forcast.json';

render(<App location={location} />, document.getElementById('root'));
