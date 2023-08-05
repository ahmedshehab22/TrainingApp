import React from 'react'
import { useCallback } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  FlatList
} from 'react-native'
import COLORS from '../constants/COLORS'
import Input from '../Components/Input'
import Button from '../Components/Button'
import Slider from '@react-native-community/slider'
import Department from '../Components/Department'
import DEPARTMENTS from '../constants/DEPARTMENTS'
import { addCompany, updateCompany } from '../data/companies'
function OrganizationScreen({ navigation, route }) {
  // history = route.params.history
  const [inputs, setInputs] = React.useState({
    email: route.params.email,
    orgName: route.params.name,
    phone1: route.params.phone1,
    phone2: route.params.phone2,
    location: route.params.location,
    trustLevel: route.params.trustLevel,
    thirdYearNumber: route.params.thirdYearStudents,
    forthYearNumber: route.params.forthYearStudents,
    specialization: route.params.specialization
  })

  // Memoize the handleOnChange function
  const handleOnChange = useCallback(
    (text, input) => {
      setInputs((prevState) => ({ ...prevState, [input]: text }))
      console.log(input, text)
    },
    [inputs]
  )
  function saveData() {
    let name = inputs.orgName
    let email = inputs.email
    let phone1 = inputs.phone1
    let phone2 = inputs.phone2
    let trustLevel = inputs.trustLevel
    let location = inputs.location
    let n3 = inputs.thirdYearNumber
    let n4 = inputs.forthYearNumber
    spec = inputs.specialization
    n3 = n3
    n4 = n4
    console.log(name, email, phone1, phone2, location, trustLevel, spec, n3, n4)
    updateCompany(
      route.params.index,
      name,
      email,
      phone1,
      phone2,
      location,
      trustLevel,
      spec,
      n3,
      n4
    )
    navigation.pop()
  }

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.titleText}>{inputs.orgName}</Text>
        <View style={{ marginVertical: 20 }}>
          <Input
            placeholder="Enter Organization's Name"
            iconName={'drive-file-rename-outline'}
            label="Name"
            text={inputs.orgName}
            onChangeText={(text) => handleOnChange(text, 'orgName')}
          />
          <Input
            keyboardType="numeric"
            placeholder="Enter Organization's phone number"
            iconName={'phone'}
            text={inputs.phone1}
            label="Phone Number 1"
            onChangeText={(text) => handleOnChange(text, 'phone1')}
          />
          <Input
            keyboardType="numeric"
            placeholder="Enter another phone number ( optional )"
            iconName={'phone'}
            text={inputs.phone2}
            label="Phone Number 2"
            onChangeText={(text) => handleOnChange(text, 'phone2')}
          />
          <Input
            keyboardType="email-address"
            placeholder="Enter Organization's Email"
            iconName={'email'}
            text={inputs.email}
            label="Email"
            onChangeText={(text) => handleOnChange(text, 'email')}
          />
          <Input
            placeholder="Enter Organization's Main Location"
            iconName={'add-location-alt'}
            text={inputs.location}
            label="Main Location"
            onChangeText={(text) => handleOnChange(text, 'location')}
          />
          <Text>Trust Level : {inputs.trustLevel}</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            step={1}
            maximumValue={100}
            onValueChange={(value) => handleOnChange(value, 'trustLevel')}
            minimumTrackTintColor={COLORS.darkBlue}
            thumbTintColor={COLORS.darkBlue}
            value={inputs.trustLevel}
          />

          <Department
            label={inputs.specialization}
            selected={true}
            text1={inputs.thirdYearNumber}
            text2={inputs.forthYearNumber}
            onChangeText1={(text) => handleOnChange(text, 'thirdYearNumber')}
            onChangeText2={(text) => handleOnChange(text, 'forthYearNumber')}
          />
          <Button title={'Save'} onPress={saveData} />
          <Text> __________________________________________________</Text>
          <Text style={styles.historytxt}>
            History of the organization at the last {history.length} years.
          </Text>
          <FlatList
            data={history}
            keyExtractor={(item) => item.index}
            renderItem={({ item, index }) => {
              return (
                <View>
                  <Text style={styles.hint}>At {index + 2019} : </Text>
                  <Text style={styles.descriptionText}>Number of students</Text>
                  <Text style={styles.box}>{item.num}</Text>
                  <Text style={styles.descriptionText}>Trust Level </Text>
                  <Text style={styles.box}>{item.trust}%</Text>
                </View>
              )
            }}
          />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  container: {
    paddingTop: 50,
    paddingHorizontal: 20
  },
  titleText: {
    color: COLORS.darkBlue,
    fontSize: 40,
    fontWeight: 'bold'
  },
  descriptionText: {
    color: COLORS.grey,
    fontSize: 18,
    marginVertical: 10
  },
  slider: {
    height: 20,
    width: '100%',
    marginVertical: 7
  },
  errorStyle: {
    color: COLORS.red,
    fontSize: 12,
    marginTop: 7
  },
  historytxt: {
    color: COLORS.darkBlue,
    fontSize: 20,
    fontWeight: 'bold'
  },
  hint: {
    color: COLORS.darkBlue,
    fontSize: 18,
    marginVertical: 10,
    paddingTop: 10
  },
  box: {
    height: 55,
    flexDirection: 'row',
    backgroundColor: COLORS.grey,
    borderWidth: 0.5,
    paddingHorizontal: 15,
    alignItems: 'center',
    borderColor: COLORS.light,
    padding: 15,
    fontSize: 15,
    fontWeight: 'bold'
  }
})
export default OrganizationScreen
