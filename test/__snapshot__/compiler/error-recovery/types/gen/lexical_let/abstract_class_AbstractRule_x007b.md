# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\lexical_let
> :: test: lexical let
> :: case: abstract class AbstractRule {
## Input

`````js
let x: abstract class AbstractRule { abstract class AbstractRule {
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "let x: abstract class AbstractRule { abstract class AbstractRule {",
    "filename": "",
    "statements": [
        {
            "kind": 142,
            "isConst": false,
            "binding": {
                "kind": 31,
                "bindingList": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 3,
                            "end": 5
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
                                "start": 6,
                                "end": 15
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 6,
                            "end": 21
                        },
                        "initializer": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 15
                    }
                ],
                "flags": 9,
                "symbol": null,
                "transformFlags": 0,
                "start": 3,
                "end": 15
            },
            "flags": 9,
            "symbol": null,
            "transformFlags": 769,
            "start": 0,
            "end": 15
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
                "start": 21,
                "end": 34
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
                            "start": 45,
                            "end": 51
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
                        "start": 36,
                        "end": 51
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
                            "start": 51,
                            "end": 64
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
                        "start": 51,
                        "end": 64
                    }
                ],
                "flags": 1,
                "symbol": null,
                "transformFlags": 1,
                "start": 36,
                "end": 64
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 1,
            "symbol": null,
            "transformFlags": 1,
            "start": 15,
            "end": 64
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
                "start": 66,
                "end": 66
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 64,
            "end": 66
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 16,
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
            "message": "';' expected.",
            "start": 65,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 66
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

