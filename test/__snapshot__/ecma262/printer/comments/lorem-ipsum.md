# Kataw parser test case

## Input

`````js
function foo(a, b, c) {
    return (
        (a >= b && a <= c)

        // lorem
        // ipsum
        || a === 42 || a === 666
    );
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
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 8,
                "end": 12
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 13,
                        "end": 14
                    },
                    {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 15,
                        "end": 17
                    },
                    {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 18,
                        "end": 20
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 13,
                "end": 20
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
                                "start": 23,
                                "end": 34
                            },
                            "expression": {
                                "kind": 121,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 121,
                                            "expression": {
                                                "kind": 198,
                                                "left": {
                                                    "kind": 198,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "start": 46,
                                                        "end": 47
                                                    },
                                                    "operatorToken": {
                                                        "kind": 34881,
                                                        "flags": 96,
                                                        "start": 47,
                                                        "end": 50
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "b",
                                                        "rawText": "b",
                                                        "flags": 96,
                                                        "start": 50,
                                                        "end": 52
                                                    },
                                                    "flags": 32,
                                                    "start": 36,
                                                    "end": 52
                                                },
                                                "operatorToken": {
                                                    "kind": 33594,
                                                    "flags": 96,
                                                    "start": 52,
                                                    "end": 55
                                                },
                                                "right": {
                                                    "kind": 198,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "start": 55,
                                                        "end": 57
                                                    },
                                                    "operatorToken": {
                                                        "kind": 34880,
                                                        "flags": 96,
                                                        "start": 57,
                                                        "end": 60
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "c",
                                                        "rawText": "c",
                                                        "flags": 96,
                                                        "start": 60,
                                                        "end": 62
                                                    },
                                                    "flags": 32,
                                                    "start": 57,
                                                    "end": 62
                                                },
                                                "flags": 32,
                                                "start": 36,
                                                "end": 62
                                            },
                                            "flags": 32,
                                            "start": 36,
                                            "end": 63
                                        },
                                        "operatorToken": {
                                            "kind": 33339,
                                            "flags": 97,
                                            "start": 63,
                                            "end": 109
                                        },
                                        "right": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 109,
                                                "end": 111
                                            },
                                            "operatorToken": {
                                                "kind": 34620,
                                                "flags": 96,
                                                "start": 111,
                                                "end": 115
                                            },
                                            "right": {
                                                "kind": 201392130,
                                                "text": 42,
                                                "rawText": "42",
                                                "flags": 96,
                                                "start": 115,
                                                "end": 118
                                            },
                                            "flags": 32,
                                            "start": 111,
                                            "end": 118
                                        },
                                        "flags": 32,
                                        "start": 36,
                                        "end": 118
                                    },
                                    "operatorToken": {
                                        "kind": 33339,
                                        "flags": 96,
                                        "start": 118,
                                        "end": 121
                                    },
                                    "right": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 121,
                                            "end": 123
                                        },
                                        "operatorToken": {
                                            "kind": 34620,
                                            "flags": 96,
                                            "start": 123,
                                            "end": 127
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 666,
                                            "rawText": "666",
                                            "flags": 96,
                                            "start": 127,
                                            "end": 131
                                        },
                                        "flags": 32,
                                        "start": 123,
                                        "end": 131
                                    },
                                    "flags": 32,
                                    "start": 36,
                                    "end": 131
                                },
                                "flags": 32,
                                "start": 34,
                                "end": 137
                            },
                            "flags": 81,
                            "start": 23,
                            "end": 138
                        }
                    ],
                    "flags": 33,
                    "start": 23,
                    "end": 138
                },
                "flags": 32,
                "start": 21,
                "end": 140
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 140
        }
    ],
    "isModule": false,
    "source": "function foo(a, b, c) {\n    return (\n        (a >= b && a <= c)\n\n        // lorem\n        // ipsum\n        || a === 42 || a === 666\n    );\n}\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 141
}
```

### Printed

```javascript

function foo(a, b, c) {
  return ((a >= b && a <= c) 
   // lorem
  // ipsum
  || a === 42 || a === 666);
}

```

### Diagnostics

```javascript
✔ No errors
```

