import React, { useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import styles from './styles';
import { RoundButton } from '../../components/RoundButton';
import { AntDesign, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { UserPhoto } from '../../components/UserPhoto';
import { storage } from '../../storage/storage';
import RNPickerSelect from 'react-native-picker-select';
import { FlatList } from 'react-native-gesture-handler';
import { Divider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


export default function Home() {
    const [timePicker, setTimePicker] = useState('week');
    const navigation = useNavigation();

    const width = Dimensions.get('window').width;

    let august = Array(31).fill({ income: 0, spending: 0 });

    storage.forEach((item) => {
        let balance = { income: august[item.day].income, spending: august[item.day].spending }

        if (item.type === 'spending') {
            balance.spending += item.amount
            august[item.day] = balance
        }
        if (item.type === 'income') {
            balance.income += item.amount
            august[item.day] = balance
        }
    })

    const income = august.map(item => item.income)
    const spending = august.map(item => item.spending)

    function getDays() {
        switch (timePicker) {
            case 'day':
                return -1;
                break;
            case 'week':
                return -7;
                break;
            case 'month':
                return;
                break;

            default:
                break;
        }
    }
    function navigate() {
        navigation.navigate('Transactions', { august })
    }


    return (
        <View style={styles.container}>
            <View style={styles.topContaier}>
                <RoundButton onPress={() => { navigate() }} backColor={"#E5EAF2"}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </RoundButton>
                <UserPhoto />

            </View>
            <View style={styles.currentBalanceLabel} >

                <Text style={{ fontFamily: 'custom-font-two', color: 'grey' }} >
                    <Text style={{ fontSize: 15 }} >C</Text>urrent balance
                </Text>
                <Text style={{ fontFamily: 'custom-font-two', color: 'grey', fontSize: 30, lineHeight: 0, marginBottom: 5 }} >
                    ...
                </Text>

            </View>

            <View style={styles.currentBalanceContainer} >
                <View style={{ flex: 0.1 }} >
                    <Text style={{ fontFamily: 'custom-font-three', fontSize: 30 }}>$</Text>
                </View>
                <View style={{ flex: 0.75, flexDirection: 'row' }} >
                    <Text style={{ fontFamily: 'custom-font-three', fontSize: Math.floor(width / 6.5) }}>
                        120.60  <Text style={{ fontSize: 15 }}>USD</Text>
                    </Text>
                </View>

            </View>
            <View style={styles.blueBanner}>
                <View style={styles.income}>
                    <AntDesign name="staro" size={15} color="white" />
                    <Text style={styles.incomeValue} >$ 1220.0</Text>
                    <Text style={styles.incomeLabel} >your income</Text>

                </View>
                <View style={styles.income}>
                    <MaterialCommunityIcons name="share-outline" size={18} color="white" />
                    <Text style={styles.incomeValue} >$ 220.0</Text>
                    <Text style={styles.incomeLabel} >your spending</Text>

                    <View style={styles.rightArrowButton}>

                        <RoundButton onPress={() => { navigate() }} backColor={"#4E74FF"}>
                            <MaterialIcons name="keyboard-arrow-right" size={30} color="#AFBFFF" />
                        </RoundButton>
                    </View>

                </View>
            </View>
            <View style={styles.activityLabelContainer}>
                <Text style={styles.activityTitle}>activity</Text>
                <View style={styles.pickerContainer} >
                    <RNPickerSelect
                        onValueChange={(value) => setTimePicker(value)}
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
            <View style={{ flex: 0.2, paddingRight: 36 }}>
                <FlatList
                    contentContainerStyle={styles.flatlist}
                    data={income.slice(getDays())}
                    renderItem={({ item }) => (
                        <View style={{ alignItems: "center" }}>
                            <Text style={styles.barHeightLabel}>{item}</Text>
                            <View style={{ height: item, width: 6, borderRadius: 4, backgroundColor: "#123EDA" }}></View>
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />

            </View>
            <Divider style={{ backgroundColor: 'grey', marginRight: 24, marginVertical: 12 }} />

            <View style={{ flex: 0.2, paddingRight: 36 }}>
                <FlatList
                    contentContainerStyle={styles.spendingFlatlist}
                    data={spending.slice(getDays())}
                    renderItem={({ item }) => (
                        <View style={{ alignItems: "center" }}>
                            <View style={{ height: item, width: 6, borderRadius: 4, backgroundColor: "#FF705A" }}></View>
                            <Text style={styles.spendingBar}>{item}</Text>
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />

            </View>


        </View>
    );
}