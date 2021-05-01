# Kataw parser test case

## Input

`````js
var {x: y, z: { a: b } } = { x: "3", z: { a: "b" } };
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 204,
                                        "ellipsisToken": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 5,
                                            "end": 7
                                        },
                                        "value": {
                                            "kind": 203,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 96,
                                                "start": 7,
                                                "end": 9
                                            },
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 7,
                                            "end": 9
                                        },
                                        "flags": 32,
                                        "start": 5,
                                        "end": 9
                                    },
                                    {
                                        "kind": 204,
                                        "ellipsisToken": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 96,
                                            "start": 10,
                                            "end": 13
                                        },
                                        "value": {
                                            "kind": 203,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 212,
                                                "propertyList": {
                                                    "kind": 213,
                                                    "properties": [
                                                        {
                                                            "kind": 204,
                                                            "ellipsisToken": null,
                                                            "key": {
                                                                "kind": 134299649,
                                                                "text": "a",
                                                                "rawText": "a",
                                                                "flags": 96,
                                                                "start": 15,
                                                                "end": 18
                                                            },
                                                            "value": {
                                                                "kind": 203,
                                                                "ellipsisToken": null,
                                                                "binding": {
                                                                    "kind": 134299649,
                                                                    "text": "b",
                                                                    "rawText": "b",
                                                                    "flags": 96,
                                                                    "start": 18,
                                                                    "end": 20
                                                                },
                                                                "initializer": null,
                                                                "flags": 32,
                                                                "start": 18,
                                                                "end": 20
                                                            },
                                                            "flags": 32,
                                                            "start": 15,
                                                            "end": 20
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 15,
                                                    "end": 20
                                                },
                                                "flags": 32,
                                                "start": 13,
                                                "end": 22
                                            },
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 13,
                                            "end": 22
                                        },
                                        "flags": 32,
                                        "start": 10,
                                        "end": 22
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 5,
                                "end": 22
                            },
                            "flags": 32,
                            "start": 3,
                            "end": 24
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "generatorToken": null,
                                        "asyncKeyword": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "left": {
                                            "kind": 201392131,
                                            "text": "3",
                                            "rawText": " \"3\"",
                                            "flags": 96,
                                            "start": 31,
                                            "end": 35
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 28,
                                            "end": 30
                                        },
                                        "flags": 32,
                                        "start": 28,
                                        "end": 35
                                    },
                                    {
                                        "kind": 219,
                                        "generatorToken": null,
                                        "asyncKeyword": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "left": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "generatorToken": null,
                                                        "asyncKeyword": null,
                                                        "getKeyword": null,
                                                        "setKeyword": null,
                                                        "left": {
                                                            "kind": 201392131,
                                                            "text": "b",
                                                            "rawText": " \"b\"",
                                                            "flags": 96,
                                                            "start": 44,
                                                            "end": 48
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 41,
                                                            "end": 43
                                                        },
                                                        "flags": 32,
                                                        "start": 41,
                                                        "end": 48
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "start": 41,
                                                "end": 48
                                            },
                                            "flags": 32,
                                            "start": 39,
                                            "end": 50
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 96,
                                            "start": 36,
                                            "end": 38
                                        },
                                        "flags": 32,
                                        "start": 36,
                                        "end": 50
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 28,
                                "end": 50
                            },
                            "flags": 32,
                            "start": 26,
                            "end": 52
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 52
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 52
            },
            "flags": 16,
            "start": 0,
            "end": 53
        }
    ],
    "isModule": false,
    "source": "var {x: y, z: { a: b } } = { x: \"3\", z: { a: \"b\" } };",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 53
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

