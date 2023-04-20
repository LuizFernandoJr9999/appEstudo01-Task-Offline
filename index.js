/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './src/components/App';
//import TaskList from './src/screens/TaskList';
import Auth from './src/screens/Auth';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Auth);
