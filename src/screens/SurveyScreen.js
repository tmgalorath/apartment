import React, { useState, useEffect, Fragment } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import CheckableItem from '../components/CheckableItem';
import Constants from 'expo-constants';
import Swiper from 'react-native-swiper';
import { Button as MaterialButton } from 'react-native-material-ui';

import LottieAnimation from '../components/LottieAnimations';
import GreenButton from '../components/GreenButton';

const SurveyFormat = ({ items, header, onSubmit }) => {
  const formatItems = items.map((item, i) => {
    if ((i + 1) % 2 == 0) {
      return null;
    }

    if (i + 1 > items.length) {
      return null;
    }
    return (
      <View style={styles.row}>
        <CheckableItem title={item.title} />
        <CheckableItem title={items[i + 1].title} />
      </View>
    );
  });
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{header}</Text>
        <SurveyHeader title="Mark the items that you will be bringing with you to the apartment" />
      </View>
      {formatItems}

      <MaterialButton
        style={{
          text: { fontSize: 22 },
          container: { width: '40%', marginVertical: 45 }
        }}
        raised
        accent
        text="Submit"
        onPress={() => {
          onSubmit(true);
        }}
      />
    </View>
  );
};

const KitchenSurvey = ({ onSubmit }) => {
  const [finished, setfinished] = useState(false);
  const header = 'Kitchen Survey';
  const items = [
    { title: 'Plates' },
    { title: 'Bowls' },
    { title: 'Silverware' },
    { title: 'Blender' },
    { title: 'Pots/Pans' },
    { title: 'Cutting Board' },
    { title: 'Cookie Tray' },
    { title: 'Knives' },
    { title: 'Spatula' },
    { title: 'Large Bowls' },
    { title: 'Cooking Grill' },
    { title: 'Salt/Pepper' }
  ];

  if (finished) {
    return (
      <FinshedSurvey
        header={header}
        submit={setfinished}
        lottieSource={require('../../assets/11282-bread-toaster.json')}
      />
    );
  }

  return <SurveyFormat items={items} onSubmit={setfinished} header={header} />;
};
const LivingRoomSurvey = ({ onSubmit }) => {
  const [finished, setfinished] = useState(false);
  const header = 'Living Room Survey';

  const items = [
    { title: 'BeanBag Chair' },
    { title: 'TV' },
    { title: 'Rug' },
    { title: 'Couch' },
    { title: 'Sound System' },
    { title: 'Table' },
    { title: 'Apple TV' },
    { title: 'ChromeCast' },
    { title: 'TV Wall Mount' },
    { title: 'TV Stand' },
    { title: 'Coffee Table' },
    { title: 'Chair' }
  ];

  if (finished) {
    return (
      <FinshedSurvey
        header={header}
        submit={setfinished}
        lottieSource={require('../../assets/11247-catch-me-if-you-can.json')}
      />
    );
  }

  return <SurveyFormat items={items} onSubmit={setfinished} header={header} />;
};

const BedroomSurvey = ({ onSubmit }) => {
  const [finished, setfinished] = useState(false);
  const header = 'Bedroom Survey';
  const items = [
    { title: 'TV' },
    { title: 'Desk' },
    { title: 'Chair' },
    { title: 'TV Stand' },
    { title: 'Xbox' },
    { title: 'PS4' },
    { title: 'Nintendo Switch' },
    { title: 'Desktop Computer' },
    { title: 'Apple TV' },
    { title: 'ChromeCast' },
    { title: 'Window Shades' },
    { title: 'Wifi Router' }
  ];

  if (finished) {
    return (
      <FinshedSurvey
        header={header}
        submit={setfinished}
        lottieSource={require('../../assets/3284-sky.json')}
      />
    );
  }

  return <SurveyFormat items={items} onSubmit={setfinished} header={header} />;
};

const FinshedSurvey = ({ header, submit, lottieSource }) => {
  return (
    <View>
      <View style={stylesF.wrapper}>
        <View style={stylesF.header}>
          <Text style={styles.header}>{header}</Text>
          <Text style={stylesF.text}>
            Congratulations! Now go vote so you know what to bring and we dont
            end up with duplicates.
          </Text>
        </View>

        <View style={stylesF.lottie}>
          <LottieAnimation source={lottieSource} />
        </View>

          <GreenButton title={'Restart'} onSubmit={() => submit(false)} />
      </View>
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

const stylesF = StyleSheet.create({
  wrapper: {
    height: '100%',
    paddingTop: 30,
    paddingBottom: 70,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  header: {
    zIndex: 10
  },


  lottie: {
    flex: 1,

    paddingBottom: 100,
  },

  text: {
    marginHorizontal: 10,
    paddingTop: 10,
    fontSize: 16,
    textAlign: 'center'
  }
});

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
    textAlign: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#F6F6F7',
    paddingBottom: 35
  },
  headerContainer: {
    justifyContent: 'space-around',
    flex: 1
  },
  row: {
    flexDirection: 'row'
  }
});

export default _SurveyScreen;
