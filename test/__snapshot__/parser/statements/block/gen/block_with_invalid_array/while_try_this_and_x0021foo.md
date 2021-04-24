# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: block with invalid array
> :: case: while try this and !foo
## Input

`````js
{ [catch] while try this and !foo
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 3,
                                "end": 3
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 3
                        },
                        "flags": 128,
                        "start": 1,
                        "end": 3
                    },
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
                                "start": 8,
                                "end": 8
                            },
                            "flags": 128,
                            "start": 8,
                            "end": 8
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
                                "start": 9,
                                "end": 9
                            },
                            "flags": 128,
                            "start": 9,
                            "end": 9
                        },
                        "flags": 128,
                        "start": 3,
                        "end": 9
                    },
                    {
                        "kind": 154,
                        "whileKeyword": {
                            "kind": 37757028,
                            "flags": 768,
                            "start": 9,
                            "end": 15
                        },
                        "expression": {
                            "kind": 16637,
                            "text": "",
                            "autofix": 0,
                            "flags": 12,
                            "start": 15,
                            "end": 15
                        },
                        "statement": {
                            "kind": 159,
                            "tryKeyword": {
                                "kind": 37757027,
                                "flags": 768,
                                "start": 15,
                                "end": 19
                            },
                            "block": {
                                "kind": 249,
                                "block": {
                                    "kind": 124,
                                    "statements": [],
                                    "multiLine": false,
                                    "flags": 128,
                                    "start": 19,
                                    "end": 19
                                },
                                "flags": 128,
                                "start": 19,
                                "end": 19
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
                                    "start": 24,
                                    "end": 24
                                },
                                "flags": 128,
                                "start": 24,
                                "end": 24
                            },
                            "flags": 128,
                            "start": 15,
                            "end": 24
                        },
                        "flags": 128,
                        "start": 9,
                        "end": 24
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "and",
                            "rawText": "and",
                            "flags": 768,
                            "start": 24,
                            "end": 28
                        },
                        "flags": 128,
                        "start": 24,
                        "end": 28
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 126,
                            "operandToken": {
                                "kind": 65584,
                                "flags": 768,
                                "start": 28,
                                "end": 30
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 768,
                                "start": 30,
                                "end": 33
                            },
                            "flags": 256,
                            "start": 28,
                            "end": 33
                        },
                        "flags": 128,
                        "start": 28,
                        "end": 33
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 33
            },
            "flags": 128,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "text": "{ [catch] while try this and !foo",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

