import React, { useEffect } from 'react'
import { useState } from 'react'
import { View,Text ,TextInput, TouchableOpacity,Image, ScrollView} from 'react-native'
import {  Button ,ListItem,Icon,Divider,Dialog} from '@rneui/themed';
import Icons from 'react-native-vector-icons/FontAwesome5'
import axios from 'axios';


const Home=({navigation})=>{
   //accordion
   const [expanded, setExpanded] = useState(false);

   const [data,setData]=useState([])

   //retrieve all leave request
   const fetchdata= async ()=>{
      try{
      const response=await axios.get('http://10.0.2.2:8000/leave/leaveform/')
      setData(response.data)
      console.log(response.data)
  }catch(error){
      console.log(error)
  }
      
  }
 

    //dialog of delete
    const [visible,setVisible ]=useState(false)
  

    const toggleDialogue=()=>{
        setVisible(!visible)
    }

    const handleDelete=async (pk)=>{
        try{
        const res=await axios.delete(`http://10.0.2.2:8000/leave/leavespecific/${pk}`)
        console.log(res)
        toggleDialogue()
      
    }catch(error){
        console.error(error)
    }

    }

 return(
    <ScrollView style={{backgroundColor:'white',flex:1}}>
      
        <View style={{top:20}}>
                <ListItem.Accordion 
                                content={
                                    <>
                                    <Icon name="place" size={30} color='slateblue'/>
                                    <ListItem.Content>
                                        <ListItem.Title>List Menu</ListItem.Title>
                                    </ListItem.Content>
                                    </>
                                }
                                isExpanded={expanded}
                                onPress={() => {
                                    setExpanded(!expanded);
                                }}>
                   
                        <ListItem   bottomDivider>
                                <Icons name='home' size={32} color='black'/>
                                    <ListItem.Content>
                                        <TouchableOpacity>
                                            <ListItem.Title>hello</ListItem.Title>
                                            <ListItem.Subtitle>world</ListItem.Subtitle>
                                        </TouchableOpacity>
                                    </ListItem.Content>
                            <ListItem.Chevron />
                        </ListItem>
                        <ListItem   bottomDivider>
                                <Icons name='home' size={32} color='black'/>
                                    <ListItem.Content>
                                        <TouchableOpacity>
                                            <ListItem.Title>hello</ListItem.Title>
                                            <ListItem.Subtitle>world</ListItem.Subtitle>
                                        </TouchableOpacity>
                                    </ListItem.Content>
                            <ListItem.Chevron />
                        </ListItem>
                </ListItem.Accordion>
            </View> 

            <View style={{ margin:40}}>
                <TouchableOpacity onPress={()=>fetchdata()} style={{marginBottom:20}}>
                   <Text style={{ fontWeight: 'bold', fontSize: 22,color:'black',marginLeft:6 }}>Show all the Leave Request</Text> 
                </TouchableOpacity>

                <View>
                {
                        data===null ?
                        <Text>no data</Text> 
                        :
                        
                        data.map((d,id)=>{
                            return(
                                <View key={id} >
                                    <View style={{flexDirection:'row'}}>
                                      <Text style={{ fontWeight: 'bold', fontSize: 16,color:'black', }}>Rating:</Text>
                                      <Text  style={{ fontSize: 16,color:'black', }}>{d.rating}</Text>
                                    </View>

                                    <View style={{flexDirection:'row'}}>
                                      <Text style={{ fontWeight: 'bold', fontSize: 16,color:'black', }}>Agreement:</Text>
                                      <Text  style={{ fontSize: 16,color:'black', }}>{String(d.agreement)}</Text>
                                    </View>

                                    <View style={{flexDirection:'row'}}>
                                      <Text style={{ fontWeight: 'bold', fontSize: 16,color:'black', }}>Designation:</Text>
                                      <Text  style={{ fontSize: 16,color:'black', }}>{d.designation}</Text>
                                    </View>

                                    <View style={{flexDirection:'row'}}>
                                      <Text style={{ fontWeight: 'bold', fontSize: 16,color:'black', }}>Leave Type:</Text>
                                      <Text  style={{ fontSize: 16,color:'black', }}>{d.leave_type}</Text>
                                    </View>

                                    <View style={{flexDirection:'row'}}>
                                      <Text style={{ fontWeight: 'bold', fontSize: 16,color:'black', }}>Start Date:</Text>
                                      <Text  style={{ fontSize: 16,color:'black', }}>{d.start_date}</Text>
                                    </View>

                                    <View style={{flexDirection:'row'}}>
                                      <Text style={{ fontWeight: 'bold', fontSize: 16,color:'black', }}>End Date:</Text>
                                      <Text style={{ fontSize: 16,color:'black', }}>{d.end_date}</Text>
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                      <Text style={{ fontWeight: 'bold', fontSize: 16,color:'black', }}>Reason:</Text>
                                      <Text style={{ fontSize: 16,color:'black', }}>{d.reason}</Text>
                                    </View>

                                    <Text style={{ fontWeight: 'bold', fontSize: 16,color:'black', }}>Id:{d.pk}</Text>

                                    <View>
                                        <Dialog isVisible={visible} onBackdropPress={toggleDialogue} transparent={true}  >
                                            <Dialog.Title title='Are you sure you want to delete?'/>
                                            <Text>Once you delete the leave request ,you wont get it back.</Text>
                                            <Dialog.Actions>
                                                <Dialog.Button title='Delete' onPress={()=>handleDelete(d.pk)}/>
                                                <Dialog.Button title='cancel' onPress={toggleDialogue}/>
                                            </Dialog.Actions>
                                        </Dialog>

                                    </View>

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
                                            onPress={()=>navigation.navigate('update', { pk:`${d.pk}`})}
                                            />
                                            
                                        <Button
                                            title="Delete"
                                            buttonStyle={{ backgroundColor:'rgba(214, 61, 57, 1)' }}
                                            containerStyle={{
                                                height: 40,
                                                width: 140,
                                                marginHorizontal: 10,
                                                marginVertical: 10,
                                            }}
                                            titleStyle={{
                                                color: 'white',
                                                marginHorizontal: 20,
                                            }}
                                            onPress={toggleDialogue}
                                            
                                            />
                                            
                                    </View>
                                  

                                    <Divider inset={true} insetType='right' orientation='horizontal' style={{marginVertical:15}} width={1}/>
                                </View>
                            )
                          }) 
                     }
                </View>
            </View>
    </ScrollView>
 )
}

export default Home