# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/in_class
> :: test: in class
> :: case: abstract class AbstractRule {
## Input

`````js
abstract class AbstractRule { class abstract class AbstractRule { { field: abstract class AbstractRule {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "abstract class AbstractRule { class abstract class AbstractRule { { field: abstract class AbstractRule {}",
    "filename": "",
    "statements": [
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "AbstractRule",
                "rawText": "AbstractRule",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 14,
                "end": 27
            },
            "typeParameters": null,
            "classHeritage": null,
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 196711,
                            "text": "class",
                            "rawText": "class",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 29,
                            "end": 35
                        },
                        "isInKeyword": false,
                        "expression": null,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isStatic": false,
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 524352,
                        "start": 29,
                        "end": 35
                    },
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 196711,
                            "text": "class",
                            "rawText": "class",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 44,
                            "end": 50
                        },
                        "isInKeyword": false,
                        "expression": null,
                        "isAbstract": true,
                        "isReadOnly": false,
                        "isOptional": false,
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isStatic": false,
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 524352,
                        "start": 35,
                        "end": 50
                    },
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 196711,
                            "text": "AbstractRule",
                            "rawText": "AbstractRule",
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 50,
                            "end": 63
                        },
                        "isInKeyword": false,
                        "expression": null,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isStatic": false,
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 524352,
                        "start": 50,
                        "end": 63
                    }
                ],
                "flags": 1,
                "symbol": null,
                "transformFlags": 1,
                "start": 29,
                "end": 63
            },
            "decorators": null,
            "isAbstract": true,
            "flags": 536870913,
            "symbol": null,
            "transformFlags": 2097153,
            "start": 8,
            "end": 63
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
                                        "start": 67,
                                        "end": 73
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
                                            "start": 74,
                                            "end": 83
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 74,
                                        "end": 83
                                    },
                                    "isWebCompat": true,
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 67,
                                    "end": 83
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
                                        "start": 89,
                                        "end": 102
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
                                        "start": 104,
                                        "end": 105
                                    },
                                    "decorators": null,
                                    "isAbstract": false,
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 1,
                                    "start": 83,
                                    "end": 105
                                }
                            ],
                            "multiline": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 67,
                            "end": 105
                        },
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 65,
                        "end": 105
                    }
                ],
                "multiline": false,
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 65,
                "end": 105
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 63,
            "end": 105
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 36,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 51,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 64,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 84,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 104,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 105
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

