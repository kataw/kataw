# Kataw parser test case

## Input

`````js
const absurd = <T>(x: empty): T => {};
`````

## Options

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
                            "text": "absurd",
                            "rawText": "absurd",
                            "flags": 96,
                            "start": 5,
                            "end": 12
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 31,
                                "end": 34
                            },
                            "typeParameters": {
                                "kind": 307,
                                "declarations": {
                                    "kind": 310,
                                    "parameters": [
                                        {
                                            "kind": 146,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "T",
                                                "rawText": "T",
                                                "flags": 96,
                                                "start": 16,
                                                "end": 17
                                            },
                                            "type": null,
                                            "defaultType": null,
                                            "flags": 2097152,
                                            "start": 16,
                                            "end": 17
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 16,
                                    "end": 17
                                },
                                "flags": 2097152,
                                "start": 14,
                                "end": 18
                            },
                            "parameters": [
                                {
                                    "kind": 281,
                                    "ellipsisToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 19,
                                        "end": 20
                                    },
                                    "optionalToken": null,
                                    "type": {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 144,
                                            "id": {
                                                "kind": 134299649,
                                                "text": "empty",
                                                "rawText": "empty",
                                                "flags": 96,
                                                "start": 21,
                                                "end": 27
                                            },
                                            "typeParameters": null,
                                            "flags": 2097152,
                                            "start": 21,
                                            "end": 27
                                        },
                                        "flags": 2097152,
                                        "start": 21,
                                        "end": 27
                                    },
                                    "right": null,
                                    "flags": 32,
                                    "start": 14,
                                    "end": 27
                                }
                            ],
                            "asyncKeyword": null,
                            "returnType": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 144,
                                    "id": {
                                        "kind": 134299649,
                                        "text": "T",
                                        "rawText": "T",
                                        "flags": 96,
                                        "start": 29,
                                        "end": 31
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "start": 29,
                                    "end": 31
                                },
                                "flags": 2097152,
                                "start": 29,
                                "end": 31
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 36,
                                    "end": 36
                                },
                                "flags": 32,
                                "start": 34,
                                "end": 37
                            },
                            "flags": 32,
                            "start": 14,
                            "end": 37
                        },
                        "flags": 16,
                        "start": 5,
                        "end": 37
                    }
                ],
                "flags": 16777232,
                "start": 5,
                "end": 37
            },
            "flags": 33554448,
            "start": 0,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "const absurd = <T>(x: empty): T => {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript

const absurd = (x) =>  {};
```

### Diagnostics

```javascript
✔ No errors
```

