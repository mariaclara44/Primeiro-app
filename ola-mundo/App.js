import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FontAwesome} from '@expo/vector-icons';
import { Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
      source={require('./assets/logo.png')}
      style={styles.imagemPequena}
      resizeMode="contain"/>
      <StatusBar style="auto"/>
      <Text style={styles.estilotexto}>Join Us</Text>

      <Text style={styles.textoPequeno}>Your name:</Text>
      <TextInput style={styles.input}placeholder='Enter you full name'/>

      <Text style={styles.textoPequeno}>Your Email</Text>
      <TextInput style={styles.input}placeholder='hello@gmail.com'/>

      <Text style={styles.textoPequeno}>Password</Text>
      <TextInput style={styles.input}placeholder='Enter your password'/>

      <View style = {styles.dividirContainer} >
        <View style = {styles.line} />
        <Text Style = {styles.dividirText}> or </Text>
        <View style = {styles.line} />
      </View>

    <View style={styles.socialRow} >

      <TouchableOpacity style={styles.socialButton} >
        <FontAwesome name ='Google' size={20} color = '#00ADEF'/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton} >
        <FontAwesome name ='Facebook' size={20} color = '#00ADEF'/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton} >
        <FontAwesome name ='Instagram' size={20} color = '#00ADEF'/>
      </TouchableOpacity>


    </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },

  estilotexto: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
  },

  imagemPequena: {
    width: 200,
    height: 200,
  },

  textoPequeno: {
    color: 'black',
    fontSize: 12,
    marginTop: 20,
    marginLeft: -250,
    },

  input: {
    height: 40,
    borderColor:' #92a6ff',
    backgroundColor: '#e7f8ff',
    borderWidth: 1.5,
    width: '80%',
    marginTop: 20,
    paddingLeft: 10,
    borderRadius: 8,
    paddingHorizontal: 10,
  },

  dividirContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    marginVertical: 25,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#CCC',
  },

  dividirText: {
    marginHorizontal: 10,
    color: 'gray',
  },
  
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 30,
  },

  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#f0faff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonMain: {
    backgroundColor: '#00ADEF',
    width: '88%',
    height: 55,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffSet: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonMainText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});