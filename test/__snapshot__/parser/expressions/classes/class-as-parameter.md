# Kataw parser test case

## Input

`````js
var C;

function decorator(el) {
  return Object.assign(el, {
    finisher(Class) {
      C = Class;
    },
  });
}

class A {
  @decorator
  foo() {}
}

`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "C",
                            "rawText": "C",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 5
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 5
            },
            "flags": 16,
            "start": 0,
            "end": 6
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 6,
                "end": 16
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "decorator",
                "rawText": "decorator",
                "flags": 96,
                "start": 16,
                "end": 26
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 134299649,
                        "text": "el",
                        "rawText": "el",
                        "flags": 96,
                        "start": 27,
                        "end": 29
                    }
                ],
                "trailingComma": false,
                "flags": 96,
                "start": 26,
                "end": 30
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
                                "start": 32,
                                "end": 41
                            },
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 134299649,
                                        "text": "Object",
                                        "rawText": "Object",
                                        "flags": 96,
                                        "start": 41,
                                        "end": 48
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "assign",
                                        "rawText": "assign",
                                        "flags": 96,
                                        "start": 49,
                                        "end": 55
                                    },
                                    "flags": 536870944,
                                    "start": 41,
                                    "end": 55
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "el",
                                            "rawText": "el",
                                            "flags": 96,
                                            "start": 56,
                                            "end": 58
                                        },
                                        {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 257,
                                                        "asyncKeyword": null,
                                                        "generatorToken": null,
                                                        "getKeyword": null,
                                                        "setKeyword": null,
                                                        "method": {
                                                            "kind": 209,
                                                            "name": {
                                                                "kind": 134299649,
                                                                "text": "finisher",
                                                                "rawText": "finisher",
                                                                "flags": 96,
                                                                "start": 61,
                                                                "end": 74
                                                            },
                                                            "typeParameters": null,
                                                            "formalParameters": {
                                                                "kind": 214,
                                                                "formalParameterList": [
                                                                    {
                                                                        "kind": 134299649,
                                                                        "text": "Class",
                                                                        "rawText": "Class",
                                                                        "flags": 96,
                                                                        "start": 75,
                                                                        "end": 80
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 96,
                                                                "start": 75,
                                                                "end": 81
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
                                                                                    "kind": 134299649,
                                                                                    "text": "C",
                                                                                    "rawText": "C",
                                                                                    "flags": 96,
                                                                                    "start": 83,
                                                                                    "end": 91
                                                                                },
                                                                                "operatorToken": {
                                                                                    "kind": 4125,
                                                                                    "flags": 64,
                                                                                    "start": 91,
                                                                                    "end": 93
                                                                                },
                                                                                "right": {
                                                                                    "kind": 134299649,
                                                                                    "text": "Class",
                                                                                    "rawText": "Class",
                                                                                    "flags": 96,
                                                                                    "start": 93,
                                                                                    "end": 99
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 83,
                                                                                "end": 99
                                                                            },
                                                                            "flags": 16,
                                                                            "start": 83,
                                                                            "end": 100
                                                                        }
                                                                    ],
                                                                    "flags": 33,
                                                                    "start": 83,
                                                                    "end": 100
                                                                },
                                                                "flags": 32,
                                                                "start": 81,
                                                                "end": 106
                                                            },
                                                            "flags": 32,
                                                            "start": 74,
                                                            "end": 106
                                                        },
                                                        "flags": 32,
                                                        "start": 61,
                                                        "end": 106
                                                    }
                                                ],
                                                "trailingComma": true,
                                                "flags": 17,
                                                "start": 61,
                                                "end": 107
                                            },
                                            "flags": 49,
                                            "start": 59,
                                            "end": 111
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 56,
                                    "end": 111
                                },
                                "flags": 268435488,
                                "start": 41,
                                "end": 112
                            },
                            "flags": 16,
                            "start": 1,
                            "end": 32
                        }
                    ],
                    "flags": 33,
                    "start": 32,
                    "end": 113
                },
                "flags": 32,
                "start": 30,
                "end": 115
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 6,
            "end": 115
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 115,
                "end": 122
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 96,
                "start": 122,
                "end": 124
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 262,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": {
                                "kind": 207,
                                "decoratorList": [
                                    {
                                        "kind": 34611453,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "decorator",
                                            "rawText": "decorator",
                                            "flags": 96,
                                            "start": 130,
                                            "end": 139
                                        },
                                        "flags": 1,
                                        "start": 130,
                                        "end": 139
                                    }
                                ],
                                "flags": 32,
                                "start": 130,
                                "end": 139
                            },
                            "generatorToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 139,
                                    "end": 145
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 146,
                                    "end": 147
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 149,
                                        "end": 149
                                    },
                                    "flags": 32,
                                    "start": 147,
                                    "end": 150
                                },
                                "flags": 0,
                                "start": 145,
                                "end": 150
                            },
                            "flags": 0,
                            "start": 126,
                            "end": 150
                        }
                    ],
                    "flags": 32,
                    "start": 126,
                    "end": 150
                },
                "flags": 124,
                "start": 32,
                "end": 152
            },
            "flags": 16,
            "start": 115,
            "end": 152
        }
    ],
    "isModule": false,
    "source": "var C;\n\nfunction decorator(el) {\n  return Object.assign(el, {\n    finisher(Class) {\n      C = Class;\n    },\n  });\n}\n\nclass A {\n  @decorator\n  foo() {}\n}\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 153
}
```

### Printed

```javascript

var C;
function decorator(el) {
  return  Object.assign(el, { finisher(Class) {
        C = Class;
      } });
}
class A {
  @decorator
  foo() {}
}
```

### Diagnostics

```javascript
✔ No errors
```

