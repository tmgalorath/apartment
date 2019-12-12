import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';

const SelectRoom = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Text style={{ textAlign: 'center', fontSize: 22, marginTop: 20 }}>
          Current Apartment
        </Text>
        <Room
          navigation={navigation}
          complexName="Raintree"
          roomNumber="212"
          address="1849 Freedom Blvd 200 W, Provo, UT 84604"
          date="August 2019 - April 2020"
          color="purple"
        />
        <View style={{borderColor: "#ededed", borderBottomWidth: 2, flex: 1, marginTop: 15}}></View>
        <Text style={{ textAlign: 'center', fontSize: 22, marginTop: 20 }}>
          Previous Apartments
        </Text>
        <Room
          navigation={navigation}
          complexName="Heritage"
          roomNumber="113"
          address="1849 Freedom Blvd 200 W, Provo, UT 84604"
          date="August 2018 - April 2019"
          color="blue"
        />
        <Room
          navigation={navigation}
          complexName="Helaman"
          roomNumber="172"
          address="1849 Freedom Blvd 200 W, Provo, UT 84604"
          date="August 2017 - April 2018"
          color="green"
        />
        <Room
          navigation={navigation}
          complexName="Village"
          roomNumber="341"
          address="1849 Freedom Blvd 200 W, Provo, UT 84604"
          date="August 2016 - April 2017"
          color="red"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const Room = ({ complexName, roomNumber, address, date, color='blue', navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Us')}>
      <Card containerStyle={{ overflow: 'hidden' }}>
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: -20,
            backgroundColor: color,
            height: 35,
            width: 15,
            borderRadius: 5
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: 10
          }}
        >
          <View>
            <Text style={{ fontSize: 16 }}>{complexName}</Text>
            <Text style={{ fontSize: 12 }}>Apt # {roomNumber}</Text>
          </View>
          <View>
            <Text style={{ fontSize: 12 }}>Contract Dates: {date}</Text>
            <Text style={{ fontSize: 12 }}>{address}</Text>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export default SelectRoom;
