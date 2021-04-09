# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: conditional_last
> :: case: eval => { 'use strict'; 0 }
## Input

`````js
bar, eval => { 'use strict'; 0 };
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
                        "kind": 81921,
                        "value": "bar",
                        "autofix": 0,
                        "flags": 768,
                        "start": 0,
                        "end": 3
                    },
                    {
                        "kind": 271,
                        "typeParameters": null,
                        "parameters": {
                            "kind": 81921,
                            "value": "eval",
                            "autofix": 0,
                            "flags": 768,
                            "start": 4,
                            "end": 9
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
                                            "start": 14,
                                            "end": 27
                                        },
                                        "autofix": 0,
                                        "flags": 128,
                                        "start": 14,
                                        "end": 28
                                    },
                                    {
                                        "kind": 120,
                                        "expression": {
                                            "kind": 81921,
                                            "value": 0,
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 28,
                                            "end": 30
                                        },
                                        "autofix": 0,
                                        "flags": 128,
                                        "start": 28,
                                        "end": 30
                                    }
                                ],
                                "multiline": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 14,
                                "end": 30
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 12,
                            "end": 32
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 4,
                        "end": 32
                    }
                ],
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 32
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "text": "bar, eval => { 'use strict'; 0 };",
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
- Path: t
> :: test: conditional_last
> :: case: eval => { 'use strict'; 0 }
## Input

`````js
bar, eval => { 'use strict'; 0 };
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: conditional_last
> :: case: eval => { 'use strict'; 0 }
## Input

`````js
bar, eval => { 'use strict'; 0 };
`````
```

