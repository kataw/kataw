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
                "flags": 8,
                "start": 0,
                "end": 11
            },
            "typeParameters": null,
            "parameters": [],
            "asyncToken": {
                "kind": 82031,
                "flags": 512,
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
                                "flags": 13,
                                "start": 262144,
                                "end": 26
                            },
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 12,
                                    "start": 26,
                                    "end": 26
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 512,
                                    "start": 26,
                                    "end": 28
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 28,
                                    "end": 30
                                },
                                "flags": 256,
                                "start": 26,
                                "end": 30
                            },
                            "caseBlock": {
                                "kind": 152,
                                "clauses": [],
                                "flags": 128,
                                "start": 30,
                                "end": 33
                            },
                            "flags": 128,
                            "start": 13,
                            "end": 33
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 13,
                    "end": 33
                },
                "flags": 256,
                "start": 11,
                "end": 33
            },
            "flags": 2304,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "text": "async () => {  \\u0073witch = x  }",
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

