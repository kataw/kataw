# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: { stand alone
> :: case: {{{ &/ function while}}
## Input

`````js
{ {{{ &/ function while}}
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
                                                                    "start": 5,
                                                                    "end": 5
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 34375,
                                                                    "flags": 64,
                                                                    "start": 5,
                                                                    "end": 7
                                                                },
                                                                "right": {
                                                                    "kind": 221,
                                                                    "text": "/ function while}}",
                                                                    "flags": 96,
                                                                    "start": 7,
                                                                    "end": 25
                                                                },
                                                                "flags": 32,
                                                                "start": 5,
                                                                "end": 25
                                                            },
                                                            "flags": 16,
                                                            "start": 5,
                                                            "end": 25
                                                        }
                                                    ],
                                                    "flags": 16,
                                                    "start": 5,
                                                    "end": 25
                                                },
                                                "flags": 16,
                                                "start": 4,
                                                "end": 25
                                            }
                                        ],
                                        "flags": 16,
                                        "start": 4,
                                        "end": 25
                                    },
                                    "flags": 16,
                                    "start": 3,
                                    "end": 25
                                }
                            ],
                            "flags": 16,
                            "start": 3,
                            "end": 25
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 25
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 25
            },
            "flags": 16,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "{ {{{ &/ function while}}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 5, end: 7
✖ Unterminated regular expression - start: 7, end: 8
✖ The parser expected to find a '}' to match the '{' token here - start: 25, end: 25

```

