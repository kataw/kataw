# Kataw parser test case

## Input

`````js
async function f(){    async function g(x=(await z)=y){}   }
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
                "flags": 64,
                "start": 5,
                "end": 14
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 14,
                "end": 16
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 17,
                "end": 17
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 19,
                                "end": 28
                            },
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 28,
                                "end": 37
                            },
                            "asteriskToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "g",
                                "rawText": "g",
                                "flags": 96,
                                "start": 37,
                                "end": 39
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
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 40,
                                            "end": 41
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 125,
                                            "left": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 208,
                                                    "awaitKeyword": {
                                                        "kind": 82196,
                                                        "flags": 64,
                                                        "start": 43,
                                                        "end": 48
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "z",
                                                        "rawText": "z",
                                                        "flags": 96,
                                                        "start": 48,
                                                        "end": 50
                                                    },
                                                    "flags": 32,
                                                    "start": 43,
                                                    "end": 50
                                                },
                                                "flags": 42,
                                                "start": 32,
                                                "end": 51
                                            },
                                            "operatorToken": {
                                                "kind": 4125,
                                                "flags": 96,
                                                "start": 51,
                                                "end": 52
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 96,
                                                "start": 52,
                                                "end": 53
                                            },
                                            "flags": 0,
                                            "start": 42,
                                            "end": 53
                                        },
                                        "flags": 34,
                                        "start": 40,
                                        "end": 53
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 34,
                                "start": 40,
                                "end": 53
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 55,
                                    "end": 55
                                },
                                "flags": 32,
                                "start": 54,
                                "end": 56
                            },
                            "returnType": null,
                            "flags": 144,
                            "start": 19,
                            "end": 56
                        }
                    ],
                    "flags": 32,
                    "start": 19,
                    "end": 56
                },
                "flags": 32,
                "start": 18,
                "end": 60
            },
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 60
        }
    ],
    "isModule": false,
    "source": "async function f(){    async function g(x=(await z)=y){}   }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 60
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ `await` expression cannot be used in function parameters - start: 43, end: 48
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 51, end: 52

```

