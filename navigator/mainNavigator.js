import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Home from '../screens/Home'
import Setting from '../screens/Setting'
import Artists from '../screens/Artists'
import ArtistDetail from '../screens/ArtistDetail'

const  homeStack =createStackNavigator(
    {
        Home: Home,
        // setting:Setting,
        // link:Link
    }
)

const settingStack = createStackNavigator(
{
    Setting:Setting, 
    Artists:Artists,
}
)

const artistsStack = createStackNavigator(
    {
        Artists:Artists,
        artistDetail:ArtistDetail,
    }

)


export default tabNavigation = createBottomTabNavigator(
    {
        Home:homeStack,
        Artists:artistsStack,
        Setting:settingStack
    },
   {
      defaultNavigationOptions:{
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            labelStyle: {
                fontSize: 20,
              },
              style: {
                backgroundColor: 'black',
              },
          },

      }
   }
)
