// // ### Problem 1:
// // Create a GitHubRepository class with properties userName, fileName, descriptionOfRepository, and code. Create a function that prints all properties. Create an object of the class and use the function.
// class GitHubRepository {
//     constructor(userName, fileName, descriptionofRepository, code) {
//         this.userName = userName;
//         this.fileName = fileName;
//         this.descriptionofRepository = descriptionofRepository;
//         this.code = code;
//     }
//     printProperties() {
//         console.log(`Name: ${this.userName},
//          File: ${this.fileName},
//          Description ${this.descriptionofRepository}, 
//          Code:${this.code}`)
//     }
// }
// let gitClass = new GitHubRepository("Charles", "JavaScript File", "JS Classwork", "JavaScript") // !! don't forget your line terminators
// gitClass.printProperties() // !! don't forget your line terminators

// // ### Problem 2:
// // Create a Movie class with the following properties: movieName, rating, and yearReleased.
// class Movie {
//     constructor(movieName, rating, yearReleased) {
//         this.movieName = movieName;
//         this.rating = rating;
//         this.yearReleased = yearReleased
//     }
//     changeRating(newRating) { // !! I wanted you to use prompt in both but I see how the directions are kinda vauge about that, great job using params
//         this.rating = newRating;
//     }
//     changeyearReleased() {
//         let newYear = prompt("Enter New Year")
//         this.yearReleased = newYear
//     }
// }
// let newMovie = new Movie("Superfly", "5 Stars", "1972")
// console.log(newMovie)
// newMovie.changeRating("10 Stars")
// newMovie.changeyearReleased()
// console.log(newMovie)
// // Create a method to change the rating and another one to change the yearReleased properties using prompt. Create an object of the class and use the two methods you created.

// // ### Problem 3:
// // Create a Student class with the following properties : studentName, codeSchoolCohort, and grades(grades should be an array of objects and each object should have the properties assignemtName and assignemtnScore).

// class Student {
//     constructor(studentName, codeSchoolCohort) {
//         this.studentName = studentName
//         this.codeSchoolCohort = codeSchoolCohort
//         this.grades = []
//     }
//     acceptStudentname(newStudent) {
//         this.studentName = newStudent
//     }
//     nameScore(assignemtName, assignemtnScore) {
//         this.grades = assignemtName, assignemtnScore // !! you shoul be using object literal notation to define a new item in the grades array (see HINT in read me)
//     }
// }
// let newStudent = ("Priest", "Class of '75", "5") // !! you have to use the NEW keyword and the NAME of your class to create a new instance of a class
// newStudent.studentName("John Shaft")
// // let student1=("Mr.T", "Class of 74",  )
// // !! would have liked to see a correctly created instance for partial credit

// Create a method that accepts a student name and updates the studentName of an instance of your Student Class. Create a method that accepts an assignment name and assignment score and adds a grade object to the grades array. Create two instances of this class with empty grade arrays. Update the name of one instance of the Student Class using the class method. Add one grade object to each instance of the Student Class grade array using the class method.

// HINT : use object literal notation to create a grade object in the grade array for each instance of the Student Class

// ### Challenge 1:
// Create a Person class with three properties: name, weight, and height. Create a method that can calculate the BMI of a person using the formula below. Create an object of the class and use the function.

// BMI is  (weight / (height * height)) x 703. Weight is in pounds and height is in inches.

// ### Challenge 2:
// Create a Bank class with the the name and balance properties. Afterwards, create an object of the class and follow the instructions below:
// - Creates an account named "Matt's account" with the balance of 1000
// - Creates an account named "My account" with the balance of 0
// - Withdraws 100.0 from Matt's account
// - Deposits 100.0 to My account
// - Prints both accounts
