function introduction(name) {
    return `Hi, my name is ${name}.`;
}
// introduction("Aki") ;

function introductionWithLanguage ( name, language = "JavaScript"){

const message = `Hi, my name is ${name} and I am learning to program in ${language}.`
return message;
}
introductionWithLanguage ("Gracie", "JavaScript")

function introductionWithLanguageOptional ( name , language = "JavaScript"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
introductionWithLanguageOptional ("Gracie", "JavaScript")
