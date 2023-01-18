import React from 'react';
import { StyleSheet, View, Text,TouchableOpacity,Button,Image} from 'react-native';


export default function Home({navigation}) {
  const pressHandler=()=>{
    navigation.navigate('Create');
  }
   const pressHandler1=()=>{
    navigation.navigate('Login');
  }

  return (
    <View style={styles.all} >
        <View style={styles.asd}>
            <Image style={styles.sdf} source={require('../components/icon.png')} resizeMode={'contain'} />
              </View>
    <View style={styles.formInput}>
           <TouchableOpacity >
            <Button title='Create account'  color="rgba(0, 215, 255, 1)" onPress={pressHandler}/>
             </TouchableOpacity>
            </View>
            <View style={styles.formInput}>
           <TouchableOpacity>
            <Button title='Login'  color="rgba(0, 215, 255, 1)" onPress={pressHandler1} />
             </TouchableOpacity>
            </View>
    </View>
  );
}
const styles = StyleSheet.create({
   
    formInput:{
       paddingBottom:10,
       paddingTop:2,
       paddingRight:50,
       paddingLeft:50,
      borderRadius: 30,
 
      
    },
    asd:{
      paddingBottom:2
    },
    sdf:{
      width:'100%',
      height:660
    },
    all:{
      backgroundColor:'blue',
    },
    
   

});