import { View, StyleSheet, ScrollView, Text,} from 'react-native';
import React from 'react';
import {TestSuite, Tester, TestCase} from '@rnoh/testerino';
import {systemTallWeights} from 'react-native-typography';

export function SystemTallWeightsExample() {
  return (
    <Tester>
      <ScrollView>
        <TestSuite name="react-native-typography systemTallWeights">
          {Object.entries(systemTallWeights).map((data: any,index) => {
            const itemStyle = StyleSheet.create(data[1]);
            return ( !data[0].includes('Object') &&
              <TestCase key={index} itShould={JSON.stringify(itemStyle)}>
                <View style={{backgroundColor:data[0].includes('White') ?'black':'white' }}>
                  <Text style={itemStyle}> {data[0]}</Text>
                </View>
              </TestCase>
            );
          })}
        </TestSuite>
      </ScrollView>
    </Tester>
  );
}