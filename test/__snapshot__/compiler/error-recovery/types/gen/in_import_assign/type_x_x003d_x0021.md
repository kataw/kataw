# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\in_import_assign
> :: test: in import assign
> :: case: type x = !
## Input

`````js
import type x = ! = type x = ! ;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "import type x = ! = type x = ! ;",
    "filename": "",
    "statements": [
        {
            "kind": 111,
            "name": {
                "kind": 131102,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 11,
                "end": 13
            },
            "moduleReference": {
                "kind": 131322,
                "text": "",
                "flags": 3,
                "symbol": null,
                "transformFlags": 0,
                "start": 15,
                "end": 15
            },
            "isTypeOnly": true,
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 15
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 65774,
                    "operator": "!",
                    "operand": {
                        "kind": 131322,
                        "text": "",
                        "flags": 3,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 17
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 17
                },
                "operator": "=",
                "right": {
                    "kind": 196712,
                    "text": "type",
                    "rawText": "type",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 24
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 15,
                "end": 24
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 15,
            "end": 24
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 24,
                    "end": 26
                },
                "operator": "=",
                "right": {
                    "kind": 65774,
                    "operator": "!",
                    "operand": {
                        "kind": 131322,
                        "text": "",
                        "flags": 3,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 30,
                        "end": 30
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 28,
                    "end": 30
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 24,
                "end": 30
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 24,
            "end": 32
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 16,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 18,
            "length": 0
        },
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
            "message": "Identifier expected",
            "start": 31,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

