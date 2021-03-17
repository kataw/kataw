# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/in_interface
> :: test: in interface
> :: case: let const
## Input

`````js
interface let const {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "interface let const {}",
    "filename": "",
    "statements": [
        {
            "kind": 8311,
            "name": {
                "kind": 196712,
                "text": "let",
                "rawText": "let",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 9,
                "end": 13
            },
            "typeParameters": null,
            "heritageClauses": null,
            "objectTypeMembers": {
                "kind": 536871081,
                "members": [],
                "multiline": false,
                "flags": 1,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 13,
                "end": 13
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 0,
            "end": 13
        },
        {
            "kind": 142,
            "binding": {
                "kind": 31,
                "lexicals": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 33554598,
                            "propertyList": {
                                "kind": 33,
                                "properties": [],
                                "multiline": false,
                                "trailingComma": false,
                                "transformFlags": 1025,
                                "flags": 0,
                                "symbol": null,
                                "start": 21,
                                "end": 21
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 19,
                            "end": 22
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 19,
                        "end": 22
                    }
                ],
                "flags": 40,
                "symbol": null,
                "transformFlags": 0,
                "start": 13,
                "end": 22
            },
            "flags": 41,
            "symbol": null,
            "transformFlags": 769,
            "start": 13,
            "end": 22
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
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

