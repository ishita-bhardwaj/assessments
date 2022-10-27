import * as React from 'react';
import { View, Text,Alert, StyleSheet, Button, LogoTitle, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/Screens/HomeScreen';

class pay extends React.Component{
    render(){
        return(
            alert("Inside pay")
        );
    }
}
class shop extends React.Component{
    render(){
        return(
            alert("Inside shop")
        );
    }
}
class discover extends React.Component{
    render(){
        return(
            alert("Inside discover")
        );
    }
}
class help extends React.Component{
  render(){
      return(
          alert("Inside help")
      );
  }
}





const Tab = createBottomTabNavigator()


function Tabnavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{headerShown: false}}>
                <Tab.Screen name="manage"  component={HomeScreen} 
                options={{
                    tabBarLabel: 'manage',
                    tabBarIcon: ({ color, size }) => 
                   
                    <Image  style={styles.icon} resizeMode={'contain'}  source={require('/Users/ishitabhardwaj/Desktop/Assessment1/src/utils/2666404.png')}/>
                    
                }}
           
                />
                <Tab.Screen name="pay" component={pay} options={{
                    tabBarLabel: 'pay',
                   
                    tabBarIcon: ({ color, size }) => 
                  
                    <Image  style={styles.icon} resizeMode={'contain'} source={require('/Users/ishitabhardwaj/Desktop/Assessment1/src/utils/1570917.png')}/>
                    
                }}/>
                <Tab.Screen name="shop" component={shop}  options={{
                    tabBarLabel: 'shop',
                    tabBarIcon: ({ color, size }) => 
                  
                    <Image  style={styles.icon} resizeMode={'contain'} source={require('/Users/ishitabhardwaj/Desktop/Assessment1/src/utils/743131.png')}/>
                    
                }} />
                <Tab.Screen name="discover" component={discover} options={{
                    tabBarLabel: 'discover',
                    tabBarIcon: ({ color, size ,focused}) => 
                 
                    <Image  style={styles.icon} resizeMode={'contain'} source={require('/Users/ishitabhardwaj/Desktop/Assessment1/src/utils/109859.png')}/>
                   
                }} />
                <Tab.Screen name="help" component={help} options={{
                    tabBarLabel: 'help',
                    tabBarIcon: ({ color, size }) => 
                  
                    <Image  style={styles.icon} resizeMode={'contain'} source={require('/Users/ishitabhardwaj/Desktop/Assessment1/src/utils/2984971.png')}/>
                    
                }} />

            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Tabnavigation;
const styles = StyleSheet.create({
    icon: {
        height:20,
        width:22
    },
})

// import React from 'react';
// import { Text, View } from 'react-native';

// const App = () => {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center"
//       }}>
//       <Text>Hello, world!</Text>
//     </View>
//   )
// }
// export default App;