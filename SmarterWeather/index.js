/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import WeatherProject from "./weather_project";

AppRegistry.registerComponent(appName, () => WeatherProject);
