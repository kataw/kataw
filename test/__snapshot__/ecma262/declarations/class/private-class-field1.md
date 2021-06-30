# Kataw parser test case

## Input

`````js
class C {
  #p: number
  #q: number
  constructor() {
    this.#p = 0; // in scope
    this.#q; // in scope
  }
  test(other: C) {
    other.#q; // in lexical scope, object has the property.
  }
}

class Outer {
 #outer: number
 constructor() {
   var Inner = class A {
      #inner: Outer
      constructor() {
        this.#inner = new Outer();
        var x = new Outer();
        x.#outer = 0; // Both inner and outer should be visible here!
        x.#inner = new Outer(); // Error, #inner is not a private field of Outer
      }
   };
 }
}

class Annotations {
  // Private class fields must either be annotated or have an initializer
  #p: number;
  #q = 0;
  #r;
  #s: string = 0; // Error, number ~> string
  #t: string = "yay!";
  static #sp: number;
  static #sq = 0;
  static #sr;
  static #ss: string = 0; // Error, number ~> string
  static #st: string = "yay!";
  test1(): number {
    return this.#p;
  }
  test2(): number {
    return this.#t; // Error, string ~> number
  }
  test3(): number {
    return Annotations.#sp;
  }
  test4(): number {
    return Annotations.#st; // Error, string ~> number
  }
  test5(): number {
    return this.#r;
  }
  test6(): string {
    return this.#r; // Error, number ~> string
  }
  test5And6Helper() {
    this.#r = 3;
  }
  test7(): number {
    return Annotations.#sr;
  }
  test8(): string {
    return Annotations.#sr; // Error, number ~> string
  }
  test7And9Helper() {
    Annotations.#sr = 3;
  }
}
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "#p",
                                "rawText": "#p",
                                "flags": 96,
                                "start": 9,
                                "end": 14
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234345,
                                    "flags": 2097216,
                                    "start": 15,
                                    "end": 22
                                },
                                "flags": 2097152,
                                "start": 15,
                                "end": 22
                            },
                            "initializer": null,
                            "flags": 32,
                            "start": 9,
                            "end": 22
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "#q",
                                "rawText": "#q",
                                "flags": 96,
                                "start": 22,
                                "end": 27
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234345,
                                    "flags": 2097216,
                                    "start": 28,
                                    "end": 35
                                },
                                "flags": 2097152,
                                "start": 28,
                                "end": 35
                            },
                            "initializer": null,
                            "flags": 32,
                            "start": 22,
                            "end": 35
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 96,
                                    "start": 35,
                                    "end": 49
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 2048,
                                    "start": 50,
                                    "end": 51
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 4276321,
                                                            "flags": 97,
                                                            "start": 53,
                                                            "end": 62
                                                        },
                                                        "expression": {
                                                            "kind": 67191035,
                                                            "text": "#p",
                                                            "rawText": "#p",
                                                            "flags": 96,
                                                            "start": 63,
                                                            "end": 65
                                                        },
                                                        "flags": 97,
                                                        "start": 53,
                                                        "end": 65
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 96,
                                                        "start": 65,
                                                        "end": 67
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 0,
                                                        "rawText": "0",
                                                        "flags": 96,
                                                        "start": 67,
                                                        "end": 69
                                                    },
                                                    "flags": 32,
                                                    "start": 53,
                                                    "end": 69
                                                },
                                                "flags": 16,
                                                "start": 53,
                                                "end": 70
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 4276321,
                                                        "flags": 97,
                                                        "start": 70,
                                                        "end": 91
                                                    },
                                                    "expression": {
                                                        "kind": 67191035,
                                                        "text": "#q",
                                                        "rawText": "#q",
                                                        "flags": 96,
                                                        "start": 92,
                                                        "end": 94
                                                    },
                                                    "flags": 97,
                                                    "start": 70,
                                                    "end": 94
                                                },
                                                "flags": 16,
                                                "start": 70,
                                                "end": 95
                                            }
                                        ],
                                        "flags": 33,
                                        "start": 53,
                                        "end": 95
                                    },
                                    "flags": 32,
                                    "start": 51,
                                    "end": 111
                                },
                                "flags": 2048,
                                "start": 49,
                                "end": 111
                            },
                            "flags": 2048,
                            "start": 35,
                            "end": 111
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "test",
                                    "rawText": "test",
                                    "flags": 96,
                                    "start": 111,
                                    "end": 118
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [
                                        {
                                            "kind": 281,
                                            "ellipsisToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "other",
                                                "rawText": "other",
                                                "flags": 96,
                                                "start": 119,
                                                "end": 124
                                            },
                                            "optionalToken": null,
                                            "type": {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 144,
                                                    "typeName": {
                                                        "kind": 134299649,
                                                        "text": "C",
                                                        "rawText": "C",
                                                        "flags": 96,
                                                        "start": 125,
                                                        "end": 127
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 2097152,
                                                    "start": 125,
                                                    "end": 127
                                                },
                                                "flags": 2097152,
                                                "start": 125,
                                                "end": 127
                                            },
                                            "right": null,
                                            "flags": 32,
                                            "start": 119,
                                            "end": 127
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 119,
                                    "end": 128
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 134299649,
                                                        "text": "other",
                                                        "rawText": "other",
                                                        "flags": 96,
                                                        "start": 130,
                                                        "end": 140
                                                    },
                                                    "expression": {
                                                        "kind": 67191035,
                                                        "text": "#q",
                                                        "rawText": "#q",
                                                        "flags": 96,
                                                        "start": 141,
                                                        "end": 143
                                                    },
                                                    "flags": 96,
                                                    "start": 130,
                                                    "end": 143
                                                },
                                                "flags": 16,
                                                "start": 130,
                                                "end": 144
                                            }
                                        ],
                                        "flags": 33,
                                        "start": 130,
                                        "end": 144
                                    },
                                    "flags": 32,
                                    "start": 128,
                                    "end": 194
                                },
                                "flags": 0,
                                "start": 118,
                                "end": 194
                            },
                            "flags": 0,
                            "start": 111,
                            "end": 194
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 194
                },
                "flags": 7,
                "start": 32,
                "end": 196
            },
            "flags": 16,
            "start": 0,
            "end": 196
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 196,
                "end": 203
            },
            "name": {
                "kind": 134299649,
                "text": "Outer",
                "rawText": "Outer",
                "flags": 96,
                "start": 203,
                "end": 209
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "#outer",
                                "rawText": "#outer",
                                "flags": 96,
                                "start": 211,
                                "end": 219
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234345,
                                    "flags": 2097216,
                                    "start": 220,
                                    "end": 227
                                },
                                "flags": 2097152,
                                "start": 220,
                                "end": 227
                            },
                            "initializer": null,
                            "flags": 32,
                            "start": 211,
                            "end": 227
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 96,
                                    "start": 227,
                                    "end": 240
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 2048,
                                    "start": 241,
                                    "end": 242
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 155,
                                                "declareKeyword": null,
                                                "varKeyword": {
                                                    "kind": 37757002,
                                                    "flags": 81,
                                                    "start": 244,
                                                    "end": 251
                                                },
                                                "declarationList": {
                                                    "kind": 156,
                                                    "declarations": [
                                                        {
                                                            "kind": 157,
                                                            "binding": {
                                                                "kind": 134299649,
                                                                "text": "Inner",
                                                                "rawText": "Inner",
                                                                "flags": 96,
                                                                "start": 251,
                                                                "end": 257
                                                            },
                                                            "type": null,
                                                            "initializer": {
                                                                "kind": 189,
                                                                "decorators": null,
                                                                "classKeyword": {
                                                                    "kind": 37822544,
                                                                    "flags": 64,
                                                                    "start": 259,
                                                                    "end": 265
                                                                },
                                                                "name": {
                                                                    "kind": 134299649,
                                                                    "text": "A",
                                                                    "rawText": "A",
                                                                    "flags": 96,
                                                                    "start": 265,
                                                                    "end": 267
                                                                },
                                                                "typeParameters": null,
                                                                "tail": {
                                                                    "kind": 277,
                                                                    "classHeritage": null,
                                                                    "body": {
                                                                        "kind": 303,
                                                                        "elements": [
                                                                            {
                                                                                "kind": 280,
                                                                                "decorators": null,
                                                                                "declaredToken": null,
                                                                                "staticKeyword": null,
                                                                                "asyncKeyword": null,
                                                                                "key": {
                                                                                    "kind": 134299649,
                                                                                    "text": "#inner",
                                                                                    "rawText": "#inner",
                                                                                    "flags": 96,
                                                                                    "start": 269,
                                                                                    "end": 282
                                                                                },
                                                                                "optionalToken": null,
                                                                                "type": {
                                                                                    "kind": 139,
                                                                                    "bitwiseOrToken": null,
                                                                                    "bitwiseAndToken": null,
                                                                                    "type": {
                                                                                        "kind": 144,
                                                                                        "typeName": {
                                                                                            "kind": 134299649,
                                                                                            "text": "Outer",
                                                                                            "rawText": "Outer",
                                                                                            "flags": 96,
                                                                                            "start": 283,
                                                                                            "end": 289
                                                                                        },
                                                                                        "typeParameters": null,
                                                                                        "flags": 2097152,
                                                                                        "start": 283,
                                                                                        "end": 289
                                                                                    },
                                                                                    "flags": 2097152,
                                                                                    "start": 283,
                                                                                    "end": 289
                                                                                },
                                                                                "initializer": null,
                                                                                "flags": 32,
                                                                                "start": 269,
                                                                                "end": 289
                                                                            },
                                                                            {
                                                                                "kind": 278,
                                                                                "declareToken": null,
                                                                                "decorators": null,
                                                                                "staticKeyword": null,
                                                                                "asyncKeyword": null,
                                                                                "setKeyword": null,
                                                                                "getKeyword": null,
                                                                                "asteriskToken": null,
                                                                                "method": {
                                                                                    "kind": 209,
                                                                                    "name": {
                                                                                        "kind": 134299649,
                                                                                        "text": "constructor",
                                                                                        "rawText": "constructor",
                                                                                        "flags": 96,
                                                                                        "start": 289,
                                                                                        "end": 307
                                                                                    },
                                                                                    "typeParameters": null,
                                                                                    "formalParameterList": {
                                                                                        "kind": 214,
                                                                                        "formalParameters": [],
                                                                                        "trailingComma": false,
                                                                                        "flags": 2048,
                                                                                        "start": 308,
                                                                                        "end": 309
                                                                                    },
                                                                                    "returnType": null,
                                                                                    "contents": {
                                                                                        "kind": 216,
                                                                                        "functionStatementList": {
                                                                                            "kind": 217,
                                                                                            "directives": [],
                                                                                            "statements": [
                                                                                                {
                                                                                                    "kind": 120,
                                                                                                    "expression": {
                                                                                                        "kind": 125,
                                                                                                        "left": {
                                                                                                            "kind": 129,
                                                                                                            "member": {
                                                                                                                "kind": 4276321,
                                                                                                                "flags": 97,
                                                                                                                "start": 311,
                                                                                                                "end": 324
                                                                                                            },
                                                                                                            "expression": {
                                                                                                                "kind": 67191035,
                                                                                                                "text": "#inner",
                                                                                                                "rawText": "#inner",
                                                                                                                "flags": 96,
                                                                                                                "start": 325,
                                                                                                                "end": 331
                                                                                                            },
                                                                                                            "flags": 97,
                                                                                                            "start": 311,
                                                                                                            "end": 331
                                                                                                        },
                                                                                                        "operatorToken": {
                                                                                                            "kind": 4125,
                                                                                                            "flags": 96,
                                                                                                            "start": 331,
                                                                                                            "end": 333
                                                                                                        },
                                                                                                        "right": {
                                                                                                            "kind": 210,
                                                                                                            "newKeyword": {
                                                                                                                "kind": 138477661,
                                                                                                                "flags": 96,
                                                                                                                "start": 333,
                                                                                                                "end": 337
                                                                                                            },
                                                                                                            "expression": {
                                                                                                                "kind": 134299649,
                                                                                                                "text": "Outer",
                                                                                                                "rawText": "Outer",
                                                                                                                "flags": 96,
                                                                                                                "start": 337,
                                                                                                                "end": 343
                                                                                                            },
                                                                                                            "argumentList": {
                                                                                                                "kind": 256,
                                                                                                                "elements": [],
                                                                                                                "trailingComma": false,
                                                                                                                "flags": 32,
                                                                                                                "start": 344,
                                                                                                                "end": 344
                                                                                                            },
                                                                                                            "flags": 96,
                                                                                                            "start": 333,
                                                                                                            "end": 345
                                                                                                        },
                                                                                                        "flags": 32,
                                                                                                        "start": 311,
                                                                                                        "end": 345
                                                                                                    },
                                                                                                    "flags": 16,
                                                                                                    "start": 311,
                                                                                                    "end": 346
                                                                                                },
                                                                                                {
                                                                                                    "kind": 155,
                                                                                                    "declareKeyword": null,
                                                                                                    "varKeyword": {
                                                                                                        "kind": 37757002,
                                                                                                        "flags": 81,
                                                                                                        "start": 346,
                                                                                                        "end": 358
                                                                                                    },
                                                                                                    "declarationList": {
                                                                                                        "kind": 156,
                                                                                                        "declarations": [
                                                                                                            {
                                                                                                                "kind": 157,
                                                                                                                "binding": {
                                                                                                                    "kind": 134299649,
                                                                                                                    "text": "x",
                                                                                                                    "rawText": "x",
                                                                                                                    "flags": 96,
                                                                                                                    "start": 358,
                                                                                                                    "end": 360
                                                                                                                },
                                                                                                                "type": null,
                                                                                                                "initializer": {
                                                                                                                    "kind": 210,
                                                                                                                    "newKeyword": {
                                                                                                                        "kind": 138477661,
                                                                                                                        "flags": 96,
                                                                                                                        "start": 362,
                                                                                                                        "end": 366
                                                                                                                    },
                                                                                                                    "expression": {
                                                                                                                        "kind": 134299649,
                                                                                                                        "text": "Outer",
                                                                                                                        "rawText": "Outer",
                                                                                                                        "flags": 96,
                                                                                                                        "start": 366,
                                                                                                                        "end": 372
                                                                                                                    },
                                                                                                                    "argumentList": {
                                                                                                                        "kind": 256,
                                                                                                                        "elements": [],
                                                                                                                        "trailingComma": false,
                                                                                                                        "flags": 32,
                                                                                                                        "start": 373,
                                                                                                                        "end": 373
                                                                                                                    },
                                                                                                                    "flags": 96,
                                                                                                                    "start": 362,
                                                                                                                    "end": 374
                                                                                                                },
                                                                                                                "flags": 16,
                                                                                                                "start": 358,
                                                                                                                "end": 374
                                                                                                            }
                                                                                                        ],
                                                                                                        "flags": 16,
                                                                                                        "start": 358,
                                                                                                        "end": 374
                                                                                                    },
                                                                                                    "flags": 16,
                                                                                                    "start": 346,
                                                                                                    "end": 375
                                                                                                },
                                                                                                {
                                                                                                    "kind": 120,
                                                                                                    "expression": {
                                                                                                        "kind": 125,
                                                                                                        "left": {
                                                                                                            "kind": 129,
                                                                                                            "member": {
                                                                                                                "kind": 134299649,
                                                                                                                "text": "x",
                                                                                                                "rawText": "x",
                                                                                                                "flags": 96,
                                                                                                                "start": 375,
                                                                                                                "end": 385
                                                                                                            },
                                                                                                            "expression": {
                                                                                                                "kind": 67191035,
                                                                                                                "text": "#outer",
                                                                                                                "rawText": "#outer",
                                                                                                                "flags": 96,
                                                                                                                "start": 386,
                                                                                                                "end": 392
                                                                                                            },
                                                                                                            "flags": 96,
                                                                                                            "start": 375,
                                                                                                            "end": 392
                                                                                                        },
                                                                                                        "operatorToken": {
                                                                                                            "kind": 4125,
                                                                                                            "flags": 96,
                                                                                                            "start": 392,
                                                                                                            "end": 394
                                                                                                        },
                                                                                                        "right": {
                                                                                                            "kind": 201392130,
                                                                                                            "text": 0,
                                                                                                            "rawText": "0",
                                                                                                            "flags": 96,
                                                                                                            "start": 394,
                                                                                                            "end": 396
                                                                                                        },
                                                                                                        "flags": 32,
                                                                                                        "start": 375,
                                                                                                        "end": 396
                                                                                                    },
                                                                                                    "flags": 16,
                                                                                                    "start": 375,
                                                                                                    "end": 397
                                                                                                },
                                                                                                {
                                                                                                    "kind": 120,
                                                                                                    "expression": {
                                                                                                        "kind": 125,
                                                                                                        "left": {
                                                                                                            "kind": 129,
                                                                                                            "member": {
                                                                                                                "kind": 134299649,
                                                                                                                "text": "x",
                                                                                                                "rawText": "x",
                                                                                                                "flags": 96,
                                                                                                                "start": 397,
                                                                                                                "end": 455
                                                                                                            },
                                                                                                            "expression": {
                                                                                                                "kind": 67191035,
                                                                                                                "text": "#inner",
                                                                                                                "rawText": "#inner",
                                                                                                                "flags": 96,
                                                                                                                "start": 456,
                                                                                                                "end": 462
                                                                                                            },
                                                                                                            "flags": 96,
                                                                                                            "start": 397,
                                                                                                            "end": 462
                                                                                                        },
                                                                                                        "operatorToken": {
                                                                                                            "kind": 4125,
                                                                                                            "flags": 96,
                                                                                                            "start": 462,
                                                                                                            "end": 464
                                                                                                        },
                                                                                                        "right": {
                                                                                                            "kind": 210,
                                                                                                            "newKeyword": {
                                                                                                                "kind": 138477661,
                                                                                                                "flags": 96,
                                                                                                                "start": 464,
                                                                                                                "end": 468
                                                                                                            },
                                                                                                            "expression": {
                                                                                                                "kind": 134299649,
                                                                                                                "text": "Outer",
                                                                                                                "rawText": "Outer",
                                                                                                                "flags": 96,
                                                                                                                "start": 468,
                                                                                                                "end": 474
                                                                                                            },
                                                                                                            "argumentList": {
                                                                                                                "kind": 256,
                                                                                                                "elements": [],
                                                                                                                "trailingComma": false,
                                                                                                                "flags": 32,
                                                                                                                "start": 475,
                                                                                                                "end": 475
                                                                                                            },
                                                                                                            "flags": 96,
                                                                                                            "start": 464,
                                                                                                            "end": 476
                                                                                                        },
                                                                                                        "flags": 32,
                                                                                                        "start": 397,
                                                                                                        "end": 476
                                                                                                    },
                                                                                                    "flags": 16,
                                                                                                    "start": 397,
                                                                                                    "end": 477
                                                                                                }
                                                                                            ],
                                                                                            "flags": 33,
                                                                                            "start": 311,
                                                                                            "end": 477
                                                                                        },
                                                                                        "flags": 32,
                                                                                        "start": 309,
                                                                                        "end": 534
                                                                                    },
                                                                                    "flags": 2048,
                                                                                    "start": 307,
                                                                                    "end": 534
                                                                                },
                                                                                "flags": 2048,
                                                                                "start": 289,
                                                                                "end": 534
                                                                            }
                                                                        ],
                                                                        "flags": 32,
                                                                        "start": 269,
                                                                        "end": 534
                                                                    },
                                                                    "flags": 267,
                                                                    "start": 32,
                                                                    "end": 539
                                                                },
                                                                "flags": 32,
                                                                "start": 259,
                                                                "end": 539
                                                            },
                                                            "flags": 16,
                                                            "start": 251,
                                                            "end": 539
                                                        }
                                                    ],
                                                    "flags": 16,
                                                    "start": 251,
                                                    "end": 539
                                                },
                                                "flags": 16,
                                                "start": 244,
                                                "end": 540
                                            }
                                        ],
                                        "flags": 33,
                                        "start": 244,
                                        "end": 540
                                    },
                                    "flags": 32,
                                    "start": 242,
                                    "end": 543
                                },
                                "flags": 2048,
                                "start": 240,
                                "end": 543
                            },
                            "flags": 2048,
                            "start": 227,
                            "end": 543
                        }
                    ],
                    "flags": 32,
                    "start": 211,
                    "end": 543
                },
                "flags": 209,
                "start": 32,
                "end": 545
            },
            "flags": 17,
            "start": 196,
            "end": 545
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 545,
                "end": 552
            },
            "name": {
                "kind": 134299649,
                "text": "Annotations",
                "rawText": "Annotations",
                "flags": 96,
                "start": 552,
                "end": 564
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "#p",
                                "rawText": "#p",
                                "flags": 96,
                                "start": 566,
                                "end": 645
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234345,
                                    "flags": 2097216,
                                    "start": 646,
                                    "end": 653
                                },
                                "flags": 2097152,
                                "start": 646,
                                "end": 653
                            },
                            "initializer": null,
                            "flags": 32,
                            "start": 566,
                            "end": 653
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "start": 653,
                            "end": 654
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "#q",
                                "rawText": "#q",
                                "flags": 96,
                                "start": 654,
                                "end": 659
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "start": 661,
                                "end": 663
                            },
                            "flags": 32,
                            "start": 654,
                            "end": 663
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "start": 663,
                            "end": 664
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "#r",
                                "rawText": "#r",
                                "flags": 96,
                                "start": 664,
                                "end": 669
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 664,
                            "end": 669
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "start": 669,
                            "end": 670
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "#s",
                                "rawText": "#s",
                                "flags": 96,
                                "start": 670,
                                "end": 675
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "start": 676,
                                    "end": 683
                                },
                                "flags": 2097152,
                                "start": 676,
                                "end": 683
                            },
                            "initializer": {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "start": 685,
                                "end": 687
                            },
                            "flags": 32,
                            "start": 670,
                            "end": 687
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "start": 687,
                            "end": 688
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "#t",
                                "rawText": "#t",
                                "flags": 96,
                                "start": 688,
                                "end": 720
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "start": 721,
                                    "end": 728
                                },
                                "flags": 2097152,
                                "start": 721,
                                "end": 728
                            },
                            "initializer": {
                                "kind": 201392131,
                                "text": "yay!",
                                "rawText": "\"yay!\"",
                                "flags": 96,
                                "start": 730,
                                "end": 737
                            },
                            "flags": 32,
                            "start": 688,
                            "end": 737
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "start": 737,
                            "end": 738
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 738,
                                "end": 747
                            },
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "#sp",
                                "rawText": "#sp",
                                "flags": 96,
                                "start": 747,
                                "end": 751
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234345,
                                    "flags": 2097216,
                                    "start": 752,
                                    "end": 759
                                },
                                "flags": 2097152,
                                "start": 752,
                                "end": 759
                            },
                            "initializer": null,
                            "flags": 32,
                            "start": 747,
                            "end": 759
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "start": 759,
                            "end": 760
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 760,
                                "end": 769
                            },
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "#sq",
                                "rawText": "#sq",
                                "flags": 96,
                                "start": 769,
                                "end": 773
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "start": 775,
                                "end": 777
                            },
                            "flags": 32,
                            "start": 769,
                            "end": 777
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "start": 777,
                            "end": 778
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 778,
                                "end": 787
                            },
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "#sr",
                                "rawText": "#sr",
                                "flags": 96,
                                "start": 787,
                                "end": 791
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 787,
                            "end": 791
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "start": 791,
                            "end": 792
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 792,
                                "end": 801
                            },
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "#ss",
                                "rawText": "#ss",
                                "flags": 96,
                                "start": 801,
                                "end": 805
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "start": 806,
                                    "end": 813
                                },
                                "flags": 2097152,
                                "start": 806,
                                "end": 813
                            },
                            "initializer": {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "start": 815,
                                "end": 817
                            },
                            "flags": 32,
                            "start": 801,
                            "end": 817
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "start": 817,
                            "end": 818
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 818,
                                "end": 854
                            },
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "#st",
                                "rawText": "#st",
                                "flags": 96,
                                "start": 854,
                                "end": 858
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "start": 859,
                                    "end": 866
                                },
                                "flags": 2097152,
                                "start": 859,
                                "end": 866
                            },
                            "initializer": {
                                "kind": 201392131,
                                "text": "yay!",
                                "rawText": "\"yay!\"",
                                "flags": 96,
                                "start": 868,
                                "end": 875
                            },
                            "flags": 32,
                            "start": 854,
                            "end": 875
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "start": 875,
                            "end": 876
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "test1",
                                    "rawText": "test1",
                                    "flags": 96,
                                    "start": 876,
                                    "end": 884
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 885,
                                    "end": 886
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 134234345,
                                        "flags": 2097216,
                                        "start": 887,
                                        "end": 894
                                    },
                                    "flags": 2097152,
                                    "start": 887,
                                    "end": 894
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 161,
                                                "returnKeyword": {
                                                    "kind": 37757022,
                                                    "flags": 81,
                                                    "start": 896,
                                                    "end": 907
                                                },
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 4276321,
                                                        "flags": 96,
                                                        "start": 907,
                                                        "end": 912
                                                    },
                                                    "expression": {
                                                        "kind": 67191035,
                                                        "text": "#p",
                                                        "rawText": "#p",
                                                        "flags": 96,
                                                        "start": 913,
                                                        "end": 915
                                                    },
                                                    "flags": 96,
                                                    "start": 907,
                                                    "end": 915
                                                },
                                                "flags": 81,
                                                "start": 896,
                                                "end": 916
                                            }
                                        ],
                                        "flags": 33,
                                        "start": 896,
                                        "end": 916
                                    },
                                    "flags": 32,
                                    "start": 894,
                                    "end": 920
                                },
                                "flags": 0,
                                "start": 884,
                                "end": 920
                            },
                            "flags": 0,
                            "start": 876,
                            "end": 920
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "test2",
                                    "rawText": "test2",
                                    "flags": 96,
                                    "start": 920,
                                    "end": 928
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 929,
                                    "end": 930
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 134234345,
                                        "flags": 2097216,
                                        "start": 931,
                                        "end": 938
                                    },
                                    "flags": 2097152,
                                    "start": 931,
                                    "end": 938
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 161,
                                                "returnKeyword": {
                                                    "kind": 37757022,
                                                    "flags": 81,
                                                    "start": 940,
                                                    "end": 951
                                                },
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 4276321,
                                                        "flags": 96,
                                                        "start": 951,
                                                        "end": 956
                                                    },
                                                    "expression": {
                                                        "kind": 67191035,
                                                        "text": "#t",
                                                        "rawText": "#t",
                                                        "flags": 96,
                                                        "start": 957,
                                                        "end": 959
                                                    },
                                                    "flags": 96,
                                                    "start": 951,
                                                    "end": 959
                                                },
                                                "flags": 81,
                                                "start": 940,
                                                "end": 960
                                            }
                                        ],
                                        "flags": 33,
                                        "start": 940,
                                        "end": 960
                                    },
                                    "flags": 32,
                                    "start": 938,
                                    "end": 991
                                },
                                "flags": 0,
                                "start": 928,
                                "end": 991
                            },
                            "flags": 0,
                            "start": 920,
                            "end": 991
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "test3",
                                    "rawText": "test3",
                                    "flags": 96,
                                    "start": 991,
                                    "end": 999
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 1000,
                                    "end": 1001
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 134234345,
                                        "flags": 2097216,
                                        "start": 1002,
                                        "end": 1009
                                    },
                                    "flags": 2097152,
                                    "start": 1002,
                                    "end": 1009
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 161,
                                                "returnKeyword": {
                                                    "kind": 37757022,
                                                    "flags": 81,
                                                    "start": 1011,
                                                    "end": 1022
                                                },
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 134299649,
                                                        "text": "Annotations",
                                                        "rawText": "Annotations",
                                                        "flags": 96,
                                                        "start": 1022,
                                                        "end": 1034
                                                    },
                                                    "expression": {
                                                        "kind": 67191035,
                                                        "text": "#sp",
                                                        "rawText": "#sp",
                                                        "flags": 96,
                                                        "start": 1035,
                                                        "end": 1038
                                                    },
                                                    "flags": 96,
                                                    "start": 1022,
                                                    "end": 1038
                                                },
                                                "flags": 81,
                                                "start": 1011,
                                                "end": 1039
                                            }
                                        ],
                                        "flags": 33,
                                        "start": 1011,
                                        "end": 1039
                                    },
                                    "flags": 32,
                                    "start": 1009,
                                    "end": 1043
                                },
                                "flags": 0,
                                "start": 999,
                                "end": 1043
                            },
                            "flags": 0,
                            "start": 991,
                            "end": 1043
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "test4",
                                    "rawText": "test4",
                                    "flags": 96,
                                    "start": 1043,
                                    "end": 1051
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 1052,
                                    "end": 1053
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 134234345,
                                        "flags": 2097216,
                                        "start": 1054,
                                        "end": 1061
                                    },
                                    "flags": 2097152,
                                    "start": 1054,
                                    "end": 1061
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 161,
                                                "returnKeyword": {
                                                    "kind": 37757022,
                                                    "flags": 81,
                                                    "start": 1063,
                                                    "end": 1074
                                                },
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 134299649,
                                                        "text": "Annotations",
                                                        "rawText": "Annotations",
                                                        "flags": 96,
                                                        "start": 1074,
                                                        "end": 1086
                                                    },
                                                    "expression": {
                                                        "kind": 67191035,
                                                        "text": "#st",
                                                        "rawText": "#st",
                                                        "flags": 96,
                                                        "start": 1087,
                                                        "end": 1090
                                                    },
                                                    "flags": 96,
                                                    "start": 1074,
                                                    "end": 1090
                                                },
                                                "flags": 81,
                                                "start": 1063,
                                                "end": 1091
                                            }
                                        ],
                                        "flags": 33,
                                        "start": 1063,
                                        "end": 1091
                                    },
                                    "flags": 32,
                                    "start": 1061,
                                    "end": 1122
                                },
                                "flags": 0,
                                "start": 1051,
                                "end": 1122
                            },
                            "flags": 0,
                            "start": 1043,
                            "end": 1122
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "test5",
                                    "rawText": "test5",
                                    "flags": 96,
                                    "start": 1122,
                                    "end": 1130
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 1131,
                                    "end": 1132
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 134234345,
                                        "flags": 2097216,
                                        "start": 1133,
                                        "end": 1140
                                    },
                                    "flags": 2097152,
                                    "start": 1133,
                                    "end": 1140
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 161,
                                                "returnKeyword": {
                                                    "kind": 37757022,
                                                    "flags": 81,
                                                    "start": 1142,
                                                    "end": 1153
                                                },
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 4276321,
                                                        "flags": 96,
                                                        "start": 1153,
                                                        "end": 1158
                                                    },
                                                    "expression": {
                                                        "kind": 67191035,
                                                        "text": "#r",
                                                        "rawText": "#r",
                                                        "flags": 96,
                                                        "start": 1159,
                                                        "end": 1161
                                                    },
                                                    "flags": 96,
                                                    "start": 1153,
                                                    "end": 1161
                                                },
                                                "flags": 81,
                                                "start": 1142,
                                                "end": 1162
                                            }
                                        ],
                                        "flags": 33,
                                        "start": 1142,
                                        "end": 1162
                                    },
                                    "flags": 32,
                                    "start": 1140,
                                    "end": 1166
                                },
                                "flags": 0,
                                "start": 1130,
                                "end": 1166
                            },
                            "flags": 0,
                            "start": 1122,
                            "end": 1166
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "test6",
                                    "rawText": "test6",
                                    "flags": 96,
                                    "start": 1166,
                                    "end": 1174
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 1175,
                                    "end": 1176
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 134234347,
                                        "flags": 2097216,
                                        "start": 1177,
                                        "end": 1184
                                    },
                                    "flags": 2097152,
                                    "start": 1177,
                                    "end": 1184
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 161,
                                                "returnKeyword": {
                                                    "kind": 37757022,
                                                    "flags": 81,
                                                    "start": 1186,
                                                    "end": 1197
                                                },
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 4276321,
                                                        "flags": 96,
                                                        "start": 1197,
                                                        "end": 1202
                                                    },
                                                    "expression": {
                                                        "kind": 67191035,
                                                        "text": "#r",
                                                        "rawText": "#r",
                                                        "flags": 96,
                                                        "start": 1203,
                                                        "end": 1205
                                                    },
                                                    "flags": 96,
                                                    "start": 1197,
                                                    "end": 1205
                                                },
                                                "flags": 81,
                                                "start": 1186,
                                                "end": 1206
                                            }
                                        ],
                                        "flags": 33,
                                        "start": 1186,
                                        "end": 1206
                                    },
                                    "flags": 32,
                                    "start": 1184,
                                    "end": 1237
                                },
                                "flags": 0,
                                "start": 1174,
                                "end": 1237
                            },
                            "flags": 0,
                            "start": 1166,
                            "end": 1237
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "test5And6Helper",
                                    "rawText": "test5And6Helper",
                                    "flags": 96,
                                    "start": 1237,
                                    "end": 1255
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 1256,
                                    "end": 1257
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 4276321,
                                                            "flags": 97,
                                                            "start": 1259,
                                                            "end": 1268
                                                        },
                                                        "expression": {
                                                            "kind": 67191035,
                                                            "text": "#r",
                                                            "rawText": "#r",
                                                            "flags": 96,
                                                            "start": 1269,
                                                            "end": 1271
                                                        },
                                                        "flags": 97,
                                                        "start": 1259,
                                                        "end": 1271
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 96,
                                                        "start": 1271,
                                                        "end": 1273
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 3,
                                                        "rawText": "3",
                                                        "flags": 96,
                                                        "start": 1273,
                                                        "end": 1275
                                                    },
                                                    "flags": 32,
                                                    "start": 1259,
                                                    "end": 1275
                                                },
                                                "flags": 16,
                                                "start": 1259,
                                                "end": 1276
                                            }
                                        ],
                                        "flags": 33,
                                        "start": 1259,
                                        "end": 1276
                                    },
                                    "flags": 32,
                                    "start": 1257,
                                    "end": 1280
                                },
                                "flags": 0,
                                "start": 1255,
                                "end": 1280
                            },
                            "flags": 0,
                            "start": 1237,
                            "end": 1280
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "test7",
                                    "rawText": "test7",
                                    "flags": 96,
                                    "start": 1280,
                                    "end": 1288
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 1289,
                                    "end": 1290
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 134234345,
                                        "flags": 2097216,
                                        "start": 1291,
                                        "end": 1298
                                    },
                                    "flags": 2097152,
                                    "start": 1291,
                                    "end": 1298
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 161,
                                                "returnKeyword": {
                                                    "kind": 37757022,
                                                    "flags": 81,
                                                    "start": 1300,
                                                    "end": 1311
                                                },
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 134299649,
                                                        "text": "Annotations",
                                                        "rawText": "Annotations",
                                                        "flags": 96,
                                                        "start": 1311,
                                                        "end": 1323
                                                    },
                                                    "expression": {
                                                        "kind": 67191035,
                                                        "text": "#sr",
                                                        "rawText": "#sr",
                                                        "flags": 96,
                                                        "start": 1324,
                                                        "end": 1327
                                                    },
                                                    "flags": 96,
                                                    "start": 1311,
                                                    "end": 1327
                                                },
                                                "flags": 81,
                                                "start": 1300,
                                                "end": 1328
                                            }
                                        ],
                                        "flags": 33,
                                        "start": 1300,
                                        "end": 1328
                                    },
                                    "flags": 32,
                                    "start": 1298,
                                    "end": 1332
                                },
                                "flags": 0,
                                "start": 1288,
                                "end": 1332
                            },
                            "flags": 0,
                            "start": 1280,
                            "end": 1332
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "test8",
                                    "rawText": "test8",
                                    "flags": 96,
                                    "start": 1332,
                                    "end": 1340
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 1341,
                                    "end": 1342
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 134234347,
                                        "flags": 2097216,
                                        "start": 1343,
                                        "end": 1350
                                    },
                                    "flags": 2097152,
                                    "start": 1343,
                                    "end": 1350
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 161,
                                                "returnKeyword": {
                                                    "kind": 37757022,
                                                    "flags": 81,
                                                    "start": 1352,
                                                    "end": 1363
                                                },
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 134299649,
                                                        "text": "Annotations",
                                                        "rawText": "Annotations",
                                                        "flags": 96,
                                                        "start": 1363,
                                                        "end": 1375
                                                    },
                                                    "expression": {
                                                        "kind": 67191035,
                                                        "text": "#sr",
                                                        "rawText": "#sr",
                                                        "flags": 96,
                                                        "start": 1376,
                                                        "end": 1379
                                                    },
                                                    "flags": 96,
                                                    "start": 1363,
                                                    "end": 1379
                                                },
                                                "flags": 81,
                                                "start": 1352,
                                                "end": 1380
                                            }
                                        ],
                                        "flags": 33,
                                        "start": 1352,
                                        "end": 1380
                                    },
                                    "flags": 32,
                                    "start": 1350,
                                    "end": 1411
                                },
                                "flags": 0,
                                "start": 1340,
                                "end": 1411
                            },
                            "flags": 0,
                            "start": 1332,
                            "end": 1411
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "test7And9Helper",
                                    "rawText": "test7And9Helper",
                                    "flags": 96,
                                    "start": 1411,
                                    "end": 1429
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 1430,
                                    "end": 1431
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 134299649,
                                                            "text": "Annotations",
                                                            "rawText": "Annotations",
                                                            "flags": 96,
                                                            "start": 1433,
                                                            "end": 1449
                                                        },
                                                        "expression": {
                                                            "kind": 67191035,
                                                            "text": "#sr",
                                                            "rawText": "#sr",
                                                            "flags": 96,
                                                            "start": 1450,
                                                            "end": 1453
                                                        },
                                                        "flags": 96,
                                                        "start": 1433,
                                                        "end": 1453
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 96,
                                                        "start": 1453,
                                                        "end": 1455
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 3,
                                                        "rawText": "3",
                                                        "flags": 96,
                                                        "start": 1455,
                                                        "end": 1457
                                                    },
                                                    "flags": 32,
                                                    "start": 1433,
                                                    "end": 1457
                                                },
                                                "flags": 16,
                                                "start": 1433,
                                                "end": 1458
                                            }
                                        ],
                                        "flags": 33,
                                        "start": 1433,
                                        "end": 1458
                                    },
                                    "flags": 32,
                                    "start": 1431,
                                    "end": 1462
                                },
                                "flags": 0,
                                "start": 1429,
                                "end": 1462
                            },
                            "flags": 0,
                            "start": 1411,
                            "end": 1462
                        }
                    ],
                    "flags": 32,
                    "start": 566,
                    "end": 1462
                },
                "flags": 564,
                "start": 32,
                "end": 1464
            },
            "flags": 17,
            "start": 545,
            "end": 1464
        }
    ],
    "isModule": false,
    "source": "class C {\n  #p: number\n  #q: number\n  constructor() {\n    this.#p = 0; // in scope\n    this.#q; // in scope\n  }\n  test(other: C) {\n    other.#q; // in lexical scope, object has the property.\n  }\n}\n\nclass Outer {\n #outer: number\n constructor() {\n   var Inner = class A {\n      #inner: Outer\n      constructor() {\n        this.#inner = new Outer();\n        var x = new Outer();\n        x.#outer = 0; // Both inner and outer should be visible here!\n        x.#inner = new Outer(); // Error, #inner is not a private field of Outer\n      }\n   };\n }\n}\n\nclass Annotations {\n  // Private class fields must either be annotated or have an initializer\n  #p: number;\n  #q = 0;\n  #r;\n  #s: string = 0; // Error, number ~> string\n  #t: string = \"yay!\";\n  static #sp: number;\n  static #sq = 0;\n  static #sr;\n  static #ss: string = 0; // Error, number ~> string\n  static #st: string = \"yay!\";\n  test1(): number {\n    return this.#p;\n  }\n  test2(): number {\n    return this.#t; // Error, string ~> number\n  }\n  test3(): number {\n    return Annotations.#sp;\n  }\n  test4(): number {\n    return Annotations.#st; // Error, string ~> number\n  }\n  test5(): number {\n    return this.#r;\n  }\n  test6(): string {\n    return this.#r; // Error, number ~> string\n  }\n  test5And6Helper() {\n    this.#r = 3;\n  }\n  test7(): number {\n    return Annotations.#sr;\n  }\n  test8(): string {\n    return Annotations.#sr; // Error, number ~> string\n  }\n  test7And9Helper() {\n    Annotations.#sr = 3;\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 1464
}
```

