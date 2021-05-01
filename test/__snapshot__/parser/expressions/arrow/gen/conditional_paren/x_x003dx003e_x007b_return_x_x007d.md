# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: conditional_paren
> :: case: x => { return x; }
## Input

`````js
bar ? baz : ( x => { return x; } );
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "bar",
                    "rawText": "bar",
                    "flags": 96,
                    "start": 0,
                    "end": 3
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 0,
                    "start": 3,
                    "end": 5
                },
                "consequent": {
                    "kind": 134299649,
                    "text": "baz",
                    "rawText": " baz",
                    "flags": 96,
                    "start": 5,
                    "end": 9
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 0,
                    "start": 9,
                    "end": 11
                },
                "alternate": {
                    "kind": 121,
                    "expression": {
                        "kind": 271,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 0,
                            "start": 15,
                            "end": 18
                        },
                        "typeParameters": null,
                        "parameters": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": " x",
                            "flags": 96,
                            "start": 13,
                            "end": 15
                        },
                        "asyncToken": null,
                        "returnType": null,
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [
                                    {
                                        "kind": 161,
                                        "returnKeyword": {
                                            "kind": 37757022,
                                            "flags": 0,
                                            "start": 20,
                                            "end": 27
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": " x",
                                            "flags": 96,
                                            "start": 27,
                                            "end": 29
                                        },
                                        "flags": 16,
                                        "start": 0,
                                        "end": 20
                                    }
                                ],
                                "flags": 32,
                                "start": 20,
                                "end": 30
                            },
                            "flags": 32,
                            "start": 18,
                            "end": 32
                        },
                        "flags": 32,
                        "start": 13,
                        "end": 32
                    },
                    "flags": 32,
                    "start": 11,
                    "end": 34
                },
                "flags": 32,
                "start": 0,
                "end": 34
            },
            "flags": 16,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "bar ? baz : ( x => { return x; } );",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
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

