# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\in_arrow_head
> :: test: in arrow head
> :: case:  number): void;
## Input

`````js
([  number): void; , x:  number): void; ]) => {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "([  number): void; , x:  number): void; ]) => {}",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 81929,
                "elements": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 33554437,
                            "elementList": {
                                "kind": 29,
                                "elements": [
                                    {
                                        "kind": 4325406,
                                        "text": "number",
                                        "rawText": "number",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 2,
                                        "end": 10
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 10
                            },
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 10
                        },
                        "isOptional": false,
                        "type": null,
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 0,
                        "end": 17
                    }
                ],
                "type": {
                    "kind": 4202742,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 12,
                    "end": 17
                },
                "accessModifier": null,
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 17
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 18
        },
        {
            "kind": 2097292,
            "label": {
                "kind": 196712,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 20,
                "end": 22
            },
            "statement": {
                "kind": 2097233,
                "expression": {
                    "kind": 196712,
                    "text": "number",
                    "rawText": "number",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 23,
                    "end": 31
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 23,
                "end": 31
            },
            "isWebCompat": true,
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 20,
            "end": 31
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65774,
                "operator": "void",
                "operand": {
                    "kind": 131322,
                    "text": "",
                    "flags": 3,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 38,
                    "end": 38
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 33,
                "end": 38
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 33,
            "end": 39
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
                "start": 47,
                "end": 47
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 45,
            "end": 48
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'=>' expected.",
            "start": 17,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 19,
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
            "message": "Declaration or statement expected",
            "start": 32,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 38,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 40,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 41,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 43,
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

