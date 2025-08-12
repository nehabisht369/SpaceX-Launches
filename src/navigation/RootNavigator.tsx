import { createStackNavigator } from "@react-navigation/stack";

import { Launch } from "../api/spacex";
import ListScreen from "../screens/ListScreen/ListScreen";
import DetailsScreen from "../screens/DetailsScreen/DetailsScreen";

export type RootStackParamList = {
  List: undefined;
  Details: { launch: Launch };
};

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="List"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#0066cc",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="List"
        component={ListScreen}
        options={{ title: "SpaceX Launches" }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={({ route }) => ({ title: route.params.launch.name })}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
