# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/js/expressions/classes/special_keys/autogen.md
- Path: kataw15/test\__snapshot__\compiler\js\expressions\classes\special_keys\gen\as_super_class_name
> :: test: as super class name
> :: case: var
## Input

`````js
class x extends var {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "class x extends var {}",
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
                    "kind": 131322,
                    "text": "",
                    "flags": 3,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 15
                },
                "typeArguments": null,
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 15,
                "end": 15
            },
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [],
                "flags": 1,
                "symbol": null,
                "transformFlags": 1,
                "start": 0,
                "end": 0
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 1,
            "symbol": null,
            "transformFlags": 1,
            "start": 0,
            "end": 15
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
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
                        "flags": 19,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 22
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 19,
                "end": 22
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 15,
            "end": 22
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 16,
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

