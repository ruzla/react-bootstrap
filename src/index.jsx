import 'raf/polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from '../src/components/app';
import { location } from '../src/data/forecast.json';
//import { forecasts } from '../src/data/forcast.json';

render(<App location={location} />, document.getElementById('root'));
