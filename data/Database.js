import React, { useState } from 'react'
import * as SQLite from 'expo-sqlite'
const db = SQLite.openDatabase('memorey.db')

export function ShowOrganization() {
  const [names, setNames] = useState([])
  db.transaction((tx) => {
    tx.executeSql(
      'SELECT * FROM Organization',
      null,
      (txObj, resultSet) => setNames(resultSet.rows._array),
      (txObj, error) => console.log(error)
    )
  })
  return names
}
export function addOrganization(
  comp_name,
  Specialization,
  e_mail,
  telephone,
  supervisor,
  address,
  Number_Of_Students3,
  Number_Of_Students4,
  trust_Level
) {
  db.transaction((tx) => {
    tx.executeSql(
      'INSERT INTO Organization (comp_name,Specialization,e_mail,telephone,supervisor,address,Number_Of_Students3,Number_Of_Students4, trust_Level) values (?,?,?,?,?,?,?,?,?)',
      [
        comp_name,
        Specialization,
        e_mail,
        telephone,
        supervisor,
        address,
        Number_Of_Students3,
        Number_Of_Students4,
        trust_Level
      ],
      (txObj, error) => console.log(error)
    )
  })
}

export function updateOrg(
  id,
  name,
  email,
  spec,
  phone,
  location,
  n3,
  n4,
  subervisor,
  trustLevel
) {
  db.transaction((tx) =>
    tx.executeSql(
      'UPDATE Organization SET (comp_name,e_mail,Specialization,telephone,address,Number_Of_Students3,Number_Of_Students4,supervisor,trust_Level) = (?,?,?,?,?,?,?,?,?) WHERE id = ?',[name, email, spec, phone, location, n3, n4, subervisor,trustLevel, id]
    )
  )
}
export function deleteOrg(id){
    db.transaction(tx => 
      tx.executeSql('DELETE FROM Organization WHERE id = ?', [id]))
    }

export function createhis(){
  const [histories, sethistories] = useState([])
  db.transaction((tx) => {
    tx.executeSql(
      'SELECT * FROM Tarekh',
      null,
      (txObj, resultSet) => sethistories(resultSet.rows._array),
      (txObj, error) => console.log(error)
    )
  })
  return histories
}
export function addtohis(year,capacity,trust_level){
  db.transaction(tx => 
    tx.executeSql('INSERT INTO Tarekh (year,capacity,trust_level) values (?,?,?)', [year,capacity,trust_level]))
}






export default function Database() {}
