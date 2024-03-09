import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../pages/Login";
import HomeScreen from '../pages/Home'
import { createDrawerNavigator } from "@react-navigation/drawer";
import LogoutScreen from "../pages/Logout";
import IndexDespesas from "../pages/Despesas/IndexDespesas";
import FormDespesas from "../pages/Despesas/FormDespesas";
// import MapaScreen from "../pages/Mapa";

const Stack = createDrawerNavigator();
export default function PrivateRoutes() {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: true }}/>
                    <Stack.Screen name="IndexDespesas" component={IndexDespesas} options={{ headerShown: true }}/>
                    <Stack.Screen name="FormDespesas" component={FormDespesas} options={{ headerShown: true }}/>
                    <Stack.Screen name="Sair" component={LogoutScreen} options={{ headerShown: true }}/>
                    {/* <Stack.Screen name="Mapa" component={MapaScreen} options={{ headerShown: true }}/> */}
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

