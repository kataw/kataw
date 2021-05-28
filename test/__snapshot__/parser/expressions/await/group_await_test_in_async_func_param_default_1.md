# Kataw parser test case

## Input

`````js
async function f(x=(await z)=y){}
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
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 5,
                "end": 14
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
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
                            "flags": 96,
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
                                    "awaitKeyword": {
                                        "kind": 82196,
                                        "flags": 0,
                                        "start": 20,
                                        "end": 25
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 96,
                                        "start": 25,
                                        "end": 27
                                    },
                                    "flags": 32,
                                    "start": 20,
                                    "end": 27
                                },
                                "flags": 32,
                                "start": 19,
                                "end": 28
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 28,
                                "end": 29
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 29,
                                "end": 30
                            },
                            "flags": 32,
                            "start": 19,
                            "end": 30
                        },
                        "flags": 34,
                        "start": 17,
                        "end": 30
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 16,
                "end": 31
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 32,
                    "end": 32
                },
                "flags": 32,
                "start": 31,
                "end": 33
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "async function f(x=(await z)=y){}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ `await` expression cannot be used in function parameters - start: 20, end: 25
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 28, end: 29

```

