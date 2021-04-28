# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: if triple
> :: case: catch try {
## Input

`````js
if if if catch try {
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
                "kind": 164,
                "ifKeyword": {
                    "kind": 37757019,
                    "flags": 2,
                    "start": 0,
                    "end": 5
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 5,
                    "end": 5
                },
                "consequent": {
                    "kind": 164,
                    "ifKeyword": {
                        "kind": 37757019,
                        "flags": 5,
                        "start": 0,
                        "end": 8
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 12,
                        "start": 8,
                        "end": 8
                    },
                    "consequent": {
                        "kind": 159,
                        "tryKeyword": null,
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
                                "statements": [],
                                "multiLine": false,
                                "flags": 128,
                                "start": 20,
                                "end": 20
                            },
                            "flags": 128,
                            "start": 18,
                            "end": 20
                        },
                        "flags": 128,
                        "start": 8,
                        "end": 20
                    },
                    "elseKeyword": null,
                    "alternate": null,
                    "flags": 128,
                    "start": 5,
                    "end": 20
                },
                "elseKeyword": null,
                "alternate": null,
                "flags": 128,
                "start": 2,
                "end": 20
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 128,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "text": "if if if catch try {",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 2, end: 5
✖ Expression expected - start: 5, end: 8
✖ Expression expected - start: 8, end: 14

```

