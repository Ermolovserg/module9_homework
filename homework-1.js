const parser = new DOMParser();

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const studentEl = xmlDOM.querySelectorAll("student");

const resultList = [];

studentEl.forEach(function(studentEl) {
  const name = studentEl.querySelector("name");
  const firstName = name.querySelector("first").textContent;
  const secondName = name.querySelector("second").textContent;
  const age = studentElement.querySelector("age").textContent;
  const prof = studentElement.querySelector("prof").textContent;
  const lang = name.getAttribute('lang');
  
  const studentObject = {
    name: `${firstName} ${secondName}`,
    age: parseInt(age),
    prof: prof,
    lang: lang
  };
  resultList.push(studentObject);
});

const resultObject = { list: resultList };

console.log(resultObject);