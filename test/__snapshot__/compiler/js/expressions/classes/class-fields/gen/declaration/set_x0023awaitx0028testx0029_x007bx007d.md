# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/classes/class-fields/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\classes\class-fields\gen\declaration
> :: test: declaration
> :: case: set #await(test) {}
## Input

`````js
class C { set #await(test) {} }
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "class C { set #await(test) {} }",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "C",
                    "rawText": "C",
                    "flags": 0,
                    "intersects": false,
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
                            "isStatic": false,
                            "isAbstract": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "method": {
                                "kind": 16844946,
                                "name": {
                                    "kind": 131252,
                                    "text": "#await",
                                    "rawText": "#await",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 524288,
                                    "start": 13,
                                    "end": 20
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [
                                        {
                                            "kind": 89,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 131102,
                                                "text": "test",
                                                "rawText": "test",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 21,
                                                "end": 25
                                            },
                                            "isOptional": false,
                                            "type": null,
                                            "initializer": null,
                                            "decorators": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 21,
                                            "end": 25
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 21,
                                    "end": 26
                                },
                                "isSetter": true,
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
                                        "start": 28,
                                        "end": 28
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 26,
                                    "end": 29
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 29
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 9,
                            "end": 29
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 9,
                    "end": 31
                },
                "decorators": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 1,
                "start": 0,
                "end": 31
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 31
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 31
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

