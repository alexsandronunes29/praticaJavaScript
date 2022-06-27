function comparaParamentros(primeiroNumero,segundoNumero){
    
    const primeiraFrase=criaPrimeiraFrase(primeiroNumero,segundoNumero)
    const segundaFrase=craiaSegundaFrase(primeiroNumero,segundoNumero)
    return `${primeiraFrase} ${segundaFrase}`
}
function criaPrimeiraFrase(primeiroNumero,segundoNumero){
    let saoIguais='';

    if(primeiroNumero !== segundoNumero){
        saoIguais='não';

    }
    return `Os numeros ${primeiroNumero} e ${segundoNumero}  ${saoIguais} são iguais.`
}

function craiaSegundaFrase(primeiroNumero,segundoNumero){
    const soma= primeiroNumero+segundoNumero;

    let result10='menor';
    let result20='menor';
    const compara10= soma>10;
    const compara20=soma>20;
    if(compara10){
        result10='maior';
    }
    if (compara20){
        result20='maior';
    }
    return `Sua soma é ${soma}, que é ${result10} que 10 e ${result20} que 20`;
}
console.log(comparaParamentros(8,8));