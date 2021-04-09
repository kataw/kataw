# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: function* gf() { switch (1) { case yield* 'foo': break; } }
## Input

`````js
'use strict'; function* gf() { switch (1) { case yield* 'foo': break; } }
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
            "kind": 176,
            "asyncToken": null,
            "generatorToken": {
                "kind": 67143222,
                "autofix": 0,
                "flags": 0,
                "start": 22,
                "end": 23
            },
            "name": {
                "kind": 81921,
                "value": "gf",
                "autofix": 0,
                "flags": 768,
                "start": 23,
                "end": 26
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "autofix": 0,
                "flags": 256,
                "start": 27,
                "end": 28
            },
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
                                "start": 39,
                                "end": 40
                            },
                            "caseBlock": {
                                "kind": 152,
                                "clauses": [
                                    {
                                        "kind": 175,
                                        "expression": {
                                            "kind": 229,
                                            "delegate": true,
                                            "asteriskToken": {
                                                "kind": 67143222,
                                                "autofix": 0,
                                                "flags": 0,
                                                "start": 54,
                                                "end": 55
                                            },
                                            "expression": {
                                                "kind": 67174403,
                                                "value": "foo",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 55,
                                                "end": 61
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 48,
                                            "end": 61
                                        },
                                        "statements": [
                                            {
                                                "kind": 150,
                                                "label": null,
                                                "autofix": 0,
                                                "flags": 128,
                                                "start": 62,
                                                "end": 69
                                            }
                                        ],
                                        "autofix": 0,
                                        "flags": 128,
                                        "start": 43,
                                        "end": 69
                                    }
                                ],
                                "autofix": 0,
                                "flags": 128,
                                "start": 41,
                                "end": 71
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 30,
                            "end": 71
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 30,
                    "end": 71
                },
                "autofix": 0,
                "flags": 256,
                "start": 28,
                "end": 73
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 2304,
            "start": 13,
            "end": 73
        }
    ],
    "isModule": false,
    "text": "'use strict'; function* gf() { switch (1) { case yield* 'foo': break; } }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 73
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: function* gf() { switch (1) { case yield* 'foo': break; } }
## Input

`````js
'use strict'; function* gf() { switch (1) { case yield* 'foo': break; } }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: function* gf() { switch (1) { case yield* 'foo': break; } }
## Input

`````js
'use strict'; function* gf() { switch (1) { case yield* 'foo': break; } }
`````
```

