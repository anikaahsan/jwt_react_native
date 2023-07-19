import 'react-native-gesture-handler'
import React from 'react'
import { Text ,View,Image,TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Ionicons from 'react-native-vector-icons/Ionicons'



import Home from './src/components/Home'
import Profile from './src/components/Profile'
import Settings from './src/components/Settings'
import Notification from './src/components/Notification'
import MyDrawer from './src/components/MyDrawer'
import RequestLeave from './src/components/RequestLeave'
import Approvalstatus from './src/components/ApprovalStatus'
import SubmittedData from './src/components/SubmittedData'
import SubmitBackend from './src/components/SubmitBackend'
import Update from './src/components/Update'
 
const MyStack=()=>{
  const Stack=createStackNavigator()
  return(
    <Stack.Navigator>
      <Stack.Screen name='profile' component={Profile} />
      <Stack.Screen name='submitbackend' component={SubmitBackend} />
      <Stack.Screen  name='update' component={Update}/>
    </Stack.Navigator>
  )

 
}


const App=()=>{
  const Tab=createBottomTabNavigator()

  return(
         <NavigationContainer>
          <Tab.Navigator 
                        screenOptions={({route})=>(
                          {
                           tabBarIcon:({ focused,color,size })=>{
                              let iconName
                              if(route.name==='home'){
                                 iconName=focused ?
                                 'ios-home-sharp'  //the iconname will be this when focused
                                 :'md-home-outline'
                              }
                              else if (route.name==='settings'){
                                iconName=focused ?
                                'md-settings'
                                :'md-settings-outline'
                              }
                              else if(route.name==='notification'){
                                iconName=focused ?
                                'notifications'
                                :'notifications-outline'
                              }
                              else if(route.name==='profile'){
                                iconName=focused?
                                'person-sharp'
                                :'person-outline'

                              }
                              return(
                                <>
                                <Ionicons name={iconName} size={24} color={color}/>
                                
                                </>
                              )

                           },
                           tabBarActiveTintColor:'slateblue',
                           tabBarInactiveTintColor:'gray',
                          //  tabBarShowLabel:false,
                          tabBarLabelStyle:{fontSize:13,bottom:5},
                          tabBarStyle:{PaddingTop:5,height:60},
                          tabBarHideOnKeyboard: true,
   
                          
                          }
                           
                          
                        )}>
            <Tab.Screen name='home' 
                        component={Home} 
                        options={
                          {
                            headerLeft:()=>(
                          <View style={{left:5,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                           
                            <Image source={require('./src/assets/nimusoft.jpg')} style={{ height:40,width:40}}/>
                            <View>
                              <Text style={{fontSize:15,color:'slateblue',fontWeight:'bold'}}>Nimusoft</Text>
                              <Text style={{fontSize:15,color:'slateblue',fontWeight:'bold'}}>Technologies Ltd.</Text>
                            </View>
                          </View>
                        ),
                        headerTitle:'',
                        headerRight:()=>(
                          <TouchableOpacity style={{right:10,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                            <Ionicons name='person' size={30}/>
                          
                           
                          </TouchableOpacity>
                        )

                        } } />
            <Tab.Screen name='profile' component={MyStack} options={{headerShown:false}}/>
            <Tab.Screen name='settings' component={RequestLeave} options={{headerShown:false}}/>
            <Tab.Screen name='notification' component={Notification} options={{ headerShown:false,tabBarBadge:3,tabBarBadgeStyle:{backgroundColor:'slateblue',top:0,}} } />
            <Tab.Screen name='approve' component={Approvalstatus} options={{headerShown:false,tabBarItemStyle:{display:'none'}}}/>
            <Tab.Screen name='submit' component={SubmittedData} options={{headerShown:false,tabBarItemStyle:{display:'none'}}}/>
            {/* <Tab.Screen name='submitbackend' component={SubmitBackend} options={{headerShown:false,tabBarItemStyle:{display:'none'}}}/>
            <Tab.Screen name='update' component={Update} options={{headerShown:false,tabBarItemStyle:{display:'none'}}}/> */}
          </Tab.Navigator>
         </NavigationContainer>
  )
}
export default App
