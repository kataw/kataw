# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: if else
> :: case: catch try {
## Input

`````js
if catch try { else
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
                "kind": 159,
                "tryKeyword": null,
                "block": {
                    "kind": 249,
                    "block": {
                        "kind": 124,
                        "statements": [],
                        "multiLine": false,
                        "flags": 128,
                        "start": 8,
                        "end": 8
                    },
                    "flags": 128,
                    "start": 8,
                    "end": 8
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
                    "start": 12,
                    "end": 14
                },
                "flags": 128,
                "start": 2,
                "end": 14
            },
            "elseKeyword": {
                "kind": 4194389,
                "flags": 14,
                "start": 512,
                "end": 19
            },
            "alternate": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 19,
                    "end": 19
                },
                "flags": 128,
                "start": 19,
                "end": 19
            },
            "flags": 128,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "text": "if catch try { else",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 2, end: 8
✖ Expression expected - start: 19, end: 19

```

