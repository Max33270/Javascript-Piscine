const clone1 = Object.assign({},person)
const clone2 = Object.assign({},person)
const samePerson = person 

person.age = samePerson.age + 1
person.country = 'FR'
