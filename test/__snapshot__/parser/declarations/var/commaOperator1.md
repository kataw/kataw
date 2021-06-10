# Kataw parser test case

## Input

`````js
var v1 = ((1, 2, 3), 4, 5, (6, 7));
function f1() {
    var a = 1;
    return a, v1, a;
}
`````

## Options

### Parser Options

`````js
{allowTypes: true}
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
                            "text": "v1",
                            "rawText": "v1",
                            "flags": 96,
                            "start": 3,
                            "end": 6
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 121,
                            "expression": {
                                "kind": 132,
                                "expressions": [
                                    {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 132,
                                            "expressions": [
                                                {
                                                    "kind": 201392130,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 96,
                                                    "start": 11,
                                                    "end": 12
                                                },
                                                {
                                                    "kind": 201392130,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 96,
                                                    "start": 13,
                                                    "end": 15
                                                },
                                                {
                                                    "kind": 201392130,
                                                    "text": 3,
                                                    "rawText": "3",
                                                    "flags": 96,
                                                    "start": 16,
                                                    "end": 18
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 10,
                                            "end": 18
                                        },
                                        "flags": 32,
                                        "start": 10,
                                        "end": 19
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 4,
                                        "rawText": "4",
                                        "flags": 96,
                                        "start": 20,
                                        "end": 22
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 5,
                                        "rawText": "5",
                                        "flags": 96,
                                        "start": 23,
                                        "end": 25
                                    },
                                    {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 132,
                                            "expressions": [
                                                {
                                                    "kind": 201392130,
                                                    "text": 6,
                                                    "rawText": "6",
                                                    "flags": 96,
                                                    "start": 28,
                                                    "end": 29
                                                },
                                                {
                                                    "kind": 201392130,
                                                    "text": 7,
                                                    "rawText": "7",
                                                    "flags": 96,
                                                    "start": 30,
                                                    "end": 32
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 26,
                                            "end": 32
                                        },
                                        "flags": 32,
                                        "start": 26,
                                        "end": 33
                                    }
                                ],
                                "flags": 32,
                                "start": 8,
                                "end": 33
                            },
                            "flags": 32,
                            "start": 8,
                            "end": 34
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 34
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 34
            },
            "flags": 16,
            "start": 0,
            "end": 35
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 35,
                "end": 44
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f1",
                "rawText": "f1",
                "flags": 96,
                "start": 44,
                "end": 47
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 47,
                "end": 49
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
                                "start": 51,
                                "end": 59
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
                                            "start": 59,
                                            "end": 61
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "start": 63,
                                            "end": 65
                                        },
                                        "flags": 16,
                                        "start": 59,
                                        "end": 65
                                    }
                                ],
                                "flags": 16,
                                "start": 59,
                                "end": 65
                            },
                            "flags": 16,
                            "start": 51,
                            "end": 66
                        },
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "start": 66,
                                "end": 77
                            },
                            "expression": {
                                "kind": 132,
                                "expressions": [
                                    {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 77,
                                        "end": 79
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "v1",
                                        "rawText": "v1",
                                        "flags": 96,
                                        "start": 80,
                                        "end": 83
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 84,
                                        "end": 86
                                    }
                                ],
                                "flags": 32,
                                "start": 77,
                                "end": 86
                            },
                            "flags": 81,
                            "start": 66,
                            "end": 87
                        }
                    ],
                    "flags": 33,
                    "start": 51,
                    "end": 87
                },
                "flags": 32,
                "start": 49,
                "end": 89
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 35,
            "end": 89
        }
    ],
    "isModule": false,
    "source": "var v1 = ((1, 2, 3), 4, 5, (6, 7));\nfunction f1() {\n    var a = 1;\n    return a, v1, a;\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 89
}
```

### Printed

```javascript

var v1 = ((1, 2, 3), 4, 5, (6, 7));
function f1() {
  var a = 1;
  return  a, v1, a;
}
```

### Diagnostics

```javascript
✔ No errors
```

