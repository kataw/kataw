# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-16
- From: kataw_dev\test\__snapshot__/compiler/js/expressions/classes/special_keys/autogen.md
- Path: kataw_dev\test\__snapshot__\compiler\js\expressions\classes\special_keys\gen\as_static_async_generator_in_class
> :: test: as static async generator in class
> :: case: finally
## Input

`````js
class x {static async * finally(){}}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "class x {static async * finally(){}}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "parent": null,
                    "emitNode": null,
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
                                    "text": "finally",
                                    "rawText": "finally",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 23,
                                    "end": 31
                                },
                                "propertySetParameterList": null,
                                "uniqueFormalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 32,
                                    "end": 33
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
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 34,
                                        "end": 34
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 33,
                                    "end": 35
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097160,
                                "parent": null,
                                "emitNode": null,
                                "start": 31,
                                "end": 35
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "parent": null,
                            "emitNode": null,
                            "start": 9,
                            "end": 35
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1,
                    "parent": null,
                    "emitNode": null,
                    "start": 9,
                    "end": 36
                },
                "decorators": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 1,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 36
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 36
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 36
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

