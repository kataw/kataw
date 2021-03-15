# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15\test\__snapshot__/compiler/js/expressions/classes/special_keys/autogen.md
- Path: kataw15\test\__snapshot__\compiler\js\expressions\classes\special_keys\gen\as_super_class_name
> :: test: as super class name
> :: case: super
## Input

`````js
class x extends super {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "class x extends super {}",
    "filename": "",
    "statements": [
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 52,
                "expression": {
                    "kind": 67175096,
                    "member": {
                        "kind": 4260561,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 21
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "",
                        "rawText": "",
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 21,
                        "end": 21
                    },
                    "flags": 15,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 21
                },
                "typeArguments": null,
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 15,
                "end": 21
            },
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [],
                "flags": 0,
                "symbol": null,
                "transformFlags": 1,
                "start": 23,
                "end": 24
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 0,
            "symbol": null,
            "transformFlags": 1,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Super must be followed by an argument list or member access",
            "start": 22,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

