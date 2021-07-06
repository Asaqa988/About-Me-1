"use strict";


    let name = prompt("Welcome TO Quiz Game Enter Your First Name Please") ; 
    name = name.toUpperCase()
    //console.log("welcome", name)
    alert("welcome" + "  " + name)
// Q1
    
    let answer1 = prompt("Do you Think I'm Noob in software Devlopment Field  Answer with YES Or NO Y/N")
     //console.log("No will be Correct / yes will be Wrong")
    answer1 = answer1.toLowerCase()

    switch (answer1) {
        case 'yes':
            alert("wrong answer ") //i have been coding for 1 year with python Django Framework =)
            break;
        case 'no':
            alert(" Correct answer")
            break;
        case 'y':
            alert("wrong answer")
            break;
        
        case 'n':
            alert(" Correct answer")
            break;
    
        default:
            alert("you sould answer with YES/No OR Y/N")
            ShowMessage()
            break;
    }

    // Q2

    let answer2 = prompt("Do You Think JAVASCRIPT is a cool lang")
    //console.log("No will be Correct / yes will be Wrong")
    
    answer2 = answer2.toLowerCase()


    
    switch (answer2) {
        case 'yes':
            alert("Correct answer ") 
            break;
        case 'no':
            alert(" Wrong answer")
            break;
        case 'y':
            alert("Correct answer")
            break;
        
        case 'n':
            alert(" Wrong answer")
            break;
    
        default:
            alert("you sould answer with YES/No OR Y/N")
            ShowMessage()
            break;
    }

    // Q3

        let answer3 = prompt("Do you think QA is A hard Carrer")
        //console.log("No will be Correct / yes will be Wrong")
        answer3 = answer3.toLowerCase()
    
    
        
        switch (answer3) {
            case 'yes':
                alert("wrong answer ") 
                break;
            case 'no':
                alert(" Correct answer")
                break;
            case 'y':
                alert("wrong answer")
                break;
            
            case 'n':
                alert(" Correct answer")
                break;
        
            default:
                alert("you sould answer with YES/No OR Y/N")
                ShowMessage()
                break;
        }


    // Q4

    let answer4 = prompt("Do you believe that we evolved from animals?")
    //console.log("No will be Correct / yes will be Wrong")
    answer4 = answer4.toLowerCase()


    
    switch (answer4) {
        case 'yes':
            alert("Correct answer ") 
            break;
        case 'no':
            alert(" Wrong answer")
            break;
        case 'y':
            alert("Correct answer")
            break;
        
        case 'n':
            alert(" Wrong answer")
            break;
    
        default:
            alert("you sould answer with YES/No OR Y/N")
            ShowMessage()
            break;
    }


    // Q5

        let answer5 = prompt("Do you Think JAVASCRIPT is my first programming lang")
        //console.log("No will be Correct / yes will be Wrong")
        answer5 = answer5.toLowerCase()
    
    
        
        switch (answer5) {
            case 'yes':
                alert("wrong answer ") 
                break;
            case 'no':
                alert(" Correct answer")
                break;
            case 'y':
                alert("wrong answer")
                break;
            
            case 'n':
                alert(" Correct answer")
                break;
        
            default:
                alert("you sould answer with YES/No OR Y/N")
                ShowMessage()
                break;
        }


    /**
     * !we can use If statmen also Here's the Code if you wanna switch it 
     ** if (answer === 'yes' && answer ==='y') {
     **  alert("Correct answer")
     ** } else if (answer === 'no' && answer ==='n'){
     **    alert(" Wrong answer")
     ** And it's better to use Array here and Loop through it 
    }
     */

   

