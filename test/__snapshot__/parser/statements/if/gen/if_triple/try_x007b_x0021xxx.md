# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: if triple
> :: case: try { !xxx
## Input

`````js
if if if try { !xxx
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
                "flags": 768,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "autofix": 0,
                "flags": 12,
                "start": 2,
                "end": 2
            },
            "consequent": {
                "kind": 164,
                "ifKeyword": {
                    "kind": 37757019,
                    "flags": 768,
                    "start": 2,
                    "end": 5
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 5,
                    "end": 5
                },
                "consequent": {
                    "kind": 164,
                    "ifKeyword": {
                        "kind": 37757019,
                        "flags": 768,
                        "start": 5,
                        "end": 8
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "autofix": 0,
                        "flags": 12,
                        "start": 8,
                        "end": 8
                    },
                    "consequent": {
                        "kind": 159,
                        "tryKeyword": {
                            "kind": 37757027,
                            "flags": 768,
                            "start": 8,
                            "end": 12
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
                                                "start": 14,
                                                "end": 16
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "xxx",
                                                "rawText": "xxx",
                                                "flags": 768,
                                                "start": 16,
                                                "end": 19
                                            },
                                            "flags": 256,
                                            "start": 14,
                                            "end": 19
                                        },
                                        "flags": 128,
                                        "start": 14,
                                        "end": 19
                                    }
                                ],
                                "multiLine": false,
                                "flags": 128,
                                "start": 14,
                                "end": 19
                            },
                            "flags": 128,
                            "start": 12,
                            "end": 19
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
                                "start": 19,
                                "end": 19
                            },
                            "flags": 128,
                            "start": 19,
                            "end": 19
                        },
                        "flags": 128,
                        "start": 8,
                        "end": 19
                    },
                    "elseKeyword": null,
                    "alternate": null,
                    "flags": 128,
                    "start": 5,
                    "end": 19
                },
                "elseKeyword": null,
                "alternate": null,
                "flags": 128,
                "start": 2,
                "end": 19
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 128,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "text": "if if if try { !xxx",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Unexpected token. - start: 2, end: 5
@{x2716}@ Expression expected - start: 2, end: 5
@{x2716}@ Unexpected token. - start: 2, end: 5
@{x2716}@ Unexpected token. - start: 5, end: 8
@{x2716}@ Expression expected - start: 5, end: 8
@{x2716}@ Unexpected token. - start: 5, end: 8
@{x2716}@ Unexpected token. - start: 8, end: 12
@{x2716}@ Expression expected - start: 8, end: 12
@{x2716}@ Unexpected token. - start: 8, end: 12
@{x2716}@ Unexpected token. - start: 19, end: 19
@{x2716}@ Unexpected token. - start: 19, end: 19
@{x2716}@ Unexpected token. - start: 19, end: 19

```

