# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw/test/__snapshot__/compiler/js/expressions/classes/special_keys/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/expressions/classes/special_keys/gen/as_static_async_generator_in_class
> :: test: as static async generator in class
> :: case: super
## Input

`````js
class x {static async * super(){}}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "class x {static async * super(){}}",
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
            "classHeritage": null,
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [
                    {
                        "kind": 49,
                        "isStatic": true,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 18352149,
                            "name": {
                                "kind": 196711,
                                "text": "super",
                                "rawText": "super",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 29
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 30,
                                "end": 31
                            },
                            "isSetter": false,
                            "isGetter": false,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 32
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 31,
                                "end": 33
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": null,
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097160,
                            "start": 29,
                            "end": 33
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 9,
                        "end": 33
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 1,
                "start": 9,
                "end": 34
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 0,
            "symbol": null,
            "transformFlags": 1,
            "start": 0,
            "end": 34
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
    "end": 34
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

