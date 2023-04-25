import {StyleSheet, View, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Octicons';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import TextUtga from '../components/textUtga';
import { useRouter } from 'expo-router';

export default function BaiguullagiinJagsaalt(props) 
{
    const router = useRouter()
    return (
        <ScrollView>
        {
          [1,2,3,3,4,4,4,4,4].map((ugugdul, muriinDugaar) =>{
            return (<TouchableOpacity style = {styles.card} onPress = {()=> router.push('/tsesKharakh')}>
                <Image
                      style={styles.logo}
                      source={require('../../zurag/yuna.jpg')}
                  />
                  <View style = {{marginTop: 5, padding: 5}}>
                      <View style = {{flexDirection:'row', alignContent:'center', justifyContent:'flex-start'}}>
                          <View style = {{flex:0.8, flexDirection:'row'}}>
                              <Icon name = "organization" color={'#505050'} size={19} />
                              <TextUtga style = {styles.orgName}>Түмэн төв Tumen tuv</TextUtga> 
                          </View>
                          <View style = {{flex:0.2, flexDirection:'row'}}>
                              <IconMaterial name = "map-marker-distance" color={'#f66'} size={19} />
                              <TextUtga style = {styles.distance}>10 км</TextUtga>
                          </View>
                      </View>
                      <View style = {{flexDirection:'row', alignContent:'center', justifyContent:'flex-start', marginTop:6}}> 
                          <Icon name = "location" color={'#505050'} size={19} />
                          <TextUtga style = {styles.location}>СБД, 1-р хороо, Түмэн төв</TextUtga>
                      </View> 
                  </View>
          </TouchableOpacity>)
          })
        }
        </ScrollView>
    )  
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: 'white',
    },  
    orgName:{
        fontSize: 16,
        marginLeft: 10,
        fontWeight:'500'
    },
    distance:{
        fontSize: 14,
        marginLeft: 10,
        fontWeight:'500',
        color:'orange'
    },
    location:{
        fontSize: 14,
        marginLeft: 10,
        fontWeight:'200'
    },
    logo: {
        width: Dimensions.get('screen').width-30,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        height: 150,
      },
    card:{ 
      marginTop: 15,
      borderRadius: 10,
      position:'relative',
      backgroundColor:'white',  
      shadowColor: '#171717',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.1,
      shadowRadius: 2,
    }
  });