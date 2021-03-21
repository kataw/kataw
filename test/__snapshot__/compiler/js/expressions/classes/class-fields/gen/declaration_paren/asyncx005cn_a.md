# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/js/expressions/classes/class-fields/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/expressions/classes/class-fields/gen/declaration_paren
> :: test: declaration_paren
> :: case: async\n a
## Input

`````js
(class extends Base { async\n a });
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "(class extends Base { async\\n a });",
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
                    "classHeritage": {
                        "kind": 52,
                        "expression": {
                            "kind": 196712,
                            "text": "Base",
                            "rawText": "Base",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 19
                        },
                        "typeArguments": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 14,
                        "end": 19
                    },
                    "implementClauses": null,
                    "members": {
                        "kind": 50,
                        "elements": [
                            {
                                "kind": 16468,
                                "key": {
                                    "kind": 131322,
                                    "text": "",
                                    "flags": 3,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 27,
                                    "end": 27
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
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 524352,
                                "start": 21,
                                "end": 27
                            }
                        ],
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 21,
                        "end": 27
                    },
                    "decorators": null,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 1,
                    "start": 1,
                    "end": 27
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 27
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 27
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "n",
                "rawText": "n",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 28,
                "end": 29
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 28,
            "end": 29
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "a",
                "rawText": "a",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 29,
                "end": 31
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 29,
            "end": 31
        },
        {
            "kind": 6291526,
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 34,
            "end": 35
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "message": "Invalid character",
            "start": 27,
            "length": 0
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Invalid character",
            "start": 27,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 30,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 32,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 33,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

