function capitalize(string){
 let firstLetter = string.chartAt(0)
 const firstLetterCap = firstLetter.capitalize()   
 let restOfString = string.slice(0,1)

 let result = ''

 if(string.chartAt(0) === " "){
    result = firstLetterCap.concat(' ',restOfString)
 }else{
     result = result = firstLetterCap.concat(restOfString)
 }

}