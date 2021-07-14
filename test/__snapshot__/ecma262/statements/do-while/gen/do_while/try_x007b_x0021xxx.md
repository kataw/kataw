# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/do-while/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/do-while/gen/do_while
> :: test: do while
> :: case: try { !xxx
## Options

`````js
{}
`````
## Input

`````js
do try { !xxx while
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
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 13
                                },
                                "flags": 16,
                                "transformFlags": 4096,
                                "start": 8,
                                "end": 13
                            },
                            {
                                "kind": 154,
                                "whileKeyword": {
                                    "kind": 37757028,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 13,
                                    "end": 19
                                },
                                "expression": {
                                    "kind": 16637,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 19,
                                    "end": 19
                                },
                                "statement": {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 16637,
                                        "text": "",
                                        "rawText": "",
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 19,
                                        "end": 19
                                    },
                                    "flags": 16,
                                    "transformFlags": 4096,
                                    "start": 19,
                                    "end": 19
                                },
                                "flags": 80,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 19
                            }
                        ],
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 19
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 19
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
                        "start": 19,
                        "end": 19
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 19
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 2,
                "end": 19
            },
            "whileKeyword": null,
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "transformFlags": 0,
                "start": 19,
                "end": 19
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "do try { !xxx while",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 13, end: 19

```

