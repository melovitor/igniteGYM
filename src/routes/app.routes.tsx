import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { Exercise } from '@screens/Exercise'
import { History } from '@screens/History'
import { Home } from '@screens/Home'
import { Profile } from '@screens/Profile'

type AppRouts = {
    home: undefined
    history:undefined
    profile:undefined
    exercise:undefined
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRouts>

const {Navigator, Screen} = createBottomTabNavigator<AppRouts>()


export function AppRoutes(){
    return(
        <Navigator>
            <Screen
                name='home'
                component={Home}
            />
            <Screen
                name='history'
                component={History}
            />
            <Screen
                name='profile'
                component={Profile}
            />
            <Screen
                name='exercise'
                component={Exercise}
            />
            
        </Navigator>
    )
}