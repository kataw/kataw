# Kataw parser test case

## Input

`````js
function* g() {
  (yield) = 1;
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
            "generatorToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 9
            },
            "name": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 96,
                "start": 9,
                "end": 11
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 11,
                "end": 13
            },
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
                                    "kind": 121,
                                    "expression": {
                                        "kind": 229,
                                        "yieldKeyword": {
                                            "kind": 8454253,
                                            "flags": 64,
                                            "start": 19,
                                            "end": 24
                                        },
                                        "delegate": false,
                                        "asteriskToken": null,
                                        "expression": null,
                                        "flags": 32,
                                        "start": 19,
                                        "end": 24
                                    },
                                    "flags": 32,
                                    "start": 15,
                                    "end": 25
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 64,
                                    "start": 25,
                                    "end": 27
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 27,
                                    "end": 29
                                },
                                "flags": 32,
                                "start": 15,
                                "end": 29
                            },
                            "flags": 16,
                            "start": 15,
                            "end": 30
                        }
                    ],
                    "flags": 33,
                    "start": 15,
                    "end": 30
                },
                "flags": 32,
                "start": 13,
                "end": 32
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "function* g() {\n  (yield) = 1;\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 25, end: 27

```

