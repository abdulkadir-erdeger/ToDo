import {View, Text, TouchableHighlight} from 'react-native';
import React, {useState} from 'react';
import styles from './TodoListCard.styles';

export default function TodoListCard({toDo, onChange}) {
  const [butonDurum, setButonDurum] = useState(true);
  return (
    <TouchableHighlight
      onPress={() => (setButonDurum(!butonDurum), onChange(toDo))}>
      <View style={butonDurum === true ? styles.container : styles.container2}>
        <Text style={butonDurum === true ? styles.text : styles.text2}>
          {toDo.kayit}
        </Text>
      </View>
    </TouchableHighlight>
  );
}
