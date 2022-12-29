import * as React from 'react';
import { View,StyleSheet,Text } from 'react-native';
import { Checkbox } from 'react-native-paper';

const Like = () => {
  const [checked, setChecked] = React.useState(false);
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);

  return (
  <>
    <View style={styles.container}>

    <View style={styles.checkboxContainer}>
    <Text style={styles.label}>Men </Text>
    <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
      style={styles.checkbox1}
    />
    </View>

    <View style={styles.checkboxContainer1}>
        <Text style={styles.label}>Women </Text>
        <Checkbox
          status={checked1 ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked1(!checked1);
          }}
          style={styles.checkbox2}
        />
    </View>

    <View style={styles.checkboxContainer2}>
        <Text style={styles.label}>Both</Text>

        <Checkbox
          status={checked2 ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked2(!checked2);
          }}
          style={styles.checkbox3}
        />
    </View>

  </View>
  </>
  );
};

const styles = StyleSheet.create({
  
  container: {
    
    flex: 1,
    padding: 4,
    paddingBottom:20,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 2,
    padding:0,
    marginHorizontal:15,
  },
  checkboxContainer1: {
    flexDirection: "row",
    marginBottom: 2,
    padding:0,
    marginHorizontal:-6,
  },

  checkboxContainer2: {
    flexDirection: "row",
    marginBottom: 2,
    padding:0,
    marginHorizontal:17,
  },

  label: {
    margin: 5,
  },

  checkbox1: {
    alignSelf: "center",
    padding:10,
    marginHorizontal:10,
    marginRight:-10,
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

});

export default Like;