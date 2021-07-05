# Kataw parser test case

## Input

`````js
function method(value: /*1*/A & B & /*2*/ C /*3*/) {
  var a: A = value;
  var b: B = value; /*4*/
  var c: C = value;
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
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "method",
                "rawText": "method",
                "flags": 96,
                "start": 8,
                "end": 15
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
                            "text": "value",
                            "rawText": "value",
                            "flags": 96,
                            "start": 16,
                            "end": 21
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 138,
                                "types": [
                                    {
                                        "kind": 144,
                                        "typeName": {
                                            "kind": 134299649,
                                            "text": "A",
                                            "rawText": "A",
                                            "flags": 96,
                                            "start": 22,
                                            "end": 29
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "start": 22,
                                        "end": 29
                                    },
                                    {
                                        "kind": 144,
                                        "typeName": {
                                            "kind": 134299649,
                                            "text": "B",
                                            "rawText": "B",
                                            "flags": 96,
                                            "start": 31,
                                            "end": 33
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "start": 31,
                                        "end": 33
                                    },
                                    {
                                        "kind": 144,
                                        "typeName": {
                                            "kind": 134299649,
                                            "text": "C",
                                            "rawText": "C",
                                            "flags": 96,
                                            "start": 35,
                                            "end": 43
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "start": 35,
                                        "end": 43
                                    }
                                ],
                                "flags": 2097152,
                                "start": 29,
                                "end": 43
                            },
                            "flags": 2097152,
                            "start": 22,
                            "end": 43
                        },
                        "right": null,
                        "flags": 32,
                        "start": 16,
                        "end": 43
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 16,
                "end": 43
            },
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
                                "start": 52,
                                "end": 58
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 58,
                                            "end": 60
                                        },
                                        "type": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 144,
                                                "typeName": {
                                                    "kind": 134299649,
                                                    "text": "A",
                                                    "rawText": "A",
                                                    "flags": 96,
                                                    "start": 61,
                                                    "end": 63
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "start": 61,
                                                "end": 63
                                            },
                                            "flags": 2097152,
                                            "start": 61,
                                            "end": 63
                                        },
                                        "initializer": {
                                            "kind": 134299649,
                                            "text": "value",
                                            "rawText": "value",
                                            "flags": 96,
                                            "start": 65,
                                            "end": 71
                                        },
                                        "flags": 16,
                                        "start": 58,
                                        "end": 71
                                    }
                                ],
                                "flags": 16,
                                "start": 58,
                                "end": 71
                            },
                            "flags": 16,
                            "start": 52,
                            "end": 72
                        },
                        {
                            "kind": 155,
                            "declareKeyword": null,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 81,
                                "start": 72,
                                "end": 78
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "start": 78,
                                            "end": 80
                                        },
                                        "type": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 144,
                                                "typeName": {
                                                    "kind": 134299649,
                                                    "text": "B",
                                                    "rawText": "B",
                                                    "flags": 96,
                                                    "start": 81,
                                                    "end": 83
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "start": 81,
                                                "end": 83
                                            },
                                            "flags": 2097152,
                                            "start": 81,
                                            "end": 83
                                        },
                                        "initializer": {
                                            "kind": 134299649,
                                            "text": "value",
                                            "rawText": "value",
                                            "flags": 96,
                                            "start": 85,
                                            "end": 91
                                        },
                                        "flags": 16,
                                        "start": 78,
                                        "end": 91
                                    }
                                ],
                                "flags": 16,
                                "start": 78,
                                "end": 91
                            },
                            "flags": 16,
                            "start": 72,
                            "end": 92
                        },
                        {
                            "kind": 155,
                            "declareKeyword": null,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 81,
                                "start": 92,
                                "end": 104
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 96,
                                            "start": 104,
                                            "end": 106
                                        },
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
                                                    "start": 107,
                                                    "end": 109
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "start": 107,
                                                "end": 109
                                            },
                                            "flags": 2097152,
                                            "start": 107,
                                            "end": 109
                                        },
                                        "initializer": {
                                            "kind": 134299649,
                                            "text": "value",
                                            "rawText": "value",
                                            "flags": 96,
                                            "start": 111,
                                            "end": 117
                                        },
                                        "flags": 16,
                                        "start": 104,
                                        "end": 117
                                    }
                                ],
                                "flags": 16,
                                "start": 104,
                                "end": 117
                            },
                            "flags": 16,
                            "start": 92,
                            "end": 118
                        }
                    ],
                    "flags": 33,
                    "start": 52,
                    "end": 118
                },
                "flags": 32,
                "start": 50,
                "end": 120
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 120
        }
    ],
    "isModule": false,
    "source": "function method(value: /*1*/A & B & /*2*/ C /*3*/) {\n  var a: A = value;\n  var b: B = value; /*4*/\n  var c: C = value;\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 120
}
```

### Printed

```javascript

function method(value: A & B & C) {
  var a: A = value;
  var b: B = value;
  var c: C = value;
}
```

### Diagnostics

```javascript
✔ No errors
```

