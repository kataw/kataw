# Kataw parser test case

## Input

`````js
const functionReturningIdentityAsAField = () => ({ id: <T>(value: T): T => value });
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "functionReturningIdentityAsAField",
                            "rawText": "functionReturningIdentityAsAField",
                            "flags": 96,
                            "start": 5,
                            "end": 39
                        },
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 43,
                                "end": 43
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 44,
                                "end": 47
                            },
                            "contents": {
                                "kind": 121,
                                "expression": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "asteriskToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "id",
                                                    "rawText": "id",
                                                    "flags": 96,
                                                    "start": 50,
                                                    "end": 53
                                                },
                                                "right": {
                                                    "kind": 271,
                                                    "asyncKeyword": null,
                                                    "typeParameters": {
                                                        "kind": 307,
                                                        "declarations": {
                                                            "kind": 337,
                                                            "parameters": [
                                                                {
                                                                    "kind": 146,
                                                                    "name": {
                                                                        "kind": 134299649,
                                                                        "text": "T",
                                                                        "rawText": "T",
                                                                        "flags": 96,
                                                                        "start": 56,
                                                                        "end": 57
                                                                    },
                                                                    "type": null,
                                                                    "assignToken": null,
                                                                    "defaultType": null,
                                                                    "flags": 2097152,
                                                                    "start": 56,
                                                                    "end": 57
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 2097152,
                                                            "start": 56,
                                                            "end": 57
                                                        },
                                                        "flags": 2097152,
                                                        "start": 54,
                                                        "end": 58
                                                    },
                                                    "arrowPatameterList": {
                                                        "kind": 342,
                                                        "parameters": [
                                                            {
                                                                "kind": 281,
                                                                "ellipsisToken": null,
                                                                "left": {
                                                                    "kind": 134299649,
                                                                    "text": "value",
                                                                    "rawText": "value",
                                                                    "flags": 96,
                                                                    "start": 59,
                                                                    "end": 64
                                                                },
                                                                "optionalToken": null,
                                                                "type": {
                                                                    "kind": 139,
                                                                    "bitwiseOrToken": null,
                                                                    "bitwiseAndToken": null,
                                                                    "type": {
                                                                        "kind": 144,
                                                                        "typeName": {
                                                                            "kind": 134299649,
                                                                            "text": "T",
                                                                            "rawText": "T",
                                                                            "flags": 96,
                                                                            "start": 65,
                                                                            "end": 67
                                                                        },
                                                                        "typeParameters": null,
                                                                        "flags": 2097152,
                                                                        "start": 65,
                                                                        "end": 67
                                                                    },
                                                                    "flags": 2097152,
                                                                    "start": 65,
                                                                    "end": 67
                                                                },
                                                                "right": null,
                                                                "flags": 32,
                                                                "start": 54,
                                                                "end": 67
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 59,
                                                        "end": 71
                                                    },
                                                    "returnType": {
                                                        "kind": 139,
                                                        "bitwiseOrToken": null,
                                                        "bitwiseAndToken": null,
                                                        "type": {
                                                            "kind": 144,
                                                            "typeName": {
                                                                "kind": 134299649,
                                                                "text": "T",
                                                                "rawText": "T",
                                                                "flags": 96,
                                                                "start": 69,
                                                                "end": 71
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 2097152,
                                                            "start": 69,
                                                            "end": 71
                                                        },
                                                        "flags": 2097152,
                                                        "start": 69,
                                                        "end": 71
                                                    },
                                                    "arrowToken": {
                                                        "kind": 10,
                                                        "flags": 64,
                                                        "start": 71,
                                                        "end": 74
                                                    },
                                                    "contents": {
                                                        "kind": 134299649,
                                                        "text": "value",
                                                        "rawText": "value",
                                                        "flags": 96,
                                                        "start": 74,
                                                        "end": 80
                                                    },
                                                    "flags": 32,
                                                    "start": 54,
                                                    "end": 80
                                                },
                                                "flags": 32,
                                                "start": 50,
                                                "end": 80
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 50,
                                        "end": 80
                                    },
                                    "flags": 48,
                                    "start": 49,
                                    "end": 82
                                },
                                "flags": 47,
                                "start": 34,
                                "end": 83
                            },
                            "flags": 32,
                            "start": 41,
                            "end": 83
                        },
                        "flags": 16,
                        "start": 5,
                        "end": 83
                    }
                ],
                "flags": 16777232,
                "start": 5,
                "end": 83
            },
            "flags": 33554448,
            "start": 0,
            "end": 84
        }
    ],
    "isModule": false,
    "source": "const functionReturningIdentityAsAField = () => ({ id: <T>(value: T): T => value });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 84
}
```

### Printed

```javascript

const functionReturningIdentityAsAField = () => ({id: <T>(value: T) => value});
```

### Diagnostics

```javascript
✔ No errors
```

