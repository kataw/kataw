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
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 81921,
                    "text": "bar",
                    "rawText": "bar",
                    "flags": 768,
                    "start": 0,
                    "end": 3
                },
                "questionToken": {
                    "kind": 22,
                    "flags": 768,
                    "start": 3,
                    "end": 5
                },
                "consequent": {
                    "kind": 81921,
                    "text": "baz",
                    "rawText": "baz",
                    "flags": 768,
                    "start": 5,
                    "end": 9
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 768,
                    "start": 9,
                    "end": 11
                },
                "alternate": {
                    "kind": 121,
                    "expression": {
                        "kind": 271,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 768,
                            "start": 25,
                            "end": 28
                        },
                        "typeParameters": null,
                        "parameters": [
                            {
                                "kind": 81921,
                                "text": "interface",
                                "rawText": "interface",
                                "flags": 768,
                                "start": 15,
                                "end": 24
                            }
                        ],
                        "asyncToken": null,
                        "returnType": null,
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [
                                    {
                                        "kind": 67174403,
                                        "text": "use strict",
                                        "rawText": "use strict",
                                        "flags": 67109632,
                                        "start": 30,
                                        "end": 43
                                    }
                                ],
                                "statements": [
                                    {
                                        "kind": 120,
                                        "expression": {
                                            "kind": 81921,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 768,
                                            "start": 44,
                                            "end": 46
                                        },
                                        "flags": 128,
                                        "start": 44,
                                        "end": 46
                                    }
                                ],
                                "multiline": false,
                                "flags": 256,
                                "start": 30,
                                "end": 46
                            },
                            "flags": 256,
                            "start": 28,
                            "end": 48
                        },
                        "flags": 256,
                        "start": 13,
                        "end": 48
                    },
                    "flags": 256,
                    "start": 11,
                    "end": 50
                },
                "flags": 256,
                "start": 0,
                "end": 50
            },
            "flags": 128,
            "start": 0,
            "end": 51
        }
    ],
    "isModule": false,
    "text": "bar ? baz : ( (interface) => { 'use strict'; 0 } );",
    "fileName": "__root__",
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

