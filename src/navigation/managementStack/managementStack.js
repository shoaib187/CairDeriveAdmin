import { createStackNavigator } from "@react-navigation/stack";
import { screens } from "../../components/constants/screens/screens";

const Stack = createStackNavigator()

const ManagementStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation: 'slide_from_right' }} initialRouteName="ManagementHomePage">
      <Stack.Screen name="ManagementHomePage" component={screens.Management} />
      <Stack.Screen name="HardwareManagement" component={screens.HardwareManagement} />
      <Stack.Screen name="ViewDeviceDetails" component={screens.ViewDevice} />
      <Stack.Screen name="AddDevice" component={screens.AddDevice} options={{
        headerShown: false,
        animation: 'fade_from_bottom'
      }} />


      {/* Drivers screens */}
      <Stack.Screen name="Drivers" component={screens.DriversHomePage} />
      <Stack.Screen
        name="AddDriver"
        component={screens.AddDriver}
        options={{
          headerShown: false,
        }}
      />

      {/* Vehicles  */}
      <Stack.Screen name="VehiclesHomePage" component={screens.VehiclesHomePage} />
      <Stack.Screen
        name="AddVehicle"
        component={screens.AddVehicle}
        options={{
          headerShown: false,
        }}
      />
      {/* Cargo */}
      <Stack.Screen name="CargoHomePage" component={screens.CargoHome} />
      <Stack.Screen name="AddCargo" component={screens.AddCargo} />
      {/* Locations */}
      <Stack.Screen name="LocationHomePage" component={screens.LocationsHomePage} />
      <Stack.Screen name="AddLocation" component={screens.AddLocation} />
      <Stack.Screen name="LocationDetails" component={screens.LocationDetails} />

      {/* Routes */}
      <Stack.Screen name="RoutesHomePage" component={screens.RoutesHomePage} />
      <Stack.Screen name="AddRoute" component={screens.AddRoute} />
    </Stack.Navigator>
  )
}

export default ManagementStack