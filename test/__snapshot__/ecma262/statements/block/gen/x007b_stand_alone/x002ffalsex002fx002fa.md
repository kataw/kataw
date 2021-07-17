# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/block/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/block/gen/x007b_stand_alone
> :: test: { stand alone
> :: case: /false//a
## Options

`````js
{}
`````
## Input

`````js
{ /false//a
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
                            "kind": 198,
                            "left": {
                                "kind": 371,
                                "text": "/false/",
                                "rawText": "/false/",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1,
                                "end": 9
                            },
                            "operatorToken": {
                                "kind": 35640,
                                "flags": 96,
                                "transformFlags": 32,
                                "start": 9,
                                "end": 10
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 10,
                                "end": 11
                            },
                            "flags": 96,
                            "transformFlags": 5120,
                            "start": 1,
                            "end": 11
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 1,
                        "end": 11
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 11
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 11
        }
    ],
    "isModule": false,
    "source": "{ /false//a",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 11
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The parser expected to find a '}' to match the '{' token here - start: 10, end: 11

```

