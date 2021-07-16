# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/do-while/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/do-while/gen/with_unclosed_array
> :: test: with unclosed array
> :: case: try { !xxx
## Options

`````js
{}
`````
## Input

`````js
do[ try { !xxx
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 2
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 3
                    },
                    "flags": 32,
                    "transformFlags": 8,
                    "start": 2,
                    "end": 3
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 2,
                "end": 3
            },
            "whileKeyword": null,
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "transformFlags": 0,
                "start": 3,
                "end": 3
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 3
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 80,
                "transformFlags": 0,
                "start": 3,
                "end": 7
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 65584,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 9,
                                    "end": 11
                                },
                                "operand": {
                                    "kind": 134299649,
                                    "text": "xxx",
                                    "rawText": "xxx",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 11,
                                    "end": 14
                                },
                                "flags": 32,
                                "transformFlags": 16384,
                                "start": 9,
                                "end": 14
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 9,
                            "end": 14
                        }
                    ],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 14
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 7,
                "end": 14
            },
            "catchClause": null,
            "finallyKeyword": null,
            "finallyBlock": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 14
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 14,
                "end": 14
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 3,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "do[ try { !xxx",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Did you forgot a ']' to match the `[` token? - start: 4, end: 7
✖ The parser expected to find a '}' to match the '{' token here - start: 11, end: 14

```

