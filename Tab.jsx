import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { News } from './screens/NewsScreen'
import { Stat } from './screens/StatScreen'
import { Info } from './screens/InfoScreen'
import { Stacks } from "./Stack";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();


const Tabs = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarStyle: {
                position: "absolute",
                paddingBottom: 6,
                height: 60,
                borderRadius: 12,
                shadowColor: '#4b0e89',
                shadowOpacity: 0.05,
                shadowOffset: {
                    width: 10,
                    height: 10,
                },
                backgroundColor: 'black',
            },

        }}>
            <Tab.Screen name="Mатч-центр" component={Stacks} options={{
                tabBarIcon: () => (
                    <View>
                        <Ionicons name="football-outline" size={29}  color='white'/>
                    </View>
                ),
                headerTitleAlign: 'center',
                tabBarLabelStyle: {
                    color: 'white',
                },


            }} />
            <Tab.Screen name="Новости" component={News} options={{
                tabBarIcon: () => (
                    <View>
                        <MaterialCommunityIcons name="newspaper-variant-outline" size={28} color="white"/>
                    </View>
                ),
                headerTitleAlign: 'center',
                                tabBarLabelStyle: {
                    color: 'white'
                }
            }} />
            <Tab.Screen name="Статистика" component={Stat} options={{
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
                        <AntDesign name="infocirlce" size={22} color="white" paddingTop={4} />
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