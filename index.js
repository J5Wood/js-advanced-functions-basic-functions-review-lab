function saturdayFun(activity = "roller-skate") {
    return "This Saturday, I want to " + activity + "!";
}

function mondayWork(activity = "go to the office") {
    return "This Monday, I will " + activity + ".";
}

function wrapAdjective(outerParam = "*") {
    return function(innerParam = "Special") {
        return "You are " + outerParam + innerParam + outerParam + "!";
    }
}

const Calculator = {
    add: () =>  1 + 3,
    subtract: () =>  1 - 3,
    multiply: () =>  1 * 3,
    divide: () =>  10 / 5
}

function actionApplyer(start, functions) {
    functions.map(function(func) {
        start = func(start)
    })
    return start;
}

