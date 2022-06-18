import { Text, View, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const Stack = createStackNavigator();

const Home = ({ navigation }) => {
  return (
    <View style={style.homeContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Popup')} style={style.homeButton}>
        <Text>show pop up</Text>
      </TouchableOpacity>
    </View>
  );
};

const Popup = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: SCREEN_HEIGHT * 0.8,
        backgroundColor: '#F2E1AC'
      }}>
      {/* InnerContainer */}
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={style.popupButton}>
          <Text>Subscribe</Text>
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
          headerShown: false
        }}>
        <Stack.Screen name={`Home`} component={Home} />
        <Stack.Screen
          name={`Popup`}
          component={Popup}
          options={{
            cardStyle: {
              backgroundColor: 'transparent'
            },
            presentation: 'modal',
            gestureResponseDistance: SCREEN_HEIGHT * 0.9,
            gestureVelocityImpact: 0.5 // default 0.3,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

const style = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#F27D52',
    alignItems: 'center',
    justifyContent: 'center'
  },
  homeButton: {
    backgroundColor: '#F2E1AC',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10
  },
  popupButton: {
    backgroundColor: '#F26E22',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10
  }
});
