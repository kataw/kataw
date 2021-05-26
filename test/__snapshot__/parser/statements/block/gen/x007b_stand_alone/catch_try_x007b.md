# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-21
- From: d
- Path: e
> :: test: { stand alone
> :: case: catch try {
## Input

`````js
{ catch try {
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 159,
                        "tryKeyword": null,
                        "block": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "start": 1,
                                "end": 1
                            },
                            "flags": 16,
                            "start": 1,
                            "end": 1
                        },
                        "catchClause": {
                            "kind": 173,
                            "catchKeyword": {
                                "kind": 4202575,
                                "flags": 0,
                                "start": 1,
                                "end": 7
                            },
                            "catchParameter": null,
                            "initializer": null,
                            "block": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 7,
                                    "end": 7
                                },
                                "flags": 16,
                                "start": 7,
                                "end": 7
                            },
                            "flags": 16,
                            "start": 1,
                            "end": 7
                        },
                        "finallyKeyword": null,
                        "finallyBlock": null,
                        "flags": 16,
                        "start": 1,
                        "end": 7
                    },
                    {
                        "kind": 159,
                        "tryKeyword": {
                            "kind": 37757027,
                            "flags": 0,
                            "start": 7,
                            "end": 11
                        },
                        "block": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "start": 13,
                                "end": 13
                            },
                            "flags": 16,
                            "start": 11,
                            "end": 13
                        },
                        "catchClause": null,
                        "finallyKeyword": null,
                        "finallyBlock": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "start": 13,
                                "end": 13
                            },
                            "flags": 16,
                            "start": 13,
                            "end": 13
                        },
                        "flags": 16,
                        "start": 7,
                        "end": 13
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "{ catch try {",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'try' expected - start: 1, end: 7
✖ The parser expected to find a '}' to match the '{' token here - start: 13, end: 13

```

