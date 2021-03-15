# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/js/statements/switch/autogen.md
- Path: kataw15/test\__snapshot__\compiler\js\statements\switch\gen\case_stand_alone
> :: test: case stand alone
> :: case: /)finally
## Input

`````js
case /)finally
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "case /)finally",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 4260544,
                "text": "/)finally",
                "flags": 1048576,
                "symbol": null,
                "transformFlags": 0,
                "start": 4,
                "end": 14
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 4,
            "end": 14
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 0,
            "length": 0
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Unterminated regular expression literal",
            "start": 14,
            "length": 1
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

