import * as React from 'react';
import { View, Text, Image, TouchableOpacity,StyleSheet } from 'react-native';
import db from '../config';

export default class HomeScreen extends React.Component {

  /*constructor() {
    super();
    this.state = {
      all_students: [],
    };
  }*/

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

updateAttendance(roll_no, status) {
    var id = '';
    if (roll_no <= 9) {
      id = '0' + roll_no;
     } else {
       id = roll_no;
     }

     var today = new Date();
     var dd = today.getDate();
     var mm = today.getMonth() + 1;

     var yyyy = today.getFullYear();
     if (dd < 10){
       dd = '0' + dd;
     }
     if (mm < 10){
       mm = '0' + mm;
     }
     today = dd + '-' + mm + '-' + yyyy;
     var reth_path = id;
     var class_ref = db.ref(reth_path);
     class_ref.update({
       [today]: status,
     });
}

updatePresent = () => {
    this.setState({ classOnePresent: this.state.present === 'true' });
  };

updateAbsent = () => {
    this.setState({ classOneAbsent: this.state.absent === 'true' });
  };

render() {
    return (

          <View>
          
          <View style={[styles.header]}>
          <Text style={[styles.text]}>School Attendance</Text>
          </View>

            <TouchableOpacity 
             //John
        style={[styles.button]}
       onPress={this.updateAttendance}            
       >
       <Text>Present</Text>
       </TouchableOpacity>

        <TouchableOpacity
         //John 
        style={[styles.button, {marginTop: -32, marginLeft: 220}]}
       //onPress={}>
       >
       <Text>Absent</Text>
       </TouchableOpacity>

        <Text style={{marginTop: -30, marginLeft: 50, fontSize:17, fontWeight: 'bold'}}> John: </Text>
           

        <TouchableOpacity 
         //Madeline
        style={[styles.button]}
       //onPress={}>
       >
       <Text>Present</Text>
       </TouchableOpacity>

        <TouchableOpacity 
          //Madeline
        style={[styles.button, {marginTop: -32, marginLeft: 220}]}
       //onPress={}>
       >
       <Text>Absent</Text>
       </TouchableOpacity>

        <Text style={{marginTop: -30, marginLeft: 30, fontSize:17, fontWeight: 'bold'}}> Madeline: </Text>

         <TouchableOpacity 
                /*onPress={this.updateAttendance}>*/
        style={[styles.submit, {backgroundColor: 'yellow'}]}
      onPress={()=>this.props.navigation.navigate('SummaryScreen')}>
       <Text>Submit</Text>
       </TouchableOpacity>

          </View>
           );
         }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 20, 
    width: 70, 
    height:30, 
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 130,
    backgroundColor: 'white',
    //borderRadius: 100,
    borderColor: 'black',
    borderWidth: 3,
  },
  header: {
marginTop: 20, 
    width: 250, 
    height: 60, 
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 50,
    backgroundColor: 'orange',
  },
  text: {
   marginTop: 10,
   marginLeft: 5,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
  submit: {
marginTop: 20, 
    width: 500, 
    height: 60, 
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -70,
    borderColor: 'black',
    borderWidth: 3,
  },
  });