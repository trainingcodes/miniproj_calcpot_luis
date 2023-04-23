import React from 'react';
import { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import estilo from './estilo';
import Operacoes from './src/Operacoes'

export default function App() {
  const buttons = ['APAGAR','EXCLUIR','%','/',7,8,9,'x',4,5,6,'-',1,2,3,'+',0,'.','+/-','=','^ 3','^ 2','^','()'];
  const [currentNumber, setCurrentNumber] = useState('');
  const [lastNumber, setLastNumber] = useState('');

  function calculator() {
    const splitNumbers = currentNumber.split(' ');
    let operation = ' ';
    let actual = 0;
    let fresh = parseFloat(splitNumbers[0]); 
    let index = 1;
    while (index <= splitNumbers.length - 1) {
      operation = splitNumbers[index];
      actual = parseFloat(splitNumbers[index + 1]);

      if (!isNaN(actual)) {
        
        switch (operation) {
          case '+':
            fresh = fresh + actual;
            break;
          case '-':
            fresh = fresh - actual;
            break;
          case 'x':
            fresh = fresh * actual;
            break;
          case '/':
            fresh = fresh / actual;
            break;
          case '^':
            fresh = Math.pow(fresh, actual);
            break;
        }

        index = index + 2;
      } else {
        return;
      }
    }

    setCurrentNumber(fresh.toString());
  }

  function handleInput(buttonPressed) {
    switch (buttonPressed) {
      case '+': case '-': case 'x': case '/':case '^':
        setCurrentNumber(currentNumber + ' ' + buttonPressed + ' ');
        return;
      case '^ 2': case '^ 3':
        setCurrentNumber(currentNumber + ' ' + buttonPressed);
        return;
      case 'EXCLUIR':
        setCurrentNumber(currentNumber.substring(0, currentNumber.length - 1));
        return;
      case 'APAGAR':
        setLastNumber('');
        setCurrentNumber('');
        return;
      case '=':
        setLastNumber(currentNumber + ' = ');
        calculator();
        return;
      case '+/-':
        setCurrentNumber((-1 * currentNumber).toString());
        return;
    }

    setCurrentNumber(currentNumber + buttonPressed);
  }

  return (
    <View style={estilo.container}>
      <View style={estilo.results}>
        <Text style={estilo.historyText}>{lastNumber}</Text>
        <Text style={estilo.resultText}>{currentNumber}</Text>
      </View>

    <Operacoes
    buttons = {buttons}
    action = {handleInput}
    />
    </View>
  );
}
