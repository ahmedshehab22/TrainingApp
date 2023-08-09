
import { sortstudents, sortcompanies, ubdatestudent,viewStudent } from './Database'
export function getThirdYear(specialization) {
  const stud = sortstudents(specialization, '3rd')
  const comp = sortcompanies(specialization)
  let compIdx = 0,
    studIdx = 0
  while (studIdx < stud.length && compIdx < comp.length) {
    currentCapacity = comp[compIdx].Number_Of_Students3
    currentCompId = comp[compIdx].id
    while (currentCapacity && studIdx < stud.length) {
      stud[studIdx].comp_id = currentCompId
      studIdx++
      currentCapacity--
    }
    compIdx++
  }
  for (let i=0;i<stud.length;i++){
    ubdatestudent(stud[i].comp_id,stud[i].stud_id)
  }
  return (viewStudent(specialization,'3rd'))
}
export function getForthYear(specialization) {
  const stud4 = sortstudents(specialization, '4th')
  const comp4 = sortcompanies(specialization)
  let compIdx = 0,
    studIdx = 0
  while (studIdx < stud4.length && compIdx < comp4.length) {
    currentCapacity = comp4[compIdx].Number_Of_Students3
    currentCompId = comp4[compIdx].id
    while (currentCapacity && studIdx < stud4.length) {
      stud4[studIdx].comp_id = currentCompId
      studIdx++
      currentCapacity--
    }
    compIdx++
  }
  for (let i=0;i<stud4.length;i++){
    ubdatestudent(stud4[i].comp_id,stud4[i].stud_id)
  }
  return (viewStudent(specialization,'4th'))
}
