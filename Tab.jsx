import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import { Match } from './screens/MatchScreen'
import { News } from './screens/NewsScreen'
import { Stat } from './screens/StatScreen'
import { Info } from './screens/InfoScreen'

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarStyle: {
                position: "absolute",
                paddingBottom: 6,
                bottom: 30,
                marginHorizontal: 20,
                height: 60,
                borderRadius: 12,
                shadowColor: '#000000',
                shadowOpacity: 0.05,
                shadowOffset: {
                    width: 10,
                    height: 10,
                }
            }
        }}>
            <Tab.Screen name="Mатч-центр" component={Match} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        <Ionicons name="football" size={35} color="black" paddingTop={4} />
                    </View>
                )
            }} />
            <Tab.Screen name="Новости" component={News} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        <Entypo name="news" size={28} color="black" paddingTop={4} />
                    </View>
                )
            }} />
            <Tab.Screen name="Статистика" component={Stat} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        <Ionicons name="stats-chart" size={27} color="black" paddingTop={4} />
                    </View>
                )
            }} />
            <Tab.Screen name="Информация" component={Info} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        <AntDesign name="infocirlce" size={24} color="black" paddingTop={4} />
                    </View>
                )
            }} />
        </Tab.Navigator>

    )
}

export default Tabs;