# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/block/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/block/gen/with_unclosed_block
> :: test: with unclosed block
> :: case: try { !xxx
## Options

`````js
{}
`````
## Input

`````js
{ {} finally(x) { try { !xxx
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
                            "statements": [],
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 3
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 4
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
                                "transformFlags": 0,
                                "start": 4,
                                "end": 4
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 4,
                            "end": 4
                        },
                        "catchClause": null,
                        "finallyKeyword": {
                            "kind": 37757016,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 4,
                            "end": 12
                        },
                        "finallyBlock": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 12,
                                "end": 12
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 12
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 4,
                        "end": 12
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 121,
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 14
                            },
                            "flags": 12,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 15
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 12,
                        "end": 15
                    },
                    {
                        "kind": 124,
                        "block": {
                            "kind": 249,
                            "statements": [
                                {
                                    "kind": 159,
                                    "tryKeyword": {
                                        "kind": 37757027,
                                        "flags": 80,
                                        "transformFlags": 0,
                                        "start": 17,
                                        "end": 21
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
                                                            "start": 23,
                                                            "end": 25
                                                        },
                                                        "operand": {
                                                            "kind": 134299649,
                                                            "text": "xxx",
                                                            "rawText": "xxx",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 25,
                                                            "end": 28
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 16384,
                                                        "start": 23,
                                                        "end": 28
                                                    },
                                                    "flags": 16,
                                                    "transformFlags": 4096,
                                                    "start": 23,
                                                    "end": 28
                                                }
                                            ],
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 23,
                                            "end": 28
                                        },
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 21,
                                        "end": 28
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
                                            "start": 28,
                                            "end": 28
                                        },
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 28,
                                        "end": 28
                                    },
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 17,
                                    "end": 28
                                }
                            ],
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 28
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 28
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 28
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "{ {} finally(x) { try { !xxx",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'try' expected - start: 4, end: 12
✖ '{' expected - start: 15, end: 17
✖ The parser expected to find a '}' to match the '{' token here - start: 25, end: 28

```

