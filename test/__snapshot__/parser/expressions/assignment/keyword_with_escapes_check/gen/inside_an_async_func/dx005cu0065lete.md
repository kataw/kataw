# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: c
> :: test: inside an async func
> :: case: d\u0065lete
## Input

`````js
async () => {  d\u0065lete = x  }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 0,
                "start": 8,
                "end": 11
            },
            "typeParameters": null,
            "parameters": [],
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "returnType": null,
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
                                    "kind": 126,
                                    "operandToken": {
                                        "kind": 4259886,
                                        "flags": 16448,
                                        "start": 13,
                                        "end": 26
                                    },
                                    "operand": {
                                        "kind": 16637,
                                        "text": "",
                                        "flags": 68,
                                        "start": 26,
                                        "end": 26
                                    },
                                    "flags": 32,
                                    "start": 13,
                                    "end": 26
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 64,
                                    "start": 26,
                                    "end": 28
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 28,
                                    "end": 30
                                },
                                "flags": 32,
                                "start": 13,
                                "end": 30
                            },
                            "flags": 16,
                            "start": 13,
                            "end": 30
                        }
                    ],
                    "flags": 16416,
                    "start": 13,
                    "end": 30
                },
                "flags": 32,
                "start": 11,
                "end": 33
            },
            "flags": 288,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "async () => {  d\\u0065lete = x  }",
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
✖ Keywords cannot contain escape characters - start: 26, end: 28
✖ Expression expected - start: 26, end: 28
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 26, end: 28

```

