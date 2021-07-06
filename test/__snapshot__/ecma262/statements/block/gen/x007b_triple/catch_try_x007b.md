# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/block/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/block/gen/x007b_triple
> :: test: { triple
> :: case: catch try {
## Options

`````js
{}
`````
## Input

`````js
{ { { catch try {
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
                                                "kind": 159,
                                                "tryKeyword": null,
                                                "block": {
                                                    "kind": 124,
                                                    "block": {
                                                        "kind": 249,
                                                        "statements": [],
                                                        "flags": 16,
                                                        "transformFlags": 0,
                                                        "start": 5,
                                                        "end": 5
                                                    },
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 5,
                                                    "end": 5
                                                },
                                                "catchClause": {
                                                    "kind": 173,
                                                    "catchKeyword": {
                                                        "kind": 4202575,
                                                        "flags": 80,
                                                        "transformFlags": 0,
                                                        "start": 5,
                                                        "end": 11
                                                    },
                                                    "catchParameter": null,
                                                    "block": {
                                                        "kind": 124,
                                                        "block": {
                                                            "kind": 249,
                                                            "statements": [],
                                                            "flags": 16,
                                                            "transformFlags": 0,
                                                            "start": 11,
                                                            "end": 11
                                                        },
                                                        "flags": 16,
                                                        "transformFlags": 0,
                                                        "start": 11,
                                                        "end": 11
                                                    },
                                                    "flags": 80,
                                                    "transformFlags": 0,
                                                    "start": 5,
                                                    "end": 11
                                                },
                                                "finallyKeyword": null,
                                                "finallyBlock": null,
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 5,
                                                "end": 11
                                            },
                                            {
                                                "kind": 159,
                                                "tryKeyword": {
                                                    "kind": 37757027,
                                                    "flags": 80,
                                                    "transformFlags": 0,
                                                    "start": 11,
                                                    "end": 15
                                                },
                                                "block": {
                                                    "kind": 124,
                                                    "block": {
                                                        "kind": 249,
                                                        "statements": [],
                                                        "flags": 16,
                                                        "transformFlags": 0,
                                                        "start": 17,
                                                        "end": 17
                                                    },
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 15,
                                                    "end": 17
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
                                                        "start": 17,
                                                        "end": 17
                                                    },
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 17,
                                                    "end": 17
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 11,
                                                "end": 17
                                            }
                                        ],
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 17
                                    },
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 3,
                                    "end": 17
                                }
                            ],
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 17
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 17
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 17
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "{ { { catch try {",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'try' expected - start: 5, end: 11
✖ The parser expected to find a '}' to match the '{' token here - start: 16, end: 17

```

