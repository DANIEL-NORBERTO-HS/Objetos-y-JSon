/*Autor: Daniel Norberto Hernández Santiago Num.ctrl: 18390015
JSON{
  "data": [{
    "type": "articles",
    "id": "1",
    "attributes": {
      "title": "JSON:API paints my bikeshed!",
      "body": "The shortest article. Ever.",
      "created": "2015-05-22T14:56:29.000Z",
      "updated": "2015-05-22T14:56:28.000Z"
    },
    "relationships": {
      "author": {
        "data": {"id": "42", "type": "people"}
      }
    }
  }],
  "included": [
    {
      "type": "people",
      "id": "42",
      "attributes": {
        "name": "John",
        "age": 80,
        "gender": "male"
      }
    }
  ]
}
*///Ejercicio 4
let objetomain = new Object;
objetomain.data =new Array;
objetomain.data[0] = new Object;
objetomain.data[0].type ="articles";
objetomain.data[0].id ="1";
objetomain.data[1] = new Object;
objetomain.data[1].attributes= new Object;
objetomain.data[1].attributes.title="JSON:API paints my bikeshed!";
objetomain.data[1].attributes.body="The shortest article. Ever.";
objetomain.data[1].attributes.created="2015-05-22T14:56:29.000Z";
objetomain.data[1].attributes.updated="2015-05-22T14:56:28.000Z";
objetomain.data[2] = new Object;
objetomain.data[2].relationships = new Object;
objetomain.data[2].relationships.author =new Object;
objetomain.data[2].relationships.author.data = "id", "42", "type","people";

let inclusive = new Object;
inclusive.included = new Array;
inclusive.included[0] = new Object;
inclusive.included[0].type = "people";
inclusive.included[0].id = "42";
inclusive.included[1] = new Object;
inclusive.included[1].attributes = new Object; 
inclusive.included[1].attributes.name = "John";
inclusive.included[1].attributes.age = 80;
inclusive.included[1].attributes.gender = "male";

//se imprimen los datos de los objetos
console.log(objetomain,objetomain.data);
console.log(inclusive,inclusive.included,"}");
