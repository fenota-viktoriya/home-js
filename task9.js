// todo Коллекция курсов (includes, indexOf, push и т. д.)

/*
 * Напишите функции для работы с коллекцией обучающих курсов courses:
* addCourse(name) - добавляет курс в конец коллекции
* removeCourse(name) - удаляет курс из коллекции
* updateCourse(oldName, newName) - изменяет имя на новое
 */

const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];
function  addCourse(name) {
for( const course of courses) {
if (name === course){
    console.log('У вас уже есть такой курс');
return;}                     

} courses.push(name);
return courses;
}

addCourse('Express')
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
addCourse('CSS');

function removeCourse(name) {
    for (const course of courses)
    {
        if(name === course) {
     name = courses.indexOf(name);
     courses.splice(name, 1);
    return;
            
        }}

        console.log('Курс с таким именем не найден');        
}
removeCourse('React');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
removeCourse('Vue'); // 'Курс с таким именем не найден'
 
 function updateCourse(oldName, newName) {
    for (const course of courses)
    {
        if(oldName === course) {
     oldName = courses.indexOf(oldName);
     courses.splice(oldName, 1, newName);
    return;       
        }}
    
 }
   
updateCourse('Express', 'NestJS');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']