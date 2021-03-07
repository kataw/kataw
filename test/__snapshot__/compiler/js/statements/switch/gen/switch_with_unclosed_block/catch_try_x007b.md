# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/statements/switch/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\statements\switch\gen\switch_with_unclosed_block
> :: test: switch with unclosed block
> :: case: catch try {
## Input

`````js
switch {} default(x) { catch try {
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "switch {} default(x) { catch try {",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097362,
                "expression": {
                    "kind": 67224232,
                    "propertyList": {
                        "kind": 65722,
                        "properties": [],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 8
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 9
                },
                "caseBlock": {
                    "kind": 2093,
                    "clauses": [
                        {
                            "kind": 65,
                            "statements": [
                                {
                                    "kind": 2097233,
                                    "expression": {
                                        "kind": 66224,
                                        "expression": {
                                            "kind": 196712,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 18,
                                            "end": 19
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 17,
                                        "end": 20
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 17,
                                    "end": 20
                                },
                                {
                                    "kind": 2099237,
                                    "block": {
                                        "kind": 2084,
                                        "statements": [
                                            {
                                                "kind": 2097375,
                                                "block": {
                                                    "kind": 2099237,
                                                    "block": {
                                                        "kind": 2084,
                                                        "statements": [],
                                                        "multiline": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 22,
                                                        "end": 22
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 22,
                                                    "end": 22
                                                },
                                                "catchClause": {
                                                    "kind": 2095,
                                                    "catchParameter": null,
                                                    "block": {
                                                        "kind": 2099237,
                                                        "block": {
                                                            "kind": 2084,
                                                            "statements": [],
                                                            "multiline": false,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 28,
                                                            "end": 28
                                                        },
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 28,
                                                        "end": 28
                                                    },
                                                    "flags": 2,
                                                    "intersects": false,
                                                    "transformFlags": 16,
                                                    "start": 22,
                                                    "end": 28
                                                },
                                                "finallyBlock": null,
                                                "flags": 2,
                                                "intersects": false,
                                                "transformFlags": 16,
                                                "start": 22,
                                                "end": 28
                                            },
                                            {
                                                "kind": 2097375,
                                                "block": {
                                                    "kind": 2099237,
                                                    "block": {
                                                        "kind": 2084,
                                                        "statements": [],
                                                        "multiline": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 34,
                                                        "end": 34
                                                    },
                                                    "flags": 2,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 32,
                                                    "end": 34
                                                },
                                                "catchClause": null,
                                                "finallyBlock": {
                                                    "kind": 2099237,
                                                    "block": {
                                                        "kind": 2084,
                                                        "statements": [],
                                                        "multiline": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 34,
                                                        "end": 34
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 34,
                                                    "end": 34
                                                },
                                                "flags": 2,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 28,
                                                "end": 34
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 2,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 22,
                                        "end": 34
                                    },
                                    "flags": 2,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 20,
                                    "end": 34
                                }
                            ],
                            "flags": 2,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 34
                        }
                    ],
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 34
                },
                "flags": 2,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 34
            }
        ],
        "transformFlags": 0,
        "flags": 2,
        "intersects": false,
        "start": 0,
        "end": 34
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 7,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 10,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "':' expected.",
            "start": 17,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 21,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'try' expected.",
            "start": 23,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 29,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 33,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 34
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

