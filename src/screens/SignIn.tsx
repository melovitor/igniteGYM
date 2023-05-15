import { VStack, Image, Center, Text} from 'native-base';
import LogoSVG from '@assets/logo.svg'
import BackgroundImg from '@assets/background.png'

export function SignIn(){
    return(
        <VStack flex={1} bg='gray.700' >
            <Image
                source={BackgroundImg}
                alt='Background de pessoas treinando'
                resizeMode='contain'
                position='absolute'
            />
            <Center my={24}>
                <LogoSVG/>
                <Text color='gray.100' fontSize='sm'>
                    Treine sua mente e o seu corpo!
                </Text>
            </Center>
        </VStack>
    )
}