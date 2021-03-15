# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\in_class_expr
> :: test: in class expr
> :: case: abstract class AbstractRule {
## Input

`````js
(class { field: abstract class AbstractRule { })
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "(class { field: abstract class AbstractRule { })",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 66099,
                    "name": null,
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
                                    "text": "field",
                                    "rawText": "field",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 14
                                },
                                "isInKeyword": false,
                                "expression": null,
                                "isAbstract": false,
                                "isReadOnly": false,
                                "isOptional": false,
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
                                        "start": 15,
                                        "end": 24
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 15,
                                    "end": 30
                                },
                                "initializer": null,
                                "decorators": null,
                                "accessModifier": null,
                                "isStatic": false,
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 524352,
                                "start": 8,
                                "end": 24
                            },
                            {
                                "kind": 16468,
                                "key": {
                                    "kind": 196711,
                                    "text": "class",
                                    "rawText": "class",
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 24,
                                    "end": 30
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
                                "start": 24,
                                "end": 30
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
                                    "start": 30,
                                    "end": 43
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
                                "start": 30,
                                "end": 43
                            }
                        ],
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 8,
                        "end": 43
                    },
                    "decorators": null,
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 1,
                    "start": 1,
                    "end": 43
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 43
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 43
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
                "start": 45,
                "end": 45
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 43,
            "end": 47
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 25,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 31,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 44,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 47,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

