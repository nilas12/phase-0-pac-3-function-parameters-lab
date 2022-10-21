function introduction(name) {
    return `Hi, my name is ${name}.`
    }

 console.log(introduction("Aki"))
 function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
 }
 console.log(introduction("Aki","Ember.js"))

 function introductionWithLanguageOptional(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
 }
 console.log(introduction("Gracie","JavaScript"))
 function introductionWithLanguageOptional(name, language='JavaScript'){
 
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
 }

 console.log(introduction("Gracie","JavaScript"))