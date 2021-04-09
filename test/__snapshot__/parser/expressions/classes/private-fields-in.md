# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````


## Input

`````js
class C {
  #brand;

  #method() {}

  get #getter() {}

  static isC(obj) {
    return #brand in obj && #method in obj && #getter in obj;
  }
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 178,
            "decorators": null,
            "name": {
                "kind": 81921,
                "value": "C",
                "autofix": 0,
                "flags": 768,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 280,
                        "decorators": null,
                        "declaredToken": null,
                        "staticToken": null,
                        "key": {
                            "kind": 67125499,
                            "text": "#brand",
                            "flags": 768,
                            "start": 9,
                            "end": 18
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 256,
                        "start": 9,
                        "end": 18
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 18
            },
            "flags": 128,
            "start": 0,
            "end": 18
        },
        {
            "kind": 168,
            "autofix": 0,
            "flags": 128,
            "start": 18,
            "end": 19
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 81921,
                    "value": "#method",
                    "autofix": 0,
                    "flags": 768,
                    "start": 19,
                    "end": 30
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 31,
                    "end": 31
                },
                "flags": 256,
                "start": 19,
                "end": 32
            },
            "autofix": 0,
            "flags": 128,
            "start": 19,
            "end": 32
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "autofix": 0,
                "flags": 128,
                "start": 34,
                "end": 34
            },
            "autofix": 0,
            "flags": 128,
            "start": 32,
            "end": 35
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": "get",
                "autofix": 0,
                "flags": 768,
                "start": 35,
                "end": 42
            },
            "autofix": 0,
            "flags": 128,
            "start": 35,
            "end": 42
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 81921,
                    "value": "#getter",
                    "autofix": 0,
                    "flags": 768,
                    "start": 42,
                    "end": 50
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 51,
                    "end": 51
                },
                "flags": 256,
                "start": 42,
                "end": 52
            },
            "autofix": 0,
            "flags": 128,
            "start": 42,
            "end": 52
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "autofix": 0,
                "flags": 128,
                "start": 54,
                "end": 54
            },
            "autofix": 0,
            "flags": 128,
            "start": 52,
            "end": 55
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": "static",
                "autofix": 0,
                "flags": 768,
                "start": 55,
                "end": 65
            },
            "autofix": 0,
            "flags": 128,
            "start": 55,
            "end": 65
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 81921,
                    "value": "isC",
                    "autofix": 0,
                    "flags": 768,
                    "start": 65,
                    "end": 69
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 81921,
                            "value": "obj",
                            "autofix": 0,
                            "flags": 768,
                            "start": 70,
                            "end": 73
                        }
                    ],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 70,
                    "end": 73
                },
                "flags": 256,
                "start": 65,
                "end": 74
            },
            "autofix": 0,
            "flags": 128,
            "start": 65,
            "end": 74
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 161,
                        "expression": {
                            "kind": 198,
                            "left": {
                                "kind": 198,
                                "left": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 81921,
                                        "value": "#brand",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 87,
                                        "end": 94
                                    },
                                    "operatorToken": {
                                        "kind": 21006388,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 94,
                                        "end": 97
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "obj",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 97,
                                        "end": 101
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 87,
                                    "end": 101
                                },
                                "operatorToken": {
                                    "kind": 33594,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 101,
                                    "end": 104
                                },
                                "right": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 81921,
                                        "value": "#method",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 104,
                                        "end": 112
                                    },
                                    "operatorToken": {
                                        "kind": 21006388,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 112,
                                        "end": 115
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "obj",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 115,
                                        "end": 119
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 112,
                                    "end": 119
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 87,
                                "end": 119
                            },
                            "operatorToken": {
                                "kind": 33594,
                                "autofix": 0,
                                "flags": 0,
                                "start": 119,
                                "end": 122
                            },
                            "right": {
                                "kind": 198,
                                "left": {
                                    "kind": 81921,
                                    "value": "#getter",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 122,
                                    "end": 130
                                },
                                "operatorToken": {
                                    "kind": 21006388,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 130,
                                    "end": 133
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "obj",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 133,
                                    "end": 137
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 130,
                                "end": 137
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 87,
                            "end": 137
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 1,
                        "end": 76
                    }
                ],
                "multiLine": true,
                "autofix": 0,
                "flags": 128,
                "start": 76,
                "end": 138
            },
            "autofix": 0,
            "flags": 128,
            "start": 74,
            "end": 142
        }
    ],
    "isModule": true,
    "text": "class C {\n  #brand;\n\n  #method() {}\n\n  get #getter() {}\n\n  static isC(obj) {\n    return #brand in obj && #method in obj && #getter in obj;\n  }\n}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 18,
            "end": 19
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 32,
            "end": 34
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 42,
            "end": 50
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 52,
            "end": 54
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 65,
            "end": 69
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 74,
            "end": 76
        },
        {
            "kind": 2,
            "source": 2,
            "code": 33,
            "error": "A return statement can only be used within a function_body",
            "start": 76,
            "end": 87
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 142,
            "end": 144
        }
    ],
    "start": 0,
    "end": 144
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

