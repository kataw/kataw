# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: missing parens and block
> :: case: catch { try
## Input

`````js
try catch catch { try
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
                "start": 0,
                "end": 3
            },
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "flags": 128,
                    "start": 3,
                    "end": 3
                },
                "flags": 128,
                "start": 3,
                "end": 3
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 768,
                    "start": 3,
                    "end": 9
                },
                "catchParameter": null,
                "block": {
                    "kind": 249,
                    "block": {
                        "kind": 124,
                        "statements": [],
                        "multiLine": false,
                        "flags": 128,
                        "start": 9,
                        "end": 9
                    },
                    "flags": 128,
                    "start": 9,
                    "end": 9
                },
                "flags": 128,
                "start": 3,
                "end": 9
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 128,
            "start": 0,
            "end": 9
        },
        {
            "kind": 159,
            "tryKeyword": null,
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [
                        {
                            "kind": 159,
                            "tryKeyword": {
                                "kind": 37757027,
                                "flags": 768,
                                "start": 17,
                                "end": 21
                            },
                            "block": {
                                "kind": 249,
                                "block": {
                                    "kind": 124,
                                    "statements": [],
                                    "multiLine": false,
                                    "flags": 128,
                                    "start": 21,
                                    "end": 21
                                },
                                "flags": 128,
                                "start": 21,
                                "end": 21
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
                                    "start": 21,
                                    "end": 21
                                },
                                "flags": 128,
                                "start": 21,
                                "end": 21
                            },
                            "flags": 128,
                            "start": 17,
                            "end": 21
                        }
                    ],
                    "multiLine": false,
                    "flags": 128,
                    "start": 17,
                    "end": 21
                },
                "flags": 128,
                "start": 15,
                "end": 21
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
                    "start": 21,
                    "end": 21
                },
                "flags": 128,
                "start": 21,
                "end": 21
            },
            "flags": 128,
            "start": 9,
            "end": 21
        }
    ],
    "isModule": false,
    "text": "try catch catch { try",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Unexpected token. - start: 3, end: 9
@{x2716}@ Unexpected token. - start: 9, end: 15
@{x2716}@ Unexpected token. - start: 9, end: 15
@{x2716}@ Unexpected token. - start: 21, end: 21
@{x2716}@ Unexpected token. - start: 21, end: 21
@{x2716}@ Unexpected token. - start: 21, end: 21
@{x2716}@ Unexpected token. - start: 21, end: 21
@{x2716}@ Unexpected token. - start: 21, end: 21
@{x2716}@ Unexpected token. - start: 21, end: 21

```

