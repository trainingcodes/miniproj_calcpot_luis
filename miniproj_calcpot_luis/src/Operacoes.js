import React from 'react'
import styles from '../estilo'
import {View, TouchableOpacity,Text} from 'react-native'

export default Comp =>{
  return(
  <View style={styles.buttons}>
        {Comp.buttons.map((button) =>
          button === '=' ? ( 
            <TouchableOpacity
              onPress={() => Comp.action(button)}
              key={button}
              style={[styles.button, { backgroundColor: 'brown' }]}>
              <Text
                style={[styles.textButton, { color: 'yellow', fontSize: 50 }]}>
                {button}
              </Text>
            </TouchableOpacity>
          ) : (
            
            <TouchableOpacity
              onPress={() => Comp.action(button)}
              key={button}
              style={styles.button}>
              <Text
                style={[
                  styles.textButton,
                  { color: typeof button === 'number' ? 'green' : 'orange' },
                ]}>
                {button}
              </Text>
            </TouchableOpacity>
          )
        )}
      </View>
  )
}