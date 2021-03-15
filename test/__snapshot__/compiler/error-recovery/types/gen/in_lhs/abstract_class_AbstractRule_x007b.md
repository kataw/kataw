# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\in_lhs
> :: test: in lhs
> :: case: abstract class AbstractRule {
## Input

`````js
 function (x:abstract class AbstractRule { = abstract class AbstractRule {) {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": " function (x:abstract class AbstractRule { = abstract class AbstractRule {) {}",
    "filename": "",
    "statements": [
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "",
                "rawText": "",
                "flags": 1,
                "symbol": null,
                "transformFlags": 1025,
                "start": 9,
                "end": 9
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 11,
                            "end": 12
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "abstract",
                                "rawText": "abstract",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 21
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 13,
                            "end": 27
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 11,
                        "end": 21
                    }
                ],
                "trailingComma": false,
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 11,
                "end": 27
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 2097233,
                            "expression": {
                                "kind": 196712,
                                "text": "AbstractRule",
                                "rawText": "AbstractRule",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 27,
                                "end": 40
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 27,
                            "end": 40
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
                                "start": 42,
                                "end": 42
                            },
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 40,
                            "end": 44
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
                                "start": 59,
                                "end": 72
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
                                "start": 74,
                                "end": 74
                            },
                            "decorators": null,
                            "isAbstract": true,
                            "flags": 536870913,
                            "symbol": null,
                            "transformFlags": 2097153,
                            "start": 53,
                            "end": 74
                        }
                    ],
                    "multiline": false,
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 27,
                    "end": 74
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 21,
                "end": 74
            },
            "typeParameters": null,
            "flags": 1,
            "symbol": null,
            "transformFlags": 256,
            "start": 0,
            "end": 74
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
                "start": 77,
                "end": 77
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 75,
            "end": 78
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Expression or comma expected.",
            "start": 22,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 41,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 43,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected. This '=' follows a block of statements, so if you intended to write a destructuring assignment, you might need to wrap the the whole assignment in parentheses.",
            "start": 45,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 74,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 78
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

