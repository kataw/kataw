# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: else stand alone
> :: case: try { !xxx
## Input

`````js
else try { !xxx
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
                "flags": 768,
                "start": 4,
                "end": 8
            },
            "block": {
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
                                    "start": 10,
                                    "end": 12
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "xxx",
                                    "rawText": "xxx",
                                    "flags": 768,
                                    "start": 12,
                                    "end": 15
                                },
                                "flags": 256,
                                "start": 10,
                                "end": 15
                            },
                            "flags": 128,
                            "start": 10,
                            "end": 15
                        }
                    ],
                    "multiLine": false,
                    "flags": 128,
                    "start": 10,
                    "end": 15
                },
                "flags": 128,
                "start": 8,
                "end": 15
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
                    "start": 15,
                    "end": 15
                },
                "flags": 128,
                "start": 15,
                "end": 15
            },
            "flags": 128,
            "start": 4,
            "end": 15
        }
    ],
    "isModule": false,
    "text": "else try { !xxx",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Statement expected - start: 0, end: 4
@{x2716}@ Unexpected token. - start: 15, end: 15
@{x2716}@ Unexpected token. - start: 15, end: 15
@{x2716}@ Unexpected token. - start: 15, end: 15

```

