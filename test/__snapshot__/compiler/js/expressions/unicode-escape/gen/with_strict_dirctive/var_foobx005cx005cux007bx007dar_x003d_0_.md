# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/js/expressions/unicode-escape/autogen.md
- Path: kataw15/test\__snapshot__\compiler\js\expressions\unicode-escape\gen\with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: var foob\\u{}ar = 0;
## Input

`````js
'use strict'; var foob\\u{}ar = 0;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "'use strict'; var foob\\\\u{}ar = 0;",
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
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "foob",
                            "rawText": "foob",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 17,
                            "end": 22
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "flags": 17,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 22
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 17,
                "end": 22
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 13,
            "end": 22
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "u",
                "rawText": "u",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 24,
                "end": 25
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 24,
            "end": 25
        },
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 26,
                "end": 26
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 25,
            "end": 27
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "ar",
                    "rawText": "ar",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 27,
                    "end": 29
                },
                "operator": "=",
                "right": {
                    "kind": 4261540,
                    "text": 0,
                    "rawText": "0",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 31,
                    "end": 33
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 27,
                "end": 33
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 27,
            "end": 34
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "message": "Invalid character",
            "start": 22,
            "length": 0
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Invalid character",
            "start": 22,
            "length": 0
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Invalid character",
            "start": 23,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 25,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
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

