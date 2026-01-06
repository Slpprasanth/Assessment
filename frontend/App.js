import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList
} from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (!text.trim()) return;
    setItems([...items, text]);
    setText('');
  };

  return (
    <View style={{ padding: 20, marginTop: 50 }}>
      <TextInput
        placeholder="Enter item"
        value={text}
        onChangeText={setText}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />

      <Button title="Add Item" onPress={addItem} />

      <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20 }}>
        Item List
      </Text>

      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Text>{index + 1}. {item}</Text>
        )}
      />
    </View>
  );
}
