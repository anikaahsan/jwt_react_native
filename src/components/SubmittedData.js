import React from 'react'
import {View,Text,Image,TouchableOpacity, ScrollView} from 'react-native'
import {  Button ,} from '@rneui/themed'

const SubmittedData=({navigation,route})=>{
    
    const {leave_type,duration,reason,designation,total_days}=route.params

    return(
       <ScrollView style={{backgroundColor:'ghostwhite'}} showsVerticalScrollIndicator={false}>
             <View style={{margin:20,backgroundColor:'white',borderRadius:10,marginTop:30}}>

                <View style={{padding:20}}>
                    <Text style={{color:'gray',fontSize:15}}>Leave Type</Text>
                    <Text style={{color:'black',fontSize:18,fontWeight:'bold'}}>{(JSON.stringify(leave_type)).replace(/\"/g,"")}</Text>
                </View>

                <View style={{backgroundColor:'lightgray',height:1,marginLeft:15,marginRight:15}}></View>

                <View style={{padding:20}}>
                    <Text style={{color:'gray',fontSize:15}}>Duration</Text>
                    <Text style={{color:'black',fontSize:18,fontWeight:'bold'}}>{(JSON.stringify(duration)).replace(/\"/g,"")}</Text>
                </View> 

                <View style={{backgroundColor:'lightgray',height:1,marginLeft:15,marginRight:15}}></View>

                <View style={{padding:20}}> 
                    <Text style={{color:'gray',fontSize:15}}>Total</Text>
                    <Text style={{color:'black',fontSize:18,fontWeight:'bold'}}>{(JSON.stringify(total_days)).replace(/\"/g,"")}</Text>
                </View>
                
                <View style={{backgroundColor:'lightgray',height:1 ,marginLeft:15,marginRight:15}}></View>

                <View style={{padding:20}}>
                    <Text style={{color:'gray',fontSize:15}}>Designation</Text>
                    <Text style={{color:'black',fontSize:18,fontWeight:'bold'}}>{(JSON.stringify(designation)).replace(/\"/g,"")}</Text>
                </View>
                
                <View style={{backgroundColor:'gray',height:1 ,marginLeft:15,marginRight:15}}></View>

                <View style={{padding:20}}> 
                    <Text style={{color:'gray',fontSize:15}}>Reason</Text>
                    <Text style={{color:'black',fontSize:18,fontWeight:'bold'}}>{(JSON.stringify(reason)).replace(/\"/g,"")}</Text>
                </View>
                
                <View style={{backgroundColor:'lightgray',height:1,marginLeft:15,marginRight:15,flexDirection:'row'}}></View>

               

                <View style={{backgroundColor:'lightgray',height:1,marginLeft:15,marginRight:15}}></View>
            
                <View style={{flexDirection:'row',margin:10}}>
                    <Button
                        title="Update"
                        buttonStyle={{ backgroundColor: 'rgba(127, 220, 103, 1)' }}
                        containerStyle={{
                        height: 40,
                        width: 140,
                        marginHorizontal: 0,
                        marginVertical: 10,
                        }}
                        titleStyle={{
                        color: 'white',
                        marginHorizontal: 20,
                        }}
                        />
                        

                    <Button
                        title="Delete"
                        buttonStyle={{ backgroundColor:'rgba(214, 61, 57, 1)' }}
                        containerStyle={{
                            height: 40,
                            width: 140,
                            marginHorizontal: 50,
                            marginVertical: 10,
                        }}
                        titleStyle={{
                            color: 'white',
                            marginHorizontal: 20,
                        }}
                        />
                </View>
            </View>
       </ScrollView>
    )
}
export default SubmittedData