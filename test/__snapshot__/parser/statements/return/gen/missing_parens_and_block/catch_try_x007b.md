# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: missing parens and block
> :: case: catch try {
## Input

`````js
return catch catch try {
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
                "flags": 0,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 16637,
                "text": "",
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
            "tryKeyword": null,
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "flags": 128,
                    "start": 12,
                    "end": 12
                },
                "flags": 128,
                "start": 12,
                "end": 12
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 12,
                    "start": 0,
                    "end": 18
                },
                "catchParameter": null,
                "block": {
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
                "start": 12,
                "end": 18
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 128,
            "start": 6,
            "end": 18
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 18,
                "start": 0,
                "end": 22
            },
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "flags": 128,
                    "start": 24,
                    "end": 24
                },
                "flags": 128,
                "start": 22,
                "end": 24
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
                    "start": 24,
                    "end": 24
                },
                "flags": 128,
                "start": 24,
                "end": 24
            },
            "flags": 128,
            "start": 18,
            "end": 24
        }
    ],
    "isModule": false,
    "text": "return catch catch try {",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ A return statement can only be used within a function_body - start: 0, end: 6
✖ Expression expected - start: 6, end: 12

```

