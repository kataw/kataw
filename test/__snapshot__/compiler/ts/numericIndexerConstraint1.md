# Kataw parser test case

## Input

`````js
class Foo { foo() { } }
var x: { [index: string]: number; };
var result: Foo = x["one"]; // error

`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "class Foo { foo() { } }\nvar x: { [index: string]: number; };\nvar result: Foo = x[\"one\"]; // error\n",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "Foo",
                    "rawText": "Foo",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 5,
                    "end": 9
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
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 11,
                                    "end": 15
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 16,
                                    "end": 17
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
                                        "start": 19,
                                        "end": 19
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 17,
                                    "end": 21
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 21
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 11,
                            "end": 21
                        }
                    ],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 11,
                    "end": 23
                },
                "decorators": null,
                "isAbstract": false,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 1,
                "start": 0,
                "end": 23
            },
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 27,
                                "end": 29
                            },
                            "exclamation": false,
                            "type": {
                                "kind": 8422,
                                "objectTypeMembers": {
                                    "kind": 169,
                                    "members": [
                                        {
                                            "kind": 73844,
                                            "accessModifier": null,
                                            "parameters": {
                                                "kind": 8367,
                                                "parameterList": [
                                                    {
                                                        "kind": 8366,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "index",
                                                            "rawText": "index",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "start": 34,
                                                            "end": 39
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 4202702,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "start": 40,
                                                            "end": 47
                                                        },
                                                        "initializer": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "start": 34,
                                                        "end": 47
                                                    }
                                                ],
                                                "trailingcomma": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 34,
                                                "end": 47
                                            },
                                            "returnType": {
                                                "kind": 4202657,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 49,
                                                "end": 56
                                            },
                                            "isStatic": false,
                                            "isReadOnly": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 34,
                                            "end": 57
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 32,
                                    "end": 59
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 30,
                                "end": 59
                            },
                            "initializer": null,
                            "flags": 27,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 59
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 27,
                    "end": 59
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 23,
                "end": 60
            },
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "result",
                                "rawText": "result",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 64,
                                "end": 71
                            },
                            "exclamation": false,
                            "type": {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "Foo",
                                    "rawText": "Foo",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 72,
                                    "end": 76
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 72,
                                "end": 78
                            },
                            "initializer": {
                                "kind": 66116,
                                "member": {
                                    "kind": 196712,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 78,
                                    "end": 80
                                },
                                "expression": {
                                    "kind": 4261583,
                                    "text": "one",
                                    "rawText": "one",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 81,
                                    "end": 86
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 80,
                                "end": 87
                            },
                            "flags": 64,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 87
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 64,
                    "end": 87
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 60,
                "end": 88
            }
        ],
        "transformFlags": 0,
        "flags": 16384,
        "intersects": false,
        "start": 0,
        "end": 88
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 98
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

