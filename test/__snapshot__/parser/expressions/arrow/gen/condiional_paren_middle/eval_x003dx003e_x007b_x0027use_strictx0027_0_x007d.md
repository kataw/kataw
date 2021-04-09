# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: condiional_paren_middle
> :: case: eval => { 'use strict'; 0 }
## Input

`````js
bar ? (eval => { 'use strict'; 0 }) : baz;
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
                "kind": 197,
                "shortCircuit": {
                    "kind": 81921,
                    "value": "bar",
                    "autofix": 0,
                    "flags": 768,
                    "start": 0,
                    "end": 3
                },
                "questionToken": {
                    "kind": 22,
                    "autofix": 0,
                    "flags": 0,
                    "start": 3,
                    "end": 5
                },
                "consequent": {
                    "kind": 121,
                    "expression": {
                        "kind": 271,
                        "typeParameters": null,
                        "parameters": {
                            "kind": 81921,
                            "value": "eval",
                            "autofix": 0,
                            "flags": 768,
                            "start": 7,
                            "end": 11
                        },
                        "asyncToken": null,
                        "returnType": null,
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "statements": [
                                    {
                                        "kind": 120,
                                        "expression": {
                                            "kind": 67174403,
                                            "value": "use strict",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 16,
                                            "end": 29
                                        },
                                        "autofix": 0,
                                        "flags": 128,
                                        "start": 16,
                                        "end": 30
                                    },
                                    {
                                        "kind": 120,
                                        "expression": {
                                            "kind": 81921,
                                            "value": 0,
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 30,
                                            "end": 32
                                        },
                                        "autofix": 0,
                                        "flags": 128,
                                        "start": 30,
                                        "end": 32
                                    }
                                ],
                                "multiline": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 16,
                                "end": 32
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 14,
                            "end": 34
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 7,
                        "end": 34
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 5,
                    "end": 35
                },
                "colonToken": {
                    "kind": 21,
                    "autofix": 0,
                    "flags": 0,
                    "start": 35,
                    "end": 37
                },
                "alternate": {
                    "kind": 81921,
                    "value": "baz",
                    "autofix": 0,
                    "flags": 768,
                    "start": 37,
                    "end": 41
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 41
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 42
        }
    ],
    "isModule": false,
    "text": "bar ? (eval => { 'use strict'; 0 }) : baz;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 42
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: condiional_paren_middle
> :: case: eval => { 'use strict'; 0 }
## Input

`````js
bar ? (eval => { 'use strict'; 0 }) : baz;
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: condiional_paren_middle
> :: case: eval => { 'use strict'; 0 }
## Input

`````js
bar ? (eval => { 'use strict'; 0 }) : baz;
`````
```

