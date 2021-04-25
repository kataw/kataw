# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: if with unclosed block
> :: case: try { !xxx
## Input

`````js
else {} if(x) { try { !xxx
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
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 6,
                "end": 6
            },
            "flags": 128,
            "start": 4,
            "end": 7
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 768,
                "start": 7,
                "end": 10
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 11,
                "end": 12
            },
            "consequent": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [
                        {
                            "kind": 159,
                            "tryKeyword": {
                                "kind": 37757027,
                                "flags": 768,
                                "start": 15,
                                "end": 19
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
                                                    "start": 21,
                                                    "end": 23
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "xxx",
                                                    "rawText": "xxx",
                                                    "flags": 768,
                                                    "start": 23,
                                                    "end": 26
                                                },
                                                "flags": 256,
                                                "start": 21,
                                                "end": 26
                                            },
                                            "flags": 128,
                                            "start": 21,
                                            "end": 26
                                        }
                                    ],
                                    "multiLine": false,
                                    "flags": 128,
                                    "start": 21,
                                    "end": 26
                                },
                                "flags": 128,
                                "start": 19,
                                "end": 26
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
                                    "start": 26,
                                    "end": 26
                                },
                                "flags": 128,
                                "start": 26,
                                "end": 26
                            },
                            "flags": 128,
                            "start": 15,
                            "end": 26
                        }
                    ],
                    "multiLine": false,
                    "flags": 128,
                    "start": 15,
                    "end": 26
                },
                "flags": 128,
                "start": 13,
                "end": 26
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 128,
            "start": 7,
            "end": 26
        }
    ],
    "isModule": false,
    "text": "else {} if(x) { try { !xxx",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Statement expected - start: 0, end: 4
@{x2716}@ Unexpected token. - start: 26, end: 26
@{x2716}@ Unexpected token. - start: 26, end: 26
@{x2716}@ Unexpected token. - start: 26, end: 26
@{x2716}@ Unexpected token. - start: 26, end: 26

```

