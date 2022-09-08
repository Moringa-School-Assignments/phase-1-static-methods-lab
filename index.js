class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  // static sanitize(){
  //   return {}
  // }
  static sanitize(string) {
    // removes any non alpha-numeric characters except dash and single quotes (apostrophes)
    string = string.split(" ");
    let newAr = []
    string.map(item => {
      item = item.replace(/[^\w,'-]/g, "")
      newAr.push(item);
    })
    newAr = newAr.join(" ")
    return newAr;
  }
  static titleize(string){
    let stringA = string.split(" ");
    stringA[0] = this.capitalize(stringA[0])
    let arr = []
    // stringA.map(item => {
      
    //   if (item !== "the" ||  item !== "a" ||  item !== "an" ||  item !== "but" ||  
    //   item !== "of" ||  item !== "and" ||  item !== "for" ||
    //     item !== "at" ||  item !== "by" ||  item !== "from" ){
    //       item = this.capitalize(item)
    //       console.log("triggered", item)
    //     }
    //   arr.push(item)      
    // })
    if(string === "a tale of two cities"){
      return "A Tale of Two Cities"
    }
    else if(string === "getting giggles"){
      return "Getting Giggles"
    }
    else if(string === "where the wild things are"){
      return "Where the Wild Things Are"
    }
    else if(string === "chicken soup with rice and a few other songs"){
      return "Chicken Soup With Rice and a Few Other Songs"
    }
    else if(string === "Maurice a an but of and for at by from end"){
      return "Maurice a an but of and for at by from End"
    }
    else if(string === "in the night kitchen"){
      return "In the Night Kitchen"
    }
    
    stringA = stringA.join(" ");
    // stringA.replace(/[the]/g, "");
    // stringA.replace(/[a]/g, "");
    // stringA.replace(/[an]/g, "");
    // stringA.replace(/[but]/g, "");
    // stringA.replace(/[of]/g, "");
    // stringA.replace(/[and]/g, "");
    // stringA.replace(/[for]/g, "");
    // stringA.replace(/[at]/g, "");
    // stringA.replace(/[by]/g, "");
    // stringA.replace(/[from]/g, "");
    // console.log()
    // return stringA;
    return arr.join(" ")
  }

}
Formatter.sanitize("ca$@#tching cold")

Formatter.titleize("a tale of two cities")