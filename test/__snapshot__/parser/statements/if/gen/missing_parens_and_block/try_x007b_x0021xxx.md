# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: missing parens and block
> :: case: try { !xxx
## Input

`````js
if else try { !xxx
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 0,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 12,
                "start": 2,
                "end": 2
            },
            "consequent": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 2,
                    "end": 2
                },
                "flags": 128,
                "start": 2,
                "end": 2
            },
            "elseKeyword": {
                "kind": 4194389,
                "flags": 2,
                "start": 512,
                "end": 7
            },
            "alternate": {
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
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 126,
                                    "operandToken": {
                                        "kind": 65584,
                                        "flags": 13,
                                        "start": 512,
                                        "end": 15
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "xxx",
                                        "rawText": "xxx",
                                        "flags": 768,
                                        "start": 15,
                                        "end": 18
                                    },
                                    "flags": 256,
                                    "start": 13,
                                    "end": 18
                                },
                                "flags": 128,
                                "start": 13,
                                "end": 18
                            }
                        ],
                        "multiLine": false,
                        "flags": 128,
                        "start": 13,
                        "end": 18
                    },
                    "flags": 128,
                    "start": 11,
                    "end": 18
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
                        "start": 18,
                        "end": 18
                    },
                    "flags": 128,
                    "start": 18,
                    "end": 18
                },
                "flags": 128,
                "start": 7,
                "end": 18
            },
            "flags": 128,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "text": "if else try { !xxx",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 2, end: 7
✖ Expression expected - start: 2, end: 7

```

