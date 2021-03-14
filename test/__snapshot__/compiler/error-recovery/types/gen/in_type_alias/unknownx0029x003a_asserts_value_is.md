# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/in_type_alias
> :: test: in type alias
> :: case: unknown): asserts value is
## Input

`````js
type unknown): asserts value is = x extends unknown): asserts value is
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "type unknown): asserts value is = x extends unknown): asserts value is",
    "filename": "",
    "statements": [
        {
            "kind": 8417,
            "name": {
                "kind": 196712,
                "text": "unknown",
                "rawText": "unknown",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 4,
                "end": 12
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
                    "start": 12,
                    "end": 12
                },
                "typeArguments": null,
                "flags": 1,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 12,
                "end": 13
            },
            "typeParameters": null,
            "flags": 1,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 0,
            "end": 12
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "asserts",
                "rawText": "asserts",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 14,
                "end": 22
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 14,
            "end": 22
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "value",
                "rawText": "value",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 22,
                "end": 28
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 22,
            "end": 28
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "is",
                    "rawText": "is",
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 28,
                    "end": 31
                },
                "operator": "=",
                "right": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 35
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 28,
                "end": 35
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 28,
            "end": 35
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "unknown",
                "rawText": "unknown",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 43,
                "end": 51
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 43,
            "end": 51
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "asserts",
                "rawText": "asserts",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 53,
                "end": 61
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 53,
            "end": 61
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "value",
                "rawText": "value",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 61,
                "end": 67
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 61,
            "end": 67
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "is",
                "rawText": "is",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 67,
                "end": 70
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 67,
            "end": 70
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'=' expected.",
            "start": 12,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 13,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 23,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 29,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 36,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 51,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 52,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 62,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 68,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 70
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

