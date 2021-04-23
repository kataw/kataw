# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: do with unclosed block
> :: case: async try while { catch }
## Input

`````js
do {} while (x) { async try while { catch }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 768,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 13,
                "end": 14
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 768,
                "start": 5,
                "end": 11
            },
            "statement": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "flags": 128,
                    "start": 4,
                    "end": 4
                },
                "flags": 128,
                "start": 2,
                "end": 5
            },
            "flags": 128,
            "start": 0,
            "end": 15
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "async",
                            "rawText": "async",
                            "flags": 768,
                            "start": 17,
                            "end": 23
                        },
                        "flags": 128,
                        "start": 17,
                        "end": 23
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 17,
                "end": 23
            },
            "flags": 128,
            "start": 15,
            "end": 23
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 768,
                "start": 23,
                "end": 27
            },
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "flags": 128,
                    "start": 27,
                    "end": 27
                },
                "flags": 128,
                "start": 27,
                "end": 27
            },
            "catchClause": null,
            "finallyKeyword": null,
            "finallyBlock": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [
                        {
                            "kind": 159,
                            "tryKeyword": null,
                            "block": {
                                "kind": 249,
                                "block": {
                                    "kind": 124,
                                    "statements": [],
                                    "multiLine": false,
                                    "flags": 128,
                                    "start": 41,
                                    "end": 41
                                },
                                "flags": 128,
                                "start": 41,
                                "end": 41
                            },
                            "catchClause": null,
                            "finallyKeyword": null,
                            "finallyBlock": {
                                "kind": 249,
                                "block": {
                                    "kind": 124,
                                    "statements": [],
                                    "multiLine": false,
                                    "flags": 128,
                                    "start": 43,
                                    "end": 43
                                },
                                "flags": 128,
                                "start": 43,
                                "end": 43
                            },
                            "flags": 128,
                            "start": 35,
                            "end": 43
                        }
                    ],
                    "multiLine": false,
                    "flags": 128,
                    "start": 35,
                    "end": 43
                },
                "flags": 128,
                "start": 33,
                "end": 43
            },
            "flags": 128,
            "start": 23,
            "end": 43
        }
    ],
    "isModule": false,
    "text": "do {} while (x) { async try while { catch }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 43
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

