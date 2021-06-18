# Kataw parser test case

## Input

`````js
a={123<T>(x: T): T {}}
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
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 1,
                    "end": 2
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 257,
                                "asyncKeyword": null,
                                "generatorToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 201392130,
                                        "text": 123,
                                        "rawText": "123",
                                        "flags": 96,
                                        "start": 3,
                                        "end": 6
                                    },
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
                                                        "start": 7,
                                                        "end": 8
                                                    },
                                                    "type": null,
                                                    "defaultType": null,
                                                    "flags": 2097152,
                                                    "start": 7,
                                                    "end": 8
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "start": 7,
                                            "end": 8
                                        },
                                        "flags": 2097152,
                                        "start": 6,
                                        "end": 9
                                    },
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameters": [
                                            {
                                                "kind": 281,
                                                "ellipsisToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 10,
                                                    "end": 11
                                                },
                                                "optionalToken": null,
                                                "type": {
                                                    "kind": 139,
                                                    "bitwiseOrToken": null,
                                                    "bitwiseAndToken": null,
                                                    "type": {
                                                        "kind": 144,
                                                        "name": {
                                                            "kind": 134299649,
                                                            "text": "T",
                                                            "rawText": "T",
                                                            "flags": 96,
                                                            "start": 12,
                                                            "end": 14
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 2097152,
                                                        "start": 12,
                                                        "end": 14
                                                    },
                                                    "flags": 2097152,
                                                    "start": 12,
                                                    "end": 14
                                                },
                                                "right": null,
                                                "flags": 32,
                                                "start": 10,
                                                "end": 14
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 10,
                                        "end": 15
                                    },
                                    "returnType": {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 144,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "T",
                                                "rawText": "T",
                                                "flags": 96,
                                                "start": 16,
                                                "end": 18
                                            },
                                            "typeParameters": null,
                                            "flags": 2097152,
                                            "start": 16,
                                            "end": 18
                                        },
                                        "flags": 2097152,
                                        "start": 16,
                                        "end": 18
                                    },
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 20,
                                            "end": 20
                                        },
                                        "flags": 32,
                                        "start": 18,
                                        "end": 21
                                    },
                                    "flags": 32,
                                    "start": 6,
                                    "end": 21
                                },
                                "flags": 32,
                                "start": 3,
                                "end": 21
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 3,
                        "end": 21
                    },
                    "flags": 48,
                    "start": 2,
                    "end": 22
                },
                "flags": 32,
                "start": 0,
                "end": 22
            },
            "flags": 16,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "a={123<T>(x: T): T {}}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

a = { 123 {} };
```

### Diagnostics

```javascript
✔ No errors
```

