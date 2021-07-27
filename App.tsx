import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

type DummyParamList = {
  home: undefined;
  feed: undefined;
};

const Dummy = (props: any) => {
  return null;
};

const MaterialTopTab = createMaterialTopTabNavigator<DummyParamList>();
const BottomTab = createBottomTabNavigator<DummyParamList>();

const MaterialTopTabTest = () => {
  return (
    <MaterialTopTab.Navigator tabBar={props => <Dummy {...props} />}>
      <MaterialTopTab.Screen name="home" component={Dummy} options={{}} />
    </MaterialTopTab.Navigator>
  );
};

const BottomTabTest = () => {
  return (
    <BottomTab.Navigator tabBar={props => <Dummy {...props} />}>
      <BottomTab.Screen name="home" component={Dummy} />
    </BottomTab.Navigator>
  );
};

export default function App() {
  return null;
}
