# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\export_assign
> :: test: export assign
> :: case: string | string[]
## Input

`````js
export string | string[] = string | string[]
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "export string | string[] = string | string[]",
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
                "kind": 65550,
                "left": {
                    "kind": 65563,
                    "left": {
                        "kind": 196712,
                        "text": "string",
                        "rawText": "string",
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 13
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
                            "start": 15,
                            "end": 22
                        },
                        "expression": {
                            "kind": 131322,
                            "text": "",
                            "flags": 3,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 22,
                            "end": 22
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 22,
                        "end": 24
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 24
                },
                "operator": "=",
                "right": {
                    "kind": 65563,
                    "left": {
                        "kind": 196712,
                        "text": "string",
                        "rawText": "string",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 26,
                        "end": 33
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
                            "start": 35,
                            "end": 42
                        },
                        "expression": {
                            "kind": 131322,
                            "text": "",
                            "flags": 3,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 42,
                            "end": 42
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 42,
                        "end": 44
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 26,
                    "end": 44
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 6,
                "end": 44
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 6,
            "end": 44
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
            "start": 7,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "An element access expression should take an argument",
            "start": 23,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "An element access expression should take an argument",
            "start": 43,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 44
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

