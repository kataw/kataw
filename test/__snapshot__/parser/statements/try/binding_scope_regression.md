# Kataw parser test case

## Input

`````js
{
  let AAAAAAAAAAAAAAAAAAAA;
  try {
    AAAAAAAAAAAAAAAAAAAA = false;
  } catch {
    AAAAAAAAAAAAAAAAAAAA = false;
  }
}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
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
                            "flags": 81,
                            "start": 1,
                            "end": 7
                        },
                        "binding": {
                            "kind": 151,
                            "bindingList": [
                                {
                                    "kind": 190,
                                    "binding": {
                                        "kind": 134299649,
                                        "text": "AAAAAAAAAAAAAAAAAAAA",
                                        "rawText": "AAAAAAAAAAAAAAAAAAAA",
                                        "flags": 96,
                                        "start": 7,
                                        "end": 28
                                    },
                                    "type": null,
                                    "initializer": null,
                                    "flags": 16,
                                    "start": 7,
                                    "end": 28
                                }
                            ],
                            "flags": 17,
                            "start": 7,
                            "end": 28
                        },
                        "flags": 33554448,
                        "start": 1,
                        "end": 29
                    },
                    {
                        "kind": 159,
                        "tryKeyword": {
                            "kind": 37757027,
                            "flags": 81,
                            "start": 29,
                            "end": 35
                        },
                        "block": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [
                                    {
                                        "kind": 120,
                                        "expression": {
                                            "kind": 125,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "AAAAAAAAAAAAAAAAAAAA",
                                                "rawText": "AAAAAAAAAAAAAAAAAAAA",
                                                "flags": 96,
                                                "start": 37,
                                                "end": 62
                                            },
                                            "operatorToken": {
                                                "kind": 4125,
                                                "flags": 96,
                                                "start": 62,
                                                "end": 64
                                            },
                                            "right": {
                                                "kind": 205586437,
                                                "flags": 96,
                                                "start": 64,
                                                "end": 70
                                            },
                                            "flags": 32,
                                            "start": 37,
                                            "end": 70
                                        },
                                        "flags": 16,
                                        "start": 37,
                                        "end": 71
                                    }
                                ],
                                "flags": 17,
                                "start": 37,
                                "end": 71
                            },
                            "flags": 16,
                            "start": 35,
                            "end": 75
                        },
                        "catchClause": {
                            "kind": 173,
                            "catchKeyword": {
                                "kind": 4202575,
                                "flags": 80,
                                "start": 75,
                                "end": 81
                            },
                            "catchParameter": null,
                            "block": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 125,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "AAAAAAAAAAAAAAAAAAAA",
                                                    "rawText": "AAAAAAAAAAAAAAAAAAAA",
                                                    "flags": 96,
                                                    "start": 83,
                                                    "end": 108
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 96,
                                                    "start": 108,
                                                    "end": 110
                                                },
                                                "right": {
                                                    "kind": 205586437,
                                                    "flags": 96,
                                                    "start": 110,
                                                    "end": 116
                                                },
                                                "flags": 32,
                                                "start": 83,
                                                "end": 116
                                            },
                                            "flags": 16,
                                            "start": 83,
                                            "end": 117
                                        }
                                    ],
                                    "flags": 17,
                                    "start": 83,
                                    "end": 117
                                },
                                "flags": 16,
                                "start": 81,
                                "end": 121
                            },
                            "flags": 80,
                            "start": 75,
                            "end": 121
                        },
                        "finallyKeyword": null,
                        "finallyBlock": null,
                        "flags": 16,
                        "start": 29,
                        "end": 121
                    }
                ],
                "flags": 17,
                "start": 1,
                "end": 121
            },
            "flags": 16,
            "start": 0,
            "end": 123
        }
    ],
    "isModule": false,
    "source": "{\n  let AAAAAAAAAAAAAAAAAAAA;\n  try {\n    AAAAAAAAAAAAAAAAAAAA = false;\n  } catch {\n    AAAAAAAAAAAAAAAAAAAA = false;\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 123
}
```

### Printed

```javascript

 { let AAAAAAAAAAAAAAAAAAAA;, try { AAAAAAAAAAAAAAAAAAAA=false; }
catch { AAAAAAAAAAAAAAAAAAAA=false; } } 
```

### Diagnostics

```javascript
✔ No errors
```

