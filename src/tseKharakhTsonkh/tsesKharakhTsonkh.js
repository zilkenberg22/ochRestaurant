import { View, StyleSheet, ScrollView, Image, Dimensions, TouchableOpacity } from "react-native";
import CustomStatusBar from "../components/statusBar";
import TextUtga from "../components/textUtga";
import IconSimple from 'react-native-vector-icons/SimpleLineIcons'; 
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons'; 
import { useRouter, Link } from "expo-router";
import { useSearchParams } from "expo-router";

export default function TsesKharakhTsonkh() {
  const router = useRouter()
  const { user, extra } = useSearchParams();
  console.log(user, extra, router)
  return (
    <View style={styles.container}>
        <CustomStatusBar/>
        <View style = {styles.header}>
            <TouchableOpacity onPress={()=> router.back()}>
              <IconSimple name="arrow-left" size={18}/>
           </TouchableOpacity>
            <TextUtga style = {styles.headerText}>Берлин зоог багшийн дээд</TextUtga>
        </View>
        <ScrollView style = {{flex:1}}>
            <View style ={styles.location}>
              <View>
                <View style = {{flexDirection:'row', alignItems:'center'}}>
                  <IconMaterial name="map-marker" size={20} color = "#8d8d8d"/>
                  <TextUtga style = {{fontSize:16, fontWeight:'800'}}> 1.2km</TextUtga>
                </View>
                <TextUtga style = {{fontSize:14, fontWeight:'400'}}>50.3мин</TextUtga>
              </View>
              <View style = {{marginLeft: 25}}>
                <View style = {{flexDirection:'row', alignItems:'center'}}>
                  <IconMaterial name="clock-time-eight" size={18} color = "#8d8d8d" />
                  <TextUtga style = {{fontSize:16, fontWeight:'800'}}> 10:00</TextUtga>
                </View>
                <TextUtga style = {{fontSize:14, fontWeight:'400'}}>19:00 цаг хүртэл</TextUtga>
              </View>
            </View>
            <View style = {{flex:1, paddingHorizontal: 10, paddingVertical:10}}>
              {
                [{bulegNer: 'Үндсэн цэс', baraa:[{}]},
                  {bulegNer: 'Онцлох хоол', baraa:[{}]},
                  {bulegNer: 'Пицца', baraa:[{}]},
                  {bulegNer: 'Тахиатай хоол', baraa:[{}]}
                ].map((ugugdul)=>
                  <View style = {{marginTop:5, marginBottom: 5}}>
                    <TextUtga style = {{textTransform: 'uppercase', fontWeight:'700', fontSize: 15, marginBottom: 15}}>{ugugdul.bulegNer}</TextUtga>
                    {
                      ugugdul.baraa.map(zadargaa=>
                        <TouchableOpacity 
                          style = {styles.zadargaa} 
                          onPress = {()=> router.push("/buteegdekhuunDelgerengui")}>
                          <Image
                              style={styles.logo}
                              source={require('../../zurag/yuna.jpg')}
                          />
                          <View style = {{paddingHorizontal: 15, paddingVertical:10}}>
                            <TextUtga style = {{fontWeight: '400', fontSize: 17}}>Тахиатай шөл</TextUtga>
                            <TextUtga style = {{fontWeight: 'bold', fontSize: 18}}>15,000₮</TextUtga>
                          </View>
                        </TouchableOpacity>
                      )
                    }
                  </View>
                )
              }
            </View>
        </ScrollView>
        <Link href={`/sagslakh`}  asChild>
          <TouchableOpacity style = {styles.switch}>
              <View>
                <TextUtga style = {{color:'white', fontSize: 18, fontWeight:'bold'}}>1 ширхэг - 42,000</TextUtga>
              </View>
              <View>
                <TextUtga style = {{color:'white', fontSize: 18, fontWeight:'bold'}}>Харах</TextUtga>
              </View>
          </TouchableOpacity>
        </Link>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: 'white', 
    },   
    switch:{
      flexDirection:'row',  
      height: 45,
      borderRadius: 8,
      width: Dimensions.get('screen').width - 75,
      backgroundColor:'#f66',
      alignItems:'center',
      paddingHorizontal: 8,
      justifyContent:'space-between',
      position:'absolute',
      bottom:25,
      left:35,
      shadowColor: '#171717',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.1,
      shadowRadius: 2,
    }, 
    zadargaa:{ 
      flexDirection:'row',
      borderWidth:1,
      borderRadius:10, 
      borderColor:'#ededed',
      shadowColor: '#171717',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.1,
      shadowRadius: 2,
      marginLeft:18,
    },
    logo: {
      width: Dimensions.get('screen').width-210,
      borderTopLeftRadius:10,
      borderBottomLeftRadius:10,
      height: 105,
    },
    location:{  
      flexDirection:'row',
      height: 50, 
      padding:5,
      alignItems:'center',
      paddingHorizontal: 45,
      borderBottomWidth: 1,
      borderColor:'#8d8d8d'
    },
    headerText:{
      fontSize:15,
      fontWeight:'700',
      marginLeft: 10
    },
    header:{
      height: 40,
      borderRadius: 8,
      paddingHorizontal: 15,
      backgroundColor:'white',
      alignItems:'center', 
      flexDirection:'row',
      shadowColor: '#171717',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.1,
      shadowRadius: 2,
    }
  });
  