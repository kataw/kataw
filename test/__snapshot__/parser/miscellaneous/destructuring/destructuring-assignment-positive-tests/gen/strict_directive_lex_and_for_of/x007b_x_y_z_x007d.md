# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: f
> :: test: strict directive lex and for of
> :: case: { x, y, z }
## Options

`````js
{}
`````
## Input

`````js
'use strict'; let x, y, z; for (x of x = { x, y, z } = z = {});
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "'use strict'",
            "flags": 4194400,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "start": 13,
                "end": 17
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 17,
                            "end": 19
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 17,
                        "end": 19
                    },
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 20,
                            "end": 22
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 20,
                        "end": 22
                    },
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "start": 23,
                            "end": 25
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 23,
                        "end": 25
                    }
                ],
                "flags": 16,
                "start": 17,
                "end": 25
            },
            "flags": 33554448,
            "start": 13,
            "end": 26
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 26,
                "end": 30
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 32,
                "end": 33
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 33,
                "end": 36
            },
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 36,
                    "end": 38
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 38,
                    "end": 40
                },
                "right": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 42,
                                    "end": 44
                                },
                                {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 45,
                                    "end": 47
                                },
                                {
                                    "kind": 134299649,
                                    "text": "z",
                                    "rawText": "z",
                                    "flags": 96,
                                    "start": 48,
                                    "end": 50
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 42,
                            "end": 50
                        },
                        "flags": 48,
                        "start": 40,
                        "end": 52
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 52,
                        "end": 54
                    },
                    "right": {
                        "kind": 125,
                        "left": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "start": 54,
                            "end": 56
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 96,
                            "start": 56,
                            "end": 58
                        },
                        "right": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 60,
                                "end": 60
                            },
                            "flags": 48,
                            "start": 58,
                            "end": 61
                        },
                        "flags": 32,
                        "start": 54,
                        "end": 61
                    },
                    "flags": 32,
                    "start": 40,
                    "end": 61
                },
                "flags": 32,
                "start": 36,
                "end": 61
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 62,
                "end": 63
            },
            "flags": 80,
            "start": 26,
            "end": 63
        }
    ],
    "isModule": false,
    "source": "'use strict'; let x, y, z; for (x of x = { x, y, z } = z = {});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 63
}
```

### Printed

```javascript

'use strict' let x, y, z; for(x of x={ x, y, z }=z={  }) ; 
```

### Diagnostics

```javascript
✔ No errors
```

