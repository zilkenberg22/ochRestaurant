import React, {useState} from 'react';
import { 
  StyleSheet,
  ScrollView,
  View
} from 'react-native';
import CustomStatusBar from '../components/statusBar';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import BaiguullagiinJagsaalt from './baiguullagiinJagsaalt'; 
import GazriinZuragKharakh from './gazriinZuragKharakh';
import TurulSoligch from '../components/turulSoligch';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';

const Ekhlel = (props) => { 
  const [state, setState] = useState({
    turul: 'Жагсаалт'
  })

  function khuudasSergeekh() {
    setState({...state})
  }

  function turulSolikh(turul) {
    state.turul = turul
    khuudasSergeekh()
  }

  return (
      <View style={styles.container}>
          <CustomStatusBar />
          <View style = {styles.header}>
            <View style = {{padding:3, borderRadius:15, marginRight: 8, width: 30, height: 30, alignItems:'center', justifyContent:'center'}}>
                <Icon name = "navicon" color={'#505050'} size={19} />
            </View>
            <View style = {{flexDirection:'row'}}>
              <View style = {{padding:3, borderRadius:15, marginRight: 8, width: 30, height: 30, alignItems:'center', justifyContent:'center'}}>
                <Icon name = "search" color={'#505050'} size={19} />
              </View>
              <View style = {{borderRadius:15, padding:3, marginRight: 8, width: 30, height: 30, alignItems:'center', justifyContent:'center'}}>
                <Icon name = "shopping-basket" color={'#505050'} size={19} />
              </View>
              <View style = {{backgroundColor:'#ffd739', borderRadius:15, padding:3, marginRight: 8, width: 30, height: 30, alignItems:'center', justifyContent:'center'}}>
                <Icon name = "user" color={'#505050'} size={19}/>
              </View>
            </View>
          </View>
          <View style = {[styles.content, {paddingHorizontal: state.turul === "Жагсаалт" ? 15 : 0, paddingVertical: state.turul === "Жагсаалт" ? 15 : 0}]}> 
            {
              state.turul === "Жагсаалт" ?
              <BaiguullagiinJagsaalt /> 
            : <GazriinZuragKharakh/>
            }
            <TurulSoligch
              jagsaalt = {
              [
                  {ner:'Жагсаалт', icon: <Icon name='list-ul' size={16}/>}, 
                  {ner:'Байршил', icon: <IconSimple name='location-pin' size={16}  />}
              ]}
              turulSolikh = {turulSolikh}
              state = {state}
            /> 
          </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'white', 
  },  
  content:{
    flex:1, 
  },
  header:{
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:'row',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 2,
  }
});

export default Ekhlel;