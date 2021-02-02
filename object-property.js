const students = [
    {id: 23, name: 'Mahiya mahi'},
    {id: 33, name: 'Joya ahsan'},
    {id: 43, name: 'Purnima khan'},
    {id: 56, name: 'Srabonti khan'}
];

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id > 40);
const bigger2 = students.find(s => s.id > 40);

console.log(bigger2);