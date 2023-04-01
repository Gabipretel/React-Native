import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    globalMargin:{
        marginHorizontal:40,
    },
    btn:{
        elevation:8,
        backgroundColor: '#009688',
        borderRadius:10,
        padding:10,
        width:100,
        height:100,
        marginTop:40,
        marginHorizontal:10,
        alignItems:'center',
        justifyContent:'center',
        fontSize:20
    },
    btnText:{
        fontSize:20, 
        color:'#fff',
        fontWeight:'bold'
    },
    title:{
        fontSize:30,
        textAlign:'center',
        marginBottom:30
    },
    avatar:{
        marginTop:30,
        width:150,
        height:150,
        borderRadius:100
    },
    avatarContainer:{
        alignItems:'center',
    
    },
    menuContainer:{
        alignItems:'center',
        marginVertical:30,
    },
    menuText:{
        fontSize:20,
        padding:10
    }
    
})