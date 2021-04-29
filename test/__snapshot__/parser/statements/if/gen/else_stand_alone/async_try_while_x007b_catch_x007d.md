# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: else stand alone
> :: case: async try while { catch }
## Input

`````js
else async try while { catch }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 4,
                "end": 10
            },
            "flags": 16,
            "start": 4,
            "end": 10
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 0,
                "start": 10,
                "end": 14
            },
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "flags": 16,
                    "start": 14,
                    "end": 14
                },
                "flags": 16,
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
                                    "flags": 16,
                                    "start": 28,
                                    "end": 28
                                },
                                "flags": 16,
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
                                    "flags": 16,
                                    "start": 30,
                                    "end": 30
                                },
                                "flags": 16,
                                "start": 30,
                                "end": 30
                            },
                            "flags": 16,
                            "start": 22,
                            "end": 30
                        }
                    ],
                    "flags": 16,
                    "start": 22,
                    "end": 30
                },
                "flags": 16,
                "start": 20,
                "end": 30
            },
            "flags": 16,
            "start": 10,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "else async try while { catch }",
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
✖ Statement expected - start: 0, end: 4
✖ 'try' expected - start: 22, end: 28

```

