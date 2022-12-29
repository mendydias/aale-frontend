import React from "react";
import { View, StyleSheet,SafeAreaView,ScrollView,StatusBar,Text,Image,} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import MyComponent from './Page_functions/Gender';
import DatePickerApp from './Page_functions/Date';
import Like from './Page_functions/Choice';
import Bio from "./Page_functions/info";

const Home = () => {
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
        <Text style={styles.gender}>Gender</Text>
        <MyComponent/>
        </View>
        </View>
      
        
        <View style={styles.middle2}>
        <View style={styles.gbox}>
        <Text style={styles.gender}>I Like</Text>
        <Like/>
        </View>
        </View>

        <View style={styles.middle3}>
        <View style={styles.gbox}>
        <Text style={styles.gender}>Bio</Text>
        <Bio/>
        </View>
        </View>
      </View>
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
    backgroundColor: "#0096FF",

  },
  container1: {
    flex: -1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#ffffff",
  },
  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:20,
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

    
    borderRadius:20,
    flex: 0.3,
    borderWidth: 0.5,
    padding: 30,
    margin: 0,
    shadowColor: "#8ec7e9",
    shadowOffset: {
    width: 0,
    height: 18,
    },
    shadowOpacity:  0.25,
    shadowRadius: 20.00,
    elevation: 24
},

middle1: {
    borderRadius:20,
    flex: 0.3,
    backgroundColor: "#87cbeb",
    borderWidth: 0.5,
    padding: 30,
    margin: 5,
    shadowColor: "#0b1f67",
    shadowOffset: {
    width: 0,
  height: 18,
},
shadowOpacity:  0.25,
shadowRadius: 20.00,
elevation: 24
  },
  
middle2: {
    borderRadius:20,
    flex: 0.3,
    backgroundColor: "beige",
    borderWidth: 0.5,
    padding: 30,
    margin: 5,
    shadowColor: "#dc4f64",
    shadowOffset: {
     width: 0,
     height: 18,
    },
    shadowOpacity:  0.25,
    shadowRadius: 20.00,
    elevation: 24
  },

  middle3: {
    borderRadius:20,
    flex: 0.3,
    backgroundColor: "beige",
    borderWidth: 0.5,
    padding: 30,
    margin: 5,
    shadowColor: "#3e00ba",
shadowOffset: {
  width: 0,
  height: 18,
},
shadowOpacity:  0.25,
shadowRadius: 20.00,
elevation: 24
  },


  bottom: {
    flex: 0.3,
    backgroundColor: "pink",
    borderWidth: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 30,
    margin: 1,
  },
  title: {
    textAlign: "center",
    fontSize: 50,
    color: "white",
    margin: 10,
    marginBottom: 1,
    paddingTop: -50,
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
    width: 80,
    height: 60,
    marginBottom: -20,
    paddingTop: 20,
  },
  gender:{
    fontSize: 25,
  }
});

export default Home;


<Button style={styles.button} icon="arrow-right-box" title="Next" onPress={pressHandler}>Next</Button> 



shadowOffset: {
  width: 10,
  height: 18,
  },
  shadowOpacity:  0.25,
  shadowRadius: 20.00,
  elevation: 24