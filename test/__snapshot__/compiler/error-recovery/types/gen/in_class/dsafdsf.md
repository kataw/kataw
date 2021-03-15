# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\in_class
> :: test: in class
> :: case: dsafdsf
## Input

`````js
dsafdsf class dsafdsf { field: dsafdsf}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "dsafdsf class dsafdsf { field: dsafdsf}",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "dsafdsf",
                "rawText": "dsafdsf",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 7
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 7
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "dsafdsf",
                "rawText": "dsafdsf",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 13,
                "end": 21
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
                            "text": "field",
                            "rawText": "field",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 23,
                            "end": 29
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
                                "text": "dsafdsf",
                                "rawText": "dsafdsf",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 30,
                                "end": 38
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 30,
                            "end": 39
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isStatic": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 524352,
                        "start": 23,
                        "end": 38
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 1,
                "start": 23,
                "end": 39
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 1,
            "symbol": null,
            "transformFlags": 1,
            "start": 7,
            "end": 39
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 8,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

