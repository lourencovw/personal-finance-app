import { StyleSheet } from "react-native";
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 24,
        paddingTop: Constants.statusBarHeight + 20,
        flexDirection: 'column',
        height: '100%'
    },
    topContaier: {
        flex: 0.09,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingRight: 24
    },
    currentBalanceLabel: {
        justifyContent: 'space-between',
        flex: 0.1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 24
    },
    currentBalanceContainer: {
        flex: 0.15,
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        paddingLeft: 20,
        paddingRight: 24,
        flexDirection: 'row'
    },
    rightArrowButton: {
        position: "absolute",
        bottom: -40,
        right: 24,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,

        zIndex: 10
    },
    blueBanner: {
        flex: 0.2,
        backgroundColor: '#123EDA',
        flexDirection: 'row',
        borderTopLeftRadius: 40,
        borderBottomLeftRadius: 40,
        paddingTop: 10,
        paddingBottom: 20,
        paddingLeft: 30,
        marginLeft: 20,
        zIndex: 2
    },
    income: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-around"
    },
    incomeValue: {
        fontFamily: 'custom-font-three',
        color: 'white',
        fontSize: 25
    },
    incomeLabel: {
        fontFamily: 'custom-font-four',
        fontSize: 11,
        fontWeight: "bold",
        color: 'white'
    },
    activityLabelContainer: {
        flexDirection: "row",
        paddingTop: 20,
        alignItems: "center",
        paddingLeft: 20
    },
    activityTitle: {
        color: 'black',
        fontFamily: 'custom-font-four',
        fontSize: 18
    },
    pickerContainer: {
        flexDirection: "row",
        marginLeft: 10,
        alignItems: "center",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: 'grey'
    },
    flatlist: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 24,
        alignItems: "flex-end"
    },
    barHeightLabel: {
        fontSize: 8,
        position: "absolute",
        top: -18,
        width: 30,
        textAlign: "center"
    },
    spendingFlatlist: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 24,
        alignItems: "flex-start"
    },
    spendingBar : {
        fontSize: 8,
        position: "absolute",
        bottom: -18,
        width: 30,
        textAlign: "center"
}

});