import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/Home';
import WalletScreen from './screens/Wallet';
import PayScreen from './screens/Pay';
import NotificationsScreen from './screens/Notifications';
import SettingScreen from './screens/Setting';

import {AntDesign, Ionicons} from '@expo/vector-icons'

import PayButton from '../src/components/PayButton'
import { StatusBar } from 'react-native'

const Tab = createBottomTabNavigator();
const icons = {
    Home:{
        lib: AntDesign,
        name: 'home',
    },
    Wallet:{
        lib: AntDesign,
        name: 'creditcard',
    },

    Notifications:{
        lib: Ionicons,
        name: 'ios-notifications-outline',
    },
    Settings:{
        lib: AntDesign,
        name: 'setting'
    },
}
export default function Navigation(){
    return(
        <>
        <StatusBar barStyle="default"/>

        <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route, navigation })=>({
            tabBarIcon:({color, size, focused})=>{
                if(route.name == 'Pay'){
                    return (
                        <PayButton
                            onPress={()=>navigation.navigate('Pay')}
                            focused={focused}
                        />
                    )
                }
                const {lib: Icon, name} = icons[route.name];
                return <Icon name={name} size={size} color={color}/>
            },
        })}
        tabBarOptions={{
            style:{
                backgroundColor: "#fff",
                borderTopColor: "rgba(255,255,255, 0.2)",
                paddingBottom:4,
                borderTopColor: '#ccc',
                borderTopWidth:1
            },
            activeTintColor:'#000',
            inactiveTintColor:'#666',
        }}
        >
            <Tab.Screen 
            name="Home" 
            component={HomeScreen}
            options={{
                title:'Início',
            }}
            />
            <Tab.Screen 
            name="Wallet" 
            component={WalletScreen}
            options={{
                title:'Carteira',
            }}
            />
            <Tab.Screen 
            name="Pay" 
            component={PayScreen}
            options={{
                title:'',
            }}
            />

            <Tab.Screen 
            name="Notifications" 
            component={NotificationsScreen}
            options={{
                title:'Notificações',
            }}
            />

            <Tab.Screen 
            name="Settings" 
            component={SettingScreen}
            options={{
                title:'Ajustes',
            }}
            />
        </Tab.Navigator>
        </>
        
    );
}