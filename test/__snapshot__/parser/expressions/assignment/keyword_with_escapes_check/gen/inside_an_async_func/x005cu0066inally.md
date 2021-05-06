# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: c
> :: test: inside an async func
> :: case: \u0066inally
## Input

`````js
async () => {  \u0066inally = x  }
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
                            "kind": 159,
                            "tryKeyword": null,
                            "block": {
                                "kind": 249,
                                "block": {
                                    "kind": 124,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 27,
                                    "end": 27
                                },
                                "flags": 16,
                                "start": 27,
                                "end": 27
                            },
                            "catchClause": null,
                            "finallyKeyword": null,
                            "finallyBlock": {
                                "kind": 249,
                                "block": {
                                    "kind": 124,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 29,
                                    "end": 29
                                },
                                "flags": 16,
                                "start": 29,
                                "end": 29
                            },
                            "flags": 16,
                            "start": 13,
                            "end": 29
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 29,
                                "end": 31
                            },
                            "flags": 16,
                            "start": 29,
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
    "source": "async () => {  \\u0066inally = x  }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ 'try' expected - start: 13, end: 27

```

