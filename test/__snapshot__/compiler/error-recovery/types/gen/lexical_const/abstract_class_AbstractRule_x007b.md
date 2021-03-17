# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/lexical_const
> :: test: lexical const
> :: case: abstract class AbstractRule {
## Input

`````js
const x: abstract class AbstractRule {= {x:abstract class AbstractRule {}:abstract class AbstractRule {
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "const x: abstract class AbstractRule {= {x:abstract class AbstractRule {}:abstract class AbstractRule {",
    "filename": "",
    "statements": [
        {
            "kind": 142,
            "binding": {
                "kind": 31,
                "lexicals": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 5,
                            "end": 7
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "abstract",
                                "rawText": "abstract",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 17
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 8,
                            "end": 23
                        },
                        "initializer": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 17
                    }
                ],
                "flags": 40,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 17
            },
            "flags": 40,
            "symbol": null,
            "transformFlags": 769,
            "start": 0,
            "end": 17
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "AbstractRule",
                "rawText": "AbstractRule",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 23,
                "end": 36
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
                "start": 38,
                "end": 38
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 41,
            "symbol": null,
            "transformFlags": 1,
            "start": 17,
            "end": 38
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
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 41,
                            "end": 42
                        },
                        "statement": {
                            "kind": 2097233,
                            "expression": {
                                "kind": 196712,
                                "text": "abstract",
                                "rawText": "abstract",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 43,
                                "end": 51
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 43,
                            "end": 51
                        },
                        "isWebCompat": true,
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 41,
                        "end": 51
                    },
                    {
                        "kind": 48,
                        "name": {
                            "kind": 131102,
                            "text": "AbstractRule",
                            "rawText": "AbstractRule",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 57,
                            "end": 70
                        },
                        "typeParameters": null,
                        "classHeritage": null,
                        "implementClauses": null,
                        "members": {
                            "kind": 50,
                            "elements": [],
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1,
                            "start": 72,
                            "end": 73
                        },
                        "decorators": null,
                        "isAbstract": false,
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 51,
                        "end": 73
                    }
                ],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 41,
                "end": 73
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 39,
            "end": 73
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "AbstractRule",
                "rawText": "AbstractRule",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 88,
                "end": 101
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
                "start": 103,
                "end": 103
            },
            "decorators": null,
            "isAbstract": true,
            "flags": 536870913,
            "symbol": null,
            "transformFlags": 2097153,
            "start": 82,
            "end": 103
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 18,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 38,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 52,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 73,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 102,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 103
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

