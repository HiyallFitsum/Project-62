import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export default class SummaryScreen extends React.Component {

async showAttendance(){
var class_ref =await db.ref('/').on('value', date => {
  var all_students =[]
  var class_a = date.val().class_A;
  for(var i in class_a) {
    all_students.push(class_a[i]);
  }
  all_students.sort(function(a, b) {
    return a.roll_no - b.roll_no;
  });
   this.setState({ all_students: all_students });
});
}

render() {
    return (

          <View>
          <Text>{this.showAttendance}</Text>
          </View>
           );
         }
}