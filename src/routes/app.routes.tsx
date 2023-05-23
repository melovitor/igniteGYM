import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { useTheme } from 'native-base'
import { Exercise } from '@screens/Exercise'
import { History } from '@screens/History'
import { Home } from '@screens/Home'
import { Profile } from '@screens/Profile'
import HomeSvg from '@assets/home.svg'
import HistorySvg from '@assets/history.svg'
import ProfileSvg from '@assets/profile.svg'

type AppRouts = {
    home: undefined
    history:undefined
    profile:undefined
    exercise:undefined
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRouts>

const {Navigator, Screen} = createBottomTabNavigator<AppRouts>()


export function AppRoutes(){

    const {sizes} = useTheme()
    const iconSize = sizes[6]
    
    return(
        <Navigator screenOptions={{
                headerShown: false,
                tabBarShowLabel: false
            
            }}>
            <Screen
                name='home'
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <HomeSvg fill={color} width={iconSize} height={iconSize}/>
                    )
                }}
            />
            <Screen
                name='history'
                component={History}
                options={{
                    tabBarIcon: ({ color }) => (
                        <HistorySvg fill={color} width={iconSize} height={iconSize}/>
                    )
                }}
            />
            <Screen
                name='profile'
                component={Profile}
                options={{
                    tabBarIcon: ({ color }) => (
                        <ProfileSvg fill={color} width={iconSize} height={iconSize}/>
                    )
                }}
            />
            <Screen
                name='exercise'
                component={Exercise}
            />
            
        </Navigator>
    )
}