# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: y = async x => await x
## Input

`````js
'use strict'; y = async x => await x
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
                "kind": 67174403,
                "value": "use strict",
                "autofix": 0,
                "flags": 768,
                "start": 0,
                "end": 12
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 13
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "value": "y",
                    "autofix": 0,
                    "flags": 768,
                    "start": 13,
                    "end": 15
                },
                "operatorToken": {
                    "kind": 82031,
                    "autofix": 0,
                    "flags": 0,
                    "start": 13,
                    "end": 17
                },
                "right": {
                    "kind": 271,
                    "typeParameters": null,
                    "parameters": [
                        {
                            "kind": 215,
                            "ellipsisToken": null,
                            "binding": {
                                "kind": 81921,
                                "value": "x",
                                "autofix": 0,
                                "flags": 768,
                                "start": 23,
                                "end": 25
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "autofix": 0,
                            "flags": 256,
                            "start": 17,
                            "end": 25
                        }
                    ],
                    "asyncToken": {
                        "kind": 82031,
                        "autofix": 0,
                        "flags": 0,
                        "start": 17,
                        "end": 23
                    },
                    "returnType": null,
                    "contents": {
                        "kind": 81921,
                        "value": "await",
                        "autofix": 0,
                        "flags": 768,
                        "start": 28,
                        "end": 34
                    },
                    "autofix": 0,
                    "flags": 2304,
                    "start": 17,
                    "end": 34
                },
                "autofix": 0,
                "flags": 256,
                "start": 13,
                "end": 34
            },
            "autofix": 0,
            "flags": 128,
            "start": 13,
            "end": 34
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": "x",
                "autofix": 0,
                "flags": 768,
                "start": 34,
                "end": 36
            },
            "autofix": 0,
            "flags": 128,
            "start": 34,
            "end": 36
        }
    ],
    "isModule": false,
    "text": "'use strict'; y = async x => await x",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 34,
            "end": 36
        }
    ],
    "start": 0,
    "end": 36
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: y = async x => await x
## Input

`````js
'use strict'; y = async x => await x
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: y = async x => await x
## Input

`````js
'use strict'; y = async x => await x
`````
```

