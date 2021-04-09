# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: stand-alone
> :: case: x => { return x; }
## Input

`````js
x => { return x; } ;
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
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "text": "x => { return x; } ;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: stand-alone
> :: case: x => { return x; }
## Input

`````js
x => { return x; } ;
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: stand-alone
> :: case: x => { return x; }
## Input

`````js
x => { return x; } ;
`````
```

