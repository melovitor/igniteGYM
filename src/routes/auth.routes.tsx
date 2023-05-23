import {createNativeStackNavigator, NativeStackNavigationProp} from '@react-navigation/native-stack'
import { SignIn } from '@screens/SignIn'
import { SignUp } from '@screens/SignUp'

type AuthRouts = {
    signIn: undefined,
    signUp:undefined
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRouts>

const {Navigator, Screen} = createNativeStackNavigator<AuthRouts>()

export function AuthRoutes(){
    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen
                name='signIn'
                component={SignIn}
            />
            <Screen
                name='signUp'
                component={SignUp}
            />
        </Navigator>
    )
}
