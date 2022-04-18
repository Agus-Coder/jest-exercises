const reverseString = function(str) {
    const palabrasSeparadas = str.split(' ');
    
    const largo = palabrasSeparadas.length;

    const resultado = [];

    for (let i = (largo - 1) ;  i>=0 ; i-- ) {
        
        let newText = palabrasSeparadas[i].toString();
        let newArray =newText.split('');
        let inversedArray = newArray.reverse();
        let finalText = inversedArray.join('');
        resultado.push(finalText);

    }

    return resultado.join(' ');
    
};

module.exports = reverseString;
