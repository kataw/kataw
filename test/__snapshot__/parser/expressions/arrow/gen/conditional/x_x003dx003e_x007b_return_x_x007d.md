# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: l
> :: test: conditional
> :: case: x => { return x; }
## Input

`````js
x => { return x; } , bar;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 271,
                        "typeParameters": null,
                        "parameters": {
                            "kind": 81921,
                            "value": "x",
                            "autofix": 0,
                            "flags": 768,
                            "start": 0,
                            "end": 1
                        },
                        "asyncToken": null,
                        "returnType": null,
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "statements": [
                                    {
                                        "kind": 161,
                                        "expression": {
                                            "kind": 81921,
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 13,
                                            "end": 15
                                        },
                                        "autofix": 0,
                                        "flags": 128,
                                        "start": 0,
                                        "end": 6
                                    }
                                ],
                                "multiline": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 6,
                                "end": 16
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 4,
                            "end": 18
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 0,
                        "end": 18
                    },
                    {
                        "kind": 81921,
                        "value": "bar",
                        "autofix": 0,
                        "flags": 768,
                        "start": 20,
                        "end": 24
                    }
                ],
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 24
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "text": "x => { return x; } , bar;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 25
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: l
> :: test: conditional
> :: case: x => { return x; }
## Input

`````js
x => { return x; } , bar;
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: l
> :: test: conditional
> :: case: x => { return x; }
## Input

`````js
x => { return x; } , bar;
`````
```

