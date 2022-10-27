import React, {Component} from 'react';
import {
  FlatList,
  StatusBar,
  View,
  Image,
  Text,
  SafeAreaView,
  Button,
  TouchableOpacity,
  Alert,
  StyleSheet,
  TextInput,
  ScrollView,
  ImageBackground,
} from 'react-native';

const DATA = [
  {
    id: '001',
    img: '/Users/ishitabhardwaj/Desktop/Assessment1/src/utils/8050472.png',
    title: 'recharge',
  },
  {
    id: '002',
    img: '/Users/ishitabhardwaj/Desktop/Assessment1/src/utils/1052896.png',
    title: 'pay bills',
  },
  {
    id: '003',
    img: '/Users/ishitabhardwaj/Desktop/Assessment1/src/utils/4509815.png',
    title: 'thank benefits',
  },
  {
    id: '004',
    img: '/Users/ishitabhardwaj/Desktop/Assessment1/src/utils/3024515.png',
    title: 'add existing connection',
  },
  {
    id: '005',
    img: '/Users/ishitabhardwaj/Desktop/Assessment1/src/utils/2697212.png',
    title: 'top up data',
  },
  {
    id: '006',
    img: '/Users/ishitabhardwaj/Desktop/Assessment1/src/utils/2697212.png',
    title: 'international roaming',
  },
  {
    id: '007',
    img: '/Users/ishitabhardwaj/Desktop/Assessment1/src/utils/1610644.png',
    title: 'upgrade to postpaid',
  },
];

