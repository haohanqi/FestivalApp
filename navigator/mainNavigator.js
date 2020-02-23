import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Home from '../screens/Home'
import Setting from '../screens/Setting'
import Artists from '../screens/Artists'
import ArtistDetail from '../screens/ArtistDetail'

const  homeStack =createStackNavigator(
    {
        home: Home,
        // setting:Setting,
        // link:Link
    }
)

const settingStack = createStackNavigator(
{
    setting:Setting, 
    artists:Artists,
}
)

const artistsStack = createStackNavigator(
    {
        artists:Artists,
        artistDetail:ArtistDetail,
    }

)


export default tabNavigation = createBottomTabNavigator(
    {
        home:homeStack,
        artists:artistsStack,
        setting:settingStack
    }
)
