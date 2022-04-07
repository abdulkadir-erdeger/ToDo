import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import React, {useState} from 'react';
import styles from './Body.styles';

export default function Body({onSave}) {
  const [change, setChange] = useState(true);
  const inputChange = text => {
    text === '' ? setChange(true) : setChange(false);
    setToDoValue(text);
  };
  const [toDoValue, setToDoValue] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <TextInput
          style={styles.textInput}
          placeholderTextColor="grey"
          placeholder="Yapılacak..."
          onChangeText={inputChange}
          value={toDoValue}
        />
      </View>
      {change ? (
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Kaydet</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => (
            onSave(toDoValue), setToDoValue(''), setChange(!change)
          )}
          style={styles.button2}>
          <Text style={styles.buttonText}>Kaydet</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
