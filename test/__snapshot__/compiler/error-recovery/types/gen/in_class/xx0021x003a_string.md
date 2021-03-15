# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\in_class
> :: test: in class
> :: case: x!: string
## Input

`````js
x!: string class x!: string { field: x!: string}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "x!: string class x!: string { field: x!: string}",
    "filename": "",
    "statements": [
        {
            "kind": 2097292,
            "label": {
                "kind": 74398,
                "expression": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 1,
                "end": 2
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
                    "start": 3,
                    "end": 10
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 3,
                "end": 10
            },
            "isWebCompat": true,
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 10
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 16,
                "end": 18
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
                "start": 10,
                "end": 10
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 1,
            "symbol": null,
            "transformFlags": 1,
            "start": 10,
            "end": 18
        },
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
                    "start": 19,
                    "end": 19
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 18,
                "end": 19
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 18,
            "end": 19
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "string",
                "rawText": "string",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 20,
                "end": 27
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 20,
            "end": 27
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
                            "text": "field",
                            "rawText": "field",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 29,
                            "end": 35
                        },
                        "statement": {
                            "kind": 2097292,
                            "label": {
                                "kind": 74398,
                                "expression": {
                                    "kind": 196712,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 36,
                                    "end": 38
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 38,
                                "end": 39
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
                                    "start": 40,
                                    "end": 47
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 40,
                                "end": 47
                            },
                            "isWebCompat": true,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 36,
                            "end": 47
                        },
                        "isWebCompat": true,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 29,
                        "end": 47
                    }
                ],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 29,
                "end": 47
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 27,
            "end": 48
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 11,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 18,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 19,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 28,
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

