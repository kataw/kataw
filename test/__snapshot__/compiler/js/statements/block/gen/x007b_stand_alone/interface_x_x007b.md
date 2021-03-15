# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/js/statements/block/autogen.md
- Path: kataw15/test\__snapshot__\compiler\js\statements\block\gen\x007b_stand_alone
> :: test: { stand alone
> :: case: interface x {
## Input

`````js
{ interface x {
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "{ interface x {",
    "filename": "",
    "statements": [
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [
                    {
                        "kind": 8311,
                        "name": {
                            "kind": 196712,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 13
                        },
                        "typeParameters": null,
                        "heritageClauses": null,
                        "objectTypeMembers": {
                            "kind": 536871081,
                            "members": [],
                            "multiline": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 15,
                            "end": 15
                        },
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 1,
                        "end": 15
                    }
                ],
                "multiline": false,
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 1,
                "end": 15
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 14,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

