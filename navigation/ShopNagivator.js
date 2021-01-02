import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import Colors from '../constants/color';
import { Platform } from 'react-native';

const ProducsNavigator = createStackNavigator({
    ProductsOverview: ProductsOverviewScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : ''
    }
})

export default createAppContainer(ProducsNavigator);
