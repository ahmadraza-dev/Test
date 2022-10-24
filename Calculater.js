//import liraries
import React, { Component  , useEffect  , useState} from 'react';
import { View, Text, StyleSheet , Button, TouchableOpacity , ScrollView } from 'react-native';
import {globalStyles} from './stylesCalculation'

// create a component
const Calculater = () => {
    const [resulttext, setresulttext] = useState('')
    const [calculatedText, setcalculatedText] = useState('0')
    const [operations, setoperations] = useState(['D','+' , '-' , '*' , '/' , 'C' , 'H'])
    const [show , setshow] = useState('true')
    const [storeStatearray, setstoreStatearray] = useState([])
    const [storeAns , setstoreAns] = useState([])

    const calculateResult = () =>
    {
        const getValue=resulttext
        storeStatearray.push(getValue)
        const text = resulttext
        const onOps = eval(text)
        setcalculatedText(onOps)
        storeAns.push(onOps)
        console.log(storeStatearray, 'Store State array')
        console.log(storeAns,'answer array ')
    } 

    function validatetext() 
      {
        const text =resulttext
        switch(text.slice(-1))
        {
            case '+':
            case '-':
            case '*':
            case '/':
                return false
        }
         return true   
      }

    const onButtonpress=(text)=>
    {
        if(text== '=')
        {
        return validatetext () && calculateResult()
        }
        setresulttext(resulttext+text)

    }

    const clearHistory=()=>
    {
     console.log('Clear History')
     setstoreStatearray([])
     setstoreAns([])
    
    }

    const toggleFunction = () => {
        setshow(!show)
      };


    const operate =(operations) =>
    {
      switch(operations){
        case 'D' :
        
             const text = resulttext.split('')
             text.pop()
             setresulttext(text.join(''))
        break
        case 'C' :
            setcalculatedText('0')
            setresulttext ('')
        break
        case 'H' :
           toggleFunction()
        break        
        case '+':
        case '-':
        case '*':
        case '/':

        const lastcharacter = resulttext.split('').pop()

                if(lastcharacter=='+' || lastcharacter=='-' || lastcharacter=='*' || lastcharacter=='/') 
                {
                    return 0;
                }

                if(resulttext == "")
                { 
                    return 0 
                }

                setresulttext(resulttext + operations)
      }
    }

    let rows = []
    let nums =[ [1,2,3]  , [4,5,6] , [7,8,9] , [0,'.','=']  ]
        for (let i=0; i < 4 ; i++)
          {
             let row=[]
              for(let j=0; j < 3 ; j++)
                {
                  row.push(  
                     <TouchableOpacity
                          onPress={()=> {onButtonpress(nums[i][j])}} 
                          style={globalStyles.NumberButton}>
                          <Text style={{fontSize:55 , color:'#546E7A'}}>{nums[i][j]}</Text>
                     </TouchableOpacity>)
                }
            rows.push(<View style={{flexDirection:'row' , flex:1 }}>{row}</View>)
           }
    
    let ops = []
    for(let i=0; i < 7 ; i++)
    {
      ops.push( 
        <TouchableOpacity 
           onPress={()=>{operate(operations[i])}}
           style={{ flex:1 , justifyContent:'center' , alignItems:'center'}}>
           <Text style={{fontSize:40 , color:'#546E7A'}}>{operations[i]}</Text>
        </TouchableOpacity>)
    }
   
    return (
     <View style={styles.container}>
            
            <View style={globalStyles.Resulttextview}>
                <Text style={globalStyles.Resulttext}>{resulttext}</Text>
            </View>

            <View style={globalStyles.Calculatedview}>
               <Text style={globalStyles.Calculatedtext}>{calculatedText}</Text>
            </View>

             <View style={{height:20, justifyContent:'center' , alignItems:'center'}}>
                   <View style={{height:2 , width:'95%' , backgroundColor:'black' , marginBottom:10 , borderRadius:20 , opacity:.3}}></View>
             </View>

            <View style={{flex:4 ,flexDirection:'row' , backgroundColor:'white'}}>
                {
                  show ?
                    <View style={{flex:3 }}>
                    {rows}
                    </View> 
                  : 

                  //History View

                   <View style={{flex:3}}>
                     
                    <View style={{flex:1}}>

                        <ScrollView>
                            <View style={{flex:1 ,  justifyContent:'flex-end' , alignItems:'flex-end'  }}>
                        
                                { storeStatearray.length>0 && storeStatearray.map((item,index)=>(
                                    <>
                                    <Text style={{color:'black' , fontSize:30 }}>{item}</Text>
                                    <Text style={{color:'green' , fontSize:30}}>={storeAns[index]}</Text>
                                </>
                                ))}
                    
                        </View>
                        </ScrollView>

                    </View>

                    <View style={{height:'20%' , backgroundColor:'white' , justifyContent:'center' , alignItems:'center'}}>
                        <TouchableOpacity
                            onPress={()=>clearHistory()}
                        >
                            <Text style={{fontSize:20 , color:'#546E7A'}}>Clear History</Text>
                        </TouchableOpacity>
                    </View>

                  </View>
                }

        <View style={{flex:1 , backgroundColor:'white'}}>
            <View style={globalStyles.operations}>
                {ops}
            </View>
        </View>
                  
            </View>
     </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        flex: 1,
    
    },
});

//make this component available to the app
export default Calculater;
