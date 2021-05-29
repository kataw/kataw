# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-28
- From: d
- Path: y
> :: test: block with invalid array
> :: case: {if
## Input

`````js
{ [catch] {if
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 3,
                                "end": 3
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 3
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 3
                    },
                    {
                        "kind": 159,
                        "tryKeyword": null,
                        "block": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "start": 3,
                                "end": 3
                            },
                            "flags": 16,
                            "start": 3,
                            "end": 3
                        },
                        "catchClause": {
                            "kind": 173,
                            "catchKeyword": {
                                "kind": 4202575,
                                "flags": 80,
                                "start": 3,
                                "end": 8
                            },
                            "catchParameter": null,
                            "initializer": null,
                            "block": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 8,
                                    "end": 8
                                },
                                "flags": 16,
                                "start": 8,
                                "end": 8
                            },
                            "flags": 16,
                            "start": 3,
                            "end": 8
                        },
                        "finallyKeyword": null,
                        "finallyBlock": null,
                        "flags": 16,
                        "start": 3,
                        "end": 8
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 8
            },
            "flags": 16,
            "start": 0,
            "end": 8
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 164,
                        "ifKeyword": {
                            "kind": 37757019,
                            "flags": 80,
                            "start": 11,
                            "end": 13
                        },
                        "expression": {
                            "kind": 16637,
                            "text": "",
                            "flags": 64,
                            "start": 13,
                            "end": 13
                        },
                        "consequent": {
                            "kind": 120,
                            "expression": {
                                "kind": 16637,
                                "text": "",
                                "flags": 64,
                                "start": 13,
                                "end": 13
                            },
                            "flags": 16,
                            "start": 13,
                            "end": 13
                        },
                        "elseKeyword": null,
                        "alternate": null,
                        "flags": 16,
                        "start": 11,
                        "end": 13
                    }
                ],
                "flags": 16,
                "start": 11,
                "end": 13
            },
            "flags": 16,
            "start": 9,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "{ [catch] {if",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Did you forgot a ']' to match the `[` token? - start: 3, end: 8
✖ 'try' expected - start: 3, end: 8
✖ The parser expected to find a '}' to match the '{' token here - start: 8, end: 9
✖ Missing an opening parentheses - '( - start: 13, end: 13

```

