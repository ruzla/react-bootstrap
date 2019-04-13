import 'raf/polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from '../src/components/app';
import { location, forecasts } from '../src/data/forecast.json';

render(<App location={location} forecasts={forecasts} />, document.getElementById('root'));
