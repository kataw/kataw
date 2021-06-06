# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw/test/__snapshot__/parser/statements/block/autogen.md
- Path: kataw/test/__snapshot__/parser/statements/block/gen/x007b_stand_alone
> :: test: { stand alone
> :: case: {{{ &/ function while}}
## Input

`````js
{ {{{ &/ function while}}
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
                                                                    "start": 5,
                                                                    "end": 5
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 134252103,
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

```

### Diagnostics

```javascript
✖ Identifier expected - start: 5, end: 7
✖ Unterminated regular expression - start: 7, end: 25
✖ The parser expected to find a '}' to match the '{' token here - start: 25, end: 25

```

