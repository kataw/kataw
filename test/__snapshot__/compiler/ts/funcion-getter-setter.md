# Kataw parser test case

## Input

`````js
const g = {
  get m(this: {}) {}
};
const s = {
  set m(this: {}, value) {}
};
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "const g = {\n  get m(this: {}) {}\n};\nconst s = {\n  set m(this: {}, value) {}\n};",
    "filename": "",
    "statements": [
        {
            "kind": 142,
            "isConst": true,
            "binding": {
                "kind": 31,
                "bindingList": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "g",
                            "rawText": "g",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 5,
                            "end": 7
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 98984,
                            "propertyList": {
                                "kind": 65722,
                                "properties": [
                                    {
                                        "kind": 16844946,
                                        "name": {
                                            "kind": 196711,
                                            "text": "m",
                                            "rawText": "m",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 17,
                                            "end": 19
                                        },
                                        "formalParameters": {
                                            "kind": 90,
                                            "formalParameterList": [
                                                {
                                                    "kind": 16473,
                                                    "ellipsis": false,
                                                    "binding": {
                                                        "kind": 131102,
                                                        "text": "this",
                                                        "rawText": "this",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1025,
                                                        "start": 20,
                                                        "end": 24
                                                    },
                                                    "isOptional": false,
                                                    "type": {
                                                        "kind": 536879334,
                                                        "objectTypeMembers": {
                                                            "kind": 536871081,
                                                            "members": [],
                                                            "multiline": false,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "start": 27,
                                                            "end": 28
                                                        },
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 2097152,
                                                        "start": 25,
                                                        "end": 28
                                                    },
                                                    "initializer": null,
                                                    "decorators": null,
                                                    "accessModifier": null,
                                                    "isReadOnly": false,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 1,
                                                    "start": 20,
                                                    "end": 28
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 20,
                                            "end": 29
                                        },
                                        "isSetter": false,
                                        "isGetter": true,
                                        "contents": {
                                            "kind": 91,
                                            "functionStatementList": {
                                                "kind": 94,
                                                "statements": [],
                                                "multiline": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 31,
                                                "end": 31
                                            },
                                            "flags": 32768,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 29,
                                            "end": 32
                                        },
                                        "decorators": null,
                                        "type": null,
                                        "accessModifier": null,
                                        "typeParameters": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 19,
                                        "end": 32
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": true,
                                "flags": 32768,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 11,
                                "end": 32
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 34
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 34
                    }
                ],
                "flags": 8,
                "intersects": false,
                "transformFlags": 0,
                "start": 5,
                "end": 34
            },
            "flags": 32776,
            "intersects": false,
            "transformFlags": 769,
            "start": 0,
            "end": 35
        },
        {
            "kind": 142,
            "isConst": true,
            "binding": {
                "kind": 31,
                "bindingList": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "s",
                            "rawText": "s",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 41,
                            "end": 43
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 98984,
                            "propertyList": {
                                "kind": 65722,
                                "properties": [
                                    {
                                        "kind": 16844946,
                                        "name": {
                                            "kind": 196711,
                                            "text": "m",
                                            "rawText": "m",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 53,
                                            "end": 55
                                        },
                                        "formalParameters": {
                                            "kind": 90,
                                            "formalParameterList": [
                                                {
                                                    "kind": 16473,
                                                    "ellipsis": false,
                                                    "binding": {
                                                        "kind": 131102,
                                                        "text": "this",
                                                        "rawText": "this",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1025,
                                                        "start": 56,
                                                        "end": 60
                                                    },
                                                    "isOptional": false,
                                                    "type": {
                                                        "kind": 536879334,
                                                        "objectTypeMembers": {
                                                            "kind": 536871081,
                                                            "members": [],
                                                            "multiline": false,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "start": 63,
                                                            "end": 64
                                                        },
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 2097152,
                                                        "start": 61,
                                                        "end": 64
                                                    },
                                                    "initializer": null,
                                                    "decorators": null,
                                                    "accessModifier": null,
                                                    "isReadOnly": false,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 1,
                                                    "start": 56,
                                                    "end": 64
                                                },
                                                {
                                                    "kind": 16473,
                                                    "ellipsis": false,
                                                    "binding": {
                                                        "kind": 131102,
                                                        "text": "value",
                                                        "rawText": "value",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1025,
                                                        "start": 65,
                                                        "end": 71
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
                                                    "start": 65,
                                                    "end": 71
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 56,
                                            "end": 72
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
                                                "start": 74,
                                                "end": 74
                                            },
                                            "flags": 32768,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 72,
                                            "end": 75
                                        },
                                        "decorators": null,
                                        "type": null,
                                        "accessModifier": null,
                                        "typeParameters": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 55,
                                        "end": 75
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": true,
                                "flags": 32768,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 47,
                                "end": 75
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 45,
                            "end": 77
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 41,
                        "end": 77
                    }
                ],
                "flags": 8,
                "intersects": false,
                "transformFlags": 0,
                "start": 41,
                "end": 77
            },
            "flags": 32776,
            "intersects": false,
            "transformFlags": 769,
            "start": 35,
            "end": 78
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
    "end": 78
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

