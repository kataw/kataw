# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: unclosed parens
> :: case: {{{ &/ function while}}
## Input

`````js
{( {{{ &/ function while}}
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
                                "kind": 132,
                                "flags": 256,
                                "start": 1,
                                "end": 4
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 4
                        },
                        "flags": 128,
                        "start": 1,
                        "end": 4
                    },
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
                                                        "flags": 12,
                                                        "start": 6,
                                                        "end": 6
                                                    },
                                                    "operatorToken": {
                                                        "kind": 34375,
                                                        "flags": 768,
                                                        "start": 6,
                                                        "end": 8
                                                    },
                                                    "right": {
                                                        "kind": 221,
                                                        "text": "/ function while}}",
                                                        "flags": 768,
                                                        "start": 8,
                                                        "end": 26
                                                    },
                                                    "flags": 256,
                                                    "start": 6,
                                                    "end": 26
                                                },
                                                "flags": 128,
                                                "start": 6,
                                                "end": 26
                                            }
                                        ],
                                        "multiLine": false,
                                        "flags": 128,
                                        "start": 6,
                                        "end": 26
                                    },
                                    "flags": 128,
                                    "start": 5,
                                    "end": 26
                                }
                            ],
                            "multiLine": false,
                            "flags": 128,
                            "start": 5,
                            "end": 26
                        },
                        "flags": 128,
                        "start": 4,
                        "end": 26
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 26
            },
            "flags": 128,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "text": "{( {{{ &/ function while}}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Expression expected - start: 6, end: 8
@{x2716}@ Unexpected token. - start: 8, end: 9

```

