# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw/test/__snapshot__/compiler/js/statements/return/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/statements/return/gen/unclosed_parens
> :: test: unclosed parens
> :: case: /)finally
## Input

`````js
return( /)finally
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "return( /)finally",
    "filename": "",
    "statements": [
        {
            "kind": 2097346,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 4260544,
                    "text": "/)finally",
                    "flags": 1048576,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 17
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 6,
                "end": 17
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "message": "Unterminated regular expression literal",
            "start": 17,
            "length": 1
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

