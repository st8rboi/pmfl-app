import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ImageBackground, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { News } from './screens/NewsScreen'
import { Info } from './screens/InfoScreen'
import { Stacks } from "./Stack";
import {Test} from './Test'


const Tab = createBottomTabNavigator();


const Tabs = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarStyle: {
                position: "absolute",
                paddingBottom: 7,
                height: 60,
                borderRadius: 12,
                shadowColor: '#4b0e89',
                shadowOpacity: 0.05,
                shadowOffset: {
                    width: 10,
                    height: 10,
                },
                backgroundColor: '#171742',
            },
        }}>
            <Tab.Screen name="Матч-центр" component={Stacks} options={{
                tabBarIcon: () => (
                    <View>
                        <Ionicons name="football-outline" size={30} color="white" paddingTop={5} />
                    </View>
                ),
                headerTitleAlign: 'center',
                tabBarLabelStyle: {
                    color: 'white'
                }
            }} />
            <Tab.Screen name="Статистика" component={Test} options={{
                tabBarIcon: () => (
                    <View>
                        <Ionicons name="stats-chart" size={25} color="white" paddingTop={4} />
                    </View>
                ),
                headerTitleAlign: 'center',
                tabBarLabelStyle: {
                    color: 'white'
                }
            }} />
            <Tab.Screen name="Информация" component={Info} options={{
                tabBarIcon: () => (
                    <View>
                        <AntDesign name="infocirlce" size={22} color="white" paddingTop={7} />
                    </View>
                ),
                headerTitleAlign: 'center',
                tabBarLabelStyle: {
                    color: 'white'
                }
            }} />
        </Tab.Navigator>
    )
}

export default Tabs;