### Printed

```javascript

class C {
  #p: number
  #q: number
  constructor() {
    this.#p = 0;// in scope
    this.#q;// in scope
  }
  test(other: C) {
    other.#q;// in lexical scope, object has the property.
  }
}
class Outer {
  #outer: number
  constructor() {
    var Inner = class A {
      #inner: Outer
      constructor() {
        this.#inner = new Outer();
        var x = new Outer();
        x.#outer = 0;// Both inner and outer should be visible here!
        x.#inner = new Outer();// Error, #inner is not a private field of Outer
      }
    };
  }
}
class Annotations {
   // Private class fields must either be annotated or have an initializer
  #p: number
  ;
  #q = 0
  ;
  #r
  ;
  #s: string = 0
  ;// Error, number ~> string
  #t: string = "\"yay!\""
  ;
  static #sp: number
  ;
  static #sq = 0
  ;
  static #sr
  ;
  static #ss: string = 0
  ;// Error, number ~> string
  static #st: string = "\"yay!\""
  ;
  test1(): number {
    return this.#p;
  }
  test2(): number {
    return this.#t;// Error, string ~> number
  }
  test3(): number {
    return Annotations.#sp;
  }
  test4(): number {
    return Annotations.#st;// Error, string ~> number
  }
  test5(): number {
    return this.#r;
  }
  test6(): string {
    return this.#r;// Error, number ~> string
  }
  test5And6Helper() {
    this.#r = 3;
  }
  test7(): number {
    return Annotations.#sr;
  }
  test8(): string {
    return Annotations.#sr;// Error, number ~> string
  }
  test7And9Helper() {
    Annotations.#sr = 3;
  }
}

```

### Diagnostics

```javascript
✔ No errors
```

