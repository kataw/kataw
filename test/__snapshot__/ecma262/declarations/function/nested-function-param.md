# Kataw parser test case

## Input

`````js
function f<X, Y: X, Z: Y, W>(y: Y, z: X, w: W): X {
  if (n === 0) return y;
  if (n === 1) return z;
  return w; // nope
}

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
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "transformFlags": 0,
                "start": 8,
                "end": 10
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
                                "start": 11,
                                "end": 12
                            },
                            "type": null,
                            "assignToken": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 12
                        },
                        {
                            "kind": 146,
                            "name": {
                                "kind": 134299649,
                                "text": "Y",
                                "rawText": "Y",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 15
                            },
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
                                        "start": 16,
                                        "end": 18
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 16,
                                    "end": 18
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 16,
                                "end": 18
                            },
                            "assignToken": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 18
                        },
                        {
                            "kind": 146,
                            "name": {
                                "kind": 134299649,
                                "text": "Z",
                                "rawText": "Z",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 21
                            },
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 134299649,
                                        "text": "Y",
                                        "rawText": "Y",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 22,
                                        "end": 24
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 22,
                                    "end": 24
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 22,
                                "end": 24
                            },
                            "assignToken": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 24
                        },
                        {
                            "kind": 146,
                            "name": {
                                "kind": 134299649,
                                "text": "W",
                                "rawText": "W",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 25,
                                "end": 27
                            },
                            "type": null,
                            "assignToken": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 25,
                            "end": 27
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 27
                },
                "flags": 2097152,
                "transformFlags": 512,
                "start": 10,
                "end": 28
            },
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 29,
                            "end": 30
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
                                    "text": "Y",
                                    "rawText": "Y",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 31,
                                    "end": 33
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 31,
                                "end": 33
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 31,
                            "end": 33
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 29,
                        "end": 33
                    },
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 34,
                            "end": 36
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
                                    "start": 37,
                                    "end": 39
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 37,
                                "end": 39
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 37,
                            "end": 39
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 34,
                        "end": 39
                    },
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "w",
                            "rawText": "w",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 40,
                            "end": 42
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
                                    "text": "W",
                                    "rawText": "W",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 43,
                                    "end": 45
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 43,
                                "end": 45
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 43,
                            "end": 45
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 40,
                        "end": 45
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 29,
                "end": 45
            },
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
                                "start": 51,
                                "end": 56
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "n",
                                    "rawText": "n",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 58,
                                    "end": 59
                                },
                                "operatorToken": {
                                    "kind": 34620,
                                    "flags": 96,
                                    "transformFlags": 16,
                                    "start": 59,
                                    "end": 63
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 63,
                                    "end": 65
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 58,
                                "end": 65
                            },
                            "consequent": {
                                "kind": 161,
                                "returnKeyword": {
                                    "kind": 37757022,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 66,
                                    "end": 73
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 73,
                                    "end": 75
                                },
                                "flags": 80,
                                "transformFlags": 256,
                                "start": 66,
                                "end": 76
                            },
                            "elseKeyword": null,
                            "alternate": null,
                            "flags": 81,
                            "transformFlags": 0,
                            "start": 51,
                            "end": 76
                        },
                        {
                            "kind": 164,
                            "ifKeyword": {
                                "kind": 37757019,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 76,
                                "end": 81
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "n",
                                    "rawText": "n",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 83,
                                    "end": 84
                                },
                                "operatorToken": {
                                    "kind": 34620,
                                    "flags": 96,
                                    "transformFlags": 16,
                                    "start": 84,
                                    "end": 88
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 88,
                                    "end": 90
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 83,
                                "end": 90
                            },
                            "consequent": {
                                "kind": 161,
                                "returnKeyword": {
                                    "kind": 37757022,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 91,
                                    "end": 98
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "z",
                                    "rawText": "z",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 98,
                                    "end": 100
                                },
                                "flags": 80,
                                "transformFlags": 256,
                                "start": 91,
                                "end": 101
                            },
                            "elseKeyword": null,
                            "alternate": null,
                            "flags": 81,
                            "transformFlags": 0,
                            "start": 76,
                            "end": 101
                        },
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 101,
                                "end": 110
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "w",
                                "rawText": "w",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 110,
                                "end": 112
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 101,
                            "end": 113
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 51,
                    "end": 113
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 49,
                "end": 123
            },
            "returnType": {
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
                        "start": 47,
                        "end": 49
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 47,
                    "end": 49
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 47,
                "end": 49
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 123
        }
    ],
    "isModule": false,
    "source": "function f<X, Y: X, Z: Y, W>(y: Y, z: X, w: W): X {\n  if (n === 0) return y;\n  if (n === 1) return z;\n  return w; // nope\n}\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 124
}
```

### Printed

```javascript

function f<X, Y: X, Z: Y, W>(y: Y, z: X, w: W): X {
  if (n === 0) return y;
  if (n === 1) return z;
  return w;
}
```

### Diagnostics

```javascript
✔ No errors
```

