# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw/test/__snapshot__/compiler/js/statements/do-while/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/statements/do-while/gen/do_parens
> :: test: do parens
> :: case: /**/ /x do while
## Input

`````js
do( /**/ /x do while while
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "do( /**/ /x do while while",
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
                "start": 26,
                "end": 26
            },
            "statement": {
                "kind": 2097233,
                "expression": {
                    "kind": 66224,
                    "expression": {
                        "kind": 4260544,
                        "text": "/x do while while",
                        "flags": 1048576,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 26
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 26
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 2,
                "end": 26
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "message": "Unterminated regular expression literal",
            "start": 26,
            "length": 1
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'while' expected.",
            "start": 9,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

