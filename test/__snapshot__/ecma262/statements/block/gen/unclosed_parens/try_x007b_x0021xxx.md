# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/block/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/block/gen/unclosed_parens
> :: test: unclosed parens
> :: case: try { !xxx
## Options

`````js
{}
`````
## Input

`````js
{( try { !xxx
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
                            "kind": 121,
                            "expression": {
                                "kind": 16637,
                                "text": "",
                                "rawText": "",
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 2
                            },
                            "flags": 1,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 2
                        },
                        "flags": 16,
                        "transformFlags": 4096,
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
                                        "transformFlags": 4096,
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
    "source": "{( try { !xxx",
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
✖ Identifier expected - start: 2, end: 6
✖ The parser expected to find a '}' to match the '{' token here - start: 10, end: 13

```

