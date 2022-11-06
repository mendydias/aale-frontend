import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';

const Createaccount = () => {
  return (
    <ScrollView>
    <View style={{ alignItems: 'center',backgroundColor: 'rgba(0, 150, 255, 1)'}}>
    <Image
          source={{
            uri: 'https://i.imgur.com/9Ju5PZ8.png'
          }}
          style={{ width:250, height:190}}
          
   />
   <Text style={{fontWeight:'bold',color:'white',fontSize: 18}}>Create AALE account</Text>
     
   </View>
   <View style={{ alignItems: 'center'}}>
   <Text style={{paddingTop:25,paddingBottom:0}}>Full Name</Text>
   <TextInput
        style={{
    margin: 12,
    borderWidth: 2,
    width:200,
    height:25,
   
   }}
       
       
      />
         <Text style={{paddingTop:2,paddingBottom:0}}>Username</Text>
   <TextInput
        style={{
    margin: 12,
    borderWidth: 2,
    width:200,
    height:25,
   paddingTop:0}}
       
       
      />
               <Text style={{paddingTop:2,paddingBottom:0}}>Email</Text>
   <TextInput
        style={{
    margin: 12,
    borderWidth: 2,
    width:200,
    height:25,
   paddingTop:0}}
       
       
      />
                     <Text style={{paddingTop:2,paddingBottom:0}}>Password</Text>
   <TextInput
        style={{
    margin: 12,
    borderWidth: 2,
    width:200,
    height:25,
   paddingTop:0}}
       
       
      />
                           <Text style={{paddingTop:2,paddingBottom:0}}>Retype Password</Text>
   <TextInput
        style={{
    margin: 12,
    borderWidth: 2,
    width:200,
    height:25,
   paddingTop:0}}
       
       
      />
   </View>
    </ScrollView>
  );
}

export default Createaccount;