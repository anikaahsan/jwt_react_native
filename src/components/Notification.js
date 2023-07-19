import React, { useState,useEffect } from 'react'
import { View,TouchableOpacity,Text,ScrollView ,Modal,Pressable} from 'react-native'



import {  Button ,} from '@rneui/themed';
import { TextInput } from 'react-native-paper';
import { Rating, AirbnbRating } from 'react-native-ratings'

import Icons from 'react-native-vector-icons/FontAwesome5'
import DropDownPicker from 'react-native-dropdown-picker'
import {Picker} from '@react-native-picker/picker';
import { Calendar } from 'react-native-calendars'
import { CheckBox } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';



const Notification=({navigation})=>{
    // const navigation=useNavigation()

    const [rating,setRating]=useState('')

    const [agreement, setagreement] = useState(false);
    const [python, setpython] = useState(false);
    const [Javascript, setjavascript] = useState(false);
    const [java, setjava] = useState(false);

   
    //dropdownpicker
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      { label:'software engineer Intern' ,value:'software engineer Intern'},
       { label:'Associate software engineer', value:'Associate software engineer'},
        {label:'Junior software engineer', value:'Junior software engineer'}
    ]);

    const [leave, setLeave] = useState('');

    //calendarStart
    const [startDate,setStartDate]=useState(null)
    const [modalVisible ,setModalVisible]=useState(false)

    //calendarEnd
    const [endDate,setEndDate]=useState(null)
    const [modalVisibleEnd ,setModalVisibleEnd]=useState(false)
    
    let duration=''
    if (endDate !== null && startDate) {  //in milisecond 
       duration= (new Date(endDate).getTime()- new Date(startDate).getTime())/(1000*3600*24)
    }

    // useEffect( ()=>fetchdata ,[agreement] )
    
    const [reason,setReason]=useState('')
   
    const formData={
        rating:rating,
        agreement:agreement,
        designation:value,
        leave_type:leave,
        skill_python:python,
        skill_javascript:Javascript,
        skill_java:java,
        start_date:startDate,
        end_date:endDate,
        reason:reason,
    }
    
    const [pk,setPk ]=useState()

    // useEffect(()=>postData,[python])
    const postData= async ()=>{
        try{
            const res=await axios.post('http://10.0.2.2:8000/leave/leaveform/',formData)
            console.log(res.data) //return the data which is passed in the Response of view function in backend
            console.log(res.data.pk)
            setPk(res.data.pk)
            console.log(pk)
        }catch(error){
            console.log(error)
        }
    }
    

   return(
    <ScrollView style={{backgroundColor:'white'}} showsVerticalScrollIndicator={false} >
        <View style={{margin:20}}>
            <View>
                <Text style={{fontSize:20,fontWeight:'bold',color:'black'}}> Rating:{rating}</Text>
                <Rating
                        type='custom'
                        ratingColor='#3498db'
                        ratingCount={5}
                        imageSize={30}
                        onFinishRating={(num)=>setRating(num)}
                        fractions={1}
                        startingValue={0}
                        style={{ bottom:0 ,right:100,top:5}}
                        />
                       
            </View>  
            <View>
                <CheckBox
                    title="Agreed with all the terms and policy of the company"
                    checked={agreement}
                    onPress={() => setagreement(!agreement)}
                    wrapperStyle={{right:20,marginVertical:10}}
                    /> 
            </View> 
            <View style={{margin:10}}>
                <DropDownPicker
                                open={open}
                                value={value}
                                items={items}
                                setOpen={setOpen}
                                setValue={setValue}
                                setItems={setItems}
                                listMode='SCROLLVIEW'
                                placeholder='Your Designation'
                                
                                // multiple={true}
                                // min={0}
                                // max={5}
                                style={{width:350,right:10,borderColor:'slateblue',borderRadius:0}}
                                autoScroll={true}
                                
                                dropDownContainerStyle={{
                                    borderColor: 'slateblue',
                                    color:'red',
                                    fontSize: 16,
                                    borderRadius: 0,
                                    width:350,
                                    left:-8,  
                                    
                                }} />
                               
                          
            </View>
            <View style={{borderWidth:1,borderColor:'slateblue'}}>
                        <Picker 
                            prompt='Leave Type'
                            selectedValue={leave}
                            onValueChange={(x)=>setLeave(x)}
                            placeholder='Type of Leave'
                            style={{backgroundColor:'white',height:60}}>
                            <Picker.Item label='sick Leave' value='Sick Leave'/>
                            <Picker.Item label='Annual Leave' value='Annual Leave'/>
                            <Picker.Item label='Emergency' value='Emergency'/>
                        </Picker>
            </View>
            
            <View>
                    <TextInput 
                              mode='outlined'
                              label='Reason for Leave'
                              onChangeText={(x)=>setReason(x)}
                              
                              value={reason}
                              outlineColor='slateblue'
                              textColor='slateblue'
                              placeholder=''
                              style={{marginVertical:20,fontWeight:'bold',fontSize:15,color:'black',backgroundColor:'white'}}
                              numberOfLines={5}
                              multiline={true}/>
                              
            </View>
            <View style={{marginVertical:10}}>
                <Text style={{fontSize:20,fontWeight:'bold',color:'black'}}>what are your skills:</Text>
                <CheckBox
                    title="python"
                    checked={python}
                    onPress={() => setpython(!python)}
               
                    wrapperStyle={{right:20,}}
                    />
                <CheckBox
                    title="Javascript"
                    checked={Javascript}
                    onPress={() => setjavascript(!Javascript)}
                    wrapperStyle={{right:20,top:-19}}
                    /> 
                <CheckBox  
                          title='Java' 
                          checked={java}
                          onPress={()=>setjava(!java)}
                          wrapperStyle={{right:20,top:-37,margin:0,padding:0}}/>
            </View>
            <View style={{flexDirection:'row',top:-40}}>
                <TouchableOpacity 
                                    onPress={()=>setModalVisible(!modalVisible)}
                                    style={{backgroundColor:'white',elevation:5,height:60,width:'48%',borderRadius:15,marginRight:12,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                            <Icons name='calendar' size={32} color='slateblue'/>

                            { startDate===null ? 
                            <Text style={{fontSize:18,fontWeight:'bold',marginLeft:10}}>Start Date</Text>
                            :
                            <Text style={{fontSize:18,fontWeight:'bold',marginLeft:10}}>{startDate}</Text>
                            }
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
                                    style={{backgroundColor:'white',elevation:5,height:60,width:'48%',borderRadius:15,marginRight:12,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                            <Icons name='calendar' size={32} color='slateblue'/> 
                           
                            <Text style={{fontSize:18,fontWeight:'bold',marginLeft:10}}>
                                {endDate===null ?'End Date' : endDate }
                            </Text>
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
            <View>
       
            </View>
            
            <View>
                <Button
                title="Submit"
                loading={false}
                loadingProps={{ size: 'small', color: 'white' }}
                buttonStyle={{
                    backgroundColor: 'rgba(111, 202, 186, 1)',
                    borderRadius: 5,
                }}
                titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
                containerStyle={{
                    marginHorizontal: 0,
                    height: 50,
                    width: 350,
                    marginVertical: 20,
                }}
                onPress={() => {postData()
                                 navigation.navigate('submit',
                                 { 
                                    leave_type:`${leave}`,
                                    duration:`${startDate}  to  ${endDate}`,
                                    reason:`${reason}`,
                                    designation:`${value}`,
                                    total_days:`${duration}`
                                } )}}
                >
                    <Icons name='save' size={32} color='white'/>
                    <Text style={{ fontWeight: 'bold', fontSize: 22,color:'white',marginLeft:6 }}>Submit</Text>
               </Button>
            </View>    
         
        </View>
    </ScrollView>
   
   )
}
export default Notification

// {list2.map((l, i) => (
//     <ListItem key={i} onPress={log} bottomDivider>
//         <Avatar title={l.name[0]} source={{ uri: l.avatar_url }} />
//         <ListItem.Content>
//             <ListItem.Title>{l.name}</ListItem.Title>
//             <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
//         </ListItem.Content>
//         <ListItem.Chevron />
//     </ListItem>
// ))}   


{/* <TextInput
                mode="outlined"
                label="Your Name"
                placeholder=""
                // right={<TextInput.Affix text="/100" />}
                style={{backgroundColor:'white',}}
                />
             <TextInput
                    mode='outlined'
                    label="Password"
                    secureTextEntry
                    // right={<TextInput.Icon icon="eye" />}
                    style={{backgroundColor:'white'}}
                    />     */}