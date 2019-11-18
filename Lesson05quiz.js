import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
//INSERT DATA HERE

const PET_DATA = {
  name: 'Gizmo',
  age: '5',
  image: require('./src/img/bird.jpg'),
};

const OWNER_DATA = {
  name: 'Daniyah Bai',
  contact: '97502219',
  membership: 'gold',
};

const Lesson05quiz = () => {

  return (
    <ScrollView>
      <Text>Pet Information</Text>
      <Text>-----------------</Text>
      <Text key={PET_DATA.name}>
        Name: {'\n'}----------{PET_DATA.name}
      </Text>
      <Text key={PET_DATA.age}>
        Age: {'\n'}----------{PET_DATA.age}
      </Text>
      <Image source={PET_DATA.image} />
      <Text>Owner Information</Text>
      <Text>-----------------</Text>
      <Text key={OWNER_DATA.name}>
        Name: {'\n'}----------{OWNER_DATA.name}
      </Text>
      <Text key={OWNER_DATA.contact}>
        Name: {'\n'}----------{OWNER_DATA.contact}
      </Text>
      <Text key={OWNER_DATA.membership}>
        Name: {'\n'}----------{OWNER_DATA.membership}
      </Text>

    </ScrollView>
  );
};
export default Lesson05quiz;
