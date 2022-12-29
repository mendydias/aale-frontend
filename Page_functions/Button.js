import React, {useState} from "react";
import { TouchableOpacity,Text,StyleSheet, View, } from "react-native";

export const ButtonG = ({ buttons, dosomethingAfterClick}) => {

  const [clickedId, setClickedId] = useState(0)

  const handleClick = (item, id) => {
    setClickedId(id)
    dosomethingAfterClick(item)
  }

  return (
    <View style= {StyleSheet.container}>
      {
        buttons.map((buttonLable, index) => {
          return (
            <TouchableOpacity
             onPress={(item) => handleClick(item, index)}
             key={index}
             style= {[index === clickedId ? styles.buttonActive : styles.button,
                      index === 0? {borderTopRightRadius: 10, borderBottomLeftRadius: 10} : "",
                      index === 1? {borderTopRightRadius: 10, borderBottomLeftRadius: 10} : "",
                      index === 2? {borderTopRightRadius: 10, borderBottomLeftRadius: 10} : "",
                    ]}>
              
              <Text 
              style= {index === clickedId ? styles.textActive : styles.text}>
                {buttonLable}
              </Text>
            </TouchableOpacity> 
          )
        })
      }

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
  },
  button:{
    flex:1,
    height:50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    borderWidth: 0.5,
    borderColor: 'black',
    margin: 10
  },
  buttonActive:{
    margin: 10,
    flex:1,
    height:50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    borderWidth: 0.5,
    borderColor: 'black'
  },
  text: {
    color: 'back',
    fontSize: 20
  },
  textActive: {
    color: 'white',
    fontSize: 20
  }
})

