# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/yield/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\yield\gen\function_declaration
> :: test: function declaration
> :: case: (class { static async method(...await) {} })
## Input

`````js
function not_gen() { (class { static async method(...await) {} }) }}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "function not_gen() { (class { static async method(...await) {} }) }}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 264284,
                "name": {
                    "kind": 131102,
                    "text": "not_gen",
                    "rawText": "not_gen",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 8,
                    "end": 16
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 18
                },
                "type": null,
                "contents": {
                    "kind": 91,
                    "functionStatementList": {
                        "kind": 94,
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
                                                    "isStatic": true,
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
                                                            "start": 42,
                                                            "end": 49
                                                        },
                                                        "formalParameters": {
                                                            "kind": 90,
                                                            "formalParameterList": [
                                                                {
                                                                    "kind": 89,
                                                                    "ellipsis": true,
                                                                    "binding": {
                                                                        "kind": 131102,
                                                                        "text": "await",
                                                                        "rawText": "await",
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 1025,
                                                                        "start": 53,
                                                                        "end": 58
                                                                    },
                                                                    "isOptional": false,
                                                                    "type": null,
                                                                    "initializer": null,
                                                                    "decorators": null,
                                                                    "accessModifier": null,
                                                                    "isReadOnly": false,
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 4097,
                                                                    "start": 50,
                                                                    "end": 58
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 50,
                                                            "end": 59
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
                                                                "start": 61,
                                                                "end": 61
                                                            },
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 59,
                                                            "end": 62
                                                        },
                                                        "decorators": null,
                                                        "type": null,
                                                        "accessModifier": null,
                                                        "typeParameters": null,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 4,
                                                        "start": 49,
                                                        "end": 62
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 1,
                                                    "start": 29,
                                                    "end": 62
                                                }
                                            ],
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 29,
                                            "end": 64
                                        },
                                        "decorators": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 22,
                                        "end": 64
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 20,
                                    "end": 65
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 65
                            }
                        ],
                        "multiline": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 20,
                        "end": 65
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 67
                },
                "typeParameters": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 256,
                "start": 0,
                "end": 67
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 68
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 67,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 68
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

