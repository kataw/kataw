# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/js/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/expressions/await/gen/with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: var { f: await f } = {};
## Input

`````js
'use strict'; var { f: await f } = {};
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "'use strict'; var { f: await f } = {};",
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
                                            "kind": 16412,
                                            "ellipsis": false,
                                            "left": {
                                                "kind": 131102,
                                                "text": "await",
                                                "rawText": "await",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 1025,
                                                "start": 22,
                                                "end": 28
                                            },
                                            "right": null,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1,
                                            "start": 22,
                                            "end": 28
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1025,
                                        "start": 19,
                                        "end": 28
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
                                            "start": 28,
                                            "end": 30
                                        },
                                        "right": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1024,
                                        "start": 28,
                                        "end": 30
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "transformFlags": 1025,
                                "flags": 0,
                                "symbol": null,
                                "start": 19,
                                "end": 30
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 17,
                            "end": 32
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
                                "start": 36,
                                "end": 36
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 34,
                            "end": 37
                        },
                        "flags": 17,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 37
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 17,
                "end": 37
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 13,
            "end": 38
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 29,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

