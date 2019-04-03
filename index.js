/** @format */

import {AppRegistry} from 'react-native';

//import App from './App/components/AppTemplate';
//import App from './App/components/AppSplashScreen';
import App from './App/components/AppNav';


import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
