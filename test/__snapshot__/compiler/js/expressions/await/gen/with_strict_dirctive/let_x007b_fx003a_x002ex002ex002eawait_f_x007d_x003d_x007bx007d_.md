# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/js/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/expressions/await/gen/with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: let { f: ...await f } = {};
## Input

`````js
'use strict'; let { f: ...await f } = {};
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "'use strict'; let { f: ...await f } = {};",
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
            "kind": 142,
            "binding": {
                "kind": 31,
                "lexicals": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 33554598,
                            "propertyList": {
                                "kind": 33,
                                "properties": [
                                    {
                                        "kind": 32,
                                        "ellipsis": false,
                                        "key": {
                                            "kind": 196711,
                                            "text": "f",
                                            "rawText": "f",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 19,
                                            "end": 22
                                        },
                                        "value": {
                                            "kind": 131102,
                                            "text": "",
                                            "rawText": "",
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 22,
                                            "end": 22
                                        },
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 1025,
                                        "start": 19,
                                        "end": 22
                                    },
                                    {
                                        "kind": 203,
                                        "ellipsis": true,
                                        "left": {
                                            "kind": 131102,
                                            "text": "await",
                                            "rawText": "await",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 22,
                                            "end": 31
                                        },
                                        "right": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1024,
                                        "start": 22,
                                        "end": 31
                                    },
                                    {
                                        "kind": 203,
                                        "ellipsis": false,
                                        "left": {
                                            "kind": 131102,
                                            "text": "f",
                                            "rawText": "f",
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 31,
                                            "end": 33
                                        },
                                        "right": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1024,
                                        "start": 31,
                                        "end": 33
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "transformFlags": 1025,
                                "flags": 0,
                                "symbol": null,
                                "start": 19,
                                "end": 33
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 17,
                            "end": 35
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 98984,
                            "propertyList": {
                                "kind": 65722,
                                "properties": [],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 39,
                                "end": 39
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 37,
                            "end": 40
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 40
                    }
                ],
                "flags": 24,
                "symbol": null,
                "transformFlags": 0,
                "start": 13,
                "end": 40
            },
            "flags": 8,
            "symbol": null,
            "transformFlags": 769,
            "start": 13,
            "end": 41
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 23,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 32,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 41
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

