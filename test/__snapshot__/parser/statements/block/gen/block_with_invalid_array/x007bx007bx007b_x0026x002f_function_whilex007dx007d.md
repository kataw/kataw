# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-29
- From: d
- Path: y
> :: test: block with invalid array
> :: case: {{{ &/ function while}}
## Input

`````js
{ [catch] {{{ &/ function while}}
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
                        "kind": 124,
                        "block": {
                            "kind": 249,
                            "statements": [
                                {
                                    "kind": 124,
                                    "block": {
                                        "kind": 249,
                                        "statements": [
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 198,
                                                    "left": {
                                                        "kind": 16637,
                                                        "text": "",
                                                        "flags": 64,
                                                        "start": 13,
                                                        "end": 13
                                                    },
                                                    "operatorToken": {
                                                        "kind": 134252103,
                                                        "flags": 64,
                                                        "start": 13,
                                                        "end": 15
                                                    },
                                                    "right": {
                                                        "kind": 221,
                                                        "text": "/ function while}}",
                                                        "flags": 96,
                                                        "start": 15,
                                                        "end": 33
                                                    },
                                                    "flags": 32,
                                                    "start": 13,
                                                    "end": 33
                                                },
                                                "flags": 16,
                                                "start": 13,
                                                "end": 33
                                            }
                                        ],
                                        "flags": 16,
                                        "start": 13,
                                        "end": 33
                                    },
                                    "flags": 16,
                                    "start": 12,
                                    "end": 33
                                }
                            ],
                            "flags": 16,
                            "start": 12,
                            "end": 33
                        },
                        "flags": 16,
                        "start": 11,
                        "end": 33
                    }
                ],
                "flags": 16,
                "start": 11,
                "end": 33
            },
            "flags": 16,
            "start": 9,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "{ [catch] {{{ &/ function while}}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
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
✖ Identifier expected - start: 13, end: 15
✖ Unterminated regular expression - start: 15, end: 33
✖ The parser expected to find a '}' to match the '{' token here - start: 33, end: 33

```

