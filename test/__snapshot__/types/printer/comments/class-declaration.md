# Kataw parser test case

## Input

`````js
class /*1*/ Item<T>/*2*/ {
  prop: T; /*3*/

  constructor/*4*/(param/*5*/: T) {
    this/*6*/./*7*/prop = param;
  }
/*8*/
  method(): /*9*/T/*10*/ {/*11*/
    return this/*12*//*13*/.prop;/*14*/
  }
/*15*/
}


class GenericClass/*1*/</*2*/T/*3*/>/*4*/ {}

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
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "Item",
                "rawText": "Item",
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 16
            },
            "typeParameters": {
                "kind": 307,
                "declarations": {
                    "kind": 337,
                    "parameters": [
                        {
                            "kind": 146,
                            "name": {
                                "kind": 134299649,
                                "text": "T",
                                "rawText": "T",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 17,
                                "end": 18
                            },
                            "type": null,
                            "assignToken": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 18
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 18
                },
                "flags": 2097152,
                "transformFlags": 512,
                "start": 16,
                "end": 19
            },
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
                                "text": "prop",
                                "rawText": "prop",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 26,
                                "end": 33
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
                                        "text": "T",
                                        "rawText": "T",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 34,
                                        "end": 36
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 34,
                                    "end": 36
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 34,
                                "end": 36
                            },
                            "initializer": null,
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 26,
                            "end": 36
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 36,
                            "end": 37
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
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 37,
                                    "end": 58
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
                                                "text": "param",
                                                "rawText": "param",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 64,
                                                "end": 69
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
                                                        "text": "T",
                                                        "rawText": "T",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 75,
                                                        "end": 77
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 75,
                                                    "end": 77
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 75,
                                                "end": 77
                                            },
                                            "right": null,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 64,
                                            "end": 77
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2080,
                                    "transformFlags": 0,
                                    "start": 64,
                                    "end": 78
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
                                                            "transformFlags": 0,
                                                            "start": 80,
                                                            "end": 89
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "prop",
                                                            "rawText": "prop",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 95,
                                                            "end": 104
                                                        },
                                                        "flags": 97,
                                                        "transformFlags": 2,
                                                        "start": 80,
                                                        "end": 104
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 104,
                                                        "end": 106
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "param",
                                                        "rawText": "param",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 106,
                                                        "end": 112
                                                    },
                                                    "flags": 0,
                                                    "transformFlags": 128,
                                                    "start": 80,
                                                    "end": 112
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 80,
                                                "end": 113
                                            }
                                        ],
                                        "flags": 33,
                                        "transformFlags": 0,
                                        "start": 80,
                                        "end": 113
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 78,
                                    "end": 117
                                },
                                "flags": 2048,
                                "transformFlags": 0,
                                "start": 58,
                                "end": 117
                            },
                            "flags": 2048,
                            "transformFlags": 0,
                            "start": 37,
                            "end": 117
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
                                    "text": "method",
                                    "rawText": "method",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 117,
                                    "end": 132
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 133,
                                    "end": 134
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 144,
                                        "typeName": {
                                            "kind": 134299649,
                                            "text": "T",
                                            "rawText": "T",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 135,
                                            "end": 142
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 135,
                                        "end": 142
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 135,
                                    "end": 142
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
                                                    "transformFlags": 0,
                                                    "start": 150,
                                                    "end": 167
                                                },
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 4276321,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 167,
                                                        "end": 172
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "prop",
                                                        "rawText": "prop",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 185,
                                                        "end": 189
                                                    },
                                                    "flags": 96,
                                                    "transformFlags": 2,
                                                    "start": 167,
                                                    "end": 189
                                                },
                                                "flags": 81,
                                                "transformFlags": 256,
                                                "start": 150,
                                                "end": 190
                                            }
                                        ],
                                        "flags": 33,
                                        "transformFlags": 0,
                                        "start": 150,
                                        "end": 190
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 142,
                                    "end": 200
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 132,
                                "end": 200
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 117,
                            "end": 200
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 26,
                    "end": 200
                },
                "flags": 19,
                "transformFlags": 0,
                "start": 32,
                "end": 209
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 209
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 209,
                "end": 217
            },
            "name": {
                "kind": 134299649,
                "text": "GenericClass",
                "rawText": "GenericClass",
                "flags": 96,
                "transformFlags": 0,
                "start": 217,
                "end": 230
            },
            "typeParameters": {
                "kind": 307,
                "declarations": {
                    "kind": 337,
                    "parameters": [
                        {
                            "kind": 146,
                            "name": {
                                "kind": 134299649,
                                "text": "T",
                                "rawText": "T",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 236,
                                "end": 242
                            },
                            "type": null,
                            "assignToken": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 236,
                            "end": 242
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 236,
                    "end": 242
                },
                "flags": 2097152,
                "transformFlags": 512,
                "start": 230,
                "end": 248
            },
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 255,
                    "end": 255
                },
                "flags": 248,
                "transformFlags": 0,
                "start": 32,
                "end": 256
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 209,
            "end": 256
        }
    ],
    "isModule": false,
    "source": "class /*1*/ Item<T>/*2*/ {\n  prop: T; /*3*/\n\n  constructor/*4*/(param/*5*/: T) {\n    this/*6*/./*7*/prop = param;\n  }\n/*8*/\n  method(): /*9*/T/*10*/ {/*11*/\n    return this/*12*//*13*/.prop;/*14*/\n  }\n/*15*/\n}\n\n\nclass GenericClass/*1*/</*2*/T/*3*/>/*4*/ {}\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 257
}
```

### Printed

```javascript

class Item<T> {
  prop: T;;
  constructor(param: T) {
    this .prop = param;
  }
  method(): T {
    return this .prop;
  }
}
class GenericClass<T> {}

```

### Diagnostics

```javascript
✔ No errors
```

