function show_grade() {
    let your_score = yourResult.value
    let my_music
    if (your_score >= 70 && your_score <= 100)
        myScreen.innerHTML = 'A'

    else if(your_score >= 60 && your_score <= 69)
        myScreen.innerHTML ='B'

    else if(your_score >= 50 && your_score <= 59)
        myScreen.innerHTML ='C'

    else if(your_score >= 45 && your_score <= 49)
        myScreen.innerHTML ='D'

    else if(your_score >= 40 && your_score <= 44)
        myScreen.innerHTML ='E'

    else if(your_score >= 0 && your_score <=39)
        myScreen.innerHTML ='F'

    else{
        myScreen.innerHTML = 'Unavailable'
    }
}