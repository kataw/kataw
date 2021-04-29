# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: block with invalid array
> :: case: {{{ &/ function while}}
## Input

`````js
{ [catch] {{{ &/ function while}}
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
                            "kind": 249,
                            "block": {
                                "kind": 124,
                                "statements": [],
                                "multiLine": false,
                                "flags": 16,
                                "start": 8,
                                "end": 8
                            },
                            "flags": 16,
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
                                        "kind": 249,
                                        "block": {
                                            "kind": 124,
                                            "statements": [
                                                {
                                                    "kind": 249,
                                                    "block": {
                                                        "kind": 124,
                                                        "statements": [
                                                            {
                                                                "kind": 120,
                                                                "expression": {
                                                                    "kind": 198,
                                                                    "left": {
                                                                        "kind": 16637,
                                                                        "text": "",
                                                                        "flags": 68,
                                                                        "start": 13,
                                                                        "end": 13
                                                                    },
                                                                    "operatorToken": {
                                                                        "kind": 34375,
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
                                                        "multiLine": false,
                                                        "flags": 16,
                                                        "start": 13,
                                                        "end": 33
                                                    },
                                                    "flags": 16,
                                                    "start": 12,
                                                    "end": 33
                                                }
                                            ],
                                            "multiLine": false,
                                            "flags": 16,
                                            "start": 12,
                                            "end": 33
                                        },
                                        "flags": 16,
                                        "start": 11,
                                        "end": 33
                                    }
                                ],
                                "multiLine": false,
                                "flags": 16,
                                "start": 11,
                                "end": 33
                            },
                            "flags": 16,
                            "start": 9,
                            "end": 33
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 33
                    }
                ],
                "multiLine": false,
                "flags": 16,
                "start": 1,
                "end": 33
            },
            "flags": 16,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "text": "{ [catch] {{{ &/ function while}}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 13, end: 15
✖ Unterminated regular expression - start: 15, end: 16

```

