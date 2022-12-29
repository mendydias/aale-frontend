import * as React from 'react';
import { View,StyleSheet,Text } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { ButtonG } from './Button';


const MyComponent = () => {
  const [checked, setChecked] = React.useState(false);
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);

  const printButtonLable = (item) => {
    console.log(item)
  }

  return (
  <>
    <View style={styles.container}>

      <ButtonG
        buttons={['Male','Female','Others']}
        dosomethingAfterClick={printButtonLable}
      />



  </View>
  </>
  );
};

const styles = StyleSheet.create({
  
  container: {
    
    flex: 1,
  },


});

export default MyComponent;


/*    <View style={styles.checkboxContainer}>
    <Text style={styles.label}>Male </Text>
    <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
      style={styles.checkbox1}
    />
    </View>

    <View style={styles.checkboxContainer1}>
        <Text style={styles.label}>Female </Text>
        <Checkbox
          status={checked1 ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked1(!checked1);
          }}
          style={styles.checkbox2}
        />
    </View>

    <View style={styles.checkboxContainer2}>
        <Text style={styles.label}>Other</Text>

        <Checkbox
          status={checked2 ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked2(!checked2);
          }}
          style={styles.checkbox3}
        />
    </View>

      checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    padding:0,
    marginHorizontal:15,
  },
  checkboxContainer1: {
    flexDirection: "row",
    marginBottom: 20,
    padding:0,
    marginHorizontal:-6,
  },

  checkboxContainer2: {
    flexDirection: "row",
    marginBottom: 20,
    padding:0,
    marginHorizontal:16,
  },

  label: {
    margin: 5,
    fontSize:20,
  },

  checkbox1: {
    padding:10,
    marginHorizontal:10,
    marginRight:-1,
  },

  checkbox2: {
    alignSelf: "center",
    padding:1,
    marginHorizontal:10
  },

  checkbox3: {
    alignSelf: "center",
    padding:1,
    marginHorizontal:10,
  },
    
    */