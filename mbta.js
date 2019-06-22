// 1. the first thing i did is put the lines and stations in an array, i did the Red line for test
const Red =  ['Alewife','Davis','Porter','Harvard','Central','Kendall','Park street','South station']; 
const Green = [];
const Orange = [];

const NumOfStops = function() { 

    for(let i = 0;i<Red.length;i++){  // here i did for loop to iterate through the array and print each station just for a test. 
        console.log(Red[i]);
    }
    
} 


// i realised that if i do each LineName array seperatley it would be confusing, so i created an object and within the object there will be the lines and their stations name in an arry  

const LinesAndTrains = {
    Red : [
        'South station',
        'Park street',
        'Kendall',
        'Central',
        'Harvard',
        'Porter',
        'Davis',
        'Alewife'
    ],
    Green : [
        'Government center',
        'Park street',
        'Boylston',
        'Arlington',
        'Copley',
        'Hynes',
        'Kenmore'
    ],
    Orange : [
        'North station',
        'Haymarket',
        'Park street',
        'State',
        'Downtown crossing',
        'Chinatown',
        'Back bay',
        'Forest hills'
    ]
}

// this a function that takes Startline , StartStation , EndLine and EndStation as parameters
 const NumberOfStopsBetweenStations = function(Startline, StartStation, EndLine, EndStation) {

    if (Startline === EndLine && StartStation === EndStation ) { // the first condition checks if everythings the same (the lines and the station names) , if its true , then it'll return There is no stops 
        return 'There is no stops'
    }
    else if(Startline === EndLine){ // this condition will only check if the start and end line are the same , if they are, then it will calcaulate the number of stops between the given station within the same line
        return ` There are/is ${Math.abs(LinesAndTrains[EndLine].indexOf(EndStation) - LinesAndTrains[Startline].indexOf(StartStation))} stop/s` // using the math.abs method which will return the absolute value of a number and will go to the index of the startstation the user inputed , then it will subtract it from the endstation.
    }

    else {
        // this code should excute the part about park street intersection 
    }


 }