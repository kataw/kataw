# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: block with invalid array
> :: case: {try
## Input

`````js
{ [catch] {try
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
                                        "kind": 159,
                                        "tryKeyword": {
                                            "kind": 37757027,
                                            "flags": 768,
                                            "start": 11,
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
                                        "start": 11,
                                        "end": 14
                                    }
                                ],
                                "multiLine": false,
                                "flags": 128,
                                "start": 11,
                                "end": 14
                            },
                            "flags": 128,
                            "start": 9,
                            "end": 14
                        },
                        "flags": 128,
                        "start": 3,
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
    "text": "{ [catch] {try",
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
@{x2716}@ Unexpected token. - start: 3, end: 8
@{x2716}@ Unexpected token. - start: 3, end: 8
@{x2716}@ Unexpected token. - start: 3, end: 8
@{x2716}@ Unexpected token. - start: 8, end: 9
@{x2716}@ Unexpected token. - start: 8, end: 9
@{x2716}@ Unexpected token. - start: 14, end: 14
@{x2716}@ Unexpected token. - start: 14, end: 14
@{x2716}@ Unexpected token. - start: 14, end: 14
@{x2716}@ Unexpected token. - start: 14, end: 14
@{x2716}@ Unexpected token. - start: 14, end: 14

```

