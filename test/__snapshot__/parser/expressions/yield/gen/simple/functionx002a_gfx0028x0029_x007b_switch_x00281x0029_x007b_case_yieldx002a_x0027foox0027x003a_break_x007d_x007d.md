# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: function* gf() { switch (1) { case yield* 'foo': break; } }
## Input

`````js
function* gf() { switch (1) { case yield* 'foo': break; } }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 176,
            "asyncToken": null,
            "generatorToken": {
                "kind": 67143222,
                "autofix": 0,
                "flags": 0,
                "start": 8,
                "end": 9
            },
            "name": {
                "kind": 81921,
                "value": "gf",
                "autofix": 0,
                "flags": 768,
                "start": 9,
                "end": 12
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "autofix": 0,
                "flags": 256,
                "start": 13,
                "end": 14
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
                                "start": 25,
                                "end": 26
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
                                                "start": 40,
                                                "end": 41
                                            },
                                            "expression": {
                                                "kind": 67174403,
                                                "value": "foo",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 41,
                                                "end": 47
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 34,
                                            "end": 47
                                        },
                                        "statements": [
                                            {
                                                "kind": 150,
                                                "label": null,
                                                "autofix": 0,
                                                "flags": 128,
                                                "start": 48,
                                                "end": 55
                                            }
                                        ],
                                        "autofix": 0,
                                        "flags": 128,
                                        "start": 29,
                                        "end": 55
                                    }
                                ],
                                "autofix": 0,
                                "flags": 128,
                                "start": 27,
                                "end": 57
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 16,
                            "end": 57
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 16,
                    "end": 57
                },
                "autofix": 0,
                "flags": 256,
                "start": 14,
                "end": 59
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 2304,
            "start": 0,
            "end": 59
        }
    ],
    "isModule": false,
    "text": "function* gf() { switch (1) { case yield* 'foo': break; } }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 59
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: function* gf() { switch (1) { case yield* 'foo': break; } }
## Input

`````js
function* gf() { switch (1) { case yield* 'foo': break; } }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: function* gf() { switch (1) { case yield* 'foo': break; } }
## Input

`````js
function* gf() { switch (1) { case yield* 'foo': break; } }
`````
```

