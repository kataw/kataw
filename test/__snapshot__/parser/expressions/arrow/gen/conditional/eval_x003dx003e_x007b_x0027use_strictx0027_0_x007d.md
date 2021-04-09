# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: l
> :: test: conditional
> :: case: eval => { 'use strict'; 0 }
## Input

`````js
eval => { 'use strict'; 0 } , bar;
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
                            "value": "eval",
                            "autofix": 0,
                            "flags": 768,
                            "start": 0,
                            "end": 4
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
                                            "start": 9,
                                            "end": 22
                                        },
                                        "autofix": 0,
                                        "flags": 128,
                                        "start": 9,
                                        "end": 23
                                    },
                                    {
                                        "kind": 120,
                                        "expression": {
                                            "kind": 81921,
                                            "value": 0,
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 23,
                                            "end": 25
                                        },
                                        "autofix": 0,
                                        "flags": 128,
                                        "start": 23,
                                        "end": 25
                                    }
                                ],
                                "multiline": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 9,
                                "end": 25
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 7,
                            "end": 27
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 0,
                        "end": 27
                    },
                    {
                        "kind": 81921,
                        "value": "bar",
                        "autofix": 0,
                        "flags": 768,
                        "start": 29,
                        "end": 33
                    }
                ],
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 33
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "text": "eval => { 'use strict'; 0 } , bar;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 34
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: l
> :: test: conditional
> :: case: eval => { 'use strict'; 0 }
## Input

`````js
eval => { 'use strict'; 0 } , bar;
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: l
> :: test: conditional
> :: case: eval => { 'use strict'; 0 }
## Input

`````js
eval => { 'use strict'; 0 } , bar;
`````
```

