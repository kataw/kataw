# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: assignmen
> :: case: eval => { 'use strict'; 0 }
## Input

`````js
x = eval => { 'use strict'; 0 } ;
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
                        "value": "eval",
                        "autofix": 0,
                        "flags": 768,
                        "start": 3,
                        "end": 8
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
                                        "start": 13,
                                        "end": 26
                                    },
                                    "autofix": 0,
                                    "flags": 128,
                                    "start": 13,
                                    "end": 27
                                },
                                {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 81921,
                                        "value": 0,
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 27,
                                        "end": 29
                                    },
                                    "autofix": 0,
                                    "flags": 128,
                                    "start": 27,
                                    "end": 29
                                }
                            ],
                            "multiline": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 13,
                            "end": 29
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 11,
                        "end": 31
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 3,
                    "end": 31
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 31
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "text": "x = eval => { 'use strict'; 0 } ;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 33
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: assignmen
> :: case: eval => { 'use strict'; 0 }
## Input

`````js
x = eval => { 'use strict'; 0 } ;
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: assignmen
> :: case: eval => { 'use strict'; 0 }
## Input

`````js
x = eval => { 'use strict'; 0 } ;
`````
```

