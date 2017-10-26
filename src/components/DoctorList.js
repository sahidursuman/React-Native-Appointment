import React, { Component } from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const DoctorList = (props) => {
  return (
    <Card>
      <CardSection>
        <Text>John Doe</Text>
        <Text>Practice Area: Surgery</Text>
        <Text>Address: 1234 Main Street, New York, New York</Text>
        <Text>Tel: 123-456-789</Text>
      </CardSection>

      <CardSection>
        <Text>Mac Miller</Text>
        <Text>Practice Area: Physiology</Text>
        <Text>Address: 99 East Avenue, New York, New York</Text>
        <Text>Tel: 789-456-123</Text>
      </CardSection>

    </Card>
  );
}

export default DoctorList;
