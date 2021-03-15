# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\in_class
> :: test: in class
> :: case: xport a: string) {
## Input

`````js
xport a: string) { class xport a: string) { { field: xport a: string) {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "xport a: string) { class xport a: string) { { field: xport a: string) {}",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "xport",
                "rawText": "xport",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 5
        },
        {
            "kind": 2097292,
            "label": {
                "kind": 196712,
                "text": "a",
                "rawText": "a",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 5,
                "end": 7
            },
            "statement": {
                "kind": 2097233,
                "expression": {
                    "kind": 196712,
                    "text": "string",
                    "rawText": "string",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 15
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 8,
                "end": 15
            },
            "isWebCompat": true,
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 5,
            "end": 15
        },
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [
                    {
                        "kind": 48,
                        "name": {
                            "kind": 131102,
                            "text": "xport",
                            "rawText": "xport",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 24,
                            "end": 30
                        },
                        "typeParameters": null,
                        "classHeritage": null,
                        "implementClauses": null,
                        "members": {
                            "kind": 50,
                            "elements": [],
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 1,
                            "start": 18,
                            "end": 18
                        },
                        "decorators": null,
                        "isAbstract": false,
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 18,
                        "end": 30
                    },
                    {
                        "kind": 2097292,
                        "label": {
                            "kind": 196712,
                            "text": "a",
                            "rawText": "a",
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 30,
                            "end": 32
                        },
                        "statement": {
                            "kind": 2097233,
                            "expression": {
                                "kind": 196712,
                                "text": "string",
                                "rawText": "string",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 33,
                                "end": 40
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 33,
                            "end": 40
                        },
                        "isWebCompat": true,
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 30,
                        "end": 40
                    }
                ],
                "multiline": false,
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 18,
                "end": 40
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 16,
            "end": 40
        },
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [
                    {
                        "kind": 2099237,
                        "block": {
                            "kind": 2084,
                            "statements": [
                                {
                                    "kind": 2097292,
                                    "label": {
                                        "kind": 196712,
                                        "text": "field",
                                        "rawText": "field",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 45,
                                        "end": 51
                                    },
                                    "statement": {
                                        "kind": 2097233,
                                        "expression": {
                                            "kind": 196712,
                                            "text": "xport",
                                            "rawText": "xport",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 52,
                                            "end": 58
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 52,
                                        "end": 58
                                    },
                                    "isWebCompat": true,
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 45,
                                    "end": 58
                                },
                                {
                                    "kind": 2097292,
                                    "label": {
                                        "kind": 196712,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 58,
                                        "end": 60
                                    },
                                    "statement": {
                                        "kind": 2097233,
                                        "expression": {
                                            "kind": 196712,
                                            "text": "string",
                                            "rawText": "string",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 61,
                                            "end": 68
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 61,
                                        "end": 68
                                    },
                                    "isWebCompat": true,
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 58,
                                    "end": 68
                                }
                            ],
                            "multiline": false,
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 45,
                            "end": 68
                        },
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 43,
                        "end": 68
                    }
                ],
                "multiline": false,
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 43,
                "end": 68
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 41,
            "end": 68
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
                "start": 71,
                "end": 71
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 69,
            "end": 72
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 6,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 15,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 31,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 40,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 59,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 68,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 72
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

