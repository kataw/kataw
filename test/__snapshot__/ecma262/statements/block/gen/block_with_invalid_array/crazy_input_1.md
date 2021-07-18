# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/block/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/block/gen/block_with_invalid_array
> :: test: block with invalid array
> :: case: crazy input 1
## Options

`````js
{}
`````
## Input

`````js
{ [catch] crazy input 1
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
                                "start": 3,
                                "end": 3
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 1,
                            "end": 3
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 1,
                        "end": 3
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
                                "start": 3,
                                "end": 3
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 3
                        },
                        "catchClause": {
                            "kind": 173,
                            "catchKeyword": {
                                "kind": 4202575,
                                "flags": 80,
                                "transformFlags": 0,
                                "start": 3,
                                "end": 8
                            },
                            "catchParameter": null,
                            "block": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 8
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 8
                            },
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 8
                        },
                        "finallyKeyword": null,
                        "finallyBlock": null,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 8
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 8
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 8
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "crazy",
                "rawText": "crazy",
                "flags": 96,
                "transformFlags": 0,
                "start": 9,
                "end": 15
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 9,
            "end": 15
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "input",
                "rawText": "input",
                "flags": 96,
                "transformFlags": 0,
                "start": 15,
                "end": 21
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 15,
            "end": 21
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1,
                "rawText": "1",
                "flags": 96,
                "transformFlags": 0,
                "start": 21,
                "end": 23
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 21,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "{ [catch] crazy input 1",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Did you forgot a ']' to match the `[` token? - start: 3, end: 8
✖ 'try' expected - start: 3, end: 8
✖ The parser expected to find a '}' to match the '{' token here - start: 8, end: 9
✖ '; ' is not allowed here. Did you mean ';'? - start: 15, end: 21
✖ '; ' is not allowed here. Did you mean ';'? - start: 21, end: 23

```

