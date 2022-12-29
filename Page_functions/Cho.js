import React from "react";
import { View, StyleSheet,SafeAreaView,ScrollView,StatusBar,Text,Image,Button,Pressable} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import Like from './Choice'


const Cho = ({ navigation }) => {
  const popHandler = () => {
    navigation.goBack()
    }
    const pressHandler = () => {
      navigation.push("Bio")
      }
    return (
    <SafeAreaView style={styles.container1}>
      <ScrollView style={styles.scrollView}>

      <View style={styles.container}>

        <LinearGradient colors={['white','#0096FF','purple']}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}>
        <View style={styles.top} >
        <Image source={{uri: 'https://i.imgur.com/9Ju5PZ8.png'}}style={styles.image} />
        <Text style={styles.title}>Info</Text>
        
      <LinearGradient colors={['#0096FF','purple', 'white']}
        style={styles.container2}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}>
      <View style={styles.middle}>
        <View style={styles.middle1}>
        <View style={styles.gbox}>
        <Text style={styles.gender}>I Like</Text>
        <Like/>
        </View>
        </View>
      
      </View>
        
      <Pressable style={styles.button} onPress={() => navigation.navigate('Bio')}>
      <Text style={styles.text}>Next</Text>
      </Pressable>

      <Pressable style={styles.button_2} onPress={popHandler}>
      <Text style={styles.text}>Back</Text>
      </Pressable>

      </LinearGradient>
    </View>
    </LinearGradient>

  </View>

      </ScrollView>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "space-between",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  button: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: 'white',
  },

  button_2:{
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 10,
      elevation: 3,
      backgroundColor: 'white',
    },


  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
    

  container1: {
    flex: -1,
    paddingTop: StatusBar.currentHeight,
    borderRadius: 100,


  },
  
  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 200,
    
  },

  scrollView: {
    marginHorizontal: 2,
  },
  top: {
    flex: 0.3,
    padding: 5,
    margin: 1,
  },

  middle: {

    flex: 0.3,
    padding: 30,
    margin: 10,
    shadowColor: "#8ec7e9",

  },

middle1: {
    flex: 0.3,
    padding: 30,
    margin: 5,
    shadowColor: "#0b1f67",

  },
  
  title: {
    textAlign: "center",
    fontSize: 60,
    color: "white",
    margin: 5,
    marginBottom: 1,
    paddingTop: -50,
    fontWeight: "bold",
    shadowColor: "#8ec7e9",
    shadowOffset: {
    width: 0,
    height: 18,
    },
    shadowOpacity:  0.25,
    shadowRadius: 20.00,
    elevation: 24
    
},
  image: {
    flex: 1,
    alignSelf: "center",
    width: 120,
    height: 80,
    marginTop: 10,
    paddingTop: 30,
  },
  gender:{
    marginTop: -30,
    padding: 20,
    fontSize: 45,
    fontWeight: "bold",
    textAlign: 'justify'
  }
});

export default Cho;