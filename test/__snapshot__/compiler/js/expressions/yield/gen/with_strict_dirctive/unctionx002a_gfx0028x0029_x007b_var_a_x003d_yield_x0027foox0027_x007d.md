# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw/test/__snapshot__/compiler/js/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/expressions/yield/gen/with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: unction* gf() { var a = yield 'foo'; }
## Input

`````js
'use strict'; unction* gf() { var a = yield 'foo'; }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "'use strict'; unction* gf() { var a = yield 'foo'; }",
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
                "kind": 65563,
                "left": {
                    "kind": 196712,
                    "text": "unction",
                    "rawText": "unction",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 21
                },
                "operator": "*",
                "right": {
                    "kind": 1073807915,
                    "expression": {
                        "kind": 196712,
                        "text": "gf",
                        "rawText": "gf",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 22,
                        "end": 25
                    },
                    "typeArguments": null,
                    "argumentList": {
                        "kind": 3,
                        "elements": [],
                        "trailingComma": false,
                        "transformFlags": 0,
                        "flags": 0,
                        "symbol": null,
                        "start": 27,
                        "end": 27
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 25,
                    "end": 27
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 13,
                "end": 27
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 13,
            "end": 27
        },
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [
                    {
                        "kind": 2097397,
                        "declarationList": {
                            "kind": 244,
                            "declarations": [
                                {
                                    "kind": 16627,
                                    "binding": {
                                        "kind": 131102,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1025,
                                        "start": 33,
                                        "end": 35
                                    },
                                    "exclamation": false,
                                    "type": null,
                                    "initializer": {
                                        "kind": 196712,
                                        "text": "yield",
                                        "rawText": "yield",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 37,
                                        "end": 43
                                    },
                                    "flags": 33,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 33554432,
                                    "end": 43
                                }
                            ],
                            "flags": 33554433,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 33,
                            "end": 43
                        },
                        "flags": 33554433,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 29,
                        "end": 43
                    },
                    {
                        "kind": 2097233,
                        "expression": {
                            "kind": 4261583,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 33554433,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 43,
                            "end": 49
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 43,
                        "end": 50
                    }
                ],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 29,
                "end": 50
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 27,
            "end": 52
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 28,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 44,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 52
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

