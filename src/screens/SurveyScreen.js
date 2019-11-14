import React, { useState, useEffect, Fragment } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import CheckableItem from '../components/CheckableItem';
import Constants from 'expo-constants';
import Swiper from 'react-native-swiper';
import AwesomeButtonBlue from 'react-native-really-awesome-button/src/themes/blue';
import { Button as MaterialButton } from 'react-native-material-ui';

const SubmitButton = ({ onSubmit }) => {
  return (
    <AwesomeButtonBlue
      type="primary"
      onPress={() => onSubmit(false)}
      textSize={18}
      paddingHorizontal={42}
    >
      Submit
    </AwesomeButtonBlue>
  );
};

const KitchenSurvey = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Kitchen Survey</Text>
        <SurveyHeader title="Mark the items that you will be bringing with you to the apartment" />
      </View>
      <View style={styles.row}>
        <CheckableItem title="Plates" />
        <CheckableItem title="Bowls" />
      </View>
      <View style={styles.row}>
        <CheckableItem title="Sliverware" />
        <CheckableItem title="Blender" />
      </View>
      <View style={styles.row}>
        <CheckableItem title="Pots/Pans" />
        <CheckableItem title="Cutting Board" />
      </View>
      <View style={styles.row}>
        <CheckableItem title="Cookie Tray" />
        <CheckableItem title="Knives" />
      </View>
      <View style={styles.row}>
        <CheckableItem title="Spatula" />
        <CheckableItem title="Large Bowls" />
      </View>
      <View style={styles.row}>
        <CheckableItem title="Cooking Grill" />
        <CheckableItem title="Salt/Pepper" />
      </View>
      {/* </View> */}
      <MaterialButton
        style={{ text: { fontSize: 22 }, container: { width: '40%', marginVertical: 45 } }}
        raised
        accent
        text="Submit"
        onPress={() => {
          console.log('submitted');
        }}
      />
    </View>
  );
};
const LivingRoomSurvey = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Living Room Survey</Text>

      <View style={styles.row}>
        <CheckableItem title="BeanBag" />
        <CheckableItem title="TV" />
      </View>
      <View style={styles.row}>
        <CheckableItem title="WIFI Router" />
        <CheckableItem title="Xbox" />
      </View>
      <View style={styles.row}>
        <CheckableItem title="Apple TV" />
        <CheckableItem title="Recliner" />
      </View>

      <AwesomeButtonBlue
        type="primary"
        onPress={() => onSubmit(true)}
        textSize={18}
        paddingHorizontal={42}
      >
        Submit
      </AwesomeButtonBlue>
    </View>
  );
};

const BedroomSurvey = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bedroom Survey</Text>

      <View style={styles.row}>
        <CheckableItem title="Plates" />
        <CheckableItem title="Cups" />
      </View>
      <View style={styles.row}>
        <CheckableItem title="Blender" />
        <CheckableItem title="Toaster" />
      </View>
      <View style={styles.row}>
        <CheckableItem title="Cookie Sheet" />
        <CheckableItem title="Silverware" />
      </View>

      <AwesomeButtonBlue type="primary" onPress={() => onSubmit(true)}>
        Submit
      </AwesomeButtonBlue>
    </View>
  );
};

const FinshedSurvey = () => {
  return (
    <View>
      <Text>Finished the Survey</Text>
    </View>
  );
};

const SurveyHeader = ({ title }) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

const _SurveyScreen = () => {
  const [kitchen, setkitchen] = useState(false);
  const [living, setliving] = useState(false);
  const [bed, setbed] = useState(false);
  const [Components, setcomponents] = useState([
    <KitchenSurvey key="Kitchen" onSubmit={setkitchen} />,
    <LivingRoomSurvey key="living" onSubmit={setliving} />,
    <BedroomSurvey key="bed" onSubmit={setbed} />
  ]);

  useEffect(() => {
    if (kitchen) {
      const result = Components.filter(
        component => component.key !== 'Kitchen'
      );
      setcomponents(result);
    }
  }, [kitchen]);

  useEffect(() => {
    if (living) {
      const result = Components.filter(component => component.key !== 'living');
      setcomponents(result);
    }
  }, [living]);
  useEffect(() => {
    if (bed) {
      const result = Components.filter(component => component.key !== 'bed');
      setcomponents(result);
    }
  }, [bed]);

  return (
    <>
      {Components.length > 0 && (
        <Swiper style={styles1.wrapper}>
          {Components.map(Component => {
            return Component;
          })}
        </Swiper>
      )}
      {Components.length === 0 && <FinshedSurvey />}
    </>
  );
};

const styles1 = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
});

const styles = StyleSheet.create({
  submit: {
    fontSize: 22
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: "center",
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#F6F6F7',
    paddingBottom: 35,
  },
  headerContainer: {
      justifyContent: 'space-around',
      flex: 1,
  },
  row: {
    flexDirection: 'row'
  }
});

export default _SurveyScreen;
