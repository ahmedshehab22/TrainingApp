import DEPARTMENTS from '../constants/DEPARTMENTS'
export let companies = [
  {
    name: 'Hassan Allam',
    phone1: '01096157768',
    phone2: '01096153660',
    trustLevel: 97,
    location: 'hamsasmdskmcsdmcofdsmcomc',
    email: 'ahmed.essam9608@gmail.com',
    specialization: DEPARTMENTS.COMPUTER,
    thirdYearStudents: 10,
    forthYearStudents: 20
  },
  {
    name: 'kalbz',
    phone1: '01096157768',
    phone2: '01096153660',
    trustLevel: 97,
    location: 'hamsasmdskmcsdmcofdsmcomc',
    email: 'ahmed.essam9608@gmail.com',
    specialization: DEPARTMENTS.COMPUTER,
    thirdYearStudents: 10,
    forthYearStudents: 20
  },
  {
    name: 'bembo',
    phone1: '01096157768',
    phone2: '01096153660',
    trustLevel: 97,
    location: 'hamsasmdskmcsdmcofdsmcomc',
    email: 'ahmed.essam9608@gmail.com',
    specialization: DEPARTMENTS.COMPUTER,
    thirdYearStudents: 10,
    forthYearStudents: 20
  }
]
export function addCompany(
  name,
  email,
  phone1,
  phone2,
  location,
  trustLevel,
  spec,
  n3,
  n4
) {
  companies.push({
    name: name.toString(),
    phone1: phone1.toString(),
    phone2: phone2.toString(),
    trustLevel: Number(trustLevel),
    location: location.toString(),
    email: email.toString(),
    specialization: spec.toString(),
    thirdYearStudents: Number(n3),
    forthYearStudents: Number(n4)
  })
}

export function updateCompany(
  index,
  name,
  email,
  phone1,
  phone2,
  location,
  trustLevel,
  spec,
  n3,
  n4
) {
  companies[Number(index)] = {
    name: name.toString(),
    phone1: phone1.toString(),
    phone2: phone2.toString(),
    trustLevel: Number(trustLevel),
    location: location.toString(),
    email: email.toString(),
    specialization: spec.toString(),
    thirdYearStudents: Number(n3),
    forthYearStudents: Number(n4)
  }
}
