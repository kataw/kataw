# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/await/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\await\gen\simple
> :: test: simple
> :: case: (class { async method(await) {} })
## Input

`````js
(class { async method(await) {} })
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "(class { async method(await) {} })",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66224,
                    "expression": {
                        "kind": 82483,
                        "name": null,
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
                                        "kind": 17827862,
                                        "name": {
                                            "kind": 196711,
                                            "text": "method",
                                            "rawText": "method",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 14,
                                            "end": 21
                                        },
                                        "formalParameters": {
                                            "kind": 90,
                                            "formalParameterList": [
                                                {
                                                    "kind": 89,
                                                    "ellipsis": false,
                                                    "binding": {
                                                        "kind": 131102,
                                                        "text": "await",
                                                        "rawText": "await",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1025,
                                                        "start": 22,
                                                        "end": 27
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
                                                    "start": 22,
                                                    "end": 27
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 22,
                                            "end": 28
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
                                                "start": 30,
                                                "end": 30
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 28,
                                            "end": 31
                                        },
                                        "decorators": null,
                                        "type": null,
                                        "accessModifier": null,
                                        "typeParameters": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 4,
                                        "start": 21,
                                        "end": 31
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1,
                                    "start": 8,
                                    "end": 31
                                }
                            ],
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 8,
                            "end": 33
                        },
                        "decorators": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 1,
                        "end": 33
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 34
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 34
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 34
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
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
