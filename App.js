import { Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
const SCREEN_HEIGHT = Dimensions.get('window').height;
const Stack = createStackNavigator();

const Home = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <TouchableOpacity onPress={() => navigation.navigate('Popup')}>
        <View>
          <Text style={{ color: 'black' }}>show pop up</Text>
        </View>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};

const Popup = () => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          top: SCREEN_HEIGHT * 0.8,
          backgroundColor: 'white'
        }}>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <View>
            <Text>Subscribe 🤪🤐😇</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        cardStyle={{ backgroundColor: 'transparent' }}
        screenOptions={{
          gestureEnabled: true,
          headerShown: false
        }}>
        <Stack.Screen name={`Home`} component={Home} />
        <Stack.Screen
          name={`Popup`}
          component={Popup}
          options={{
            headerShown: false,
            cardStyle: {
              backgroundColor: 'transparent'
            },
            cardOverlayEnabled: true,
            gestureDirection: 'vertical',
            gestureResponseDistance: SCREEN_HEIGHT * 0.9,
            gestureVelocityImpact: 0.5, // default 0.3
            presentation: 'modal'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
