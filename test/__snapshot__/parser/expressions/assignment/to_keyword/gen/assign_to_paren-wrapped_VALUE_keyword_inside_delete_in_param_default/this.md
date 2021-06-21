# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: t
> :: test: assign to paren-wrapped VALUE keyword inside delete in param default
> :: case: this
## Options

`````js
{}
`````
## Input

`````js
function *f(x = delete ((this) = f)) {}
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
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 10,
                "end": 11
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
                            "start": 12,
                            "end": 13
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
                            "kind": 126,
                            "operandToken": {
                                "kind": 4259886,
                                "flags": 96,
                                "start": 15,
                                "end": 22
                            },
                            "operand": {
                                "kind": 121,
                                "expression": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 4276321,
                                            "flags": 96,
                                            "start": 25,
                                            "end": 29
                                        },
                                        "flags": 32,
                                        "start": 24,
                                        "end": 30
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 96,
                                        "start": 30,
                                        "end": 32
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 96,
                                        "start": 32,
                                        "end": 34
                                    },
                                    "flags": 32,
                                    "start": 24,
                                    "end": 34
                                },
                                "flags": 32,
                                "start": 22,
                                "end": 35
                            },
                            "flags": 32,
                            "start": 15,
                            "end": 35
                        },
                        "flags": 34,
                        "start": 12,
                        "end": 35
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 11,
                "end": 36
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 38,
                    "end": 38
                },
                "flags": 32,
                "start": 36,
                "end": 39
            },
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": false,
    "source": "function *f(x = delete ((this) = f)) {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 30, end: 32

```

