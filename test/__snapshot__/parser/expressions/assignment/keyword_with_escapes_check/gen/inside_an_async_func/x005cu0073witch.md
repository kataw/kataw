# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: c
> :: test: inside an async func
> :: case: \u0073witch
## Input

`````js
async () => {  \u0073witch = x  }
`````

## Output

### Hybrid CST

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
            "asyncToken": {
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
                            "kind": 160,
                            "switchKeyword": {
                                "kind": 37757024,
                                "flags": 16384,
                                "start": 13,
                                "end": 26
                            },
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 68,
                                    "start": 26,
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
                                    "original": "x",
                                    "text": "x",
                                    "rawText": " x",
                                    "flags": 96,
                                    "start": 28,
                                    "end": 30
                                },
                                "flags": 32,
                                "start": 26,
                                "end": 30
                            },
                            "caseBlock": {
                                "kind": 152,
                                "clauses": [],
                                "flags": 16,
                                "start": 30,
                                "end": 33
                            },
                            "flags": 16,
                            "start": 13,
                            "end": 33
                        }
                    ],
                    "flags": 16416,
                    "start": 13,
                    "end": 33
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
    "source": "async () => {  \\u0073witch = x  }",
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
✖ Expression expected - start: 26, end: 28

```

