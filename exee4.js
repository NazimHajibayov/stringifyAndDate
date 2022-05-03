let customJSON = {
    stringify (obj) {
      let jsonFormat='';

      if (typeof(obj) === "object" && obj != null) {
        for (keys in obj ) {

          if(obj[keys] === undefined){
            continue;
          }

          typeof(obj[keys]) == "string" ? jsonFormat += `\"${keys}\":\"${obj[keys]}\",` : jsonFormat += `\"${keys}\":${obj[keys]},`;
        }

        jsonFormat = jsonFormat.split("");
        jsonFormat.splice(-1, 1);
        jsonFormat = jsonFormat.join("");

        return `{${jsonFormat}}`;
      }

      return typeof obj === "string" ? `\"${obj}\"` : obj;
    },
  };

  let obj = {
    name: "cart",
    surname: "curt",
    age: 25,
    where: undefined
  };

  const resultStringify = customJSON.stringify(obj);

  console.log(resultStringify);
  console.log(JSON.stringify(obj));