# Kataw parser test case

## Input

`````js
a={id<T>(x: T): T {}}
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
                    "flags": 64,
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
                                        "kind": 134299649,
                                        "text": "id",
                                        "rawText": "id",
                                        "flags": 96,
                                        "start": 3,
                                        "end": 5
                                    },
                                    "typeParameters": {
                                        "kind": 265,
                                        "typeParameters": [
                                            {
                                                "kind": 146,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "T",
                                                    "rawText": "T",
                                                    "flags": 96,
                                                    "start": 6,
                                                    "end": 7
                                                },
                                                "type": null,
                                                "defaultType": null,
                                                "flags": 0,
                                                "start": 6,
                                                "end": 7
                                            }
                                        ],
                                        "flags": 0,
                                        "start": 5,
                                        "end": 8
                                    },
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [
                                            {
                                                "kind": 215,
                                                "ellipsisToken": null,
                                                "binding": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 9,
                                                    "end": 10
                                                },
                                                "optionalToken": null,
                                                "type": {
                                                    "kind": 139,
                                                    "type": {
                                                        "kind": 144,
                                                        "id": {
                                                            "kind": 134299649,
                                                            "text": "T",
                                                            "rawText": "T",
                                                            "flags": 96,
                                                            "start": 11,
                                                            "end": 13
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 0,
                                                        "start": 11,
                                                        "end": 13
                                                    },
                                                    "flags": 0,
                                                    "start": 10,
                                                    "end": 13
                                                },
                                                "initializer": null,
                                                "flags": 32,
                                                "start": 9,
                                                "end": 13
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 9,
                                        "end": 14
                                    },
                                    "returnType": {
                                        "kind": 139,
                                        "type": {
                                            "kind": 144,
                                            "id": {
                                                "kind": 134299649,
                                                "text": "T",
                                                "rawText": "T",
                                                "flags": 96,
                                                "start": 15,
                                                "end": 17
                                            },
                                            "typeParameters": null,
                                            "flags": 0,
                                            "start": 15,
                                            "end": 17
                                        },
                                        "flags": 0,
                                        "start": 14,
                                        "end": 17
                                    },
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 19,
                                            "end": 19
                                        },
                                        "flags": 32,
                                        "start": 17,
                                        "end": 20
                                    },
                                    "flags": 32,
                                    "start": 5,
                                    "end": 20
                                },
                                "flags": 32,
                                "start": 3,
                                "end": 20
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 3,
                        "end": 20
                    },
                    "flags": 48,
                    "start": 2,
                    "end": 21
                },
                "flags": 32,
                "start": 0,
                "end": 21
            },
            "flags": 16,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "a={id<T>(x: T): T {}}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

a = { id(x) {} };
```

### Diagnostics

```javascript
✔ No errors
```

