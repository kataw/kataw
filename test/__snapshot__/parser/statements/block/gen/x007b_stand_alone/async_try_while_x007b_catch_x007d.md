# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: { stand alone
> :: case: async try while { catch }
## Input

`````js
{ async try while { catch }
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
                            "kind": 134299649,
                            "text": "async",
                            "rawText": "async",
                            "flags": 768,
                            "start": 1,
                            "end": 7
                        },
                        "flags": 128,
                        "start": 1,
                        "end": 7
                    },
                    {
                        "kind": 159,
                        "tryKeyword": {
                            "kind": 37757027,
                            "flags": 7,
                            "start": 0,
                            "end": 11
                        },
                        "block": {
                            "kind": 249,
                            "block": {
                                "kind": 124,
                                "statements": [],
                                "multiLine": false,
                                "flags": 128,
                                "start": 11,
                                "end": 11
                            },
                            "flags": 128,
                            "start": 11,
                            "end": 11
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
                                                "start": 25,
                                                "end": 25
                                            },
                                            "flags": 128,
                                            "start": 25,
                                            "end": 25
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
                                                "start": 27,
                                                "end": 27
                                            },
                                            "flags": 128,
                                            "start": 27,
                                            "end": 27
                                        },
                                        "flags": 128,
                                        "start": 19,
                                        "end": 27
                                    }
                                ],
                                "multiLine": false,
                                "flags": 128,
                                "start": 19,
                                "end": 27
                            },
                            "flags": 128,
                            "start": 17,
                            "end": 27
                        },
                        "flags": 128,
                        "start": 7,
                        "end": 27
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 27
            },
            "flags": 128,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "text": "{ async try while { catch }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
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

