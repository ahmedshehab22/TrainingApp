import React from 'react'
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native'
import HomeButton from '../Components/HomeButton'
import * as SQLite from 'expo-sqlite'
import { useState, useEffect } from 'react'
import { companies, addCompany, setCompanies } from '../data/companies'
import DocumentPicker from 'expo-document-picker'
import {_pickDocument} from '../data/file'

export function Home({ navigation }) {
  const { container, welcomeText, buttonsContainer } = styles
  const [isLoading, setIsLoading] = useState(true)
  const [currentCompany, setCurrentCompany] = useState(undefined)

  // const getCompaines = () => {
  //   db.transaction((dbManager) => {
  //     dbManager.executeSql(
  //       'SELECT * FROM Organization',
  //       null,
  //       (_, resultSet) => (companies = useState(resultSet.rows._array)),
  //       (_, error) => console.log(error)
  //     )
  //   })
  // }
  
  return (
    <View style={container}>
      <View>
        <View style={styles.logoContainer}>
          <Image
            style={styles.img}
            source={require('../assets/univLogo.jpeg')}
          />
        </View>
        <Text style={welcomeText}>
          أهلا بكم في التطبيق الخاص بتوزيع طلاب هندسة شبرا علي جهات التدريب
        </Text>
      </View>
      <View style={buttonsContainer}>
        <HomeButton
          textValue={'اضافة جهة تدريب'}
          iconName={'plus'}
          onPress={() => navigation.navigate('Add Organization')}
        />
        <HomeButton
          textValue={'الشركات'}
          iconName={'organization'}
          onPress={() => navigation.navigate('Organizations')}
        />
        <HomeButton
          textValue={'اضافة طلبة التدريب'}
          iconName={'database'}
          onPress={() =>_pickDocument()}
        />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  logoContainer: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    height: 200,
    resizeMode: 'contain'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  welcomeText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    flexWrap: 'wrap',
    color: '#031C41',
    padding: 5
  },
  buttonsContainer: {
    marginTop: 15
  }
})
export default Home
