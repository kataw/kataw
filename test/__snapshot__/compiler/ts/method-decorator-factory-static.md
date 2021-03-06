# Kataw parser test case

## Input

`````js
class C {
    @Foo(false)
    static staticMethod() {}
}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "class C {\n    @Foo(false)\n    static staticMethod() {}\n}",
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
                            "isStatic": true,
                            "isAbstract": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "method": {
                                "kind": 16844946,
                                "name": {
                                    "kind": 196711,
                                    "text": "staticMethod",
                                    "rawText": "staticMethod",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 36,
                                    "end": 49
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 50,
                                    "end": 51
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
                                        "start": 53,
                                        "end": 53
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 51,
                                    "end": 54
                                },
                                "decorators": {
                                    "kind": 64,
                                    "decoratorList": [
                                        {
                                            "kind": 63,
                                            "expression": {
                                                "kind": 66091,
                                                "expression": {
                                                    "kind": 196712,
                                                    "text": "Foo",
                                                    "rawText": "Foo",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 15,
                                                    "end": 18
                                                },
                                                "typeArguments": null,
                                                "argumentList": {
                                                    "kind": 3,
                                                    "elements": [
                                                        {
                                                            "kind": 4260391,
                                                            "text": false,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 19,
                                                            "end": 24
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "transformFlags": 0,
                                                    "flags": 16384,
                                                    "intersects": false,
                                                    "start": 24,
                                                    "end": 25
                                                },
                                                "flags": 16384,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 18,
                                                "end": 25
                                            },
                                            "flags": 16384,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 15,
                                            "end": 25
                                        }
                                    ],
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 15,
                                    "end": 25
                                },
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 49,
                                "end": 54
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 9,
                            "end": 54
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 9,
                    "end": 56
                },
                "decorators": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 1,
                "start": 0,
                "end": 56
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 56
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 56
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

