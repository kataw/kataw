# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/block/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/block/gen/with_unclosed_array
> :: test: with unclosed array
> :: case: try { !xxx
## Options

`````js
{}
`````
## Input

`````js
{[ try { !xxx
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
                                "transformFlags": 0,
                                "start": 2,
                                "end": 2
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 1,
                            "end": 2
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 2
                    },
                    {
                        "kind": 159,
                        "tryKeyword": {
                            "kind": 37757027,
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 2,
                            "end": 6
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
                                                "start": 8,
                                                "end": 10
                                            },
                                            "operand": {
                                                "kind": 134299649,
                                                "text": "xxx",
                                                "rawText": "xxx",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 10,
                                                "end": 13
                                            },
                                            "flags": 32,
                                            "transformFlags": 1024,
                                            "start": 8,
                                            "end": 13
                                        },
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 8,
                                        "end": 13
                                    }
                                ],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 13
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 6,
                            "end": 13
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
                                "start": 13,
                                "end": 13
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 13
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 13
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 13
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "{[ try { !xxx",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Did you forgot a ']' to match the `[` token? - start: 3, end: 6
✖ The parser expected to find a '}' to match the '{' token here - start: 10, end: 13

```

