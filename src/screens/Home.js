import React,{useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import CheckBox from '../components/CheckBox';
import ToDoItem from '../components/ToDoItem';
import DeleteIcon from '../components/Icon';


export default function App() {
  const [items, setItems] = useState([
    { name: '買晚餐', check: false },
    { name: '買早餐', check: false },
    { name: '買午餐', check: false },
  ]);
  const [inputText , setInputText] = useState('');

  const toggleItemCheck = (index) => {
    const newItems = items.map((item, i) =>
      i === index ? { ...item, check: !item.check } : item
    );
    setItems(newItems);
  };

  const deleteItem = (index) => {
    const newItems = items.filter((item, i) => i !== index);
    setItems(newItems);
  }


  return (
    <View style={styles.container}>
      {/* <CheckBox/> */}
      {/* add Item */}
      <View style={{flexDirection:"row",alignItems:"center"}}>

        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 ,flex:1,marginRight:16}}
          onSubmitEditing={(event) => {
            setItems([...items, { name: event.nativeEvent.text, check: false }]);
            setInputText("");
          }}
          value={inputText}
          onChangeText={(text) => setInputText(text)}
        />
        <TouchableOpacity 
          style={{padding:10,paddingHorizontal:20,borderRadius:5,backgroundColor:"skyblue"}}
          onPress={() => {
            setItems([...items, { name: inputText, check: false }]);
            setInputText("");
          }}  
        >
          <Text>新增</Text>
        </TouchableOpacity>
      </View>



      {/* <ToDoItemList/> */}
      <View style={styles.ToDoList}>
      {
        items.map((item, index) => (
          <View key={index} style={styles.ToDoItemStyle}>
            <ToDoItem check={item.check} checkFunc = {() => toggleItemCheck(index)}>
              {item.name}{item.check?"(已完成)":"(未完成)"}
            </ToDoItem>
            <DeleteIcon 
              onPress = {() => {deleteItem(index)}}
              color = "gray"
            />

          </View>
        ))

      }
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
  },
  ToDoItemStyle:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  ToDoList:{
    marginTop: 20,
  }

});
