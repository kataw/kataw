# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15\test\__snapshot__/compiler/js/statements/do-while/autogen.md
- Path: kataw15\test\__snapshot__\compiler\js\statements\do-while\gen\missing_parens_and_block
> :: test: missing parens and block
> :: case: /)finally
## Input

`````js
do /)finally while
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "do /)finally while",
    "filename": "",
    "statements": [
        {
            "kind": 2097218,
            "expression": {
                "kind": 131322,
                "text": "",
                "flags": 3,
                "symbol": null,
                "transformFlags": 0,
                "start": 18,
                "end": 18
            },
            "statement": {
                "kind": 2097233,
                "expression": {
                    "kind": 4260544,
                    "text": "/)finally while",
                    "flags": 1048576,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 18
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 2,
                "end": 18
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "message": "Unterminated regular expression literal",
            "start": 18,
            "length": 1
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'while' expected.",
            "start": 3,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

