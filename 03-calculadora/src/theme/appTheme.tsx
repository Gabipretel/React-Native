import { StyleSheet } from "react-native";

export const styles= StyleSheet.create({
    conCalculator:{
        flex:1,
        paddingHorizontal:20,
        justifyContent:"flex-end"
    },
    bgApp:{
        flex:1,
        backgroundColor: '#000',
       
    },
    result:{
        color:'#fff',
        fontSize:60,
        textAlign:"right",
        marginBottom:10
        
    },
    littleResult:{
        color:'rgba(255,255,255,0.5)',
        fontSize:30,
        textAlign:"right",
        
    },
    rows:{
        flexDirection:'row',
        justifyContent:'center',
        marginBottom:18,
        paddingHorizontal:10,
        flexWrap:'wrap'
    }
    
})