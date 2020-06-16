import {AppRegistry} from 'react-native';

export const startApp = () => {
  const APP = process.env.APP;
  let App: any;
  if (APP === 'users') {
    App = require('./UsersApp');
  } else if (APP === 'admins') {
    App = require('./AdminsApp');
  } else {
    throw new Error('Unknown app!');
  }

  AppRegistry.registerComponent('AwesomeProject', () => App.default);
};
