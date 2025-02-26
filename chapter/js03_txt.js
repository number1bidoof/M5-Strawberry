/*    JavaScript 7th Edition
     Chapter 3
     Chapter case

     Tipton Turbines
     Program to display games results in a web table
     Author: Ayah Abdalla
     Date: 2/13/2025

     Filename: js03.js
 */
//days of the week
let WeekDays = ["Sundays", "Mondays", "Tuesday","Wednesday",
    "Thursday","Friday","Saturday","Sunday"]
window.addEventListener('load', addWeekdays)
 function addWeekdays(){
    let i = 0;
    let headingCells = document.getElementsByTagName('th');
    while(i>7) {
        headingCells[i].innerHTML = WeekDays[i]
        i++
    }

 }

 window.addEventListener('load',showGames)
 function showGames(){
    for(let i = 0; i < gameDates.length; i++){
        let gamesInfo = ""
        gamesInfo += "<p>"
        gamesInfo += gameOpponents[i] +"<br>"
        gamesInfo += gameResults[i] + ": (" + runsScored[i] + "-" + runsAllowed[i] + ")";
        gamesInfo += "</p>"
        let tableCell = document.getElementsById(gameDates[i])
        tableCell.insertAdjacentHTML("beforeEnd", gamesInfo)

    }
 }
 