
import React, {useRef, useMemo, useState, useEffect } from 'react'
import { View, StyleSheet, ScrollView, Image, Dimensions, TouchableOpacity } from "react-native";
import CustomStatusBar from "../components/statusBar";
import TextUtga from "../components/textUtga";
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';  
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';  
import { useRouter, Link } from "expo-router"; 
import TooComponent from "../components/tooComponent";
import ModalComponent from "../components/modalComponent"; 
import BarCodeScanners from "../components/barCodeScanner";
import RBSheet from "react-native-raw-bottom-sheet";
import { axs_kholbolt, formatNumber, sagsniiMedeelelAvya, sagsruuNemye } from '../components';
import { songosonButeegdekhuunSagsnaasUstgay } from '../components/shigtgee';

export default function BaraaSagslakh() {
  const router = useRouter()  
  const [barimt, setBarimt] = useState({
    baraanuud: [],
    sagsMedeelel:{}
  })
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["25%"], []);

  function handlePresentModalPress() {
    // bottomSheetRef.current.open()
    let param = {
        barimt:{
            baiguullagiinKhoch: "5254914",
            shireeniiDugaar: 15,
            khereglegchiinUtas: "88045424",
            niitDun: 120000,
            tuluv:1,
            zakhialgiinDugaar: '15515'
        },
        barimtiinZadargaa: barimt.baraanuud
    }
    axs_kholbolt('api/zakhialgaBurtguulye', param).then(khariu =>{
        console.log("zakhailgaBurtguulye", khariu)
    })
  }

  

  function qrKhariu(khariu) {
        console.log(khariu) 
  }

  useEffect(()=>
  {
    barimt.baraanuud = sagsniiMedeelelAvya().baraanuud
    barimt.sagsMedeelel = sagsniiMedeelelAvya()
    setBarimt({...barimt})
  }, [])

  function soligdsonTooAvya(too, turul, ugugdul) {
    sagsruuNemye(ugugdul, turul)
    barimt.sagsMedeelel = sagsniiMedeelelAvya()
    setBarimt({...barimt})
  }

  function utsgay(ugugdul) { 
    console.log(ugugdul)
    let index = barimt.baraanuud.findIndex(a=> a.baarKodniiKhoch === ugugdul.baarKodniiKhoch)
    if (index > -1)
        barimt.baraanuud.splice(index, 1)
    songosonButeegdekhuunSagsnaasUstgay(ugugdul) 
    barimt.sagsMedeelel = sagsniiMedeelelAvya()
    setBarimt({...barimt})
  }

  return (
    <View style={styles.container}>
        <CustomStatusBar/>
        <View style = {styles.header}>
            <TouchableOpacity onPress={()=> router.back()}>
              <IconSimple name="arrow-left" size={18}/>
           </TouchableOpacity>
            <TextUtga style = {styles.headerText}>Захиалга баталгаажуулах</TextUtga>
        </View> 
        <ScrollView style = {{flex:1, paddingHorizontal:15, marginVertical: 25}}>
                <TextUtga style = {{fontSize: 16, fontWeight:'bold', marginBottom: 8}}>Бүтээгдэхүүн</TextUtga>
                {barimt.baraanuud.map((ugugdul, muriinDugaar)=>
                    <View 
                        key={muriinDugaar}
                        style = {styles.zadargaa} 
                        //onPress = {()=> router.push("/buteegdekhuunDelgerengui")}
                        >
                        <Image
                            style={styles.logo}
                            source={require('../../zurag/yuna.jpg')}
                        />
                        <View style = {{position:'relative'}}>
                            <View style = {{paddingHorizontal: 15, paddingVertical:10}}>
                            <TouchableOpacity style = {{position:'absolute', top: 5, right:5}} 
                                onPress = {()=> utsgay(ugugdul)}>
                                <IconMaterial name='delete-circle' size={25} color = "#f66"/> 
                            </TouchableOpacity>
                                <TextUtga style = {{fontWeight: '400', fontSize: 17}}>{ugugdul.baarKodniiNer}</TextUtga>
                                <TextUtga style = {{fontWeight: 'bold', fontSize: 18}}>{ugugdul.une}₮</TextUtga>
                            </View>
                            <View style = {{flexDirection:'row', alignItems:'center', width: Dimensions.get('screen').width - 190, justifyContent:'flex-end', marginTop: 8}}>
                                <TooComponent 
                                    baraaToo = {ugugdul.too}
                                    soligdsonTooAvya = {(too, turul)=> soligdsonTooAvya(too, turul, ugugdul)}
                                />
                            </View>
                        </View>
                    </View>
                )} 
                <View style = {{marginTop: 15}}>
                    <TextUtga style = {{fontSize: 16, fontWeight:'bold', marginBottom: 8}}>НӨАТ барим</TextUtga>
                    <View>
                        {
                            [{ner: "Хувь хүн", iconName:'check'}, {ner:'Байгууллага', iconName:'minus'}].map((ugugdul) =>
                                <TouchableOpacity style = {[styles.khuvi, {backgroundColor:'#ededed'}]}>
                                    <IconSimple name={ugugdul.iconName} color = "green" size={18}/>
                                    <TextUtga style = {{marginLeft: 8, fontSize: 16, fontWeight:'700'}}>{ugugdul.ner}</TextUtga>
                                </TouchableOpacity>
                            )
                        }
                    </View>
                </View>
        </ScrollView> 
        <RBSheet
            ref={bottomSheetRef}
            closeOnDragDown={true}
            closeOnPressMask={false}
            height = {450}
            customStyles={{
            wrapper: {
                backgroundColor: "transparent"
            },
            draggableIcon: {
                backgroundColor: "#000"
            }
            }}
        >
            <View style={styles.contentContainer}>
                <BarCodeScanners  {...{qrKhariu}}/>
                <View style = {{marginTop:5}}>
                    <TextUtga style = {{fontSize: 18, fontWeight: '500'}}>QR код уншуулна уу!</TextUtga>
                </View>
                <View style = {{flexDirection:'row', marginTop: 80}}>
                    <TouchableOpacity style = {{backgroundColor:'#cbcbcb', alignItems:'center', borderRadius: 8, justifyContent:'center', padding:10, width: 130, marginRight: 8}}>
                        <TextUtga style = {{color:'white', fontSize: 18, fontWeight:'bold'}}>Хаах</TextUtga>
                    </TouchableOpacity> 
                    <Link href={`/tulburTulukh`}  asChild>
                        <TouchableOpacity style = {{backgroundColor:'#f66', alignItems:'center', borderRadius: 8, width: 130, justifyContent:'center'}}>
                            <TextUtga style = {{color:'white', fontSize: 18, fontWeight:'bold'}}>Төлбөр төлөх</TextUtga>
                        </TouchableOpacity> 
                    </Link>
                </View>
            </View>
        </RBSheet>
        <View style = {{backgroundColor:'white', height: 50, marginBottom: 25, alignItems:'center', justifyContent:'flex-end'}}>
            <TouchableOpacity onPress={()=> handlePresentModalPress()} style = {styles.switch}>
                <TextUtga style = {{color:'white', fontSize: 18, fontWeight:'bold'}}>{formatNumber(barimt.sagsMedeelel.niitDun)}₮</TextUtga>
                <TextUtga style = {{color:'white', fontSize: 18, fontWeight:'bold'}}>Үргэлжлүүлэх</TextUtga>
            </TouchableOpacity> 
        </View> 
    </View>
  );
}
const styles = StyleSheet.create({
    logo: {
        width: Dimensions.get('screen').width-220,
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
        height: 98,
    }, 
      sheetContainer: {
        // add horizontal space
        marginHorizontal: 24,
      },
      contentContainer: {
        flex: 1,
        alignItems: "center",
        backgroundColor:'#efefef',
        paddingVertical: 8
      },
    khuvi:{
        padding:8,
        borderWidth:1,
        borderColor:'#ededed',
        marginTop: 5, 
        borderRadius:4,
        flexDirection:'row',
        marginLeft: 18
    },
    switch:{
        flexDirection:'row',  
        height: 50,
        borderRadius: 8,
        paddingHorizontal:10,
        width: Dimensions.get('screen').width - 75,
        backgroundColor:'#f66',
        alignItems:'center',
        justifyContent:'space-between', 
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
        marginTop: 5,
        height:105
      },
    container: {
        flex: 1, 
        backgroundColor: 'white', 
        
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
  