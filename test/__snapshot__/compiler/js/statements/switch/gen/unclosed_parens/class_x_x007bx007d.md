# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/js/statements/switch/autogen.md
- Path: kataw15/test\__snapshot__\compiler\js\statements\switch\gen\unclosed_parens
> :: test: unclosed parens
> :: case: class x {}
## Input

`````js
switch( class x {} case
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "switch( class x {} case",
    "filename": "",
    "statements": [
        {
            "kind": 2097362,
            "expression": {
                "kind": 66099,
                "name": {
                    "kind": 131102,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 1025,
                    "start": 13,
                    "end": 15
                },
                "typeParameters": null,
                "classHeritage": null,
                "implementClauses": null,
                "members": {
                    "kind": 50,
                    "elements": [],
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 1,
                    "start": 17,
                    "end": 18
                },
                "decorators": null,
                "flags": 0,
                "symbol": null,
                "transformFlags": 1,
                "start": 7,
                "end": 18
            },
            "caseBlock": {
                "kind": 2093,
                "clauses": [
                    {
                        "kind": 46,
                        "expression": {
                            "kind": 131322,
                            "text": "",
                            "flags": 3,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 23,
                            "end": 23
                        },
                        "statements": [],
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 18,
                        "end": 23
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 18,
                "end": 23
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 19,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

