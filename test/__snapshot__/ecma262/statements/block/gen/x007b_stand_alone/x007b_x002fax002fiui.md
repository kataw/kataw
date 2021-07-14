# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/block/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/block/gen/x007b_stand_alone
> :: test: { stand alone
> :: case: { /a/iui
## Options

`````js
{}
`````
## Input

`````js
{ { /a/iui
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
                                    "kind": 120,
                                    "expression": {
                                        "kind": 371,
                                        "text": "/a/iui",
                                        "rawText": "/a/iui",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 3,
                                        "end": 10
                                    },
                                    "flags": 16,
                                    "transformFlags": 4096,
                                    "start": 3,
                                    "end": 10
                                }
                            ],
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 10
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 10
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 10
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "source": "{ { /a/iui",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 10
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Duplicate regular expression flag - start: 8, end: 9
✖ The parser expected to find a '}' to match the '{' token here - start: 4, end: 10

```

