const text = "Hola que tal, soy un programador! y como tal quiero programar como lo hizo Mark."
function normal(word){
    return word.replace(/,|\.|;|!/g,'')
}
function DuplicateWordOnText (txt){
    // dicionario
    let dic = {};
    
    let arr=text.split(" ");
   
    arr.map(word=>{
      if(normal(word) in dic){
          dic[normal(word)]++
      }else{
        dic[normal(word)]=1;
      }
    })

    console.log(dic)
}

DuplicateWordOnText(text)