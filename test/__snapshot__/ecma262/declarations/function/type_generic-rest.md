# Kataw parser test case

## Input

`````js
function remove<A, B>(a: A): [$Rest<A, {p: B}>, B] {
  const {p, ...o} = a;
  return [o, p];
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
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "remove",
                "rawText": "remove",
                "flags": 96,
                "start": 8,
                "end": 15
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
                                "text": "A",
                                "rawText": "A",
                                "flags": 96,
                                "start": 16,
                                "end": 17
                            },
                            "type": null,
                            "assignToken": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "start": 16,
                            "end": 17
                        },
                        {
                            "kind": 146,
                            "name": {
                                "kind": 134299649,
                                "text": "B",
                                "rawText": "B",
                                "flags": 96,
                                "start": 18,
                                "end": 20
                            },
                            "type": null,
                            "assignToken": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "start": 18,
                            "end": 20
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 16,
                    "end": 20
                },
                "flags": 2097152,
                "start": 15,
                "end": 21
            },
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 22,
                            "end": 23
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
                                    "text": "A",
                                    "rawText": "A",
                                    "flags": 96,
                                    "start": 24,
                                    "end": 26
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 24,
                                "end": 26
                            },
                            "flags": 2097152,
                            "start": 24,
                            "end": 26
                        },
                        "right": null,
                        "flags": 32,
                        "start": 22,
                        "end": 26
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 22,
                "end": 26
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 162,
                            "lexicalKeyword": {
                                "kind": 37757004,
                                "flags": 81,
                                "start": 52,
                                "end": 60
                            },
                            "binding": {
                                "kind": 151,
                                "bindingList": [
                                    {
                                        "kind": 190,
                                        "binding": {
                                            "kind": 212,
                                            "propertyList": {
                                                "kind": 213,
                                                "properties": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "p",
                                                        "rawText": "p",
                                                        "flags": 96,
                                                        "start": 62,
                                                        "end": 63
                                                    },
                                                    {
                                                        "kind": 281,
                                                        "ellipsisToken": {
                                                            "kind": 524302,
                                                            "flags": 64,
                                                            "start": 64,
                                                            "end": 68
                                                        },
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "o",
                                                            "rawText": "o",
                                                            "flags": 96,
                                                            "start": 68,
                                                            "end": 69
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "right": null,
                                                        "flags": 0,
                                                        "start": 64,
                                                        "end": 69
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 62,
                                                "end": 69
                                            },
                                            "flags": 32,
                                            "start": 60,
                                            "end": 70
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 72,
                                            "end": 74
                                        },
                                        "flags": 16,
                                        "start": 60,
                                        "end": 74
                                    }
                                ],
                                "flags": 16777232,
                                "start": 60,
                                "end": 74
                            },
                            "flags": 33554448,
                            "start": 52,
                            "end": 75
                        },
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "start": 75,
                                "end": 84
                            },
                            "expression": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "o",
                                            "rawText": "o",
                                            "flags": 96,
                                            "start": 86,
                                            "end": 87
                                        },
                                        {
                                            "kind": 134299649,
                                            "text": "p",
                                            "rawText": "p",
                                            "flags": 96,
                                            "start": 88,
                                            "end": 90
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 86,
                                    "end": 90
                                },
                                "flags": 32,
                                "start": 84,
                                "end": 91
                            },
                            "flags": 81,
                            "start": 75,
                            "end": 92
                        }
                    ],
                    "flags": 33,
                    "start": 52,
                    "end": 92
                },
                "flags": 32,
                "start": 50,
                "end": 94
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 147,
                    "elementTypes": [
                        {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 144,
                                "typeName": {
                                    "kind": 134299649,
                                    "text": "$Rest",
                                    "rawText": "$Rest",
                                    "flags": 96,
                                    "start": 30,
                                    "end": 35
                                },
                                "typeParameters": {
                                    "kind": 310,
                                    "typeInstantiations": {
                                        "kind": 309,
                                        "types": [
                                            {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 144,
                                                    "typeName": {
                                                        "kind": 134299649,
                                                        "text": "A",
                                                        "rawText": "A",
                                                        "flags": 96,
                                                        "start": 36,
                                                        "end": 37
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 2097152,
                                                    "start": 36,
                                                    "end": 37
                                                },
                                                "flags": 2097152,
                                                "start": 36,
                                                "end": 37
                                            },
                                            {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 134234353,
                                                    "properties": [
                                                        {
                                                            "kind": 193,
                                                            "protoKeyword": null,
                                                            "staticToken": null,
                                                            "getKeyword": null,
                                                            "setKeyword": null,
                                                            "key": {
                                                                "kind": 134299649,
                                                                "text": "p",
                                                                "rawText": "p",
                                                                "flags": 96,
                                                                "start": 40,
                                                                "end": 41
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
                                                                        "text": "B",
                                                                        "rawText": "B",
                                                                        "flags": 96,
                                                                        "start": 42,
                                                                        "end": 44
                                                                    },
                                                                    "typeParameters": null,
                                                                    "flags": 2097152,
                                                                    "start": 42,
                                                                    "end": 44
                                                                },
                                                                "flags": 2097152,
                                                                "start": 42,
                                                                "end": 44
                                                            },
                                                            "flags": 2097152,
                                                            "start": 40,
                                                            "end": 44
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 2097152,
                                                    "start": 38,
                                                    "end": 45
                                                },
                                                "flags": 2097152,
                                                "start": 38,
                                                "end": 45
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "start": 36,
                                        "end": 45
                                    },
                                    "flags": 2097152,
                                    "start": 35,
                                    "end": 46
                                },
                                "flags": 2097152,
                                "start": 30,
                                "end": 46
                            },
                            "flags": 2097152,
                            "start": 30,
                            "end": 46
                        },
                        {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 144,
                                "typeName": {
                                    "kind": 134299649,
                                    "text": "B",
                                    "rawText": "B",
                                    "flags": 96,
                                    "start": 47,
                                    "end": 49
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 47,
                                "end": 49
                            },
                            "flags": 2097152,
                            "start": 47,
                            "end": 49
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 28,
                    "end": 50
                },
                "flags": 2097152,
                "start": 28,
                "end": 50
            },
            "flags": 16,
            "start": 0,
            "end": 94
        }
    ],
    "isModule": false,
    "source": "function remove<A, B>(a: A): [$Rest<A, {p: B}>, B] {\n  const {p, ...o} = a;\n  return [o, p];\n}\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 95
}
```

### Printed

```javascript

function  <A, B >remove():  [: , :  ] {
  const {
    p,
    ...o
  } = a;
  return  [o, p];
}
```

### Diagnostics

```javascript
✔ No errors
```

