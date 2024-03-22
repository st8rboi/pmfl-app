import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Match } from "./screens/MatchScreen";
import { ThisMatch }  from "./screens/ThisMatchScreen"
import { LastMatch } from "./screens/LastMatchScreen";
import { Stat } from "./screens/StatScreen";
import { StatPerson } from "./screens/StatPersonScreen";
import { Manage } from "./screens/ManageMatch";
import { Info } from "./screens/InfoScreen";
import { ThisManage } from "./screens/ThisManageMatch";

const Stack = createStackNavigator()    
    
export const Stacks = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ближайшие" component={Match} options={{ headerShown: false }} />
            <Stack.Screen name="прошлые" component={LastMatch} options={{ headerShown: false }}/>
            <Stack.Screen name="thismatch" component={ThisMatch} options={{title: 'Назад'}} />
            <Stack.Screen name="командная" component={Stat} options={{ headerShown: false }} />
            <Stack.Screen name="индивидуальная" component={StatPerson} options={{ headerShown: false }} />
            <Stack.Screen name="создание" component={Info} options={{ headerShown: false }} />
            <Stack.Screen name="управление" component={Manage} options={{ headerShown: false }} />
            <Stack.Screen name="управление_матчем" component={ThisManage} options={{ title:'Назад' }} />
        </Stack.Navigator>

    )
}