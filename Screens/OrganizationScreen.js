import React from 'react'
import { useCallback } from 'react'
import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native'
import COLORS from '../constants/COLORS'
import Input from '../Components/Input'
import Button from '../Components/Button'
import Slider from '@react-native-community/slider'
import Department from '../Components/Department'
import DEPARTMENTS from '../constants/DEPARTMENTS'
import { addCompany, updateCompany } from '../data/companies'
function OrganizationScreen({ navigation, route }) {
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
  }
})
export default OrganizationScreen
