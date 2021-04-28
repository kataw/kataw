# Kataw parser test case

## Input

`````js
async function f(x=(await z)=y){}
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
            "asyncKeyword": {
                "kind": 82031,
                "flags": 0,
                "start": 512,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 5,
                "start": 0,
                "end": 14
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 768,
                "start": 14,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 17,
                            "end": 18
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 125,
                            "left": {
                                "kind": 121,
                                "expression": {
                                    "kind": 208,
                                    "awaitToken": {
                                        "kind": 82032,
                                        "flags": 20,
                                        "start": 0,
                                        "end": 25
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 768,
                                        "start": 25,
                                        "end": 27
                                    },
                                    "flags": 256,
                                    "start": 20,
                                    "end": 27
                                },
                                "flags": 256,
                                "start": 19,
                                "end": 28
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 512,
                                "start": 28,
                                "end": 29
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 768,
                                "start": 29,
                                "end": 30
                            },
                            "flags": 256,
                            "start": 19,
                            "end": 30
                        },
                        "flags": 258,
                        "start": 17,
                        "end": 30
                    }
                ],
                "trailingComma": false,
                "flags": 258,
                "start": 16,
                "end": 31
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "multiline": false,
                    "flags": 256,
                    "start": 32,
                    "end": 32
                },
                "flags": 256,
                "start": 31,
                "end": 33
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 1152,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "text": "async function f(x=(await z)=y){}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 28, end: 29

```

