# Kataw parser test case

## Input

`````js
function *f(){  ({yield} = x)  }
`````

## Output

### Hybrid CST

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
                "flags": 0,
                "start": 0,
                "end": 8
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "original": "f",
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 10,
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
                                "kind": 121,
                                "expression": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 134299649,
                                                    "original": "yield",
                                                    "text": "yield",
                                                    "rawText": "yield",
                                                    "flags": 96,
                                                    "start": 18,
                                                    "end": 23
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 18,
                                            "end": 23
                                        },
                                        "flags": 32,
                                        "start": 17,
                                        "end": 24
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 64,
                                        "start": 24,
                                        "end": 26
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "original": "x",
                                        "text": "x",
                                        "rawText": " x",
                                        "flags": 96,
                                        "start": 26,
                                        "end": 28
                                    },
                                    "flags": 32,
                                    "start": 17,
                                    "end": 28
                                },
                                "flags": 32,
                                "start": 14,
                                "end": 29
                            },
                            "flags": 16,
                            "start": 14,
                            "end": 29
                        }
                    ],
                    "flags": 32,
                    "start": 14,
                    "end": 29
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
    "source": "function *f(){  ({yield} = x)  }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Identifier expected. 'yield' is a reserved word in strict mode - start: 18, end: 23
✖ Identifier expected. Reserved word in strict mode - start: 23, end: 24

```

