import React, {useState, useEffect} from 'react';

import {SafeAreaView, StyleSheet, StatusBar, FlatList} from 'react-native';
import Body from './components/Body/Body';
import Header from './components/Header';
import TodoListCard from './components/TodoListCard/TodoListCard';

const App = () => {
  const [ToDos, setToDos] = useState([]);
  const [counter, setCounter] = useState(0);
  const renderItemTodo = ({item}) => (
    <TodoListCard toDo={item} onChange={changeStatus} />
  );

  const fixCounter = () => {
    let count = 0;
    ToDos.map(item => (item.durum === true ? count++ : null));
    setCounter(count);
  };

  function addToDos(text) {
    const newToDos = {
      kayit: text.toString(),
      durum: true,
    };
    setToDos([...ToDos, newToDos]);
  }
  const changeStatus = toDo => {
    const newTodos = ToDos.map(item => {
      if (item.kayit == toDo.kayit) {
        if (item.durum) {
          return {...item, durum: false};
        } else {
          return {...item, durum: true};
        }
      }
      return item;
    });
    setToDos(newTodos);
  };
  useEffect(fixCounter, [ToDos]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#102027"
        barStyle={'dark-content'}
      />
      <Header count={counter} />
      <FlatList
        data={ToDos}
        renderItem={renderItemTodo}
        keyExtractor={(item, index) => index}
      />
      <Body onSave={addToDos} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#102027',
    flex: 1,
  },
});

export default App;
