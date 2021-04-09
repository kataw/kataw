# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: var gfe = function* rgfe() { switch (1) { case yield* 'foo': break; } }
## Input

`````js
var gfe = function* rgfe() { switch (1) { case yield* 'foo': break; } }
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
                            "value": "gfe",
                            "autofix": 0,
                            "flags": 768,
                            "start": 3,
                            "end": 7
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
                                "start": 18,
                                "end": 19
                            },
                            "name": {
                                "kind": 81921,
                                "value": "rgfe",
                                "autofix": 0,
                                "flags": 768,
                                "start": 19,
                                "end": 24
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 25,
                                "end": 26
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
                                                "start": 37,
                                                "end": 38
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
                                                                "start": 52,
                                                                "end": 53
                                                            },
                                                            "expression": {
                                                                "kind": 67174403,
                                                                "value": "foo",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 53,
                                                                "end": 59
                                                            },
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 46,
                                                            "end": 59
                                                        },
                                                        "statements": [
                                                            {
                                                                "kind": 150,
                                                                "label": null,
                                                                "autofix": 0,
                                                                "flags": 128,
                                                                "start": 60,
                                                                "end": 67
                                                            }
                                                        ],
                                                        "autofix": 0,
                                                        "flags": 128,
                                                        "start": 41,
                                                        "end": 67
                                                    }
                                                ],
                                                "autofix": 0,
                                                "flags": 128,
                                                "start": 39,
                                                "end": 69
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 28,
                                            "end": 69
                                        }
                                    ],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 28,
                                    "end": 69
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 26,
                                "end": 71
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "autofix": 0,
                            "flags": 2304,
                            "start": 9,
                            "end": 71
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 3,
                        "end": 71
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 3,
                "end": 71
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 71
        }
    ],
    "isModule": false,
    "text": "var gfe = function* rgfe() { switch (1) { case yield* 'foo': break; } }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 71
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: var gfe = function* rgfe() { switch (1) { case yield* 'foo': break; } }
## Input

`````js
var gfe = function* rgfe() { switch (1) { case yield* 'foo': break; } }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: var gfe = function* rgfe() { switch (1) { case yield* 'foo': break; } }
## Input

`````js
var gfe = function* rgfe() { switch (1) { case yield* 'foo': break; } }
`````
```

