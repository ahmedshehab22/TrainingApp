import React, { useState } from 'react'
import * as SQLite from 'expo-sqlite'
const db = SQLite.openDatabase('memorey.db')

// <---------------------------------------------------------------->
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
  console.log(names)
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
      'UPDATE Organization SET (comp_name,e_mail,Specialization,telephone,address,Number_Of_Students3,Number_Of_Students4,supervisor,trust_Level) = (?,?,?,?,?,?,?,?,?) WHERE id = ?',
      [name, email, spec, phone, location, n3, n4, subervisor, trustLevel, id]
    )
  )
}
export function deleteOrg(id = 12) {
  db.transaction((tx) =>
    tx.executeSql('DELETE FROM Organization WHERE id = ?', [id])
  )
}
// <---------------------------------------------------------------->
export function History() {
  const [tarekh, settarekh] = useState([])
  db.transaction((tx) => {
    tx.executeSql(
      'SELECT * FROM History',
      null,
      (txObj, resultSet) => settarekh(resultSet.rows._array),
      (txObj, error) => console.log(error)
    )
  })
  console.log(tarekh)
}

export function addHistory(
  comp_id,
  year,
  capacity_3rd,
  capacity_4th,
  trust_level
) {
  db.transaction((tx) => {
    tx.executeSql(
      'INSERT OR IGNORE INTO History (comp_id, year, capacity_3rd,capacity_4th, trust_level) VALUES (?, ?, ?, ?,?);',
      [comp_id, year, capacity_3rd, capacity_4th, trust_level],
      (txObj, error) => console.log(error)
    )
  })
}

export function join(id) {
  const [mem, setmem] = useState([])
  db.transaction((tx) => {
    tx.executeSql(
      'SELECT Organization.comp_name, History.year, History.capacity_3rd,History.capacity_4th, History.trust_level  FROM Organization INNER JOIN History  ON  History.comp_id = ? AND Organization.id = ? order by History.year DESC',
      [id,id],
      (txObj, resultSet) => setmem(resultSet.rows._array),
      (txObj, error) => console.log(error)
    )
    
  })
  return mem
}
export function lastindex() {
  const [last, setLast] = useState()
  db.transaction((tx) => {
    tx.executeSql(
      'SELECT id FROM Organization ORDER BY rowid DESC LIMIT 1;',
      null,
      (txObj, resultSet) => setLast(resultSet.rows.item(0).id),
      (txObj, error) => console.log(error)
    )
  })
  return last
}
// <------------------------------------------------------------------>
export function student(){
  const [students,setstudents]=useState([])
  // db.transaction(tx => {
  //   tx.executeSql('CREATE TABLE IF NOT EXISTS Students ("stud_id"	INTEGER NOT NULL,"comp_id"	INTEGER, "stud_name"	TEXT NOT NULL, "e_mail"	TEXT NOT NULL UNIQUE,  "department"	TEXT NOT NULL, "gpa"	TEXT NOT NULL, "grade"	TEXT NOT NULL, "telephone"	TEXT NOT NULL, FOREIGN KEY("comp_id") REFERENCES "Organization"("id"),  PRIMARY KEY("stud_id" AUTOINCREMENT))')
  // });
  db.transaction(tx => {
    tx.executeSql('SELECT * FROM Students', null,
      (txObj, resultSet) => setstudents(resultSet.rows._array),
      (txObj, error) => console.log(error)
    );
  });
  console.log(students)
}

export function addstudent(
  stud_id, stud_name, e_mail, department, gpa, grade, telephone
) {
  db.transaction((tx) => {
    tx.executeSql(
      'INSERT INTO Students (stud_id, stud_name, e_mail, department, gpa, grade, telephone) VALUES (?,?,?, ?, ?,?,?);',
      [
        stud_id, stud_name, e_mail, department, gpa, grade, telephone
      ],
      (txObj, error) => console.log(error)
    )
  })
}
export function sortcompanies(Specialization) {
  const [sorted, setsorted] = useState([])
  db.transaction((tx) => {
    tx.executeSql(
      'SELECT Organization.id, Organization.Number_Of_Students3  FROM Organization  WHERE Organization.Specialization = ?  ORDER BY Organization.trust_level DESC;',[Specialization],
      (txObj, resultSet) => setsorted(resultSet.rows._array),
      (txObj, error) => console.log(error)
    )
  })
  return sorted
}
export function sortstudents(department,grade) {
  const [sortstu, setSortstu] = useState([])
  db.transaction((tx) => {
    tx.executeSql(
      'SELECT Students.comp_id ,Students.stud_id  FROM Students   WHERE Students.department = ? AND Students.grade = ? ORDER BY Students.gpa DESC;',[department,grade],
      (txObj, resultSet) => setSortstu(resultSet.rows._array),
      (txObj, error) => console.log(error)
    )
  })
  return(sortstu)
}

export function ubdatestudent(comp_id,stud_id){
  db.transaction((tx) => {
    tx.executeSql(
      ' UPDATE Students  SET comp_id = ? WHERE stud_id = ?;',[comp_id,stud_id]
    )
  })
}
export function viewStudent(department, grade){
  const [view,setview] = useState([])
  db.transaction((tx) => {
    tx.executeSql(
      ' SELECT Organization.comp_name, Students.stud_name   FROM Organization   INNER JOIN Students   ON Students.comp_id = Organization.id   WHERE Students.department = ? AND Students.grade = ?',[department,grade],
      (txObj, resultSet) => setview(resultSet.rows._array),
      (txObj, error) => console.log(error)
    )
  })
  return(view)
}
export default function Database() {}
