let score = 65
switch (true) {
    
    case (score>=90):
       console.log( "Grade: A")
        break;
    case (score>= 80 && score<= 89):
       console.log( "Grade: B")
        break;
    case (score>= 70 && score<= 79):
       console.log( "Grade: c")
        break;
    case (score>= 60 && score<= 69):
       console.log( "Grade: d")
        break;
    default:
        console.log( "Grade: f")
        break;
}