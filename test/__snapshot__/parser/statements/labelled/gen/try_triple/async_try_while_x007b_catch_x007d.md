# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: try triple
> :: case: async try while { catch }
## Input

`````js
try try try async try while { catch }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "flags": 16,
                    "start": 3,
                    "end": 3
                },
                "flags": 16,
                "start": 3,
                "end": 3
            },
            "catchClause": null,
            "finallyKeyword": null,
            "finallyBlock": {
                "kind": 249,
                "block": {
                    "kind": 124,
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
            "start": 0,
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
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "flags": 16,
                    "start": 11,
                    "end": 11
                },
                "flags": 16,
                "start": 11,
                "end": 11
            },
            "catchClause": null,
            "finallyKeyword": null,
            "finallyBlock": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "flags": 16,
                    "start": 17,
                    "end": 17
                },
                "flags": 16,
                "start": 17,
                "end": 17
            },
            "flags": 16,
            "start": 7,
            "end": 17
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 0,
                "start": 17,
                "end": 21
            },
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "flags": 16,
                    "start": 21,
                    "end": 21
                },
                "flags": 16,
                "start": 21,
                "end": 21
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
                                    "flags": 16,
                                    "start": 35,
                                    "end": 35
                                },
                                "flags": 16,
                                "start": 35,
                                "end": 35
                            },
                            "catchClause": null,
                            "finallyKeyword": null,
                            "finallyBlock": {
                                "kind": 249,
                                "block": {
                                    "kind": 124,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 37,
                                    "end": 37
                                },
                                "flags": 16,
                                "start": 37,
                                "end": 37
                            },
                            "flags": 16,
                            "start": 29,
                            "end": 37
                        }
                    ],
                    "flags": 16,
                    "start": 29,
                    "end": 37
                },
                "flags": 16,
                "start": 27,
                "end": 37
            },
            "flags": 16,
            "start": 17,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "try try try async try while { catch }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ 'try' expected - start: 29, end: 35

```

