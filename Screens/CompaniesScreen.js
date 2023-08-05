import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import CompanyCard from '../Components/CompanyCard'
import { companies } from '../data/companies'

function CompaniesScreen({ navigation }) {
  const renderItem = ({ item, index }) => (
    <CompanyCard
      name={item.companyName ? item.companyName.toString() : '#####'}
      phone1={item.phone1.toString()}
      phone2={item.phone2.toString()}
      trustLevel={item.trustLevel.toString()}
      email={item.email.toString()}
      specialization={item.specialization.toString()}
      thirdYearStudents={item.thirdYearStudents.toString()}
      forthYearStudents={item.forthYearStudents.toString()}
      location={item.location.toString()}
      onPress={() =>
        navigation.replace('Organization Details', {
          name: item.companyName.toString(),
          phone1: item.phone1.toString(),
          phone2: item.phone2.toString(),
          trustLevel: item.trustLevel,
          email: item.email.toString(),
          specialization: item.specialization.toString(),
          thirdYearStudents: item.thirdYearStudents.toString(),
          forthYearStudents: item.forthYearStudents.toString(),
          location: item.location.toString(),
          history: item.history,
          index: index
        })
      }
    />
  )
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={companies}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  list: {
    width: '100%'
  }
})
export default CompaniesScreen
