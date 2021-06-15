# Kataw parser test case

## Input

`````js
function foo(x: X): A { return x; }
function bar(x: X): B { return x; }
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
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 8,
                "end": 12
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
                            "start": 13,
                            "end": 14
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "X",
                                    "rawText": "X",
                                    "flags": 96,
                                    "start": 15,
                                    "end": 17
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 15,
                                "end": 17
                            },
                            "flags": 2097152,
                            "start": 15,
                            "end": 17
                        },
                        "right": null,
                        "flags": 32,
                        "start": 13,
                        "end": 17
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 12,
                "end": 18
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
                                "flags": 80,
                                "start": 23,
                                "end": 30
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 30,
                                "end": 32
                            },
                            "flags": 80,
                            "start": 23,
                            "end": 33
                        }
                    ],
                    "flags": 32,
                    "start": 23,
                    "end": 33
                },
                "flags": 32,
                "start": 21,
                "end": 35
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "A",
                        "rawText": "A",
                        "flags": 96,
                        "start": 19,
                        "end": 21
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "start": 19,
                    "end": 21
                },
                "flags": 2097152,
                "start": 19,
                "end": 21
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
                "text": "bar",
                "rawText": "bar",
                "flags": 96,
                "start": 44,
                "end": 48
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
                            "start": 49,
                            "end": 50
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "X",
                                    "rawText": "X",
                                    "flags": 96,
                                    "start": 51,
                                    "end": 53
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 51,
                                "end": 53
                            },
                            "flags": 2097152,
                            "start": 51,
                            "end": 53
                        },
                        "right": null,
                        "flags": 32,
                        "start": 49,
                        "end": 53
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 48,
                "end": 54
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
                                "flags": 80,
                                "start": 59,
                                "end": 66
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 66,
                                "end": 68
                            },
                            "flags": 80,
                            "start": 59,
                            "end": 69
                        }
                    ],
                    "flags": 32,
                    "start": 59,
                    "end": 69
                },
                "flags": 32,
                "start": 57,
                "end": 71
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "B",
                        "rawText": "B",
                        "flags": 96,
                        "start": 55,
                        "end": 57
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "start": 55,
                    "end": 57
                },
                "flags": 2097152,
                "start": 55,
                "end": 57
            },
            "flags": 16,
            "start": 35,
            "end": 71
        }
    ],
    "isModule": false,
    "source": "function foo(x: X): A { return x; }\nfunction bar(x: X): B { return x; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 71
}
```

### Printed

```javascript

function foo(x):  {
  return  x;
}
function bar(x):  {
  return  x;
}
```

### Diagnostics

```javascript
✔ No errors
```

