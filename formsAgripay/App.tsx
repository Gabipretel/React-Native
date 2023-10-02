import { View, Text } from "react-native";
import React from "react";
import ReactHookForm from "./src/components/ReactHookForm";
import FormikYup from "./src/components/FormikYup";
import FormikYupOptimized from "./src/components/FormikYupOptimized";

const App = () => {
  return (
    <View style= {{flex:1,backgroundColor:'#F6FFDE'}}>
     
      {/* <ReactHookForm/> */}
      <FormikYupOptimized/>
    </View>
  );
};

export default App;


