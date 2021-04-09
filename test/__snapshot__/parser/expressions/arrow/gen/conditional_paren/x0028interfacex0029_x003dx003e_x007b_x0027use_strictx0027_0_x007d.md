# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: conditional_paren
> :: case: (interface) => { 'use strict'; 0 }
## Input

`````js
bar ? baz : ( (interface) => { 'use strict'; 0 } );
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
                    "kind": 81921,
                    "value": "baz",
                    "autofix": 0,
                    "flags": 768,
                    "start": 5,
                    "end": 9
                },
                "colonToken": {
                    "kind": 21,
                    "autofix": 0,
                    "flags": 0,
                    "start": 9,
                    "end": 11
                },
                "alternate": {
                    "kind": 121,
                    "expression": {
                        "kind": 271,
                        "typeParameters": null,
                        "parameters": [
                            {
                                "kind": 81921,
                                "value": "interface",
                                "autofix": 0,
                                "flags": 768,
                                "start": 15,
                                "end": 24
                            }
                        ],
                        "asyncToken": false,
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
                                            "start": 30,
                                            "end": 43
                                        },
                                        "autofix": 0,
                                        "flags": 128,
                                        "start": 30,
                                        "end": 44
                                    },
                                    {
                                        "kind": 120,
                                        "expression": {
                                            "kind": 81921,
                                            "value": 0,
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 44,
                                            "end": 46
                                        },
                                        "autofix": 0,
                                        "flags": 128,
                                        "start": 44,
                                        "end": 46
                                    }
                                ],
                                "multiline": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 30,
                                "end": 46
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 28,
                            "end": 48
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 13,
                        "end": 48
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 11,
                    "end": 50
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 50
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 51
        }
    ],
    "isModule": false,
    "text": "bar ? baz : ( (interface) => { 'use strict'; 0 } );",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 51
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: conditional_paren
> :: case: (interface) => { 'use strict'; 0 }
## Input

`````js
bar ? baz : ( (interface) => { 'use strict'; 0 } );
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: conditional_paren
> :: case: (interface) => { 'use strict'; 0 }
## Input

`````js
bar ? baz : ( (interface) => { 'use strict'; 0 } );
`````
```

