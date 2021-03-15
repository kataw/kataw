# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\export_assign
> :: test: export assign
> :: case:  never[] | string[];
## Input

`````js
export  never[] | string[]; =  never[] | string[];
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "export  never[] | string[]; =  never[] | string[];",
    "filename": "",
    "statements": [
        {
            "kind": 76,
            "declaration": null,
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "isTypeOnly": false,
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 6
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65563,
                "left": {
                    "kind": 67174980,
                    "member": {
                        "kind": 196712,
                        "text": "never",
                        "rawText": "never",
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 13
                    },
                    "expression": {
                        "kind": 131322,
                        "text": "",
                        "flags": 3,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 13,
                        "end": 13
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 15
                },
                "operator": "|",
                "right": {
                    "kind": 67174980,
                    "member": {
                        "kind": 196712,
                        "text": "string",
                        "rawText": "string",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 24
                    },
                    "expression": {
                        "kind": 131322,
                        "text": "",
                        "flags": 3,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 24,
                        "end": 24
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 24,
                    "end": 26
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 6,
                "end": 26
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 6,
            "end": 27
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65563,
                "left": {
                    "kind": 67174980,
                    "member": {
                        "kind": 196712,
                        "text": "never",
                        "rawText": "never",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 29,
                        "end": 36
                    },
                    "expression": {
                        "kind": 131322,
                        "text": "",
                        "flags": 3,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 36,
                        "end": 36
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 36,
                    "end": 38
                },
                "operator": "|",
                "right": {
                    "kind": 67174980,
                    "member": {
                        "kind": 196712,
                        "text": "string",
                        "rawText": "string",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 40,
                        "end": 47
                    },
                    "expression": {
                        "kind": 131322,
                        "text": "",
                        "flags": 3,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 47,
                        "end": 47
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 47,
                    "end": 49
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 29,
                "end": 49
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 29,
            "end": 50
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "The `export` keyword can only be used with the module goal",
            "start": 0,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Unexpected token.",
            "start": 8,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "An element access expression should take an argument",
            "start": 14,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "An element access expression should take an argument",
            "start": 25,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 28,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "An element access expression should take an argument",
            "start": 37,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "An element access expression should take an argument",
            "start": 48,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 50
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

