import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs"

import { Home } from "../pages/Delivery"

type AppRoutes = {
  home: undefined
  trips: undefined
  new: undefined
  edit: undefined
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>()
export function AppRoutes() {

  return (
    <Navigator>
      <Screen
        name="home"
        component={Home}
      />
    </Navigator>
  )
}