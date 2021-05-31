# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
try {} catch ({ x = await 42 }) {} // Initializer
try {} catch ({ x: y = await 42 }) {} // BindingElement Initializer
try {} catch ([ x = await 42 ]) {}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 5,
                    "end": 5
                },
                "flags": 16,
                "start": 3,
                "end": 6
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "start": 6,
                    "end": 12
                },
                "catchParameter": {
                    "kind": 212,
                    "propertyList": {
                        "kind": 213,
                        "properties": [
                            {
                                "kind": 281,
                                "ellipsisToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 15,
                                    "end": 17
                                },
                                "optionalToken": null,
                                "type": null,
                                "right": {
                                    "kind": 208,
                                    "awaitKeyword": {
                                        "kind": 82196,
                                        "flags": 64,
                                        "start": 19,
                                        "end": 25
                                    },
                                    "expression": {
                                        "kind": 201392130,
                                        "text": 42,
                                        "rawText": "42",
                                        "flags": 96,
                                        "start": 25,
                                        "end": 28
                                    },
                                    "flags": 32,
                                    "start": 19,
                                    "end": 28
                                },
                                "flags": 0,
                                "start": 15,
                                "end": 28
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 15,
                        "end": 28
                    },
                    "flags": 32,
                    "start": 14,
                    "end": 30
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 16,
                        "start": 33,
                        "end": 33
                    },
                    "flags": 16,
                    "start": 31,
                    "end": 34
                },
                "flags": 16,
                "start": 6,
                "end": 34
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "start": 0,
            "end": 34
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 81,
                "start": 34,
                "end": 53
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 55,
                    "end": 55
                },
                "flags": 16,
                "start": 53,
                "end": 56
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "start": 56,
                    "end": 62
                },
                "catchParameter": {
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
                                    "start": 65,
                                    "end": 67
                                },
                                "value": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 68,
                                    "end": 70
                                },
                                "initializer": {
                                    "kind": 208,
                                    "awaitKeyword": {
                                        "kind": 82196,
                                        "flags": 64,
                                        "start": 72,
                                        "end": 78
                                    },
                                    "expression": {
                                        "kind": 201392130,
                                        "text": 42,
                                        "rawText": "42",
                                        "flags": 96,
                                        "start": 78,
                                        "end": 81
                                    },
                                    "flags": 32,
                                    "start": 72,
                                    "end": 81
                                },
                                "flags": 32,
                                "start": 65,
                                "end": 81
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 65,
                        "end": 81
                    },
                    "flags": 32,
                    "start": 64,
                    "end": 83
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 16,
                        "start": 86,
                        "end": 86
                    },
                    "flags": 16,
                    "start": 84,
                    "end": 87
                },
                "flags": 16,
                "start": 56,
                "end": 87
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "start": 34,
            "end": 87
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 81,
                "start": 87,
                "end": 121
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 123,
                    "end": 123
                },
                "flags": 16,
                "start": 121,
                "end": 124
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "start": 124,
                    "end": 130
                },
                "catchParameter": {
                    "kind": 201,
                    "elementList": {
                        "kind": 202,
                        "elements": [
                            {
                                "kind": 281,
                                "ellipsisToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 133,
                                    "end": 135
                                },
                                "optionalToken": null,
                                "type": null,
                                "right": {
                                    "kind": 208,
                                    "awaitKeyword": {
                                        "kind": 82196,
                                        "flags": 64,
                                        "start": 137,
                                        "end": 143
                                    },
                                    "expression": {
                                        "kind": 201392130,
                                        "text": 42,
                                        "rawText": "42",
                                        "flags": 96,
                                        "start": 143,
                                        "end": 146
                                    },
                                    "flags": 32,
                                    "start": 137,
                                    "end": 146
                                },
                                "flags": 32,
                                "start": 133,
                                "end": 146
                            }
                        ],
                        "trailingComma": false,
                        "flags": 0,
                        "start": 133,
                        "end": 146
                    },
                    "flags": 32,
                    "start": 132,
                    "end": 148
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 16,
                        "start": 151,
                        "end": 151
                    },
                    "flags": 16,
                    "start": 149,
                    "end": 152
                },
                "flags": 16,
                "start": 124,
                "end": 152
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "start": 87,
            "end": 152
        }
    ],
    "isModule": true,
    "source": "try {} catch ({ x = await 42 }) {} // Initializer\ntry {} catch ({ x: y = await 42 }) {} // BindingElement Initializer\ntry {} catch ([ x = await 42 ]) {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 152
}
```

### Printed

```javascript

try {
} catch ({
  x = await 42
}) {
} // Initializer

try {
} catch ({
  x: y = await 42
}) {
} // BindingElement Initializer

try {
} catch ([x = await 42]) {
}
```

### Diagnostics

```javascript
✔ No errors
```

