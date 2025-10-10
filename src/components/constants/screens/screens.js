import AddCargo from "../../../screens/cargo/addCargo/addCargo";
import CargoHome from "../../../screens/cargo/cargoHomePage/cargoHomePage";
import AddDriver from "../../../screens/drivers/addDriver/addDriver";
import DriversHomePage from "../../../screens/drivers/driversHomePage/driversHomePage";
import AddDevice from "../../../screens/management/addDevice/addDevice";
import HardwareManagement from "../../../screens/management/hardManagement/hardManagement";
import Management from "../../../screens/management/management";
import ViewDevice from "../../../screens/management/viewDevice/viewDevice";
import AddVehicle from "../../../screens/vehicles/addVehicle/addVehicle";
import VehiclesHomePage from "../../../screens/vehicles/vehiclesHomePage/vehiclesHomePage";

export const screens = {
  Management,
  HardwareManagement,
  AddDevice,
  ViewDevice,

  // Drivers
  DriversHomePage,
  AddDriver,


  // Vehicles 
  VehiclesHomePage,
  AddVehicle,

  // Cargor
  CargoHome,
  AddCargo
}