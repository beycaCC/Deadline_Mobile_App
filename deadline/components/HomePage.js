import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image  } from 'react-native';
import ThreeDotsMenu from '../elements/ThreeDotsMenu';

const HomePage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.titleText}>Hello, Christine</Text>
        <Image source={require('../assets/1f44b.png')} style={styles.titleImage} />
      
        <ThreeDotsMenu style={styles.menuButton} navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      title_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
      },
      titleText: {
        position: 'absolute',
        fontSize: 20,
        right: 140,
        // marginRight: 10,
      },
      titleImage: {
        position: 'absolute',
        right: 110,
        width: 30,
        height: 30,
      },
      menuButton: {
        position: 'absolute',
        right: 10,
        left: 400,
      },
  });

export default HomePage;
