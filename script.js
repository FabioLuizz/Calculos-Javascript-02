const students = [
  {
    name: 'Fabio',
    provaOne: 10,
    provaTwo: 9
  },
  {
    name: 'Junior',
    provaOne: 8,
    provaTwo: 9
  },
  {
    name: 'Izabeli',
    provaOne: 6,
    provaTwo: 7
  }
]

function calcMedia(provaOne, provaTwo) {
  return ((provaOne + provaTwo) / 2)
}

function messageMedia(student) {
  return `A média do(a) aluno(a) ${student.name} é: ${calcMedia(student.provaOne, student.provaTwo)}`
}

function messageApproved(student) {
  return `Parabéns, ${student.name}! você foi aprovado(a) no curso!`
}

function messagemRepproved(student) {
  return `Não foi dessa vez ${student.name}! tente novamente!`
}

for(let student of students) {
  let studentMedia = messageMedia(student)

  if (calcMedia(student.provaOne, student.provaTwo) >= 7) {
   alert(`${studentMedia} \n ${messageApproved(student)}`)
  } else {
    alert(`${studentMedia} \n ${messagemRepproved(student)}`)
  }
} 