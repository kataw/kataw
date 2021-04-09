# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: var o = { *gf() { switch (1) { case yield: break; } } }
## Input

`````js
'use strict'; var o = { *gf() { switch (1) { case yield: break; } } }
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
            "kind": 155,
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 81921,
                            "value": "o",
                            "autofix": 0,
                            "flags": 768,
                            "start": 17,
                            "end": 19
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 209,
                                        "name": {
                                            "kind": 81921,
                                            "value": "gf",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 25,
                                            "end": 27
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 28,
                                            "end": 29
                                        },
                                        "type": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "statements": [
                                                    {
                                                        "kind": 160,
                                                        "expression": {
                                                            "kind": 81921,
                                                            "value": 1,
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 40,
                                                            "end": 41
                                                        },
                                                        "caseBlock": {
                                                            "kind": 152,
                                                            "clauses": [
                                                                {
                                                                    "kind": 175,
                                                                    "expression": {
                                                                        "kind": 229,
                                                                        "delegate": false,
                                                                        "asteriskToken": null,
                                                                        "expression": null,
                                                                        "autofix": 0,
                                                                        "flags": 256,
                                                                        "start": 49,
                                                                        "end": 55
                                                                    },
                                                                    "statements": [
                                                                        {
                                                                            "kind": 150,
                                                                            "label": null,
                                                                            "autofix": 0,
                                                                            "flags": 128,
                                                                            "start": 56,
                                                                            "end": 63
                                                                        }
                                                                    ],
                                                                    "autofix": 0,
                                                                    "flags": 128,
                                                                    "start": 44,
                                                                    "end": 63
                                                                }
                                                            ],
                                                            "autofix": 0,
                                                            "flags": 128,
                                                            "start": 42,
                                                            "end": 65
                                                        },
                                                        "autofix": 0,
                                                        "flags": 128,
                                                        "start": 31,
                                                        "end": 65
                                                    }
                                                ],
                                                "multiline": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 31,
                                                "end": 65
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 29,
                                            "end": 67
                                        },
                                        "autofix": 0,
                                        "flags": 1280,
                                        "start": 27,
                                        "end": 67
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "autofix": 0,
                                "flags": 0,
                                "start": 23,
                                "end": 67
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 21,
                            "end": 69
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 17,
                        "end": 69
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 17,
                "end": 69
            },
            "autofix": 0,
            "flags": 128,
            "start": 13,
            "end": 69
        }
    ],
    "isModule": false,
    "text": "'use strict'; var o = { *gf() { switch (1) { case yield: break; } } }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 69
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: var o = { *gf() { switch (1) { case yield: break; } } }
## Input

`````js
'use strict'; var o = { *gf() { switch (1) { case yield: break; } } }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: var o = { *gf() { switch (1) { case yield: break; } } }
## Input

`````js
'use strict'; var o = { *gf() { switch (1) { case yield: break; } } }
`````
```

