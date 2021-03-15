# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\in_interface
> :: test: in interface
> :: case: string): void;
## Input

`````js
interface string): void; {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "interface string): void; {}",
    "filename": "",
    "statements": [
        {
            "kind": 8311,
            "name": {
                "kind": 196712,
                "text": "string",
                "rawText": "string",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 9,
                "end": 16
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
                "start": 16,
                "end": 16
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 0,
            "end": 16
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65774,
                "operator": "void",
                "operand": {
                    "kind": 131322,
                    "text": "",
                    "flags": 3,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 23,
                    "end": 23
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 18,
                "end": 23
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 18,
            "end": 24
        },
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 26,
                "end": 26
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 24,
            "end": 27
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 16,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 17,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 23,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

