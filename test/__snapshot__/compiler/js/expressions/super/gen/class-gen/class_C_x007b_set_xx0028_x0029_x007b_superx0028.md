# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/super/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\super\gen\class-gen
> :: test: class-gen
> :: case: class C { set x(_) { super(
## Input

`````js
class C { *method() { class C { set x(_) { super( } }
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "class C { *method() { class C { set x(_) { super( } }",
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
                                "kind": 17303650,
                                "name": {
                                    "kind": 196711,
                                    "text": "method",
                                    "rawText": "method",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 11,
                                    "end": 17
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 18,
                                    "end": 19
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
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
                                                    "start": 27,
                                                    "end": 29
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
                                                                    "kind": 196711,
                                                                    "text": "x",
                                                                    "rawText": "x",
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 35,
                                                                    "end": 37
                                                                },
                                                                "formalParameters": {
                                                                    "kind": 90,
                                                                    "formalParameterList": [
                                                                        {
                                                                            "kind": 89,
                                                                            "ellipsis": false,
                                                                            "binding": {
                                                                                "kind": 131102,
                                                                                "text": "_",
                                                                                "rawText": "_",
                                                                                "flags": 0,
                                                                                "intersects": false,
                                                                                "transformFlags": 1025,
                                                                                "start": 38,
                                                                                "end": 39
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
                                                                            "start": 38,
                                                                            "end": 39
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 38,
                                                                    "end": 40
                                                                },
                                                                "isSetter": true,
                                                                "isGetter": false,
                                                                "contents": {
                                                                    "kind": 91,
                                                                    "functionStatementList": {
                                                                        "kind": 94,
                                                                        "statements": [
                                                                            {
                                                                                "kind": 2097233,
                                                                                "expression": {
                                                                                    "kind": 66091,
                                                                                    "expression": {
                                                                                        "kind": 4260561,
                                                                                        "flags": 0,
                                                                                        "intersects": false,
                                                                                        "transformFlags": 0,
                                                                                        "start": 42,
                                                                                        "end": 48
                                                                                    },
                                                                                    "typeArguments": null,
                                                                                    "argumentList": {
                                                                                        "kind": 3,
                                                                                        "elements": [],
                                                                                        "trailingComma": false,
                                                                                        "transformFlags": 0,
                                                                                        "flags": 0,
                                                                                        "intersects": false,
                                                                                        "start": 51,
                                                                                        "end": 49
                                                                                    },
                                                                                    "flags": 0,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 65536,
                                                                                    "start": 48,
                                                                                    "end": 49
                                                                                },
                                                                                "flags": 0,
                                                                                "intersects": false,
                                                                                "transformFlags": 0,
                                                                                "start": 42,
                                                                                "end": 49
                                                                            }
                                                                        ],
                                                                        "multiline": false,
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 42,
                                                                        "end": 49
                                                                    },
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 40,
                                                                    "end": 51
                                                                },
                                                                "decorators": null,
                                                                "type": null,
                                                                "accessModifier": null,
                                                                "typeParameters": null,
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 37,
                                                                "end": 51
                                                            },
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1,
                                                            "start": 31,
                                                            "end": 51
                                                        }
                                                    ],
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 1,
                                                    "start": 31,
                                                    "end": 53
                                                },
                                                "decorators": null,
                                                "isAbstract": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1,
                                                "start": 21,
                                                "end": 53
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 21,
                                        "end": 53
                                    },
                                    "flags": 2,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 19,
                                    "end": 53
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 17,
                                "end": 53
                            },
                            "flags": 2,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 9,
                            "end": 53
                        }
                    ],
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 9,
                    "end": 53
                },
                "decorators": null,
                "isAbstract": false,
                "flags": 2,
                "intersects": false,
                "transformFlags": 1,
                "start": 0,
                "end": 53
            }
        ],
        "transformFlags": 0,
        "flags": 2,
        "intersects": false,
        "start": 0,
        "end": 53
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 52,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 53
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```
