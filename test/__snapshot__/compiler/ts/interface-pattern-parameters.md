# Kataw parser test case

## Input

`````js
interface A {
  foo([]?): void;
  bar({}, []?): any;
  baz(a: string, b: number, []?): void;
}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "interface A {\n  foo([]?): void;\n  bar({}, []?): any;\n  baz(a: string, b: number, []?): void;\n}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 8311,
                "name": {
                    "kind": 196712,
                    "text": "A",
                    "rawText": "A",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 11
                },
                "typeParameters": null,
                "heritageClauses": null,
                "objectTypeMembers": {
                    "kind": 169,
                    "members": [
                        {
                            "kind": 8339,
                            "name": {
                                "kind": 196711,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 19
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "accessModifier": null,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 8367,
                                "parameterList": [
                                    {
                                        "kind": 8366,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 33554437,
                                            "elementList": {
                                                "kind": 29,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1,
                                                "start": 21,
                                                "end": 21
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 20,
                                            "end": 22
                                        },
                                        "isOptional": true,
                                        "type": null,
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 20,
                                        "end": 23
                                    }
                                ],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 20,
                                "end": 23
                            },
                            "returnType": {
                                "kind": 4202742,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 25,
                                "end": 30
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 13,
                            "end": 31
                        },
                        {
                            "kind": 8339,
                            "name": {
                                "kind": 196711,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 31,
                                "end": 37
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "accessModifier": null,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 8367,
                                "parameterList": [
                                    {
                                        "kind": 8366,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 33554598,
                                            "propertyList": {
                                                "kind": 33,
                                                "properties": [],
                                                "multiline": false,
                                                "trailingComma": false,
                                                "transformFlags": 1025,
                                                "flags": 0,
                                                "intersects": false,
                                                "start": 39,
                                                "end": 39
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 38,
                                            "end": 40
                                        },
                                        "isOptional": false,
                                        "type": null,
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 38,
                                        "end": 40
                                    },
                                    {
                                        "kind": 8366,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 33554437,
                                            "elementList": {
                                                "kind": 29,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1,
                                                "start": 43,
                                                "end": 43
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 41,
                                            "end": 44
                                        },
                                        "isOptional": true,
                                        "type": null,
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 41,
                                        "end": 45
                                    }
                                ],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 38,
                                "end": 45
                            },
                            "returnType": {
                                "kind": 4202498,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 47,
                                "end": 51
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 31,
                            "end": 52
                        },
                        {
                            "kind": 8339,
                            "name": {
                                "kind": 196711,
                                "text": "baz",
                                "rawText": "baz",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 52,
                                "end": 58
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "accessModifier": null,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 8367,
                                "parameterList": [
                                    {
                                        "kind": 8366,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 59,
                                            "end": 60
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202702,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 61,
                                            "end": 68
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 59,
                                        "end": 68
                                    },
                                    {
                                        "kind": 8366,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 69,
                                            "end": 71
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 72,
                                            "end": 79
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 69,
                                        "end": 79
                                    },
                                    {
                                        "kind": 8366,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 33554437,
                                            "elementList": {
                                                "kind": 29,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1,
                                                "start": 82,
                                                "end": 82
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 80,
                                            "end": 83
                                        },
                                        "isOptional": true,
                                        "type": null,
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 80,
                                        "end": 84
                                    }
                                ],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 59,
                                "end": 84
                            },
                            "returnType": {
                                "kind": 4202742,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 86,
                                "end": 91
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 52,
                            "end": 92
                        }
                    ],
                    "multiline": true,
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 13,
                    "end": 92
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 0,
                "end": 94
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 94
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 94
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

