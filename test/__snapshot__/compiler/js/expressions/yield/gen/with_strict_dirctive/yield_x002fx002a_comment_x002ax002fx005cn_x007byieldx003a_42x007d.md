# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/yield/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\yield\gen\with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: yield /* comment */\n {yield: 42}
## Input

`````js
'use strict'; yield /* comment */\n {yield: 42}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "'use strict'; yield /* comment */\\n {yield: 42}",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "use strict",
                "rawText": "use strict",
                "flags": 33554432,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 12
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 13
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "yield",
                "rawText": "yield",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 13,
                "end": 19
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 13,
            "end": 19
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "n",
                "rawText": "n",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 34,
                "end": 35
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 34,
            "end": 35
        },
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [
                    {
                        "kind": 2097292,
                        "label": {
                            "kind": 196712,
                            "text": "yield",
                            "rawText": "yield",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 37,
                            "end": 42
                        },
                        "statement": {
                            "kind": 2097233,
                            "expression": {
                                "kind": 4261540,
                                "text": 42,
                                "rawText": "42",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 43,
                                "end": 46
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 43,
                            "end": 46
                        },
                        "isWebCompat": true,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 37,
                        "end": 46
                    }
                ],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 37,
                "end": 46
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 35,
            "end": 47
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "message": "Invalid character",
            "start": 33,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 36,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 47
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

