# Kataw parser test case

## Input

`````js
const x = {foo: 3};
Object.keys(x).map(k => { return {[k]: k} });

const y = {foo: 3, bar: 3};
Object.keys(y).map(k => { return {[k]: k} });
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
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 80,
                "start": 0,
                "end": 5
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
                            "start": 5,
                            "end": 7
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "start": 11,
                                            "end": 14
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 3,
                                            "rawText": "3",
                                            "flags": 96,
                                            "start": 15,
                                            "end": 17
                                        },
                                        "flags": 32,
                                        "start": 11,
                                        "end": 17
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 11,
                                "end": 17
                            },
                            "flags": 48,
                            "start": 9,
                            "end": 18
                        },
                        "flags": 16,
                        "start": 5,
                        "end": 18
                    }
                ],
                "flags": 16777232,
                "start": 5,
                "end": 18
            },
            "flags": 33554448,
            "start": 0,
            "end": 19
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 131,
                        "expression": {
                            "kind": 129,
                            "member": {
                                "kind": 134299649,
                                "text": "Object",
                                "rawText": "Object",
                                "flags": 96,
                                "start": 19,
                                "end": 26
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "keys",
                                "rawText": "keys",
                                "flags": 96,
                                "start": 27,
                                "end": 31
                            },
                            "flags": 536870944,
                            "start": 19,
                            "end": 31
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [
                                {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 32,
                                    "end": 33
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 32,
                            "end": 33
                        },
                        "flags": 268435488,
                        "start": 19,
                        "end": 34
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "map",
                        "rawText": "map",
                        "flags": 96,
                        "start": 35,
                        "end": 38
                    },
                    "flags": 536870944,
                    "start": 19,
                    "end": 38
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 40,
                                "end": 43
                            },
                            "typeParameters": null,
                            "parameters": {
                                "kind": 134299649,
                                "text": "k",
                                "rawText": "k",
                                "flags": 96,
                                "start": 39,
                                "end": 40
                            },
                            "asyncKeyword": null,
                            "returnType": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 161,
                                            "returnKeyword": {
                                                "kind": 37757022,
                                                "flags": 80,
                                                "start": 45,
                                                "end": 52
                                            },
                                            "expression": {
                                                "kind": 220,
                                                "propertyList": {
                                                    "kind": 218,
                                                    "properties": [
                                                        {
                                                            "kind": 219,
                                                            "asteriskToken": null,
                                                            "left": {
                                                                "kind": 194,
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": "k",
                                                                    "rawText": "k",
                                                                    "flags": 96,
                                                                    "start": 55,
                                                                    "end": 56
                                                                },
                                                                "flags": 32,
                                                                "start": 54,
                                                                "end": 57
                                                            },
                                                            "right": {
                                                                "kind": 134299649,
                                                                "text": "k",
                                                                "rawText": "k",
                                                                "flags": 96,
                                                                "start": 58,
                                                                "end": 60
                                                            },
                                                            "flags": 32,
                                                            "start": 54,
                                                            "end": 60
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 16,
                                                    "start": 54,
                                                    "end": 60
                                                },
                                                "flags": 48,
                                                "start": 52,
                                                "end": 61
                                            },
                                            "flags": 80,
                                            "start": 45,
                                            "end": 61
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 45,
                                    "end": 61
                                },
                                "flags": 32,
                                "start": 43,
                                "end": 63
                            },
                            "flags": 32,
                            "start": 39,
                            "end": 63
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 39,
                    "end": 63
                },
                "flags": 268435488,
                "start": 19,
                "end": 64
            },
            "flags": 16,
            "start": 19,
            "end": 65
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "start": 65,
                "end": 72
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 72,
                            "end": 74
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "start": 78,
                                            "end": 81
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 3,
                                            "rawText": "3",
                                            "flags": 96,
                                            "start": 82,
                                            "end": 84
                                        },
                                        "flags": 32,
                                        "start": 78,
                                        "end": 84
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "bar",
                                            "rawText": "bar",
                                            "flags": 96,
                                            "start": 85,
                                            "end": 89
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 3,
                                            "rawText": "3",
                                            "flags": 96,
                                            "start": 90,
                                            "end": 92
                                        },
                                        "flags": 32,
                                        "start": 85,
                                        "end": 92
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 78,
                                "end": 92
                            },
                            "flags": 48,
                            "start": 76,
                            "end": 93
                        },
                        "flags": 16,
                        "start": 72,
                        "end": 93
                    }
                ],
                "flags": 16777232,
                "start": 72,
                "end": 93
            },
            "flags": 33554448,
            "start": 65,
            "end": 94
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 131,
                        "expression": {
                            "kind": 129,
                            "member": {
                                "kind": 134299649,
                                "text": "Object",
                                "rawText": "Object",
                                "flags": 96,
                                "start": 94,
                                "end": 101
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "keys",
                                "rawText": "keys",
                                "flags": 96,
                                "start": 102,
                                "end": 106
                            },
                            "flags": 536870944,
                            "start": 94,
                            "end": 106
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [
                                {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 107,
                                    "end": 108
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 107,
                            "end": 108
                        },
                        "flags": 268435488,
                        "start": 94,
                        "end": 109
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "map",
                        "rawText": "map",
                        "flags": 96,
                        "start": 110,
                        "end": 113
                    },
                    "flags": 536870944,
                    "start": 94,
                    "end": 113
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 115,
                                "end": 118
                            },
                            "typeParameters": null,
                            "parameters": {
                                "kind": 134299649,
                                "text": "k",
                                "rawText": "k",
                                "flags": 96,
                                "start": 114,
                                "end": 115
                            },
                            "asyncKeyword": null,
                            "returnType": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 161,
                                            "returnKeyword": {
                                                "kind": 37757022,
                                                "flags": 80,
                                                "start": 120,
                                                "end": 127
                                            },
                                            "expression": {
                                                "kind": 220,
                                                "propertyList": {
                                                    "kind": 218,
                                                    "properties": [
                                                        {
                                                            "kind": 219,
                                                            "asteriskToken": null,
                                                            "left": {
                                                                "kind": 194,
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": "k",
                                                                    "rawText": "k",
                                                                    "flags": 96,
                                                                    "start": 130,
                                                                    "end": 131
                                                                },
                                                                "flags": 32,
                                                                "start": 129,
                                                                "end": 132
                                                            },
                                                            "right": {
                                                                "kind": 134299649,
                                                                "text": "k",
                                                                "rawText": "k",
                                                                "flags": 96,
                                                                "start": 133,
                                                                "end": 135
                                                            },
                                                            "flags": 32,
                                                            "start": 129,
                                                            "end": 135
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 16,
                                                    "start": 129,
                                                    "end": 135
                                                },
                                                "flags": 48,
                                                "start": 127,
                                                "end": 136
                                            },
                                            "flags": 80,
                                            "start": 120,
                                            "end": 136
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 120,
                                    "end": 136
                                },
                                "flags": 32,
                                "start": 118,
                                "end": 138
                            },
                            "flags": 32,
                            "start": 114,
                            "end": 138
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 114,
                    "end": 138
                },
                "flags": 268435488,
                "start": 94,
                "end": 139
            },
            "flags": 16,
            "start": 94,
            "end": 140
        }
    ],
    "isModule": false,
    "source": "const x = {foo: 3};\nObject.keys(x).map(k => { return {[k]: k} });\n\nconst y = {foo: 3, bar: 3};\nObject.keys(y).map(k => { return {[k]: k} });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 140
}
```

### Printed

```javascript

const x = { foo: 3 };
Object.keys(x).map(k =>  {
  return  { [k]: k };
});
const y = { foo: 3, bar: 3 };
Object.keys(y).map(k =>  {
  return  { [k]: k };
});
```

### Diagnostics

```javascript
✔ No errors
```

