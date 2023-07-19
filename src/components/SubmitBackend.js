import React from 'react'
import {View,Text,Image,TouchableOpacity, ScrollView} from 'react-native'
import {  Button ,Dialog} from '@rneui/themed'
import axios from 'axios'
import { useState,useEffect ,} from 'react'
import { useFocusEffect } from '@react-navigation/native'






const SubmitBackend=({navigation,route})=>{

    const {pk}=route.params

    let id=(JSON.stringify(pk)).replace(/\"/g,"")
    
    const [data,setData]=useState({})

 
    useEffect(()=>{

        const fetchdata=async()=>{
            
            console.log(id)
            try{
                const response=await axios.get(`http://10.0.2.2:8000/leave/leavespecific/${id}`)
                setData(response.data)
                console.log(response.data)
                const { leave_type,   start_date, end_date,} =response.data
                console.log('heloo')
            
                console.log(data)
            }catch(error){
                console.error(error)
            }
        }

        fetchdata()
    },[id])

    const handleDelete=async()=>{
        try{
            const response=await axios.delete(`http://10.0.2.2:8000/leave/leavespecific/${id}`)
            console.log(response.data)
            toggleDialogue()
            navigation.goBack()
        }catch(error){
             console.error(error)
        }

    }
    //dialog of delete
    const [visible,setVisible ]=useState(false)

    const toggleDialogue=()=>{
        setVisible(!visible)
    }
 
    return(
       <ScrollView style={{backgroundColor:'ghostwhite'}} showsVerticalScrollIndicator={false}>
             <View style={{margin:20,backgroundColor:'white',borderRadius:10,marginTop:30}}>

                <View style={{padding:20}}> 
                    <Text style={{color:'gray',fontSize:15}}>Id</Text>
                    <Text style={{color:'black',fontSize:18,fontWeight:'bold'}}>{id}</Text>
                </View>
                
                <View style={{backgroundColor:'lightgray',height:1,marginLeft:15,marginRight:15}}></View>

                <View style={{padding:20}}>
                    <Text style={{color:'gray',fontSize:15}}>Leave Type</Text>
                    <Text style={{color:'black',fontSize:18,fontWeight:'bold'}}>{data.leave_type}</Text>
                </View>

                <View style={{backgroundColor:'lightgray',height:1,marginLeft:15,marginRight:15}}></View>

                <View style={{padding:20}}>
                    <Text style={{color:'gray',fontSize:15}}>Duration</Text>
                    <Text style={{color:'black',fontSize:18,fontWeight:'bold'}}>{data.start_date } to {data.end_date}</Text>
                </View> 

                <View style={{backgroundColor:'lightgray',height:1,marginLeft:15,marginRight:15}}></View>

                <View style={{padding:20}}> 
                    <Text style={{color:'gray',fontSize:15}}>Total number of leave days</Text>
                    <Text style={{color:'black',fontSize:18,fontWeight:'bold'}}>{(new Date(data.end_date).getTime()- new Date(data.start_date).getTime())/(1000*3600*24)}</Text>
                </View>
                
                <View style={{backgroundColor:'lightgray',height:1 ,marginLeft:15,marginRight:15}}></View>

                <View style={{padding:20}}>
                    <Text style={{color:'gray',fontSize:15}}>Designation</Text>
                    <Text style={{color:'black',fontSize:18,fontWeight:'bold'}}>{(data.end_date)}</Text>
                </View>
                
                <View style={{backgroundColor:'gray',height:1 ,marginLeft:15,marginRight:15}}></View>

                <View style={{padding:20}}> 
                    <Text style={{color:'gray',fontSize:15}}>Reason</Text>
                    <Text style={{color:'black',fontSize:18,fontWeight:'bold'}}>{data.reason}</Text>
                </View>
                
                <View style={{backgroundColor:'lightgray',height:1,marginLeft:15,marginRight:15,flexDirection:'row'}}></View>

               
                <View style={{padding:20}}> 
                    <Text style={{color:'gray',fontSize:15}}>Designation</Text>
                    <Text style={{color:'black',fontSize:18,fontWeight:'bold'}}>{data.designation}</Text>
                </View>
                
                <View style={{backgroundColor:'lightgray',height:1 ,marginLeft:15,marginRight:15}}></View>

                
                <View style={{padding:20}}> 
                    <Text style={{color:'gray',fontSize:15}}>Rating</Text>
                    <Text style={{color:'black',fontSize:18,fontWeight:'bold'}}>{data.rating}</Text>
                </View>

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
                        onPress={()=>navigation.navigate('update', { pk:`${id}`})}
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
                        onPress={toggleDialogue}
                        
                        />
                </View>

                <View>
                    <Dialog isVisible={visible} onBackdropPress={toggleDialogue}>
                        <Dialog.Title title='Are you sure you want to delete?'/>
                        <Text>Once you delete the leave request ,you wont get it back.</Text>
                        <Dialog.Actions>
                            <Dialog.Button title='Delete' onPress={handleDelete}/>
                            <Dialog.Button title='cancel' onPress={toggleDialogue}/>
                        </Dialog.Actions>
                    </Dialog>

                </View>
            </View>
       </ScrollView>
    )
}
export default SubmitBackend