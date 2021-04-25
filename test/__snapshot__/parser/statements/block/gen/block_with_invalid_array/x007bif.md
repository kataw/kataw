# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: block with invalid array
> :: case: {if
## Input

`````js
{ [catch] {if
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
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 3,
                                "end": 3
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 3
                        },
                        "flags": 128,
                        "start": 1,
                        "end": 3
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
                                "statements": [
                                    {
                                        "kind": 164,
                                        "ifKeyword": {
                                            "kind": 37757019,
                                            "flags": 768,
                                            "start": 11,
                                            "end": 13
                                        },
                                        "expression": {
                                            "kind": 16637,
                                            "text": "",
                                            "autofix": 0,
                                            "flags": 12,
                                            "start": 13,
                                            "end": 13
                                        },
                                        "consequent": {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 16637,
                                                "text": "",
                                                "autofix": 0,
                                                "flags": 12,
                                                "start": 13,
                                                "end": 13
                                            },
                                            "flags": 128,
                                            "start": 13,
                                            "end": 13
                                        },
                                        "elseKeyword": null,
                                        "alternate": null,
                                        "flags": 128,
                                        "start": 11,
                                        "end": 13
                                    }
                                ],
                                "multiLine": false,
                                "flags": 128,
                                "start": 11,
                                "end": 13
                            },
                            "flags": 128,
                            "start": 9,
                            "end": 13
                        },
                        "flags": 128,
                        "start": 3,
                        "end": 13
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 13
            },
            "flags": 128,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "text": "{ [catch] {if",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Unexpected token. - start: 3, end: 8
@{x2716}@ Unexpected token. - start: 3, end: 8
@{x2716}@ Unexpected token. - start: 3, end: 8
@{x2716}@ Unexpected token. - start: 8, end: 9
@{x2716}@ Unexpected token. - start: 8, end: 9
@{x2716}@ Unexpected token. - start: 13, end: 13
@{x2716}@ Expression expected - start: 13, end: 13
@{x2716}@ Unexpected token. - start: 13, end: 13
@{x2716}@ Expression expected - start: 13, end: 13
@{x2716}@ Unexpected token. - start: 13, end: 13
@{x2716}@ Unexpected token. - start: 13, end: 13

```

