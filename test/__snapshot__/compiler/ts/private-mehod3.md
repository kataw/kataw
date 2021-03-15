# Kataw parser test case

## Input

`````js
class C {
    set #foo(a: number) {}
    bar() {
        let x = (this.#foo = 42 * 2);
        console.log(x); // 84
    }
}
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "class C {\n    set #foo(a: number) {}\n    bar() {\n        let x = (this.#foo = 42 * 2);\n        console.log(x); // 84\n    }\n}",
    "filename": "",
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
                                "text": "#foo",
                                "rawText": "#foo",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 524288,
                                "start": 17,
                                "end": 22
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 23,
                                            "end": 24
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 25,
                                            "end": 32
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 23,
                                        "end": 32
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 33
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
                                    "start": 35,
                                    "end": 35
                                },
                                "flags": 32768,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 33,
                                "end": 36
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": null,
                            "typeParameters": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 22,
                            "end": 36
                        },
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 9,
                        "end": 36
                    },
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
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 32768,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 36,
                                "end": 44
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 45,
                                "end": 46
                            },
                            "isSetter": false,
                            "isGetter": false,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [
                                        {
                                            "kind": 142,
                                            "isConst": false,
                                            "binding": {
                                                "kind": 31,
                                                "bindingList": [
                                                    {
                                                        "kind": 16525,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "start": 60,
                                                            "end": 62
                                                        },
                                                        "exclamation": false,
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 66224,
                                                            "expression": {
                                                                "kind": 65550,
                                                                "left": {
                                                                    "kind": 67175096,
                                                                    "member": {
                                                                        "kind": 4260571,
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 66,
                                                                        "end": 70
                                                                    },
                                                                    "expression": {
                                                                        "kind": 131252,
                                                                        "text": "#foo",
                                                                        "rawText": "#foo",
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 524288,
                                                                        "start": 71,
                                                                        "end": 75
                                                                    },
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 70,
                                                                    "end": 75,
                                                                    "period": {
                                                                        "kind": 255,
                                                                        "pos": 70,
                                                                        "end": 71
                                                                    }
                                                                },
                                                                "operator": "=",
                                                                "right": {
                                                                    "kind": 65563,
                                                                    "left": {
                                                                        "kind": 4261540,
                                                                        "text": 42,
                                                                        "rawText": "42",
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 77,
                                                                        "end": 80
                                                                    },
                                                                    "operator": "*",
                                                                    "right": {
                                                                        "kind": 4261540,
                                                                        "text": 2,
                                                                        "rawText": "2",
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 82,
                                                                        "end": 84
                                                                    },
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 77,
                                                                    "end": 84
                                                                },
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 64,
                                                                "end": 84
                                                            },
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 64,
                                                            "end": 85
                                                        },
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 60,
                                                        "end": 85
                                                    }
                                                ],
                                                "flags": 8,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 60,
                                                "end": 85
                                            },
                                            "flags": 32776,
                                            "intersects": false,
                                            "transformFlags": 769,
                                            "start": 48,
                                            "end": 86
                                        },
                                        {
                                            "kind": 2097233,
                                            "expression": {
                                                "kind": 1073807915,
                                                "expression": {
                                                    "kind": 67175096,
                                                    "member": {
                                                        "kind": 196712,
                                                        "text": "console",
                                                        "rawText": "console",
                                                        "flags": 32768,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 86,
                                                        "end": 102
                                                    },
                                                    "expression": {
                                                        "kind": 196711,
                                                        "text": "log",
                                                        "rawText": "log",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 103,
                                                        "end": 106
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 102,
                                                    "end": 106,
                                                    "period": {
                                                        "kind": 255,
                                                        "pos": 102,
                                                        "end": 103
                                                    }
                                                },
                                                "typeArguments": null,
                                                "argumentList": {
                                                    "kind": 3,
                                                    "elements": [
                                                        {
                                                            "kind": 196712,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 107,
                                                            "end": 108
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "transformFlags": 0,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "start": 108,
                                                    "end": 109
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 106,
                                                "end": 109
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 86,
                                            "end": 110
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 32768,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 48,
                                    "end": 110
                                },
                                "flags": 32768,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 46,
                                "end": 122
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": null,
                            "typeParameters": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 44,
                            "end": 122
                        },
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 36,
                        "end": 122
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 1,
                "start": 9,
                "end": 124
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 0,
            "intersects": false,
            "transformFlags": 1,
            "start": 0,
            "end": 124
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 124
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

