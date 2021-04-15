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
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "decorators": null,
            "classKeyword": {
                "kind": 37814352,
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
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
                            "kind": 67109115,
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
            "flags": 128,
            "start": 18,
            "end": 19
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": null,
                "typeParameters": null,
                "parameters": [],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 16637,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 34,
                    "end": 34
                },
                "flags": 256,
                "start": 30,
                "end": 34
            },
            "flags": 128,
            "start": 30,
            "end": 34
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "get",
                "rawText": "get",
                "flags": 768,
                "start": 35,
                "end": 42
            },
            "flags": 128,
            "start": 35,
            "end": 42
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": null,
                "typeParameters": null,
                "parameters": [],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 16637,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 54,
                    "end": 54
                },
                "flags": 256,
                "start": 50,
                "end": 54
            },
            "flags": 128,
            "start": 50,
            "end": 54
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "static",
                "rawText": "static",
                "flags": 768,
                "start": 55,
                "end": 65
            },
            "flags": 128,
            "start": 55,
            "end": 65
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "isC",
                    "rawText": "isC",
                    "flags": 768,
                    "start": 65,
                    "end": 69
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 768,
                            "start": 70,
                            "end": 73
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 70,
                    "end": 73
                },
                "flags": 256,
                "start": 65,
                "end": 74
            },
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
                        "returnKeyword": {
                            "kind": 37757022,
                            "flags": 768,
                            "start": 76,
                            "end": 87
                        },
                        "expression": {
                            "kind": 16637,
                            "text": "",
                            "autofix": 0,
                            "flags": 12,
                            "start": 87,
                            "end": 87
                        },
                        "flags": 128,
                        "start": 0,
                        "end": 76
                    }
                ],
                "multiLine": true,
                "flags": 128,
                "start": 76,
                "end": 87
            },
            "flags": 128,
            "start": 74,
            "end": 87
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 16637,
                        "text": "",
                        "autofix": 0,
                        "flags": 12,
                        "start": 94,
                        "end": 94
                    },
                    "operatorToken": {
                        "kind": 21006388,
                        "flags": 768,
                        "start": 94,
                        "end": 97
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "obj",
                        "rawText": "obj",
                        "flags": 768,
                        "start": 97,
                        "end": 101
                    },
                    "flags": 256,
                    "start": 94,
                    "end": 101
                },
                "operatorToken": {
                    "kind": 33594,
                    "flags": 768,
                    "start": 101,
                    "end": 104
                },
                "right": {
                    "kind": 16637,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 104,
                    "end": 104
                },
                "flags": 256,
                "start": 94,
                "end": 104
            },
            "flags": 128,
            "start": 94,
            "end": 104
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 16637,
                        "text": "",
                        "autofix": 0,
                        "flags": 12,
                        "start": 112,
                        "end": 112
                    },
                    "operatorToken": {
                        "kind": 21006388,
                        "flags": 768,
                        "start": 112,
                        "end": 115
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "obj",
                        "rawText": "obj",
                        "flags": 768,
                        "start": 115,
                        "end": 119
                    },
                    "flags": 256,
                    "start": 112,
                    "end": 119
                },
                "operatorToken": {
                    "kind": 33594,
                    "flags": 768,
                    "start": 119,
                    "end": 122
                },
                "right": {
                    "kind": 16637,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 122,
                    "end": 122
                },
                "flags": 256,
                "start": 112,
                "end": 122
            },
            "flags": 128,
            "start": 112,
            "end": 122
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 16637,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 130,
                    "end": 130
                },
                "operatorToken": {
                    "kind": 21006388,
                    "flags": 768,
                    "start": 130,
                    "end": 133
                },
                "right": {
                    "kind": 134299649,
                    "text": "obj",
                    "rawText": "obj",
                    "flags": 768,
                    "start": 133,
                    "end": 137
                },
                "flags": 256,
                "start": 130,
                "end": 137
            },
            "flags": 128,
            "start": 130,
            "end": 138
        }
    ],
    "isModule": true,
    "text": "class C {\n  #brand;\n\n  #method() {}\n\n  get #getter() {}\n\n  static isC(obj) {\n    return #brand in obj && #method in obj && #getter in obj;\n  }\n}",
    "fileName": "__root__",
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
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 19,
            "end": 30
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
            "code": 3,
            "error": "Identifier expected",
            "start": 34,
            "end": 35
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 34,
            "end": 35
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
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
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
            "code": 3,
            "error": "Identifier expected",
            "start": 54,
            "end": 55
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 54,
            "end": 55
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
            "code": 3,
            "error": "Identifier expected",
            "start": 87,
            "end": 94
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 87,
            "end": 94
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 87,
            "end": 94
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 87,
            "end": 94
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 94,
            "end": 97
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 104,
            "end": 112
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 104,
            "end": 112
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 104,
            "end": 112
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 112,
            "end": 115
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 122,
            "end": 130
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 122,
            "end": 130
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 122,
            "end": 130
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 130,
            "end": 133
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 138,
            "end": 142
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

