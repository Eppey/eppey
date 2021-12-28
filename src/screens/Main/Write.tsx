import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  TextInput,
  Alert,
  Button,
} from 'react-native';

import { fonts } from '../../styles/fonts';
import { topics } from '../../data/topics';
import { Picker } from '@react-native-picker/picker';

const Write = () => {
  const navigation: any = useNavigation();
  const [title, setTitle] = useState('');
  const [topic, setTopic] = useState('General');
  const [content, setContent] = useState('');

  navigation.setOptions({
    headerShown: true,
    headerStyle: {
      backgroundColor: '#272F40',
    },
    headerTintColor: '#FFFFFF',
    headerTitle: 'New Post',
    headerRight: () => (
      <Button
        onPress={() => Alert.alert('pressed')}
        title="Post"
        color="#FFFFFF"
      />
    ),
  });

  return (
    <View>
      <StatusBar barStyle={'light-content'} />
      <View style={{ marginHorizontal: '5%' }}>
        <TextInput
          style={styles.titleField}
          placeholder="Write a title"
          placeholderTextColor="#272F40B2"
          autoCorrect={false}
          autoFocus={true}
          onChangeText={(value) => {
            setTitle(value);
          }}
        ></TextInput>
        <Picker
          selectedValue={topic}
          onValueChange={(itemValue) => setTopic(itemValue)}
          itemStyle={styles.pickerText}
          style={{ borderBottomWidth: 1, borderBottomColor: '#272F4026' }}
        >
          {topics.map((item) => (
            <Picker.Item label={item} value={item} key={item} />
          ))}
        </Picker>
        <TextInput
          style={styles.bodyField}
          placeholder={
            'Start a conversation!\n\nMake sure you are not writing ' +
            'down any personal information or secrets :)'
          }
          placeholderTextColor="#272F40B2"
          multiline={true}
          autoCorrect={false}
          onChangeText={(value) => {
            setContent(value);
          }}
        ></TextInput>
      </View>
    </View>
  );
};

export default Write;

const styles = StyleSheet.create({
  titleField: {
    ...fonts.body1Black,
    ...{
      fontWeight: 'normal',
      height: 50,
      borderBottomWidth: 1,
      borderBottomColor: '#272F4026',
    },
  },
  bodyField: {
    ...fonts.body1Black,
    ...{
      fontWeight: 'normal',
      paddingTop: 15,
    },
  },
  pickerText: {
    ...fonts.body1Black,
    ...{ textAlign: 'left', height: 120 },
  },
});
