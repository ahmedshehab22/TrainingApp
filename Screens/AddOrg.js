import React from 'react'
import { useCallback } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  TextInput
} from 'react-native'
import COLORS from '../constants/COLORS'
import Input from '../Components/Input'
import Button from '../Components/Button'
import Slider from '@react-native-community/slider'
import Department from '../Components/Department'
import DEPARTMENTS from '../constants/DEPARTMENTS'
import { addOrganization, addHistory, lastindex } from '../data/Database'

function AddOrg({ navigation }) {
  const [inputs, setInputs] = React.useState({
    email: '',
    orgName: '',
    phone: '',
    location: '',
    supervisor: '',
    trustLevel: 0,
    commNo: 0,
    elecNo: 0,
    civilNO: 0,
    archNo: 0,
    compNo: 0,
    survNo: 0,
    mechPowNo: 0,
    mechProNo: 0,
    commNo3: 0,
    elecNo3: 0,
    civilNO3: 0,
    archNo3: 0,
    compNo3: 0,
    survNo3: 0,
    mechPowNo3: 0,
    mechProNo3: 0,
    year1: 0,
    capacity_3rd1: 0,
    capacity_4th1: 0,
    trust_level1: 0,
    year2: 0,
    capacity_3rd2: 0,
    capacity_4th2: 0,
    trust_level2: 0,
    year3: 0,
    capacity_3rd3: 0,
    capacity_4th3: 0,
    trust_level3: 0,
  })
  // Memoize the handleOnChange function
  const handleOnChange = useCallback(
    (text, input) => {
      setInputs((prevState) => ({ ...prevState, [input]: text }))
      console.log(input, text)
    },
    [inputs]
  )

  const X = lastindex() + 1
  console.log(X)
  function saveData() {
    if (
      !inputs.orgName ||
      !inputs.email ||
      !inputs.phone ||
      !inputs.trustLevel ||
      !inputs.supervisor ||
      !inputs.location
    ) {
      alert('Please,fill all fields')
    } else {
      let name = inputs.orgName.toString()
      let email = inputs.email.toString()
      let phone = inputs.phone.toString()
      let trustLevel = inputs.trustLevel.toString()
      let supervisor = inputs.supervisor.toString()
      let location = inputs.location.toString()
      let year1 = inputs.year1.toString()
      let capacity_3rd1 = inputs.capacity_3rd1.toString()
      let capacity_4th1 = inputs.capacity_4th1.toString()
      let trust_level1 = inputs.trust_level1.toString()
      let year2 = inputs.year2.toString()
      let capacity_3rd2 = inputs.capacity_3rd2.toString()
      let capacity_4th2 = inputs.capacity_4th2.toString()
      let trust_level2 = inputs.trust_level2.toString()
      let year3 = inputs.year3.toString()
      let capacity_3rd3 = inputs.capacity_3rd3.toString()
      let capacity_4th3 = inputs.capacity_4th3.toString()
      let trust_level3 = inputs.trust_level3.toString()

      if (inputs.commNo + inputs.commNo3 > 0) {
        spec = DEPARTMENTS.COMMUNICATION
        n3 = inputs.commNo3
        n4 = inputs.commNo
      }
      if (inputs.compNo + inputs.compNo3 > 0) {
        spec = DEPARTMENTS.COMPUTER
        n3 = inputs.compNo3
        n4 = inputs.compNo
      }
      if (inputs.elecNo + inputs.elecNo3 > 0) {
        spec = DEPARTMENTS.ELECTRICAL
        n3 = inputs.elecNo3
        n4 = inputs.elecNo
      }
      if (inputs.archNo + inputs.archNo3 > 0) {
        spec = DEPARTMENTS.ARCHITECTURE
        n3 = inputs.archNo3
        n4 = inputs.archNo
      }
      if (inputs.civilNO + inputs.civilNO3 > 0) {
        spec = DEPARTMENTS.CIVIL
        n3 = inputs.civilNO3
        n4 = inputs.civilNO
      }
      if (inputs.survNo + inputs.survNo3 > 0) {
        spec = DEPARTMENTS.SURVEYING
        n3 = inputs.survNo3
        n4 = inputs.survNo
      }
      if (inputs.mechPowNo + inputs.mechPowNo3 > 0) {
        spec = DEPARTMENTS.MECHANICALPOWER
        n3 = inputs.mechPowNo3
        n4 = inputs.mechPowNo
      }
      if (inputs.mechProNo + inputs.mechProNo3 > 0) {
        spec = DEPARTMENTS.MECHANICALPRODUCTION
        n3 = inputs.mechProNo3
        n4 = inputs.mechProNo
      }
      spec = spec.toString()
      n3 = n3.toString()
      n4 = n4.toString()
      console.log(
        name,
        spec,
        email,
        phone,
        supervisor,
        location,
        n3,
        n4,
        trustLevel
      )
      addOrganization(
        name,
        spec,
        email,
        phone,
        supervisor,
        location,
        n3,
        n4,
        trustLevel
      )
      if (
        year1 >= 2020 &&
        year1 < 2023 &&
        capacity_3rd1 &&
        capacity_4th1 &&
        trust_level1
      ) {
        addHistory(X, year1, capacity_3rd1, capacity_4th1, trust_level1)
      } else {
        alert('You must enter valid data')
      }
      if (
        year2 >= 2020 &&
        year2 < 2023 &&
        capacity_3rd2 &&
        capacity_4th2 &&
        trust_level2
      ) {
        addHistory(X, year2, capacity_3rd2, capacity_4th2, trust_level2)
      } else {
        alert('You must enter valid data')
      }
      if (
        year3 >= 2020 &&
        year3 < 2023 &&
        capacity_3rd3 &&
        capacity_4th3 &&
        trust_level3
      ) {
        addHistory(X, year3, capacity_3rd3, capacity_4th3, trust_level3)
      } else {
        alert('You must enter valid data')
      }
      navigation.replace('Organizations')
    }
  }

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.titleText}>Add Organization</Text>
        <Text style={styles.descriptionText}>
          Enter the Organization Details
        </Text>
        <View style={{ marginVertical: 20 }}>
          <Input
            placeholder="Enter Organization's Name"
            iconName={'drive-file-rename-outline'}
            label="Name"
            onChangeText={(text) => handleOnChange(text, 'orgName')}
          />
          <Input
            keyboardType="numeric"
            placeholder="Enter Organization's phone number"
            iconName={'phone'}
            label="Phone Number"
            onChangeText={(text) => handleOnChange(text, 'phone')}
          />
          <Input
            keyboardType="email-address"
            placeholder="Enter Organization's Email"
            iconName={'email'}
            label="Email"
            onChangeText={(text) => handleOnChange(text, 'email')}
          />
          <Input
            placeholder="Enter Organization's Main Location"
            iconName={'add-location-alt'}
            label="Main Location"
            onChangeText={(text) => handleOnChange(text, 'location')}
          />
          <Input
            placeholder="Enter Organization's supervisor name"
            iconName={'drive-file-rename-outline'}
            label="Supervisor name"
            onChangeText={(text) => handleOnChange(text, 'supervisor')}
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
            label={'Computer'}
            selected={false}
            onChangeText1={(text) => handleOnChange(text, 'compNo')}
            onChangeText2={(text) => handleOnChange(text, 'compNo3')}
          />
          <Department
            label={'Communication'}
            selected={false}
            onChangeText1={(text) => handleOnChange(text, 'commNo')}
            onChangeText2={(text) => handleOnChange(text, 'commNo3')}
          />
          <Department
            label={'Electrical'}
            selected={false}
            onChangeText1={(text) => handleOnChange(text, 'elecNo')}
            onChangeText2={(text) => handleOnChange(text, 'elecNo3')}
          />
          <Department
            label={'Civil'}
            selected={false}
            onChangeText1={(text) => handleOnChange(text, 'civilNo')}
            onChangeText2={(text) => handleOnChange(text, 'civilNo3')}
          />
          <Department
            label={'Architecture'}
            selected={false}
            onChangeText1={(text) => handleOnChange(text, 'archNo')}
            onChangeText2={(text) => handleOnChange(text, 'archNo3')}
          />
          <Department
            label={'Surveying'}
            selected={false}
            onChangeText1={(text) => handleOnChange(text, 'survNo')}
            onChangeText2={(text) => handleOnChange(text, 'survNo3')}
          />
          <Department
            label={'Mech/power'}
            selected={false}
            onChangeText1={(text) => handleOnChange(text, 'mechPowNo')}
            onChangeText2={(text) => handleOnChange(text, 'mechPowNo3')}
          />
          <Department
            label={'Mech/production'}
            selected={false}
            onChangeText1={(text) => handleOnChange(text, 'mechProNo')}
            onChangeText2={(text) => handleOnChange(text, 'mechProNo3')}
          />
          <Text> __________________________________________________</Text>
          <Text style={styles.historytxt}>
            History of the organization with us
          </Text>
          <Input
            keyboardType="numeric"
            placeholder="Enter the year"
            iconName={'history'}
            label="Year"
            onChangeText={(text) => handleOnChange(text, 'year1')}
          />
          <Input
            keyboardType="numeric"
            placeholder="Enter the number of all students at this year"
            iconName={'engineering'}
            label="Number of 3rd students at this year"
            onChangeText={(text) => handleOnChange(text, 'capacity_3rd1')}
          />
          <Input
            keyboardType="numeric"
            placeholder="Enter the number of all students at this year"
            iconName={'engineering'}
            label="Number of 4th students at this year"
            onChangeText={(text) => handleOnChange(text, 'capacity_4th1')}
          />
          <Input
            keyboardType="numeric"
            placeholder="Enter trust level at this year"
            iconName={'drive-file-rename-outline'}
            label="Trust level at this year"
            onChangeText={(text) => handleOnChange(text, 'trust_level1')}
          />
          <Input
            keyboardType="numeric"
            placeholder="Enter the year"
            iconName={'history'}
            label="Year"
            onChangeText={(text) => handleOnChange(text, 'year2')}
          />
          <Input
            keyboardType="numeric"
            iconName={'engineering'}
            label="Number of 3rd students at this year"
            onChangeText={(text) => handleOnChange(text, 'capacity_3rd2')}
          />
          <Input
            keyboardType="numeric"
            iconName={'engineering'}
            label="Number of 4th students at this year"
            onChangeText={(text) => handleOnChange(text, 'capacity_4th2')}
          />
          <Input
            keyboardType="numeric"
            iconName={'drive-file-rename-outline'}
            label="Trust level at this year"
            onChangeText={(text) => handleOnChange(text, 'trust_level2')}
          />
          <Input
            keyboardType="numeric"
            placeholder="Enter the year"
            iconName={'history'}
            label="Year"
            onChangeText={(text) => handleOnChange(text, 'year3')}
          />
          <Input
            keyboardType="numeric"
            iconName={'engineering'}
            label="Number of 3rd students at this year"
            onChangeText={(text) => handleOnChange(text, 'capacity_3rd3')}
          />
          <Input
            keyboardType="numeric"
            iconName={'engineering'}
            label="Number of 4th students at this year"
            onChangeText={(text) => handleOnChange(text, 'capacity_4th3')}
          />
          <Input
            keyboardType="numeric"
            placeholder="Enter trust level at this year"
            iconName={'drive-file-rename-outline'}
            label="Trust level at this year"
            onChangeText={(text) => handleOnChange(text, 'trust_level3')}
          />
          <Button title={'Add Organization'} onPress={saveData} />
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
  }
})
export default AddOrg
