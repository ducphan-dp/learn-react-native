import SimpleList from "./SimpleList";
import MockBookList from "./MockBookList";
import BookList from "./BookList";
import BookSectionList from "./BookSectionList";

import {AppRegistry} from 'react-native';
//import App from './App';
import {name as appName} from './app.json';

//export default BookSectionList;

AppRegistry.registerComponent(appName, () => BookSectionList);
