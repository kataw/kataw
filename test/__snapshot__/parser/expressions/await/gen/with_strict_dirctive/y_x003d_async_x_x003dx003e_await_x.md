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
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "use strict",
            "flags": 67109632,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 768,
                    "start": 13,
                    "end": 15
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 15,
                    "end": 17
                },
                "right": {
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
                            "kind": 215,
                            "ellipsisToken": null,
                            "binding": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 768,
                                "start": 23,
                                "end": 25
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 256,
                            "start": 17,
                            "end": 25
                        }
                    ],
                    "asyncToken": {
                        "kind": 82031,
                        "flags": 768,
                        "start": 17,
                        "end": 23
                    },
                    "returnType": null,
                    "contents": {
                        "kind": 208,
                        "awaitToken": {
                            "kind": 82032,
                            "flags": 768,
                            "start": 28,
                            "end": 34
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 34,
                            "end": 36
                        },
                        "flags": 256,
                        "start": 28,
                        "end": 36
                    },
                    "flags": 2304,
                    "start": 17,
                    "end": 36
                },
                "flags": 256,
                "start": 13,
                "end": 36
            },
            "flags": 128,
            "start": 13,
            "end": 36
        }
    ],
    "isModule": false,
    "text": "'use strict'; y = async x => await x",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 36
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

