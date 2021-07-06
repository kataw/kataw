# Kataw parser test case

## Input

`````js
class B<X> {
  s: X;
  f() {
    if (this.s) {
      y = this.s;
    }
    this.s = y;
  }
}

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
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "B",
                "rawText": "B",
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 7
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
                                "text": "X",
                                "rawText": "X",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 9
                            },
                            "type": null,
                            "assignToken": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 9
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 9
                },
                "flags": 2097152,
                "transformFlags": 512,
                "start": 7,
                "end": 10
            },
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "s",
                                "rawText": "s",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 12,
                                "end": 16
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
                                        "text": "X",
                                        "rawText": "X",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 17,
                                        "end": 19
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 17,
                                    "end": 19
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 17,
                                "end": 19
                            },
                            "initializer": null,
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 12,
                            "end": 19
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 20
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 20,
                                    "end": 24
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 25,
                                    "end": 26
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 164,
                                                "ifKeyword": {
                                                    "kind": 37757019,
                                                    "flags": 81,
                                                    "transformFlags": 0,
                                                    "start": 28,
                                                    "end": 35
                                                },
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 4276321,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 37,
                                                        "end": 41
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "s",
                                                        "rawText": "s",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 42,
                                                        "end": 43
                                                    },
                                                    "flags": 96,
                                                    "transformFlags": 2,
                                                    "start": 37,
                                                    "end": 43
                                                },
                                                "consequent": {
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
                                                                        "text": "y",
                                                                        "rawText": "y",
                                                                        "flags": 97,
                                                                        "transformFlags": 0,
                                                                        "start": 46,
                                                                        "end": 54
                                                                    },
                                                                    "operatorToken": {
                                                                        "kind": 4125,
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 54,
                                                                        "end": 56
                                                                    },
                                                                    "right": {
                                                                        "kind": 129,
                                                                        "member": {
                                                                            "kind": 4276321,
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 56,
                                                                            "end": 61
                                                                        },
                                                                        "expression": {
                                                                            "kind": 134299649,
                                                                            "text": "s",
                                                                            "rawText": "s",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 62,
                                                                            "end": 63
                                                                        },
                                                                        "flags": 96,
                                                                        "transformFlags": 2,
                                                                        "start": 56,
                                                                        "end": 63
                                                                    },
                                                                    "flags": 0,
                                                                    "transformFlags": 128,
                                                                    "start": 46,
                                                                    "end": 63
                                                                },
                                                                "flags": 16,
                                                                "transformFlags": 0,
                                                                "start": 46,
                                                                "end": 64
                                                            }
                                                        ],
                                                        "flags": 17,
                                                        "transformFlags": 0,
                                                        "start": 46,
                                                        "end": 64
                                                    },
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 44,
                                                    "end": 70
                                                },
                                                "elseKeyword": null,
                                                "alternate": null,
                                                "flags": 81,
                                                "transformFlags": 0,
                                                "start": 28,
                                                "end": 70
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 4276321,
                                                            "flags": 97,
                                                            "transformFlags": 0,
                                                            "start": 70,
                                                            "end": 79
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "s",
                                                            "rawText": "s",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 80,
                                                            "end": 81
                                                        },
                                                        "flags": 97,
                                                        "transformFlags": 2,
                                                        "start": 70,
                                                        "end": 81
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 81,
                                                        "end": 83
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 83,
                                                        "end": 85
                                                    },
                                                    "flags": 0,
                                                    "transformFlags": 128,
                                                    "start": 70,
                                                    "end": 85
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 70,
                                                "end": 86
                                            }
                                        ],
                                        "flags": 33,
                                        "transformFlags": 0,
                                        "start": 28,
                                        "end": 86
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 26,
                                    "end": 90
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 24,
                                "end": 90
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 90
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 90
                },
                "flags": 10,
                "transformFlags": 0,
                "start": 32,
                "end": 92
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 92
        }
    ],
    "isModule": false,
    "source": "class B<X> {\n  s: X;\n  f() {\n    if (this.s) {\n      y = this.s;\n    }\n    this.s = y;\n  }\n}\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 93
}
```

### Printed

```javascript
class B <X>{
  s: X;;
  f() {
    if (this.s) {
        y = this.s;
      }
    this.s = y;
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

