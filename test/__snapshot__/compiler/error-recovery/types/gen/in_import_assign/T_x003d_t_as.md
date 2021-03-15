# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\in_import_assign
> :: test: in import assign
> :: case: T = t as
## Input

`````js
import T = t as = T = t as ;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "import T = t as = T = t as ;",
    "filename": "",
    "statements": [
        {
            "kind": 111,
            "name": {
                "kind": 131102,
                "text": "T",
                "rawText": "T",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 6,
                "end": 8
            },
            "moduleReference": {
                "kind": 196712,
                "text": "t",
                "rawText": "t",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 10,
                "end": 12
            },
            "isTypeOnly": false,
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 12
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "as",
                    "rawText": "as",
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 15
                },
                "operator": "=",
                "right": {
                    "kind": 65550,
                    "left": {
                        "kind": 196712,
                        "text": "T",
                        "rawText": "T",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 19
                    },
                    "operator": "=",
                    "right": {
                        "kind": 73738,
                        "expression": {
                            "kind": 196712,
                            "text": "t",
                            "rawText": "t",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 23
                        },
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196712,
                                "text": "",
                                "rawText": "",
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 26,
                                "end": 26
                            },
                            "typeArguments": null,
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 26,
                            "end": 28
                        },
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 23,
                        "end": 26
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 26
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 12,
                "end": 26
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 12,
            "end": 28
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 13,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Type expected",
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

