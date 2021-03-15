# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw/test/__snapshot__/compiler/js/statements/switch/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/statements/switch/gen/unclosed_parens
> :: test: unclosed parens
> :: case: /)finally
## Input

`````js
switch( /)finally case
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "switch( /)finally case",
    "filename": "",
    "statements": [
        {
            "kind": 2097362,
            "expression": {
                "kind": 4260544,
                "text": "/)finally case",
                "flags": 1048576,
                "symbol": null,
                "transformFlags": 0,
                "start": 7,
                "end": 22
            },
            "caseBlock": {
                "kind": 2093,
                "clauses": [],
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 22,
                "end": 22
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "message": "Unterminated regular expression literal",
            "start": 22,
            "length": 1
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 8,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

