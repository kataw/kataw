# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/classes/class-fields/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\classes\class-fields\gen\expression
> :: test: expression
> :: case: await = 0;
## Input

`````js
class C extends Base { await = 0; }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "class C extends Base { await = 0; }",
    "filename": "",
    "statements": [
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "C",
                "rawText": "C",
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
                    "kind": 196712,
                    "text": "Base",
                    "rawText": "Base",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 20
                },
                "typeArguments": null,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 15,
                "end": 20
            },
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 196711,
                            "text": "await",
                            "rawText": "await",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 22,
                            "end": 28
                        },
                        "isInKeyword": false,
                        "expression": null,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 4261540,
                            "text": 0,
                            "rawText": "0",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 30,
                            "end": 32
                        },
                        "decorators": null,
                        "accessModifier": null,
                        "isStatic": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 524352,
                        "start": 22,
                        "end": 33
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 1,
                "start": 22,
                "end": 35
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 0,
            "symbol": null,
            "transformFlags": 1,
            "start": 0,
            "end": 35
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
    "end": 35
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

