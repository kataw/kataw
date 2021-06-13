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
      *method(x = fromParam = await) {
        fromBody = await;
      }
    }).method().next();
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
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 305,
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
                                                                                "generatorToken": {
                                                                                    "kind": 67143222,
                                                                                    "flags": 65,
                                                                                    "start": 27,
                                                                                    "end": 35
                                                                                },
                                                                                "getKeyword": null,
                                                                                "setKeyword": null,
                                                                                "method": {
                                                                                    "kind": 209,
                                                                                    "name": {
                                                                                        "kind": 134299649,
                                                                                        "text": "method",
                                                                                        "rawText": "method",
                                                                                        "flags": 96,
                                                                                        "start": 35,
                                                                                        "end": 41
                                                                                    },
                                                                                    "typeParameters": null,
                                                                                    "formalParameters": {
                                                                                        "kind": 214,
                                                                                        "formalParameterList": [
                                                                                            {
                                                                                                "kind": 281,
                                                                                                "ellipsisToken": null,
                                                                                                "left": {
                                                                                                    "kind": 134299649,
                                                                                                    "text": "x",
                                                                                                    "rawText": "x",
                                                                                                    "flags": 96,
                                                                                                    "start": 42,
                                                                                                    "end": 43
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
                                                                                                        "start": 45,
                                                                                                        "end": 55
                                                                                                    },
                                                                                                    "operatorToken": {
                                                                                                        "kind": 4125,
                                                                                                        "flags": 96,
                                                                                                        "start": 55,
                                                                                                        "end": 57
                                                                                                    },
                                                                                                    "right": {
                                                                                                        "kind": 134299649,
                                                                                                        "text": "await",
                                                                                                        "rawText": "await",
                                                                                                        "flags": 96,
                                                                                                        "start": 57,
                                                                                                        "end": 63
                                                                                                    },
                                                                                                    "flags": 32,
                                                                                                    "start": 45,
                                                                                                    "end": 63
                                                                                                },
                                                                                                "flags": 34,
                                                                                                "start": 42,
                                                                                                "end": 63
                                                                                            }
                                                                                        ],
                                                                                        "trailingComma": false,
                                                                                        "flags": 162,
                                                                                        "start": 42,
                                                                                        "end": 64
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
                                                                                                            "start": 66,
                                                                                                            "end": 83
                                                                                                        },
                                                                                                        "operatorToken": {
                                                                                                            "kind": 4125,
                                                                                                            "flags": 96,
                                                                                                            "start": 83,
                                                                                                            "end": 85
                                                                                                        },
                                                                                                        "right": {
                                                                                                            "kind": 134299649,
                                                                                                            "text": "await",
                                                                                                            "rawText": "await",
                                                                                                            "flags": 96,
                                                                                                            "start": 85,
                                                                                                            "end": 91
                                                                                                        },
                                                                                                        "flags": 32,
                                                                                                        "start": 66,
                                                                                                        "end": 91
                                                                                                    },
                                                                                                    "flags": 16,
                                                                                                    "start": 66,
                                                                                                    "end": 92
                                                                                                }
                                                                                            ],
                                                                                            "flags": 33,
                                                                                            "start": 66,
                                                                                            "end": 92
                                                                                        },
                                                                                        "flags": 32,
                                                                                        "start": 64,
                                                                                        "end": 100
                                                                                    },
                                                                                    "flags": 160,
                                                                                    "start": 41,
                                                                                    "end": 100
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 27,
                                                                                "end": 100
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 17,
                                                                        "start": 27,
                                                                        "end": 100
                                                                    },
                                                                    "flags": 49,
                                                                    "start": 26,
                                                                    "end": 106
                                                                },
                                                                "flags": 32,
                                                                "start": 20,
                                                                "end": 107
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "method",
                                                                "rawText": "method",
                                                                "flags": 96,
                                                                "start": 108,
                                                                "end": 114
                                                            },
                                                            "flags": 536870944,
                                                            "start": 20,
                                                            "end": 114
                                                        },
                                                        "argumentList": {
                                                            "kind": 256,
                                                            "elements": [],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "start": 115,
                                                            "end": 115
                                                        },
                                                        "flags": 268435488,
                                                        "start": 20,
                                                        "end": 116
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "next",
                                                        "rawText": "next",
                                                        "flags": 96,
                                                        "start": 117,
                                                        "end": 121
                                                    },
                                                    "flags": 536870944,
                                                    "start": 20,
                                                    "end": 121
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 122,
                                                    "end": 122
                                                },
                                                "flags": 268435488,
                                                "start": 20,
                                                "end": 123
                                            },
                                            "flags": 16,
                                            "start": 20,
                                            "end": 124
                                        }
                                    ],
                                    "flags": 17,
                                    "start": 20,
                                    "end": 124
                                },
                                "flags": 9,
                                "start": 0,
                                "end": 128
                            },
                            "flags": 32,
                            "start": 9,
                            "end": 128
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 128
                },
                "flags": 7,
                "start": 32,
                "end": 130
            },
            "flags": 16,
            "start": 0,
            "end": 130
        }
    ],
    "isModule": false,
    "source": "class C {\n  static {\n    ({\n      *method(x = fromParam = await) {\n        fromBody = await;\n      }\n    }).method().next();\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 130
}
```

### Printed

```javascript

class C {

}
```

### Diagnostics

```javascript
✔ No errors
```

