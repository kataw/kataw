# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: return stand alone
> :: case: try { !xxx
## Input

`````js
return try { !xxx
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 161,
            "returnKeyword": {
                "kind": 37757022,
                "flags": 768,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "autofix": 0,
                "flags": 12,
                "start": 6,
                "end": 6
            },
            "flags": 128,
            "start": 0,
            "end": 0
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 768,
                "start": 6,
                "end": 10
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
                                    "start": 12,
                                    "end": 14
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "xxx",
                                    "rawText": "xxx",
                                    "flags": 768,
                                    "start": 14,
                                    "end": 17
                                },
                                "flags": 256,
                                "start": 12,
                                "end": 17
                            },
                            "flags": 128,
                            "start": 12,
                            "end": 17
                        }
                    ],
                    "multiLine": false,
                    "flags": 128,
                    "start": 12,
                    "end": 17
                },
                "flags": 128,
                "start": 10,
                "end": 17
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
                    "start": 17,
                    "end": 17
                },
                "flags": 128,
                "start": 17,
                "end": 17
            },
            "flags": 128,
            "start": 6,
            "end": 17
        }
    ],
    "isModule": false,
    "text": "return try { !xxx",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ A return statement can only be used within a function_body - start: 0, end: 6
@{x2716}@ Expression expected - start: 6, end: 10
@{x2716}@ Unexpected token. - start: 6, end: 10
@{x2716}@ Unexpected token. - start: 17, end: 17
@{x2716}@ Unexpected token. - start: 17, end: 17
@{x2716}@ Unexpected token. - start: 17, end: 17

```

