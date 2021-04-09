# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: assignmen
> :: case: x => { return x; }
## Input

`````js
x = x => { return x; } ;
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
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 81921,
                    "autofix": 0,
                    "flags": 0,
                    "start": 0,
                    "end": 3
                },
                "right": {
                    "kind": 271,
                    "typeParameters": null,
                    "parameters": {
                        "kind": 81921,
                        "value": "x",
                        "autofix": 0,
                        "flags": 768,
                        "start": 3,
                        "end": 5
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
                                        "start": 17,
                                        "end": 19
                                    },
                                    "autofix": 0,
                                    "flags": 128,
                                    "start": 0,
                                    "end": 10
                                }
                            ],
                            "multiline": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 10,
                            "end": 20
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 8,
                        "end": 22
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 3,
                    "end": 22
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 22
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "text": "x = x => { return x; } ;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 24
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: assignmen
> :: case: x => { return x; }
## Input

`````js
x = x => { return x; } ;
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: assignmen
> :: case: x => { return x; }
## Input

`````js
x = x => { return x; } ;
`````
```

