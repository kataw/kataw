# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: switch with invalid array
> :: case: async try while { catch }
## Input

`````js
switch [catch] async try while { catch }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 0,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 8,
                    "end": 8
                },
                "flags": 256,
                "start": 6,
                "end": 8
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [],
                "flags": 128,
                "start": 8,
                "end": 8
            },
            "flags": 128,
            "start": 0,
            "end": 8
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
                    "start": 13,
                    "end": 13
                },
                "flags": 128,
                "start": 13,
                "end": 13
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
                    "start": 14,
                    "end": 14
                },
                "flags": 128,
                "start": 14,
                "end": 14
            },
            "flags": 128,
            "start": 8,
            "end": 14
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 768,
                "start": 14,
                "end": 20
            },
            "flags": 128,
            "start": 14,
            "end": 20
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 20,
                "start": 0,
                "end": 24
            },
            "block": {
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
                                    "start": 38,
                                    "end": 38
                                },
                                "flags": 128,
                                "start": 38,
                                "end": 38
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
                                    "start": 40,
                                    "end": 40
                                },
                                "flags": 128,
                                "start": 40,
                                "end": 40
                            },
                            "flags": 128,
                            "start": 32,
                            "end": 40
                        }
                    ],
                    "multiLine": false,
                    "flags": 128,
                    "start": 32,
                    "end": 40
                },
                "flags": 128,
                "start": 30,
                "end": 40
            },
            "flags": 128,
            "start": 20,
            "end": 40
        }
    ],
    "isModule": false,
    "text": "switch [catch] async try while { catch }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 40
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

