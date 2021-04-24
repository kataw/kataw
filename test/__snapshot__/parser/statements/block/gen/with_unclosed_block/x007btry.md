# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: with unclosed block
> :: case: {try
## Input

`````js
{ {} finally(x) { {try
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
                        "kind": 249,
                        "block": {
                            "kind": 124,
                            "statements": [],
                            "multiLine": false,
                            "flags": 128,
                            "start": 3,
                            "end": 3
                        },
                        "flags": 128,
                        "start": 1,
                        "end": 4
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
                                "start": 12,
                                "end": 12
                            },
                            "flags": 128,
                            "start": 12,
                            "end": 12
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
                                "start": 13,
                                "end": 13
                            },
                            "flags": 128,
                            "start": 13,
                            "end": 13
                        },
                        "flags": 128,
                        "start": 4,
                        "end": 13
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 13,
                            "end": 14
                        },
                        "flags": 128,
                        "start": 13,
                        "end": 14
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 14
            },
            "flags": 128,
            "start": 0,
            "end": 14
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 249,
                        "block": {
                            "kind": 124,
                            "statements": [
                                {
                                    "kind": 159,
                                    "tryKeyword": {
                                        "kind": 37757027,
                                        "flags": 768,
                                        "start": 19,
                                        "end": 22
                                    },
                                    "block": {
                                        "kind": 249,
                                        "block": {
                                            "kind": 124,
                                            "statements": [],
                                            "multiLine": false,
                                            "flags": 128,
                                            "start": 22,
                                            "end": 22
                                        },
                                        "flags": 128,
                                        "start": 22,
                                        "end": 22
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
                                            "start": 22,
                                            "end": 22
                                        },
                                        "flags": 128,
                                        "start": 22,
                                        "end": 22
                                    },
                                    "flags": 128,
                                    "start": 19,
                                    "end": 22
                                }
                            ],
                            "multiLine": false,
                            "flags": 128,
                            "start": 19,
                            "end": 22
                        },
                        "flags": 128,
                        "start": 17,
                        "end": 22
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 17,
                "end": 22
            },
            "flags": 128,
            "start": 15,
            "end": 22
        }
    ],
    "isModule": false,
    "text": "{ {} finally(x) { {try",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

