# Kataw parser test case

## Input

`````js
try {} catch (x) { { let x } }

try {} catch (x) { { var x } }
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
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 14,
                    "end": 15
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [
                            {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 162,
                                            "lexicalKeyword": {
                                                "kind": 41951307,
                                                "flags": 80,
                                                "start": 20,
                                                "end": 24
                                            },
                                            "binding": {
                                                "kind": 151,
                                                "bindingList": [
                                                    {
                                                        "kind": 190,
                                                        "binding": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 24,
                                                            "end": 26
                                                        },
                                                        "type": null,
                                                        "initializer": null,
                                                        "flags": 16,
                                                        "start": 24,
                                                        "end": 26
                                                    }
                                                ],
                                                "flags": 16,
                                                "start": 24,
                                                "end": 26
                                            },
                                            "flags": 33554448,
                                            "start": 20,
                                            "end": 26
                                        }
                                    ],
                                    "flags": 16,
                                    "start": 20,
                                    "end": 26
                                },
                                "flags": 16,
                                "start": 18,
                                "end": 28
                            }
                        ],
                        "flags": 16,
                        "start": 18,
                        "end": 28
                    },
                    "flags": 16,
                    "start": 16,
                    "end": 30
                },
                "flags": 80,
                "start": 6,
                "end": 30
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "start": 0,
            "end": 30
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 81,
                "start": 30,
                "end": 35
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 37,
                    "end": 37
                },
                "flags": 16,
                "start": 35,
                "end": 38
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "start": 38,
                    "end": 44
                },
                "catchParameter": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 46,
                    "end": 47
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [
                            {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 155,
                                            "declareKeyword": null,
                                            "varKeyword": {
                                                "kind": 37757002,
                                                "flags": 80,
                                                "start": 52,
                                                "end": 56
                                            },
                                            "declarationList": {
                                                "kind": 156,
                                                "declarations": [
                                                    {
                                                        "kind": 157,
                                                        "binding": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 56,
                                                            "end": 58
                                                        },
                                                        "type": null,
                                                        "initializer": null,
                                                        "flags": 16,
                                                        "start": 56,
                                                        "end": 58
                                                    }
                                                ],
                                                "flags": 16,
                                                "start": 56,
                                                "end": 58
                                            },
                                            "flags": 16,
                                            "start": 52,
                                            "end": 58
                                        }
                                    ],
                                    "flags": 16,
                                    "start": 52,
                                    "end": 58
                                },
                                "flags": 16,
                                "start": 50,
                                "end": 60
                            }
                        ],
                        "flags": 16,
                        "start": 50,
                        "end": 60
                    },
                    "flags": 16,
                    "start": 48,
                    "end": 62
                },
                "flags": 80,
                "start": 38,
                "end": 62
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "start": 30,
            "end": 62
        }
    ],
    "isModule": false,
    "source": "try {} catch (x) { { let x } }\n\ntry {} catch (x) { { var x } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 62
}
```

### Printed

```javascript

 try {  }
catch (x){ { let x; } } try {  }
catch (x){ { var x; } } 
```

### Diagnostics

```javascript
✔ No errors
```

