import React from "react";
import { View, StyleSheet,SafeAreaView,ScrollView,StatusBar,Text,Image,Pressable,TouchableOpacity,TouchableHighlight} 
from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import MyComponent from './Gender';

const Gen = ({ navigation }) => {
  const pressHandler = () => {
    navigation.push("I Like")
    }

    return (
    <SafeAreaView style={styles.container1}>
      <ScrollView style={styles.scrollView}>

      <View style={styles.container}>

        <LinearGradient colors={['#74ebd5','#ACB6E5',]}
         style={styles.container}
         start={{ x: 0, y: 0 }}
         end={{ x: 1, y: 0 }}>
        <View style={styles.top} >
        <Image source={{uri: 'https://i.imgur.com/9Ju5PZ8.png'}}
          style= {styles.image} />
        <Text style={styles.title}>preference</Text>
        
      <LinearGradient colors={['white','#0096FF','blue']}
        style={styles.container2}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}>
      <View style={styles.middle}>
        <View style={styles.middle1}>
        <View style={styles.gbox}>
        <Text style={styles.gender}>Gender</Text>
        <MyComponent/>
        </View>
        </View>
      
      </View>
      <Pressable style={styles.button} onPress={pressHandler}>
      <Text style={styles.text}>Next</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: 'white',
    paddingTop:15,
    margin:40,

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

export default Gen;


/**/ 