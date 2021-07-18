# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/block/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/block/gen/x007b_stand_alone
> :: test: { stand alone
> :: case: a,b, c d = y ** d
## Options

`````js
{}
`````
## Input

`````js
{ a,b, c d = y ** d
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
                            "kind": 132,
                            "expressions": [
                                {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 1,
                                    "end": 3
                                },
                                {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 4,
                                    "end": 5
                                },
                                {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 6,
                                    "end": 8
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 1024,
                            "start": 1,
                            "end": 8
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 1,
                        "end": 8
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 125,
                            "left": {
                                "kind": 134299649,
                                "text": "d",
                                "rawText": "d",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 10
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 10,
                                "end": 12
                            },
                            "right": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 12,
                                    "end": 14
                                },
                                "operatorToken": {
                                    "kind": 35897,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 14,
                                    "end": 17
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "d",
                                    "rawText": "d",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 17,
                                    "end": 19
                                },
                                "flags": 96,
                                "transformFlags": 5120,
                                "start": 12,
                                "end": 19
                            },
                            "flags": 0,
                            "transformFlags": 128,
                            "start": 8,
                            "end": 19
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 8,
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
    "source": "{ a,b, c d = y ** d",
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
✖ '; ' is not allowed here. Did you mean ';'? - start: 8, end: 10
✖ The parser expected to find a '}' to match the '{' token here - start: 18, end: 19

```

