# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: case default
> :: case: async try while { catch }
## Input

`````js
case async try while { catch } default
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
                "flags": 768,
                "start": 10,
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
    "text": "case async try while { catch } default",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Statement expected - start: 0, end: 4
@{x2716}@ Statement expected - start: 30, end: 38

```

