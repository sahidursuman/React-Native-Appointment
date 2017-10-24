// Import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create a Component
const App = () => {
  return (
    <Header headerText={ 'Doctor Listing' } />
  );
};

// Render it to the device
AppRegistry.registerComponent('appoitment', () => App);
