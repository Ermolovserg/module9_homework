const string = `{
    "list": [
      {
        "name": "Petr",
        "age": "20",
        "prof": "mechanic"
      },
      {
        "name": "Vova",
        "age": "60",
        "prof": "pilot"
      }
    ]
  }`;
  
  const data = JSON.parse(string);
  
  console.log(data);