import React, {useContext, useRef} from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import CardEditor from '../screens/cardEditor'
import {View, Text, TouchableOpacity, StyleSheet, Animated, Dimensions} from 'react-native'
import {MaterialCommunityIcons, AntDesign, Feather, Entypo} from 'react-native-vector-icons'
import {LocalizationContext} from '../../App'

const {width, height} = Dimensions.get('window')

function MyTabBar({ state, descriptors, navigation, size }) {

    const {t, locale, setLocale} = useContext(LocalizationContext)
    const LTR = locale == 'en'

  const focusedOptions = descriptors[state.routes[state.index].key].options;

  const position = useRef(new Animated.ValueXY(LTR?{x:(width-width/5*2)/3-25, y:0}:{x:-(width-width/5*2)/3+25, y:0})).current

  const move = (x,y) => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.spring(position, {
      toValue: {x, y},
      speed: 50,
      useNativeDriver:true,
      bounciness:20,
    }).start();
  }

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={[styles.tabBar, {flexDirection:LTR?'row':'row-reverse'}]}>
      <Animated.View style={{position:'absolute', width:width/5*2, height:40, borderRadius:100, padding:5, backgroundColor:'white', transform:[{translateX:position.x}, {translateY:position.y}]}} ><Text></Text></Animated.View>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const icon = 
          route.name == 'shopping'
            ? <AntDesign name='shoppingcart' size={30}/>
            : route.name == 'packages'
            ? <Feather name='shopping-bag' size={30} />
            : route.name == 'edit'
            ? <Entypo name='feather' size={30} />
            : route.name == 'home'
            ? <MaterialCommunityIcons name='home-outline' size={30} />
            : <MaterialCommunityIcons name='account-outline' size={30} />

            const label = 
            route.name == 'shopping'
            ? 'cart'
            : route.name == 'packages'
            ? 'packages'
            : route.name == 'edit'
            ? 'design'
            : route.name == 'home'
            ? 'home'
            : 'profile'

            
            route.name == 'shopping'
              ? <AntDesign name='shoppingcart' size={30}/>
              : route.name == 'packages'
              ? <Feather name='shopping-bag' size={30} />
              : route.name == 'edit'
              ? <Entypo name='feather' size={30} />
              : route.name == 'home'
              ? <MaterialCommunityIcons name='home-outline' size={30} />
              : <MaterialCommunityIcons name='account-outline' size={30} />
  

        const isFocused = state.index === index;

        const onPress = () => {

          if(!LTR){
            switch(route.name){
              case 'shopping':
                move(-(width-width/5*2)+30,0)
                break
              case 'packages':
                move(-(width-width/5*2)+80,0)
                break
              case 'edit':
                move(-(width-width/5*2)/2+10,0)
                break
              case 'home':
                move(-(width-width/5*2)/3+25,0)
                break
              default :
                move(-10,0)
            }
          }
          else{
            switch(route.name){
              case 'shopping':
                move((width-width/5*2)-30,0)
                break
              case 'packages':
                move((width-width/5*2)-80,0)
                break
              case 'edit':
                move((width-width/5*2)/2-10,0)
                break
              case 'home':
                move((width-width/5*2)/3-25,0)
                break
              default :
                move(10,0)
            }
          }
          
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={isFocused ? styles.activeTab :{flex:1}}
          >
              <View style={{flexDirection:LTR?'row':'row-reverse', alignItems:'center', justifyContent:'space-around'}}>
                  {icon}
                  {isFocused ? <Text>{t(label)}</Text> :null}
              </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const Tab = createBottomTabNavigator()

const BottomTabs = (props) =>{
    return(
        <Tab.Navigator 
            tabBar={props => <MyTabBar {...props} />}
            initialRouteName={'home'}
            tabBarOptions={{
                style:{
                    backgroundColor:'#ffd8eb', 
                    borderRadius:100, 
                    margin:10,
                }, 
                showLabel:false,
            }}>
            <Tab.Screen name='account' component={CardEditor} />
            <Tab.Screen name='home' component={CardEditor} />
            <Tab.Screen name='edit' component={CardEditor} />
            <Tab.Screen name='packages' component={CardEditor} />
            <Tab.Screen name='shopping' component={CardEditor} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBar:{ 
        flexDirection: 'row', 
        height:height/12,
        margin:10,
        padding:5,
        borderRadius:100, 
        backgroundColor:'#ffd8eb', 
        alignItems:'center', 
        justifyContent:'space-between' 
    },
    activeTab:{ 
        width:width/5*2, 
        borderRadius:100, 
        padding:5,
    },
    blureTab:{

    }
})

export default BottomTabs