import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
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
});
