# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: c
> :: test: inside an async func
> :: case: \u0070ackage
## Input

`````js
async () => {  \u0070ackage = x  }
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
                                    "kind": 134299649,
                                    "text": "package",
                                    "rawText": "\\u0070ackage",
                                    "flags": 96,
                                    "start": 13,
                                    "end": 27
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 64,
                                    "start": 27,
                                    "end": 29
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 29,
                                    "end": 31
                                },
                                "flags": 32,
                                "start": 13,
                                "end": 31
                            },
                            "flags": 16,
                            "start": 13,
                            "end": 31
                        }
                    ],
                    "flags": 16416,
                    "start": 13,
                    "end": 31
                },
                "flags": 32,
                "start": 11,
                "end": 34
            },
            "flags": 288,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "async () => {  \\u0070ackage = x  }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

async () => {
  package = x;
}
```

### Diagnostics

```javascript
✔ No errors
```

