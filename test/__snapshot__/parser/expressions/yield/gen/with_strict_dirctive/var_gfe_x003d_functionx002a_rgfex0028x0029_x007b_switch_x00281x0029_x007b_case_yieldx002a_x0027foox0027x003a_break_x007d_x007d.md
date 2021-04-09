# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: var gfe = function* rgfe() { switch (1) { case yield* 'foo': break; } }
## Input

`````js
'use strict'; var gfe = function* rgfe() { switch (1) { case yield* 'foo': break; } }
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
                            "value": "gfe",
                            "autofix": 0,
                            "flags": 768,
                            "start": 17,
                            "end": 21
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 177,
                            "asyncToken": null,
                            "generatorToken": {
                                "kind": 67143222,
                                "autofix": 0,
                                "flags": 0,
                                "start": 32,
                                "end": 33
                            },
                            "name": {
                                "kind": 81921,
                                "value": "rgfe",
                                "autofix": 0,
                                "flags": 768,
                                "start": 33,
                                "end": 38
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 39,
                                "end": 40
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
                                                "start": 51,
                                                "end": 52
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
                                                                "start": 66,
                                                                "end": 67
                                                            },
                                                            "expression": {
                                                                "kind": 67174403,
                                                                "value": "foo",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 67,
                                                                "end": 73
                                                            },
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 60,
                                                            "end": 73
                                                        },
                                                        "statements": [
                                                            {
                                                                "kind": 150,
                                                                "label": null,
                                                                "autofix": 0,
                                                                "flags": 128,
                                                                "start": 74,
                                                                "end": 81
                                                            }
                                                        ],
                                                        "autofix": 0,
                                                        "flags": 128,
                                                        "start": 55,
                                                        "end": 81
                                                    }
                                                ],
                                                "autofix": 0,
                                                "flags": 128,
                                                "start": 53,
                                                "end": 83
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 42,
                                            "end": 83
                                        }
                                    ],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 42,
                                    "end": 83
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 40,
                                "end": 85
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "autofix": 0,
                            "flags": 2304,
                            "start": 23,
                            "end": 85
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 17,
                        "end": 85
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 17,
                "end": 85
            },
            "autofix": 0,
            "flags": 128,
            "start": 13,
            "end": 85
        }
    ],
    "isModule": false,
    "text": "'use strict'; var gfe = function* rgfe() { switch (1) { case yield* 'foo': break; } }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 85
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: var gfe = function* rgfe() { switch (1) { case yield* 'foo': break; } }
## Input

`````js
'use strict'; var gfe = function* rgfe() { switch (1) { case yield* 'foo': break; } }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: var gfe = function* rgfe() { switch (1) { case yield* 'foo': break; } }
## Input

`````js
'use strict'; var gfe = function* rgfe() { switch (1) { case yield* 'foo': break; } }
`````
```

