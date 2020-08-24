import { StyleSheet } from "react-native";
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 20,
        flexDirection: 'column',
        height: '100%',
        backgroundColor: "#113DDB",
        justifyContent: "space-between"
    },
    topContaier: {
        flex: 0.3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingHorizontal: 24,
    },
    titleContainer: {
        flex: 0.2,
        paddingTop: 20,
        paddingHorizontal: 45
    },
    title: {
        fontFamily: 'custom-font-three',
        fontSize: 22,
        color: "white"
    },
    subtitle: {
        fontFamily: 'montserrat-italic',
        color: "white"
    },
    itensContainer: {
        flex: 0.7,
        backgroundColor: 'white',
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60
    },
    itensTopBar: {
        paddingTop: 30,
        paddingLeft: 45,
        flexDirection: "row",
        alignItems: "center"
    },
    itensTitle: {
        fontFamily: 'custom-font-four',
        fontSize: 18,
        fontWeight: "bold"
    },
    plusButton: {
        position: "absolute",
        top: -20,
        right: 50,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
        zIndex: 2
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
    itemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 5
    },
    itemSpecs: {
        flex: 1,
        paddingLeft: 10,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center"
    },
    itemCategory: {
        fontFamily: 'custom-font-three',
        color: 'grey',
        fontSize: 10
    },
    item: {
        fontFamily: 'custom-font-four',
        fontSize: 16 
    },
    seeMoreContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    seeMoreButton: {
        borderWidth: 2,
        borderRadius: 20,
        borderColor: 'grey'
    }

});