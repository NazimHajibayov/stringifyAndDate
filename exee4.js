let customJSON = {
    stringify (parameters) {
      let jsonFormat='';
      if (typeof(parameters) === "object" && parameters != null) {
        for (keys in parameters ) {
          if(parameters[keys] === undefined){
            continue;
          }
          typeof(parameters[keys]) == "string" ? (jsonFormat += `\"${keys}\":\"${parameters[keys]}\",`) : (jsonFormat += `\"${keys}\":${parameters[keys]},`);
        }
        jsonFormat = jsonFormat.split("");
        jsonFormat.splice(-1, 1);
        jsonFormat = jsonFormat.join("");
        return `{${jsonFormat}}`;
      }
      return typeof parameters === "string" ? `\"${parameters}\"` : parameters;
    },
  };
  
  let obj = {
    name: "cart",
    surname: "curt",
    age: 25,
    where: undefined
  };
  
   console.log(customJSON.stringify(obj));
  console.log(JSON.stringify(obj))