# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: unclosed parens
> :: case: catch { try
## Input

`````js
{( catch { try
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
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 121,
                            "expression": {
                                "kind": 16637,
                                "text": "",
                                "autofix": 0,
                                "flags": 12,
                                "start": 2,
                                "end": 2
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 2
                        },
                        "flags": 128,
                        "start": 1,
                        "end": 2
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
                                            "start": 10,
                                            "end": 14
                                        },
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
                                                "start": 14,
                                                "end": 14
                                            },
                                            "flags": 128,
                                            "start": 14,
                                            "end": 14
                                        },
                                        "flags": 128,
                                        "start": 10,
                                        "end": 14
                                    }
                                ],
                                "multiLine": false,
                                "flags": 128,
                                "start": 10,
                                "end": 14
                            },
                            "flags": 128,
                            "start": 8,
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
                                "start": 14,
                                "end": 14
                            },
                            "flags": 128,
                            "start": 14,
                            "end": 14
                        },
                        "flags": 128,
                        "start": 2,
                        "end": 14
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 14
            },
            "flags": 128,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "text": "{( catch { try",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Expression expected - start: 2, end: 8
@{x2716}@ Unexpected token. - start: 2, end: 8
@{x2716}@ Unexpected token. - start: 2, end: 8
@{x2716}@ Unexpected token. - start: 2, end: 8
@{x2716}@ Unexpected token. - start: 14, end: 14
@{x2716}@ Unexpected token. - start: 14, end: 14
@{x2716}@ Unexpected token. - start: 14, end: 14
@{x2716}@ Unexpected token. - start: 14, end: 14
@{x2716}@ Unexpected token. - start: 14, end: 14
@{x2716}@ Unexpected token. - start: 14, end: 14
@{x2716}@ Unexpected token. - start: 14, end: 14

```

