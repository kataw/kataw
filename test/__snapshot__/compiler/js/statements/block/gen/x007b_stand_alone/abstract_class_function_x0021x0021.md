# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw/test/__snapshot__/compiler/js/statements/block/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/statements/block/gen/x007b_stand_alone
> :: test: { stand alone
> :: case: abstract class function !!
## Input

`````js
{ abstract class function !!
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "{ abstract class function !!",
    "filename": "",
    "statements": [
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [
                    {
                        "kind": 48,
                        "name": null,
                        "typeParameters": null,
                        "classHeritage": null,
                        "implementClauses": null,
                        "members": {
                            "kind": 50,
                            "elements": [],
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 1,
                            "start": 10,
                            "end": 10
                        },
                        "decorators": null,
                        "isAbstract": true,
                        "flags": 536870913,
                        "symbol": null,
                        "transformFlags": 2097153,
                        "start": 10,
                        "end": 16
                    },
                    {
                        "kind": 264284,
                        "name": {
                            "kind": 131102,
                            "text": "",
                            "rawText": "",
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 25,
                            "end": 25
                        },
                        "formalParameters": {
                            "kind": 90,
                            "formalParameterList": [],
                            "trailingComma": false,
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 25,
                            "end": 25
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
                                            "kind": 65774,
                                            "operator": "!",
                                            "operand": {
                                                "kind": 131322,
                                                "text": "",
                                                "flags": 3,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 28,
                                                "end": 28
                                            },
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 27,
                                            "end": 28
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 27,
                                        "end": 28
                                    }
                                ],
                                "multiline": false,
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 27,
                                "end": 28
                            },
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 25,
                            "end": 28
                        },
                        "typeParameters": null,
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 256,
                        "start": 16,
                        "end": 28
                    }
                ],
                "multiline": false,
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 1,
                "end": 28
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 17,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 26,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 27,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

