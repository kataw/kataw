# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: catch stand alone
> :: case: try { !xxx
## Input

`````js
catch try { !xxx
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
            "tryKeyword": null,
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "flags": 128,
                    "start": 5,
                    "end": 5
                },
                "flags": 128,
                "start": 5,
                "end": 5
            },
            "catchClause": null,
            "finallyKeyword": null,
            "finallyBlock": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 65584,
                                    "flags": 768,
                                    "start": 11,
                                    "end": 13
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "xxx",
                                    "rawText": "xxx",
                                    "flags": 768,
                                    "start": 13,
                                    "end": 16
                                },
                                "flags": 256,
                                "start": 11,
                                "end": 16
                            },
                            "flags": 128,
                            "start": 11,
                            "end": 16
                        }
                    ],
                    "multiLine": false,
                    "flags": 128,
                    "start": 11,
                    "end": 16
                },
                "flags": 128,
                "start": 9,
                "end": 16
            },
            "flags": 128,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "text": "catch try { !xxx",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Unexpected token. - start: 0, end: 5
@{x2716}@ Unexpected token. - start: 5, end: 9
@{x2716}@ Unexpected token. - start: 5, end: 9
@{x2716}@ Unexpected token. - start: 16, end: 16

```