const DATA2 = [
  {
    id: '001',
    img: '/Users/ishitabhardwaj/Desktop/Assessment1/src/utils/3336905.png',
    title: 'broadband',
  },
  {
    id: '002',
    img: '/Users/ishitabhardwaj/Desktop/Assessment1/src/utils/1648962.png',
    title: 'prepaid',
  },
  {
    id: '003',
    img: '/Users/ishitabhardwaj/Desktop/Assessment1/src/utils/750318.png',
    title: 'postpaid',
  },
  {
    id: '004',
    img: '/Users/ishitabhardwaj/Desktop/Assessment1/src/utils/2697212.png',
    title: 'airtel black',
  },
  {
    id: '005',
    img: '/Users/ishitabhardwaj/Desktop/Assessment1/src/utils/2697212.png',
    title: 'DTH',
  },
  {
    id: '006',
    img: '/Users/ishitabhardwaj/Desktop/Assessment1/src/utils/2697212.png',
    title: 'port to airtel ',
  },
  {
    id: '007',
    img: '/Users/ishitabhardwaj/Desktop/Assessment1/src/utils/2697212.png',
    title: 'security camera',
  },
  {
    id: '008',
    img: '/Users/ishitabhardwaj/Desktop/Assessment1/src/utils/2697212.png',
    title: 'entertainment',
  },
];

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    // this.state = { count: false };
  }

  render() {
    return (
      <SafeAreaView style={styles.safearea}>
        <StatusBar barStyle="dark-content" />

        <View>
          <View style={styles.header}>
            <Image
              style={styles.headerimg}
              resizeMode={'contain'}
              source={require('/Users/ishitabhardwaj/Desktop/Assessment1/src/utils/1177568.png')}
            />
            <View>
              <Text style={styles.title}>manage</Text>

              <Text style={styles.belowtitle}>plans and accounts</Text>
            </View>
            <Image
              style={styles.headerimg}
              resizeMode={'contain'}
              source={require('/Users/ishitabhardwaj/Desktop/Assessment1/src/utils/240_F_132249377_QBSwDuswSG7cO8rayJP9SnDzJUwYPbPg.jpg')}
            />
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.main}>
              <View style={styles.category}>
                <View style={styles.category1}>
                  <View style={styles.frstline}>
                    <Text style={styles.categoryname}>Services</Text>
                    <View style={styles.img}>
                      <Image
                        style={styles.categimg}
                        resizeMode={'contain'}
                        source={require('/Users/ishitabhardwaj/Desktop/Assessment1/src/utils/758911.png')}
                      />
                    </View>
                  </View>
                  <Text style={styles.categorydesc}>5 Services</Text>
                  <View style={styles.buttonn}>
                    <TouchableOpacity style={styles.categstyle}>
                      <Text style={styles.text}>VIEW DETAILS</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.category2}>
                  <ImageBackground
                    style={styles.productimg}
                    resizeMode={'stretch'}
                    source={require('/Users/ishitabhardwaj/Desktop/Assessment1/src/utils/photo-1530293959042-0aac487c21e3.jpeg')}>
                    <View style={styles.frstline}>
                      <Text style={styles.categoryname}>Money</Text>
                      <View style={styles.img}>
                        <Image
                          style={styles.categimg2}
                          resizeMode={'contain'}
                          source={require('/Users/ishitabhardwaj/Desktop/Assessment1/src/utils/240_F_305373948_BlxMt7W6Ijb1WMA9zQoJvFWidWDjaKXb.jpg')}
                        />
                      </View>
                    </View>
                    {/* //<Text style={styles.categoryname}>Money</Text> */}
                    <Text style={styles.categorydesc}>₹••••••</Text>
                    <Text style={styles.categoryname}>in your wallet</Text>
                    <View style={styles.button2}>
                      <TouchableOpacity style={styles.categstyle}>
                        <Text style={styles.text}>SHOW BALANCE</Text>
                      </TouchableOpacity>
                    </View>
                  </ImageBackground>
                </View>
              </View>

              <View style={styles.checkview}>
                <TouchableOpacity style={styles.check}>
                  <Image
                    style={styles.airtel}
                    resizeMode={'contain'}
                    source={require('/Users/ishitabhardwaj/Desktop/Assessment1/src/utils/airtel-5g-india-166505249916x9.jpg.webp')}
                  />
                  <Text style={styles.checktext}>
                    Check if your phone is 5G enabled
                  </Text>
                  <View style={styles.iconview}>
                    <Image
                      style={styles.icon}
                      resizeMode={'contain'}
                      source={require('/Users/ishitabhardwaj/Desktop/Assessment1/src/utils/red-right-next-arrow-circle-icon-buttons-your-web-site-pages-vector-illustration-eps-137175245.jpg')}
                    />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.images}>
                <ScrollView
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}>
                  <Image
                    style={styles.port}
                    resizeMode={'contain'}
                    source={require('/Users/ishitabhardwaj/Desktop/Assessment1/src/utils/port-to-airtel-3.jpg')}
                  />
                  <Image
                    style={styles.port}
                    resizeMode={'contain'}
                    source={require('/Users/ishitabhardwaj/Desktop/Assessment1/src/utils/port-to-airtel-3.jpg')}
                  />

                  <Image
                    style={styles.port}
                    resizeMode={'contain'}
                    source={require('/Users/ishitabhardwaj/Desktop/Assessment1/src/utils/port-to-airtel-3.jpg')}
                  />
                  <Image
                    style={styles.port}
                    resizeMode={'contain'}
                    source={require('/Users/ishitabhardwaj/Desktop/Assessment1/src/utils/port-to-airtel-3.jpg')}
                  />
                </ScrollView>
              </View>
              <View style={styles.belowimages}>
                <TouchableOpacity style={styles.boxes}>
                  <Image
                    style={styles.boxesicon}
                    resizeMode={'contain'}
                    source={require('/Users/ishitabhardwaj/Desktop/Assessment1/src/utils/3059606.png')}
                  />
                  <Text>missed call alerts</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boxes}>
                  <Image
                    style={styles.boxesicon}
                    resizeMode={'contain'}
                    source={require('/Users/ishitabhardwaj/Desktop/Assessment1/src/utils/3179668.png')}
                  />
                  <Text>rewards & coupons</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boxes}>
                  <Image
                    style={styles.boxesicon}
                    resizeMode={'contain'}
                    source={require('/Users/ishitabhardwaj/Desktop/Assessment1/src/utils/4859852.png')}
                  />
                  <Text>refer prepaid</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.Shortcut}>
                <View>
                  <Text style={styles.Shortcutxt}>SHORTCUTS</Text>
                </View>

                <FlatList
                  horizontal={false}
                  data={DATA}
                  numColumns={4}
                  keyExtriactor={index => index.toString()}
                  renderItem={({item}) => {
                    return (
                      <View style={styles.flatView}>
                        {item.img && (
                          <View style={styles.flatCircleIcon}>
                            <Image
                              source={{uri: item.img}}
                              style={styles.flatImgIcons}
                            />
                          </View>
                        )}

                        {!!item.title && (
                          <View style={styles.flatTxtView}>
                            <Text style={styles.flatTxt}>{item.title}</Text>
                          </View>
                        )}
                      </View>
                    );
                  }}
                />
              </View>
              
              <View style={styles.line} >

              </View>

              <View style={styles.Shortcut}>
                <View>
                  <Text style={styles.Shortcutxt}>BUY NEW SERVICE</Text>
                </View>

                <FlatList
                  horizontal={false}
                  data={DATA2}
                  numColumns={4}
                  keyExtriactor={index => index.toString()}
                  renderItem={({item}) => {
                    return (
                      <View style={styles.flatView}>
                        {item.img && (
                          <View style={styles.flatCircleIcon}>
                            <Image
                              source={{uri: item.img}}
                              style={styles.flatImgIcons}
                            />
                          </View>
                        )}

                        {!!item.title && (
                          <View style={styles.flatTxtView}>
                            <Text style={styles.flatTxt}>{item.title}</Text>
                          </View>
                        )}
                      </View>
                    );
                  }}
                />
              </View>


