# Auto-generated test cases ( Kataw )
<<<<<<< HEAD
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\export_assign
=======
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/export_assign
>>>>>>> chore: autogen & update snapshots
> :: test: export assign
> :: case: /aaaaaaaaa
## Input

`````js
export /aaaaaaaaa = /aaaaaaaaa
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "export /aaaaaaaaa = /aaaaaaaaa",
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
                "kind": 4260544,
                "text": "/aaaaaaaaa = /aaaaaaaaa",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 6,
                "end": 30
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 6,
            "end": 30
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
            "source": 0,
            "message": "Unknown regular expression flag",
            "start": 21,
            "length": 1
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Unknown regular expression flag",
            "start": 22,
            "length": 1
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Unknown regular expression flag",
            "start": 23,
            "length": 1
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Unknown regular expression flag",
            "start": 24,
            "length": 1
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Unknown regular expression flag",
            "start": 25,
            "length": 1
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Unknown regular expression flag",
            "start": 26,
            "length": 1
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Unknown regular expression flag",
            "start": 27,
            "length": 1
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Unknown regular expression flag",
            "start": 28,
            "length": 1
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Unknown regular expression flag",
            "start": 29,
            "length": 1
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Unexpected token.",
            "start": 7,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

