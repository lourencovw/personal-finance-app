import React, { useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import styles from './styles';
import { RoundButton } from '../../components/RoundButton';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { storage } from '../../storage/storage';
import RNPickerSelect from 'react-native-picker-select';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { Divider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';


export default function Transactions() {
    const [timePicker, setTimePicker] = useState(-5);
    const navigation = useNavigation();

    const windowHeight = Dimensions.get('window').height;

    const sortedTransactons = storage.sort((a, b) => a.day - b.day);

    function navigate() {
        navigation.navigate('Home')
    }
    function getIcon(category: string) {
        switch (category) {
            case "PET":
                return "pets";
                break;

            case "CAR":
                return "directions-car";
                break;

            case "FOOD":
                return "cake";
                break;

            case "PRESENT":
                return "card-giftcard";
                break;

            case "MOBILE":
                return "phone-android";
                break;

            default:
                return '';
                break;
        }
    }
    function seeMore() {
        let hasMoreItems = Math.abs(timePicker - 5) >= sortedTransactons.length;
        if (hasMoreItems) {
            alert("There are no more items")
            setTimePicker(-1 * sortedTransactons.length);
        } else {
            setTimePicker(timePicker - 5);
        }
    }

    function noActionButton() {
        alert("Esse botão não possui ação")
    }

    function pickColor(status: string) {
        switch (status) {
            case "approved":
                return "#9effb8"
                break;
            case "rejected":
                return "#ffabab";
                break;
            case "pending":
                return "#faffba";
                break;

            default:
                break;
        }
    }

    return (
        <View style={styles.container}>
            <View style={{ flex: 0.3 }}>
                <View style={styles.topContaier}>
                    <RoundButton onPress={() => { navigate() }} backColor={"#0D36C5"}>
                        <AntDesign name="arrowleft" size={24} color="white" />
                    </RoundButton>

                    <RoundButton onPress={noActionButton} backColor={"#0D36C5"}>
                        <Entypo name="dots-three-horizontal" size={18} color="white" />
                    </RoundButton>

                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title} >TRANSACTIONS</Text>
                    <Text style={styles.subtitle} >All transactions</Text>
                </View>

            </View>
            <View style={styles.itensContainer} >
                <View style={styles.plusButton} >
                    <RoundButton onPress={noActionButton} backColor={"#4E74FF"}>
                        <Entypo name="plus" size={24} color="white" />
                    </RoundButton>
                </View>
                <View style={styles.itensTopBar} >
                    <Text style={styles.itensTitle} >yesterday</Text>
                    <View style={styles.pickerContainer} >
                        <RNPickerSelect
                            onValueChange={noActionButton}
                            placeholder={{
                            }}

                            useNativeAndroidPickerStyle={false}
                            items={[
                                { label: '1 week', value: 'week', key: 11 },
                                { label: '1 day', value: 'day', key: 10 },
                                { label: '1 month', value: 'month', key: 12 },
                            ]}
                        />
                        <AntDesign name="caretdown" size={8} color="grey" style={{ paddingLeft: 5 }} />

                    </View>
                </View>
                <View style={{ maxHeight: windowHeight * 0.44 }} >
                    <FlatList
                        contentContainerStyle={{ paddingHorizontal: 40, paddingTop: 15 }}
                        data={sortedTransactons.slice(timePicker)}
                        renderItem={({ item }) => (
                            <View>
                                <View style={styles.itemContainer}>
                                    <RoundButton onPress={noActionButton} backColor={"#0D36C5"}>
                                        <MaterialIcons name={getIcon(item.category)} size={18} color="white" />
                                    </RoundButton>
                                    <View style={styles.itemSpecs} >
                                        <View style={{ justifyContent: "space-between" }} >
                                            <Text style={styles.itemCategory} >{item.category}</Text>
                                            <Text style={styles.item}>{item.item}</Text>
                                        </View>
                                        <Text style={{ backgroundColor: pickColor(item.status), padding: 3 }} >
                                            {Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.amount)}
                                        </Text>

                                    </View>


                                </View>
                                <Divider />
                            </View>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
                <View style={styles.seeMoreContainer} >
                    <TouchableOpacity onPress={seeMore} style={styles.seeMoreButton}>
                        <View style={{ paddingVertical: 20, paddingHorizontal: 80 }} >
                            <Text style={{ fontFamily: 'custom-font-three', fontWeight: "bold" }} >See More</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        </View>

    )
}