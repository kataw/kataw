# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: var o = { *gf() { switch (1) { case yield: break; } } }
## Input

`````js
var o = { *gf() { switch (1) { case yield: break; } } }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
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
                            "start": 3,
                            "end": 5
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
                                            "start": 11,
                                            "end": 13
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 14,
                                            "end": 15
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
                                                            "start": 26,
                                                            "end": 27
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
                                                                        "start": 35,
                                                                        "end": 41
                                                                    },
                                                                    "statements": [
                                                                        {
                                                                            "kind": 150,
                                                                            "label": null,
                                                                            "autofix": 0,
                                                                            "flags": 128,
                                                                            "start": 42,
                                                                            "end": 49
                                                                        }
                                                                    ],
                                                                    "autofix": 0,
                                                                    "flags": 128,
                                                                    "start": 30,
                                                                    "end": 49
                                                                }
                                                            ],
                                                            "autofix": 0,
                                                            "flags": 128,
                                                            "start": 28,
                                                            "end": 51
                                                        },
                                                        "autofix": 0,
                                                        "flags": 128,
                                                        "start": 17,
                                                        "end": 51
                                                    }
                                                ],
                                                "multiline": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 17,
                                                "end": 51
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 15,
                                            "end": 53
                                        },
                                        "autofix": 0,
                                        "flags": 1280,
                                        "start": 13,
                                        "end": 53
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "autofix": 0,
                                "flags": 0,
                                "start": 9,
                                "end": 53
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 7,
                            "end": 55
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 3,
                        "end": 55
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 3,
                "end": 55
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 55
        }
    ],
    "isModule": false,
    "text": "var o = { *gf() { switch (1) { case yield: break; } } }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 55
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: var o = { *gf() { switch (1) { case yield: break; } } }
## Input

`````js
var o = { *gf() { switch (1) { case yield: break; } } }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: var o = { *gf() { switch (1) { case yield: break; } } }
## Input

`````js
var o = { *gf() { switch (1) { case yield: break; } } }
`````
```

