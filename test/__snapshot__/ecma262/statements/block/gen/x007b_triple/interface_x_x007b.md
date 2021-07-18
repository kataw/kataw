# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/block/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/block/gen/x007b_triple
> :: test: { triple
> :: case: interface x {
## Options

`````js
{}
`````
## Input

`````js
{ { { interface x {
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
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "interface",
                                                    "rawText": "interface",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 5,
                                                    "end": 15
                                                },
                                                "flags": 16,
                                                "transformFlags": 4096,
                                                "start": 5,
                                                "end": 15
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 15,
                                                    "end": 17
                                                },
                                                "flags": 16,
                                                "transformFlags": 4096,
                                                "start": 15,
                                                "end": 17
                                            },
                                            {
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
                                                "start": 17,
                                                "end": 19
                                            }
                                        ],
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 19
                                    },
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 3,
                                    "end": 19
                                }
                            ],
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 19
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 19
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 19
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "{ { { interface x {",
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
✖ '; ' is not allowed here. Did you mean ';'? - start: 15, end: 17
✖ '{' is not allowed here. Did you mean ';'? - start: 17, end: 19

```

