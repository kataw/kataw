# Kataw parser test case

## Input

`````js
const identity = <T>(t: T): T => t;
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
                            "text": "identity",
                            "rawText": "identity",
                            "flags": 96,
                            "start": 5,
                            "end": 14
                        },
                        "type": null,
                        "initializer": {
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
                                                "start": 18,
                                                "end": 19
                                            },
                                            "type": null,
                                            "defaultType": null,
                                            "flags": 2097152,
                                            "start": 18,
                                            "end": 19
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 18,
                                    "end": 19
                                },
                                "flags": 2097152,
                                "start": 16,
                                "end": 20
                            },
                            "parameters": [
                                {
                                    "kind": 281,
                                    "ellipsisToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "t",
                                        "rawText": "t",
                                        "flags": 96,
                                        "start": 21,
                                        "end": 22
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
                                                "start": 23,
                                                "end": 25
                                            },
                                            "typeParameters": null,
                                            "flags": 2097152,
                                            "start": 23,
                                            "end": 25
                                        },
                                        "flags": 2097152,
                                        "start": 23,
                                        "end": 25
                                    },
                                    "right": null,
                                    "flags": 32,
                                    "start": 16,
                                    "end": 25
                                }
                            ],
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
                                        "start": 27,
                                        "end": 29
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "start": 27,
                                    "end": 29
                                },
                                "flags": 2097152,
                                "start": 27,
                                "end": 29
                            },
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 29,
                                "end": 32
                            },
                            "contents": {
                                "kind": 134299649,
                                "text": "t",
                                "rawText": "t",
                                "flags": 96,
                                "start": 32,
                                "end": 34
                            },
                            "flags": 32,
                            "start": 16,
                            "end": 34
                        },
                        "flags": 16,
                        "start": 5,
                        "end": 34
                    }
                ],
                "flags": 16777232,
                "start": 5,
                "end": 34
            },
            "flags": 33554448,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "const identity = <T>(t: T): T => t;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

const identity = (t) =>  t;
```

### Diagnostics

```javascript
✔ No errors
```

