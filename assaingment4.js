function calculateMoney(ticketSale){
    if (ticketSale < 0 || Number.isInteger(ticketSale) == false) {
        const invalidAnswer = "Invalid Number"
        return invalidAnswer
    }else{
        const answer = (ticketSale * 120) - (500 + (8 * 50))
        return answer
    }     
}

function checkName(name){
    if (typeof name  === "string") {
        const lastLetter = name.toLowerCase().charAt(name.length -1);
        if (lastLetter == 'a' || lastLetter == 'y' || lastLetter == 'i' ||lastLetter == 'e' || lastLetter == 'o' || lastLetter == 'u' || lastLetter == 'w') {
            return "Good Name"
        } else {
            return "Bad Name"
        }
    } else {
        return 'invalid'
    }
}

function deleteInvalids(array) {
    if (Array.isArray(array)) {
        return getNumber = array.filter(item => typeof item === 'number' && !isNaN(item))
    } else {
        return "Invalid Array"
    }
}  

function password(obj) {
    const firstLetter = obj.siteName != undefined ? obj.siteName.charAt(0) : 'invailed';
    const change = firstLetter.toUpperCase();
    const siteName = obj.siteName != undefined ? obj.siteName.replace(firstLetter, change): 'invailed';
    const birthlength = obj.birthYear.toString().length

    if (obj.name === undefined || obj.birthYear === undefined || obj.siteName === undefined || birthlength > 4 || birthlength < 4) {
        return 'invalid'
    } else {
        return siteName+'#'+obj.name+'@'+obj.birthYear+"<br/>"
    }
}
      
function monthlySavings(arr , livingCost){
    if ( !Array.isArray(arr) && typeof livingCost != 'number') {
        return 'invalid input'
    } else {
        
        let sum = 0
        let sumupper = 0
        let sumlower = 0
        for (const array of arr) {
            if (typeof array != 'number') {
                return 'your income in not a '+typeof array
            } else if(array >= 3000){
                let getText = (array / 100) * 80
                sumupper += getText
            }else{
                sumlower = array < 3000? sumlower += array : sumlower += 0
            }

        }
         sum = sumlower + sumupper
        if (sum - livingCost < 0) {
            return  'earn more'
        } else {
            return sum - livingCost
        }
    }
}

