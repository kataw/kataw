# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: stand-alone
> :: case: async () => { await import(x) }
## Input

`````js
async () => { await import(x) }
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
                            "kind": 120,
                            "expression": {
                                "kind": 208,
                                "awaitToken": {
                                    "kind": 82032,
                                    "flags": 0,
                                    "start": 13,
                                    "end": 19
                                },
                                "expression": {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 206,
                                        "importKeyword": {
                                            "kind": 37814364,
                                            "flags": 0,
                                            "start": 19,
                                            "end": 26
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 27,
                                            "end": 28
                                        },
                                        "flags": 256,
                                        "start": 26,
                                        "end": 29
                                    },
                                    "flags": 128,
                                    "start": 26,
                                    "end": 29
                                },
                                "flags": 256,
                                "start": 13,
                                "end": 29
                            },
                            "flags": 128,
                            "start": 13,
                            "end": 29
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 13,
                    "end": 29
                },
                "flags": 256,
                "start": 11,
                "end": 31
            },
            "flags": 2304,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "text": "async () => { await import(x) }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