<View style={styles.category}>
                <View style={styles.category1}>
                  <View style={styles.frstline}>
                    {/* <Text style={styles.categoryname}>Services</Text> */}
                    <Image
                        style={styles.suitcase}
                        resizeMode={'contain'}
                        source={require('/Users/ishitabhardwaj/Desktop/Assessment1/src/utils/753889.png')}
                      />
                    <View style={styles.img}>
                      <Image
                        style={styles.categimg}
                        resizeMode={'contain'}
                        source={require('/Users/ishitabhardwaj/Desktop/Assessment1/src/utils/758911.png')}
                      />
                    </View>
                  </View>
                  <Text style={styles.categorydesc}>travel the world with airtel</Text>
                  <Text style={styles.categoryname}>explore international roaming packs</Text>
            
                </View>
                <View style={styles.category2}>
                  <ImageBackground
                    style={styles.suitcase}
                    resizeMode={'contain'}
                    source={require('/Users/ishitabhardwaj/Desktop/Assessment1/src/utils/photo-1530293959042-0aac487c21e3.jpeg')}>
                    <View style={styles.frstline}>
                      <Text style={styles.categoryname}>Money</Text>
                      <View style={styles.img}>
                        <Image
                          style={styles.categimg2}
                          resizeMode={'contain'}
                          source={require('/Users/ishitabhardwaj/Desktop/Assessment1/src/utils/240_F_305373948_BlxMt7W6Ijb1WMA9zQoJvFWidWDjaKXb.jpg')}
                        />
                      </View>
                    </View>
                    {/* //<Text style={styles.categoryname}>Money</Text> */}
                    <Text style={styles.categorydesc}>₹••••••</Text>
                    <Text style={styles.categoryname}>in your wallet</Text>
                    <View style={styles.button2}>
                      <TouchableOpacity style={styles.categstyle}>
                        <Text style={styles.text}>SHOW BALANCE</Text>
                      </TouchableOpacity>
                    </View>
                  </ImageBackground>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
export default HomeScreen;

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    padding: 10,
    //backgroundColor: 'rgb(28,30,37)'
  },
  headerimg: {
    width: 40,
    height: 40,
  },
  title: {
    fontWeight: 'bold',
    fontsize: 50,
    paddingLeft: 35,
    paddingTop: 5,
    color: 'black',
  },
  belowtitle: {
    fontsize: 20,
    color: 'black',
  },
  main: {
    padding: 10,
  },
  category: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  category1: {
    width: 160,
    height: 200,
    //borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    backgroundColor: 'white',
  },
  category2: {
    width: 160,
    height: 200,
    //borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    overflow: 'hidden',
  },
  categoryname: {
    color: 'grey',
    padding: 10,
  },
  categorydesc: {
    color: 'black',
    fontWeight: 'bold',
    padding: 10,
  },
  categstyle: {
    backgroundColor: 'black',
    height: 45,
    width: 110,
    //borderWidth: 2,
    borderRadius: 5,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 10,
  },
  buttonn: {
    paddingTop: 65,
    paddingLeft: 25,
  },
  button2: {
    paddingTop: 20,
    paddingLeft: 25,
  },
  categimg: {
    width: 20,
    height: 20,
  },
  categimg2: {
    width: 30,
    height: 30,
  },
  frstline: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  img: {
    padding: 10,
  },
  checkview: {
    padding: 20,
    //justifyContent:'center',
    //alignItems:'center',
  },
  check: {
    width: 330,
    height: 60,
    //borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    flexDirection: 'row',
    //padding:10,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  airtel: {
    width: 80,
    height: 60,
  },
  icon: {
    width: 30,
    height: 30,
  },
  checktext: {
    color: 'black',
    fontSize: 12,
    paddingTop: 20,
  },
  iconview: {
    paddingTop: 12,
  },
  port: {
    //margin: 5,
    width: 200,
    height: 120,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    //paddingBottom: 5,
    resizeMode: 'contain',
    justifyContent: 'space-around',
    margin: 5,
  },
  belowimages: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 12,
  },
  boxes: {
    width: 100,
    height: 80,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxesicon: {
    width: 35,
    height: 35,
  },
  Shortcut: {
    width: 350,
    height: 200,
    backgroundColor: 'white',
    marginLeft: 10,
    padding: 10,
    borderRadius: 10,
    margin: 8,
  },
  
  flatView: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  flatCircleIcon: {
    border: 0,
    borderRadius: 100,
    //padding: 12,
    //backgroundColor: 'rgb(227,229,252)',
    backgroundColor: 'pink',
  },
  flatImgIcons: {
    height: 24,
    width: 24,
  },
  flatTxtView: {
    width: 80,
    paddingTop: 5,
    paddingBottom: 20,
  },
  flatTxt: {
    textAlign: 'center',
    fontSize: 10,
    color: 'rgb(133,136,140)',
  },
  Shortcutxt: {
    color: 'grey',
    padding: 10,
  },
  categorytwo: {
    flexDirection: 'row',
  },
  categorytwo2: {
    width: 160,
    height: 200,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    backgroundColor: 'white',
  },
  suitcase:{
    width: 50,
    height: 100,

  },
  nexticon:{
    width: 10,
    height: 10,

  },
  line:{
    borderColor: 'lightgrey',
    borderWidth: 3,
  }
});

// import React from 'react';
// import { Text, View } from 'react-native';

// const App = () => {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center"
//       }}>
//       <Text>Hello, world!</Text>
//     </View>
//   )
// }
// export default App;
