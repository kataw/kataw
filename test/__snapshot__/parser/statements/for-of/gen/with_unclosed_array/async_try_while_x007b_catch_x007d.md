# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: with unclosed array
> :: case: async try while { catch }
## Input

`````js
try[ async try while { catch }
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
                    "multiLine": false,
                    "flags": 128,
                    "start": 3,
                    "end": 3
                },
                "flags": 128,
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
                    "multiLine": false,
                    "flags": 128,
                    "start": 4,
                    "end": 4
                },
                "flags": 128,
                "start": 4,
                "end": 4
            },
            "flags": 128,
            "start": 0,
            "end": 4
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 768,
                "start": 4,
                "end": 10
            },
            "flags": 128,
            "start": 4,
            "end": 10
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 10,
                "start": 0,
                "end": 14
            },
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "flags": 128,
                    "start": 14,
                    "end": 14
                },
                "flags": 128,
                "start": 14,
                "end": 14
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
                                    "start": 28,
                                    "end": 28
                                },
                                "flags": 128,
                                "start": 28,
                                "end": 28
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
                                    "start": 30,
                                    "end": 30
                                },
                                "flags": 128,
                                "start": 30,
                                "end": 30
                            },
                            "flags": 128,
                            "start": 22,
                            "end": 30
                        }
                    ],
                    "multiLine": false,
                    "flags": 128,
                    "start": 22,
                    "end": 30
                },
                "flags": 128,
                "start": 20,
                "end": 30
            },
            "flags": 128,
            "start": 10,
            "end": 30
        }
    ],
    "isModule": false,
    "text": "try[ async try while { catch }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

