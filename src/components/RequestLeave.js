import React from 'react'
import { useState } from 'react'
import {View,Text,Image,TouchableOpacity,TextInput, ScrollView,Modal,Pressable} from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { Calendar } from 'react-native-calendars'
import Icons from 'react-native-vector-icons/FontAwesome5'

const RequestLeave=({navigation})=>{
    const [position,setPosition ]=useState('')
    const [leave,setLeave]=useState('')
    
    //calendarStart
    const [startDate,setStartDate]=useState('Start Date')
    const [modalVisible ,setModalVisible]=useState(false)
    
    //calendarEnd
    const [endDate,setEndDate]=useState('End Date')
    const [modalVisibleEnd ,setModalVisibleEnd]=useState(false)


    return(
        <ScrollView style={{backgroundColor:'ghostwhite',flex:1}} showsVerticalScrollIndicator={false}>
            <View style={{margin:20}}>

                <View style={{marginTop:10,}}>
                    <Text style={{marginLeft:10,fontSize:18,marginBottom:2,color:'slateblue',fontWeight:'bold'}}>Leave Type</Text>
                    <View style={{ borderRadius:15,backgroundColor:'white',overflow:'hidden'}}>
                        <Picker 
                            prompt='Leave Type'
                            selectedValue={leave}
                            onValueChange={(x)=>setLeave(x)}
                         
                            style={{backgroundColor:'white',height:60}}>
                            <Picker.Item label='sick Leave' value='Sick Leave'/>
                            <Picker.Item label='Annual Leave' value='Annual Leave'/>
                            <Picker.Item label='Emergency' value='Emergency'/>
                        </Picker>
                    </View>
                </View>
         
                <View style={{marginTop:25,flexDirection:'row'}}>

                    <TouchableOpacity 
                                onPress={()=>setModalVisible(!modalVisible)}
                                style={{backgroundColor:'white',height:60,width:'48%',borderRadius:15,marginRight:12,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                         <Icons name='calendar' size={32} color='slateblue'/> 
                        <Text style={{fontSize:18,fontWeight:'bold',marginLeft:10}}>{startDate}</Text>
                    </TouchableOpacity>
                    
                    <Modal animationType='fade'
                                visible={modalVisible}
                                transparent={true}
                                onRequestClose={()=>setModalVisible(!modalVisible)}>
                        <TouchableOpacity onPress={()=>setModalVisible(!modalVisible)}>
                            <View style={{justifyContent:'center',alignItems:'center',alignSelf:'flex-start',marginTop:190,marginLeft:20}}>
                            
                                    <Calendar 
                                        style={{borderWidth:2,borderColor:'slateblue'}}
                                        onDayPress={(day)=>{setStartDate(day.dateString) }}
                                        markedDates={{[startDate]:{selected:true,selectedColor:'slateblue',disableTouchEvent:true}}}/>
                                
                            </View>
                        </TouchableOpacity>
                    </Modal>   
                   

                    <TouchableOpacity 
                               onPress={()=>setModalVisibleEnd(!modalVisibleEnd)}
                               style={{backgroundColor:'white',height:60,width:'48%',borderRadius:15,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                         <Icons name='calendar' size={32} color='slateblue'/> 
                        <Text style={{fontSize:18,fontWeight:'bold',marginLeft:10}}>{ endDate }</Text>
                    </TouchableOpacity> 
                    <Modal animationType='fade'
                            visible={modalVisibleEnd}
                            transparent={true}
                            onRequestClose={()=>setModalVisibleEnd(!modalVisibleEnd)}>
                        <TouchableOpacity onPress={()=>setModalVisibleEnd(!modalVisibleEnd)}>
                            <View style={{justifyContent:'center',alignItems:'center',alignSelf:'flex-start',marginTop:190,marginLeft:130}}>
                            
                                    <Calendar 
                                        style={{borderWidth:2,borderColor:'slateblue'}}
                                        onDayPress={(day)=>{setEndDate(day.dateString) }}
                                        markedDates={{[endDate]:{selected:true,selectedColor:'slateblue',disableTouchEvent:true}}}/>
                                
                            </View>
                        </TouchableOpacity>
                    </Modal>  

                  
                </View>

               

                <View style={{flexDirection:'row',borderWidth:2,borderColor:'slateblue',borderRadius:15,justifyContent:'space-between',overflow:'hidden',marginTop:25}}>
                    <TouchableOpacity  
                                   style={{backgroundColor:'slateblue',height:50,justifyContent:'center',alignItems:'center',width:'50%'}}>
                        <Text  style={{fontSize:20,fontWeight:'bold',color:'white'}}>Full-Day</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  
                                  style={{backgroundColor:'white',height:50,justifyContent:'center',alignItems:'center',width:'50%',}}>
                        <Text  style={{fontSize:20,fontWeight:'bold',color:'slateblue'}}>Half-Day</Text>
                    </TouchableOpacity>
                </View>

                <View style={{marginTop:25}}>
                    <TextInput 
                        placeholder='Reason' 
                        style={{height:120,backgroundColor:'white',borderRadius:15,padding:12,fontSize:17,color:'black',paddingBottom:80}} 
                        multiline={true} numberOfLines={6} 
                        placeholderTextColor={'black'} />
                </View>


                <View style={{marginTop:25}}>
                    <Text style={{marginLeft:10,fontSize:18,marginBottom:2,color:'slateblue',fontWeight:'bold'}}>Your Superviser</Text>
                    <View style={{borderRadius: 15, backgroundColor:'white', overflow: 'hidden',}}>
                        <Picker 
                            style={{backgroundColor:'white',height:60,}}
                            selectedValue={position}
                            onValueChange={(x)=>setPosition(x)}
                            prompt=' Your Superviser'
                            mode={'dialog'}>
                            
                            <Picker.Item label='superviser 1' value='software engineer Intern' />
                            <Picker.Item label='superviser 2' value='Associate software engineer'/>
                            <Picker.Item label='superviser 3' value='Junior software engineer'/>
                        </Picker>
                    </View>
                </View>

                <View style={{marginTop:25}}>
                    <Text style={{marginLeft:10,fontSize:18,marginBottom:2,color:'slateblue',fontWeight:'bold'}}>Your Designation</Text>
                    <View style={{borderRadius: 15, backgroundColor:'white', overflow: 'hidden',}}>
                        <Picker 
                            style={{backgroundColor:'white',height:60,}}
                            selectedValue={position}
                            onValueChange={(x)=>setPosition(x)}
                            prompt='Your Designation'
                            mode={'dialog'}>
                            
                            <Picker.Item label='software engineer Intern' value='software engineer Intern' />
                            <Picker.Item label='Associate software engineer' value='Associate software engineer'/>
                            <Picker.Item label='Junior software engineer' value='Junior software engineer'/>
                        </Picker>
                    </View>
                </View>

                <TouchableOpacity 
                                onPress={()=>navigation.navigate('approve')}
                                style={{backgroundColor:'slateblue',height:55,borderRadius:15,justifyContent:'center',alignItems:'center',marginTop:25}}>
                    <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>Submit Request</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    )
}
export default RequestLeave
