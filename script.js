const students = [
  {
    name: 'Fabio',
    testOne: 10,
    testTwo: 9
  },
  {
    name: 'Junior',
    testOne: 8,
    testTwo: 9
  },
  {
    name: 'Izabeli',
    testOne: 6,
    testTwo: 7
  }
]

function calcMedia(testOne, testTwo) {
  return ((testOne + testTwo) / 2)
}

function messageMedia(student) {
  return `A média do(a) aluno(a) ${student.name} é: ${calcMedia(student.testOne, student.testTwo)}`
}

function messageApproved(student) {
  return `Parabéns, ${student.name}! você foi aprovado(a) no curso!`
}

function messagemRepproved(student) {
  return `Não foi dessa vez ${student.name}! tente novamente!`
}

for(let student of students) {
  let studentMedia = messageMedia(student)

  if (calcMedia(student.testOne, student.testTwo) >= 7) {
   alert(`${studentMedia} \n ${messageApproved(student)}`)
  } else {
    alert(`${studentMedia} \n ${messagemRepproved(student)}`)
  }
} 