import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Match } from "./screens/MatchScreen";
import { ThisMatch }  from "./screens/ThisMatchScreen"
import { LastMatch } from "./screens/LastMatchScreen";

const Stack = createStackNavigator()    
    
export const Stacks = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ближайшие" component={Match} options={{ headerShown: false }} />
            <Stack.Screen name="прошлые" component={LastMatch} options={{ headerShown: false }}/>
            <Stack.Screen name="thismatch" component={ThisMatch} options={{
                title: 'Назад'
            }}/>

        </Stack.Navigator>

    )
}