# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/block/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/block/gen/x007b_stand_alone
> :: test: { stand alone
> :: case: {{{ &/ function while}}
## Options

`````js
{}
`````
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
                                                                    "rawText": "",
                                                                    "flags": 64,
                                                                    "transformFlags": 0,
                                                                    "start": 5,
                                                                    "end": 5
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 134252103,
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 5,
                                                                    "end": 7
                                                                },
                                                                "right": {
                                                                    "kind": 371,
                                                                    "text": "/ function while}}",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 7,
                                                                    "end": 25
                                                                },
                                                                "flags": 96,
                                                                "transformFlags": 1024,
                                                                "start": 5,
                                                                "end": 25
                                                            },
                                                            "flags": 16,
                                                            "transformFlags": 0,
                                                            "start": 5,
                                                            "end": 25
                                                        }
                                                    ],
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 5,
                                                    "end": 25
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 4,
                                                "end": 25
                                            }
                                        ],
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 4,
                                        "end": 25
                                    },
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 3,
                                    "end": 25
                                }
                            ],
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 25
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 25
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 25
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "{ {{{ &/ function while}}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
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
✖ The parser expected to find a '}' to match the '{' token here - start: 7, end: 25

```

