import React from 'react'
import { useCallback } from 'react'
import { join } from '../data/Database'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  FlatList
} from 'react-native'
import CompanyCard from '../Components/CompanyCard'
import COLORS from '../constants/COLORS'
import Input from '../Components/Input'
import Button from '../Components/Button'
import Slider from '@react-native-community/slider'
import Department from '../Components/Department'
import DEPARTMENTS from '../constants/DEPARTMENTS'
import { updateOrg, deleteOrg } from '../data/Database'
function OrganizationScreen({ navigation, route }) {
  const index = route.params.index
  const [inputs, setInputs] = React.useState({
    email: route.params.email,
    orgName: route.params.name,
    phone: route.params.phone,
    location: route.params.location,
    subervisor: route.params.subervisor,
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

  function save() {
    let name = inputs.orgName
    let email = inputs.email
    let phone = inputs.phone
    let trustLevel = inputs.trustLevel
    let subervisor = inputs.subervisor
    let location = inputs.location
    let n3 = inputs.thirdYearNumber
    let n4 = inputs.forthYearNumber
    spec = inputs.specialization
    n3 = n3
    n4 = n4
    updateOrg(
      index,
      name,
      email,
      spec,
      phone,
      location,
      n3,
      n4,
      subervisor,
      trustLevel
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
            text={inputs.phone}
            label="Phone Number "
            onChangeText={(text) => handleOnChange(text, 'phone')}
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
          <Input
            placeholder="Enter Organization's supervisor name"
            iconName={'drive-file-rename-outline'}
            text={inputs.subervisor}
            label="supervisor name"
            onChangeText={(text) => handleOnChange(text, 'subervisor')}
          />
          <Input
            placeholder="Enter Organization's trust level"
            iconName={'drive-file-rename-outline'}
            text={inputs.trustLevel}
            label="Trust level"
            onChangeText={(text) => handleOnChange(text, 'trustLevel')}
          />
          <Department
            label={inputs.specialization}
            selected={true}
            text1={inputs.thirdYearNumber}
            text2={inputs.forthYearNumber}
            onChangeText1={(text) => handleOnChange(text, 'thirdYearNumber')}
            onChangeText2={(text) => handleOnChange(text, 'forthYearNumber')}
          />
          <Button title={'Save'} onPress={save} />
          <Text> __________________________________________________</Text>
          <Text style={styles.historytxt}>
            History of the organization with us
          </Text>
          <FlatList
            data={join(index)}
            keyExtractor={(item) => item.index}
            renderItem={({ item }) => {
              return (
                <View>
                  <Text>At {item.year}</Text>
                  <Input
                    keyboardType="numeric"
                    iconName={'engineering'}
                    text={item.capacity_3rd.toString()}
                    label="Number of 3rd students "
                  />
                  <Input
                    keyboardType="numeric"
                    iconName={'engineering'}
                    text={item.capacity_4th.toString()}
                    label="Number of 4th students "
                  />
                  <Input
                    keyboardType="numeric"
                    iconName={'drive-file-rename-outline'}
                    text={item.trust_level.toString()}
                    label="Trust level at "
                  />
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
