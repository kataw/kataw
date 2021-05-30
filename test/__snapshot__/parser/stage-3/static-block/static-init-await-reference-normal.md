# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, next: true }
`````

## Input

`````js
class C {
  static {
    ({
      method(x = fromParam = await) {
        fromBody = await;
      }
    }).method();
  }
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
                    "kind": 262,
                    "elements": [
                        {
                            "kind": 263,
                            "decorators": null,
                            "declaredKeyword": null,
                            "staticKeyword": null,
                            "block": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 131,
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 121,
                                                        "expression": {
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
                                                                                "text": "method",
                                                                                "rawText": "method",
                                                                                "flags": 96,
                                                                                "start": 27,
                                                                                "end": 40
                                                                            },
                                                                            "typeParameters": null,
                                                                            "formalParameters": {
                                                                                "kind": 214,
                                                                                "formalParameterList": [
                                                                                    {
                                                                                        "kind": 203,
                                                                                        "ellipsisToken": null,
                                                                                        "left": {
                                                                                            "kind": 134299649,
                                                                                            "text": "x",
                                                                                            "rawText": "x",
                                                                                            "flags": 96,
                                                                                            "start": 41,
                                                                                            "end": 42
                                                                                        },
                                                                                        "optionalToken": null,
                                                                                        "type": null,
                                                                                        "right": {
                                                                                            "kind": 125,
                                                                                            "left": {
                                                                                                "kind": 134299649,
                                                                                                "text": "fromParam",
                                                                                                "rawText": "fromParam",
                                                                                                "flags": 96,
                                                                                                "start": 44,
                                                                                                "end": 54
                                                                                            },
                                                                                            "operatorToken": {
                                                                                                "kind": 4125,
                                                                                                "flags": 64,
                                                                                                "start": 54,
                                                                                                "end": 56
                                                                                            },
                                                                                            "right": {
                                                                                                "kind": 134299649,
                                                                                                "text": "await",
                                                                                                "rawText": "await",
                                                                                                "flags": 96,
                                                                                                "start": 56,
                                                                                                "end": 62
                                                                                            },
                                                                                            "flags": 32,
                                                                                            "start": 44,
                                                                                            "end": 62
                                                                                        },
                                                                                        "flags": 34,
                                                                                        "start": 41,
                                                                                        "end": 62
                                                                                    }
                                                                                ],
                                                                                "trailingComma": false,
                                                                                "flags": 34,
                                                                                "start": 41,
                                                                                "end": 63
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
                                                                                                    "text": "fromBody",
                                                                                                    "rawText": "fromBody",
                                                                                                    "flags": 96,
                                                                                                    "start": 65,
                                                                                                    "end": 82
                                                                                                },
                                                                                                "operatorToken": {
                                                                                                    "kind": 4125,
                                                                                                    "flags": 64,
                                                                                                    "start": 82,
                                                                                                    "end": 84
                                                                                                },
                                                                                                "right": {
                                                                                                    "kind": 134299649,
                                                                                                    "text": "await",
                                                                                                    "rawText": "await",
                                                                                                    "flags": 96,
                                                                                                    "start": 84,
                                                                                                    "end": 90
                                                                                                },
                                                                                                "flags": 32,
                                                                                                "start": 65,
                                                                                                "end": 90
                                                                                            },
                                                                                            "flags": 16,
                                                                                            "start": 65,
                                                                                            "end": 91
                                                                                        }
                                                                                    ],
                                                                                    "flags": 33,
                                                                                    "start": 65,
                                                                                    "end": 91
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 63,
                                                                                "end": 99
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 40,
                                                                            "end": 99
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 27,
                                                                        "end": 99
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 17,
                                                                "start": 27,
                                                                "end": 99
                                                            },
                                                            "flags": 49,
                                                            "start": 26,
                                                            "end": 105
                                                        },
                                                        "flags": 32,
                                                        "start": 20,
                                                        "end": 106
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "method",
                                                        "rawText": "method",
                                                        "flags": 96,
                                                        "start": 107,
                                                        "end": 113
                                                    },
                                                    "flags": 536870944,
                                                    "start": 20,
                                                    "end": 113
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 114,
                                                    "end": 114
                                                },
                                                "flags": 268435488,
                                                "start": 20,
                                                "end": 115
                                            },
                                            "flags": 16,
                                            "start": 20,
                                            "end": 116
                                        }
                                    ],
                                    "flags": 17,
                                    "start": 20,
                                    "end": 116
                                },
                                "flags": 16,
                                "start": 9,
                                "end": 120
                            },
                            "flags": 32,
                            "start": 9,
                            "end": 120
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 120
                },
                "flags": 7,
                "start": 32,
                "end": 122
            },
            "flags": 16,
            "start": 0,
            "end": 122
        }
    ],
    "isModule": false,
    "source": "class C {\n  static {\n    ({\n      method(x = fromParam = await) {\n        fromBody = await;\n      }\n    }).method();\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 122
}
```

### Printed

```javascript

class C {
   ;
}
```

### Diagnostics

```javascript
✔ No errors
```

