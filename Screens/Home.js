import React from 'react'
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native'
import HomeButton from '../Components/HomeButton'
function Home({ navigation }) {
  const { container, welcomeText, buttonsContainer } = styles

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
          textValue={'نتائج التوزيع'}
          iconName={'database'}
          onPress={() => navigation.navigate('Departments')}
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
