import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import {createSwitchNavigator} from 'react-navigation'
import Stage from '../screens/Stage'
import Performance from '../screens/Performance'
import Artists from '../screens/Artists'
import ArtistDetail from '../screens/ArtistDetail'
import Login from '../screens/Login'
import Introduction from '../screens/homeTopTabs/Introduction'
import Contact from '../screens/homeTopTabs/Contact'




const homeTopTabs = createMaterialTopTabNavigator({
    introduction:Introduction,
    contact:Contact
},{
    tabBarOptions:'bottom',
    tabBarOptions:{
        activeTintColor:'pink',
        inactiveTintColor:'black',
        
        style: {
            backgroundColor: 'white',
            marginTop:50,
          },
    },

    swipeEnabled:true,

})


const stageStack = createStackNavigator(
{
    stage:Stage, 
    artistDetail:ArtistDetail,
    performance:Performance,
   
}
)

const artistsStack = createStackNavigator(
    {
        artists:Artists,
        stage:Stage, 
        artistDetail:ArtistDetail,
        
    }

)


const bottomTabNavigation = createBottomTabNavigator(
    {
        Home: homeTopTabs,
        Artists:artistsStack,
        Stage:stageStack
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

export default mainRoute= createSwitchNavigator({
   // Login:Login,
    main:bottomTabNavigation,
})
