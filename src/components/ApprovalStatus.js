import React from 'react'
import {View,Text,Image,TouchableOpacity, ScrollView} from 'react-native'

const Approvalstatus=({navigation})=>{
    return(
       <ScrollView style={{backgroundColor:'ghostwhite'}} showsVerticalScrollIndicator={false}>
             <View style={{margin:20,backgroundColor:'white',borderRadius:10,marginTop:30}}>

                <View style={{padding:20}}>
                    <Text style={{color:'gray',fontSize:15}}>Leave Type</Text>
                    <Text style={{color:'black',fontSize:18,fontWeight:'bold'}}>Annual Leave</Text>
                </View>

                <View style={{backgroundColor:'lightgray',height:1,marginLeft:15,marginRight:15}}></View>

                <View style={{padding:20}}>
                    <Text style={{color:'gray',fontSize:15}}>Duration</Text>
                    <Text style={{color:'black',fontSize:18,fontWeight:'bold'}}>June 1,2018-June 3,2018</Text>
                </View> 

                <View style={{backgroundColor:'lightgray',height:1,marginLeft:15,marginRight:15}}></View>

                <View style={{padding:20}}> 
                    <Text style={{color:'gray',fontSize:15}}>Total</Text>
                    <Text style={{color:'black',fontSize:18,fontWeight:'bold'}}>3 days</Text>
                </View>
                
                <View style={{backgroundColor:'lightgray',height:1 ,marginLeft:15,marginRight:15}}></View>

                <View style={{padding:20}}>
                    <Text style={{color:'gray',fontSize:15}}>Warning</Text>
                    <Text style={{color:'black',fontSize:18,fontWeight:'bold'}}>-</Text>
                </View>
                
                <View style={{backgroundColor:'gray',height:1 ,marginLeft:15,marginRight:15}}></View>

                <View style={{padding:20}}> 
                    <Text style={{color:'gray',fontSize:15}}>Reason</Text>
                    <Text style={{color:'black',fontSize:18,fontWeight:'bold'}}>Visit my parents</Text>
                </View>
                
                <View style={{backgroundColor:'lightgray',height:1,marginLeft:15,marginRight:15}}></View>

                <View style={{flexDirection:'row' ,justifyContent:'space-between',padding:20,alignItems:'center'}}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Image source={require('../assets/kingfisher.jpg')} style={{height:60,width:60,borderRadius:50}}/>
                        <View style={{marginLeft:15}}>
                            <Text style={{color:'black',fontSize:18,fontWeight:'bold'}}>Abdul Rhazak</Text>
                            <Text style={{color:'gray',fontSize:15}}>Software engineer</Text>
                        </View>
                    </View>
                    <View style={{alignItems:'flex-end'}}>
                        <Text style={{color:'lightgreen',fontSize:18,fontWeight:'bold'}}>Approved</Text>
                        <Text style={{color:'gray',fontSize:14}}>1 day ago</Text>
                    </View>
                </View>
                <View style={{backgroundColor:'lightgray',height:1,marginLeft:15,marginRight:15}}></View>
                <View style={{flexDirection:'row',justifyContent:'space-between',padding:20,alignItems:'center'}}>
                    <View style={{flexDirection:'row'}}>
                        <Image source={require('../assets/kingfisher.jpg')} style={{height:60,width:60,borderRadius:50}}/>
                        <View style={{marginLeft:15}}>
                            <Text style={{color:'black',fontSize:18,fontWeight:'bold'}}>Haryadi</Text>
                            <Text style={{color:'gray',fontSize:15}}>Software engineer</Text>
                        </View>
                    </View>
                    
                    <View style={{alignItems:'flex-end'}}>
                        <Text style={{color:'lightgreen',fontSize:18,fontWeight:'bold'}}>Approved</Text>
                        <Text style={{color:'gray',fontSize:14}}>5 days ago</Text>
                    </View>
                </View>
            </View>
       </ScrollView>
    )
}
export default Approvalstatus