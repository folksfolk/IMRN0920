import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'

const HomeScreen = ({navigation}) => {
    return(
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.topBar}>
                    <View style={styles.searchBar}>
                        <TouchableOpacity>
                            <View>
                                <FontAwesome5 name="search" size={5} color='#727C83' style={styles.icon} />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.txtSearch}>
                            <Text style={styles.intext}>Search Produk</Text>
                        </View>
                        <View>
                            <FontAwesome5 name="camera" size={5} color='#727C83' style={styles.icon} />
                        </View>
                    </View>
                    <TouchableOpacity>
                        <View>
                            <FontAwesome5 name="bell" size={5} color='#727C83' style={styles.icon} />
                        </View>
                    </TouchableOpacity>
                </View>
                <Image source={require('../assets/Slider.png')} style={styles.slides}/>
                <View style={styles.navBar}>
                    <View style={styles.iconBar}>
                        <View style={styles.btnBarMan}>
                            <View>
                                <FontAwesome5 name="tshirt" size={6} color='#727C83' style={styles.icon} />
                            </View>
                        </View>
                        <View style={styles.txtIcon}>
                            <Text style={styles.intextIcon}>Men</Text>
                        </View>
                    </View>
                    <View style={styles.iconBar}>
                        <View style={styles.btnBarFemale}>
                            <View>
                                <FontAwesome5 name="shopping-bag" size={6} color='#727C83' style={styles.icon} />
                            </View>
                        </View>
                        <View style={styles.txtIcon}>
                            <Text style={styles.intextIcon}>Female</Text>
                        </View>
                    </View>
                    <View style={styles.iconBar}>
                        <View style={styles.btnBarChild}>
                            <View>
                                <FontAwesome5 name="child" size={6} color='#727C83' style={styles.icon} />
                            </View>
                        </View>
                        <View style={styles.txtIcon}>
                            <Text style={styles.intextIcon}>Kids</Text>
                        </View>
                    </View>
                    <View style={styles.iconBar}>
                        <View style={styles.btnBarHome}>
                            <View>
                                <FontAwesome5 name="home" size={6} color='#727C83' style={styles.icon} />
                            </View>
                        </View>
                        <View style={styles.txtIcon}>
                            <Text style={styles.intextIcon}>Home</Text>
                        </View>
                    </View>
                    <View style={styles.iconBar}>
                        <View style={styles.btnBarMore}>
                            <View>
                                <FontAwesome5 name="angle-right" size={7} color='#727C83' style={styles.icon} />
                            </View>
                        </View>
                        <View style={styles.txtIcon}>
                            <Text style={styles.intextIcon}>More</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.flashBar}>
                    <View style={styles.titleBar}>
                        <Text style={styles.txtFlash}>Flash Sell</Text>
                        <TouchableOpacity>
                            <Text style={styles.txtAll}>All{`>`}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.flashBox}>
                        <TouchableOpacity>
                            <View>
                                <Image source={require('../assets/Rectangle.png')} style={styles.flashPict}/>
                                <Text style={txtFlashTitle}>Tiare Handwash</Text>
                                <Text style={txtFlashPrice}>$12.22</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View>
                                <Image source={require('../assets/Rectangle (1).png')} style={styles.flashPict}/>
                                <Text style={txtFlashTitle}>JBL Speaker</Text>
                                <Text style={txtFlashPrice}>$12.22</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View>
                                <Image source={require('../assets/Rectangle (2).png')} style={styles.flashPict}/>
                                <Text style={txtFlashTitle}>Google Home</Text>
                                <Text style={txtFlashPrice}>$83.50</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.productBar}>
                    <View style={styles.titleBar}>
                        <Text style={styles.txtFlash}>New Product</Text>
                        <TouchableOpacity>
                            <Text style={styles.txtAll}>All{`>`}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.productBox}>
                        <TouchableOpacity>
                            <View>
                                <Image source={require('../assets/product.png')} style={styles.flashPict}/>
                                <Text style={txtFlashTitle}>Nike Running Shoes</Text>
                                <Text style={txtFlashPrice}>$120</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View>
                                <Image source={require('../assets/product2.png')} style={styles.flashPict}/>
                                <Text style={txtFlashTitle}>Rooten Chair</Text>
                                <Text style={txtFlashPrice}>$80</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    topBar: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row'
    },
    searchBar: {
        alignItems: 'center',
        backgroundColor: '#727C8E',
        padding: 10,
        borderRadius: 11,
        marginBottom: 10,
        marginTop: 10,
        width: 352,
        height: 44,
        top: 56,
        left: 16,
        flexDirection: 'row'
    },
    icon: {
        textAlign: 'center'
    },
    intext: {
        fontSize: 15,
        color: '#848991',
        textAlign: 'center'
    }, 
    slides: {
        width: 382,
        height: 190,
        top: 116,
        left: 16,
        borderRadius: 7
    },
    navBar: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconBar: {
        flexDirection: 'column',
        justifyContent: 'center'
    },
    btnBarMan: {
        justifyContent: 'center',
        height: 52,
        width: 52,
        marginBottom: 2,
        borderRadius: 20,
        backgroundColor: '#FFBC6C'
    },
    btnBarFemale: {
        justifyContent: 'center',
        height: 52,
        width: 52,
        marginBottom: 2,
        borderRadius: 20,
        backgroundColor: '#44D18C'
    },
    btnBarChild: {
        justifyContent: 'center',
        height: 52,
        width: 52,
        marginBottom: 2,
        borderRadius: 20,
        backgroundColor: '#3AA9F3'
    },
    btnBarManHome: {
        justifyContent: 'center',
        height: 52,
        width: 52,
        marginBottom: 2,
        borderRadius: 20,
        backgroundColor: '#975FF2'
    },
    btnBarManMore: {
        justifyContent: 'center',
        height: 52,
        width: 52,
        marginBottom: 2,
        borderRadius: 20,
        backgroundColor: '#9D9E9F'
    },
    flashBar: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        backgroundColor: "#efefef",
        marginBottom: 9
    },
    titleBar: {
        justifyContent: 'space-around',
        flexDirection: 'column',
        alignItems: 'center'
    },
    txtFlash: {
        fontSize: 24,
        color: "#4D4D4D"
    },
    txtAll: {
        fontSize: 15,
        color: "#616D80",
        alignSelf: 'flex-end'
    },
    flashBox: {
        borderTopWidth: 2,
        borderTopColor: '#003366',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    flashPict: {
        width: 120,
        height: 117
    },
    txtFlashTitle: {
        fontSize: 12,
        color: '#575757'
    },
    txtFlashPrice: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#323232'
    },
    productBar: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        backgroundColor: "#efefef",
        marginBottom: 9
    },
    productBox: {
        borderTopWidth: 2,
        borderTopColor: '#003366',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})