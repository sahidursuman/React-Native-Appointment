// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import DoctorList from './src/components/DoctorList';

// Create a Component
const App = () => {
  return (
    <View>
      <Header headerText={ 'Doctor Listing' } />
      <DoctorList />
    </View>
  );
};

// Render it to the device
AppRegistry.registerComponent('appoitment', () => App);
