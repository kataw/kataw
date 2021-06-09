# Kataw parser test case

## Input

`````js
const ColorId = {
  RED: 'R',
  GREEN: 'G',
  BLUE: 'B',
};

const ColorNumber = {
  RED: 'ff0000',
  GREEN: '00ff00',
  BLUE: '0000ff',
};

const ColorIdToNumber = {
  [ColorId.RED]: ColorNumber.RED,
  [ColorId.GREEN]: ColorNumber.GREEN,
  [ColorId.BLUE]: ColorNumber.BLUE,
}

module.exports = {
  ...dummy,
  [hello]: 'world',
  ...dummy,
};
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
                            "text": "ColorId",
                            "rawText": "ColorId",
                            "flags": 96,
                            "start": 5,
                            "end": 13
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
                                        "left": {
                                            "kind": 134299649,
                                            "text": "RED",
                                            "rawText": "RED",
                                            "flags": 96,
                                            "start": 17,
                                            "end": 23
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "R",
                                            "rawText": "'R'",
                                            "flags": 4194400,
                                            "start": 24,
                                            "end": 28
                                        },
                                        "flags": 33,
                                        "start": 17,
                                        "end": 28
                                    },
                                    {
                                        "kind": 219,
                                        "generatorToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "GREEN",
                                            "rawText": "GREEN",
                                            "flags": 96,
                                            "start": 29,
                                            "end": 37
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "G",
                                            "rawText": "'G'",
                                            "flags": 4194400,
                                            "start": 38,
                                            "end": 42
                                        },
                                        "flags": 33,
                                        "start": 29,
                                        "end": 42
                                    },
                                    {
                                        "kind": 219,
                                        "generatorToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "BLUE",
                                            "rawText": "BLUE",
                                            "flags": 96,
                                            "start": 43,
                                            "end": 50
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "B",
                                            "rawText": "'B'",
                                            "flags": 4194400,
                                            "start": 51,
                                            "end": 55
                                        },
                                        "flags": 33,
                                        "start": 43,
                                        "end": 55
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 17,
                                "start": 17,
                                "end": 56
                            },
                            "flags": 49,
                            "start": 15,
                            "end": 58
                        },
                        "flags": 16,
                        "start": 5,
                        "end": 58
                    }
                ],
                "flags": 16777232,
                "start": 5,
                "end": 58
            },
            "flags": 33554448,
            "start": 0,
            "end": 59
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "start": 59,
                "end": 66
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "ColorNumber",
                            "rawText": "ColorNumber",
                            "flags": 96,
                            "start": 66,
                            "end": 78
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
                                        "left": {
                                            "kind": 134299649,
                                            "text": "RED",
                                            "rawText": "RED",
                                            "flags": 96,
                                            "start": 82,
                                            "end": 88
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "ff0000",
                                            "rawText": "'ff0000'",
                                            "flags": 4194400,
                                            "start": 89,
                                            "end": 98
                                        },
                                        "flags": 33,
                                        "start": 82,
                                        "end": 98
                                    },
                                    {
                                        "kind": 219,
                                        "generatorToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "GREEN",
                                            "rawText": "GREEN",
                                            "flags": 96,
                                            "start": 99,
                                            "end": 107
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "00ff00",
                                            "rawText": "'00ff00'",
                                            "flags": 4194400,
                                            "start": 108,
                                            "end": 117
                                        },
                                        "flags": 33,
                                        "start": 99,
                                        "end": 117
                                    },
                                    {
                                        "kind": 219,
                                        "generatorToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "BLUE",
                                            "rawText": "BLUE",
                                            "flags": 96,
                                            "start": 118,
                                            "end": 125
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "0000ff",
                                            "rawText": "'0000ff'",
                                            "flags": 4194400,
                                            "start": 126,
                                            "end": 135
                                        },
                                        "flags": 33,
                                        "start": 118,
                                        "end": 135
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 17,
                                "start": 82,
                                "end": 136
                            },
                            "flags": 49,
                            "start": 80,
                            "end": 138
                        },
                        "flags": 16,
                        "start": 66,
                        "end": 138
                    }
                ],
                "flags": 16777232,
                "start": 66,
                "end": 138
            },
            "flags": 33554448,
            "start": 59,
            "end": 139
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "start": 139,
                "end": 146
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "ColorIdToNumber",
                            "rawText": "ColorIdToNumber",
                            "flags": 96,
                            "start": 146,
                            "end": 162
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
                                        "left": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 134299649,
                                                    "text": "ColorId",
                                                    "rawText": "ColorId",
                                                    "flags": 96,
                                                    "start": 170,
                                                    "end": 177
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "RED",
                                                    "rawText": "RED",
                                                    "flags": 96,
                                                    "start": 178,
                                                    "end": 181
                                                },
                                                "flags": 536870944,
                                                "start": 170,
                                                "end": 181
                                            },
                                            "flags": 32,
                                            "start": 166,
                                            "end": 182
                                        },
                                        "right": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 134299649,
                                                "text": "ColorNumber",
                                                "rawText": "ColorNumber",
                                                "flags": 96,
                                                "start": 183,
                                                "end": 195
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "RED",
                                                "rawText": "RED",
                                                "flags": 96,
                                                "start": 196,
                                                "end": 199
                                            },
                                            "flags": 536870944,
                                            "start": 166,
                                            "end": 199
                                        },
                                        "flags": 33,
                                        "start": 166,
                                        "end": 199
                                    },
                                    {
                                        "kind": 219,
                                        "generatorToken": null,
                                        "left": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 134299649,
                                                    "text": "ColorId",
                                                    "rawText": "ColorId",
                                                    "flags": 96,
                                                    "start": 204,
                                                    "end": 211
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "GREEN",
                                                    "rawText": "GREEN",
                                                    "flags": 96,
                                                    "start": 212,
                                                    "end": 217
                                                },
                                                "flags": 536870944,
                                                "start": 204,
                                                "end": 217
                                            },
                                            "flags": 32,
                                            "start": 200,
                                            "end": 218
                                        },
                                        "right": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 134299649,
                                                "text": "ColorNumber",
                                                "rawText": "ColorNumber",
                                                "flags": 96,
                                                "start": 219,
                                                "end": 231
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "GREEN",
                                                "rawText": "GREEN",
                                                "flags": 96,
                                                "start": 232,
                                                "end": 237
                                            },
                                            "flags": 536870944,
                                            "start": 200,
                                            "end": 237
                                        },
                                        "flags": 33,
                                        "start": 200,
                                        "end": 237
                                    },
                                    {
                                        "kind": 219,
                                        "generatorToken": null,
                                        "left": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 134299649,
                                                    "text": "ColorId",
                                                    "rawText": "ColorId",
                                                    "flags": 96,
                                                    "start": 242,
                                                    "end": 249
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "BLUE",
                                                    "rawText": "BLUE",
                                                    "flags": 96,
                                                    "start": 250,
                                                    "end": 254
                                                },
                                                "flags": 536870944,
                                                "start": 242,
                                                "end": 254
                                            },
                                            "flags": 32,
                                            "start": 238,
                                            "end": 255
                                        },
                                        "right": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 134299649,
                                                "text": "ColorNumber",
                                                "rawText": "ColorNumber",
                                                "flags": 96,
                                                "start": 256,
                                                "end": 268
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "BLUE",
                                                "rawText": "BLUE",
                                                "flags": 96,
                                                "start": 269,
                                                "end": 273
                                            },
                                            "flags": 536870944,
                                            "start": 238,
                                            "end": 273
                                        },
                                        "flags": 33,
                                        "start": 238,
                                        "end": 273
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 17,
                                "start": 166,
                                "end": 274
                            },
                            "flags": 49,
                            "start": 164,
                            "end": 276
                        },
                        "flags": 16,
                        "start": 146,
                        "end": 276
                    }
                ],
                "flags": 16777232,
                "start": 146,
                "end": 276
            },
            "flags": 33554448,
            "start": 139,
            "end": 276
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 129,
                    "member": {
                        "kind": 134299649,
                        "text": "module",
                        "rawText": "module",
                        "flags": 96,
                        "start": 276,
                        "end": 284
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "exports",
                        "rawText": "exports",
                        "flags": 96,
                        "start": 285,
                        "end": 292
                    },
                    "flags": 536870944,
                    "start": 276,
                    "end": 292
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 292,
                    "end": 294
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 224,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 65,
                                    "start": 296,
                                    "end": 302
                                },
                                "argument": {
                                    "kind": 134299649,
                                    "text": "dummy",
                                    "rawText": "dummy",
                                    "flags": 96,
                                    "start": 302,
                                    "end": 307
                                },
                                "flags": 32,
                                "start": 296,
                                "end": 307
                            },
                            {
                                "kind": 219,
                                "generatorToken": null,
                                "left": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "hello",
                                        "rawText": "hello",
                                        "flags": 96,
                                        "start": 312,
                                        "end": 317
                                    },
                                    "flags": 32,
                                    "start": 308,
                                    "end": 318
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "world",
                                    "rawText": "'world'",
                                    "flags": 4194400,
                                    "start": 319,
                                    "end": 327
                                },
                                "flags": 33,
                                "start": 308,
                                "end": 327
                            },
                            {
                                "kind": 224,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 65,
                                    "start": 328,
                                    "end": 334
                                },
                                "argument": {
                                    "kind": 134299649,
                                    "text": "dummy",
                                    "rawText": "dummy",
                                    "flags": 96,
                                    "start": 334,
                                    "end": 339
                                },
                                "flags": 32,
                                "start": 328,
                                "end": 339
                            }
                        ],
                        "trailingComma": true,
                        "flags": 17,
                        "start": 296,
                        "end": 340
                    },
                    "flags": 49,
                    "start": 294,
                    "end": 342
                },
                "flags": 32,
                "start": 276,
                "end": 342
            },
            "flags": 16,
            "start": 276,
            "end": 343
        }
    ],
    "isModule": false,
    "source": "const ColorId = {\n  RED: 'R',\n  GREEN: 'G',\n  BLUE: 'B',\n};\n\nconst ColorNumber = {\n  RED: 'ff0000',\n  GREEN: '00ff00',\n  BLUE: '0000ff',\n};\n\nconst ColorIdToNumber = {\n  [ColorId.RED]: ColorNumber.RED,\n  [ColorId.GREEN]: ColorNumber.GREEN,\n  [ColorId.BLUE]: ColorNumber.BLUE,\n}\n\nmodule.exports = {\n  ...dummy,\n  [hello]: 'world',\n  ...dummy,\n};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 343
}
```

### Printed

```javascript

const ColorId = { RED: "'R'", GREEN: "'G'", BLUE: "'B'" };
const ColorNumber = { RED: "'ff0000'", GREEN: "'00ff00'", BLUE: "'0000ff'" };
const ColorIdToNumber = {
  [ColorId.RED]: ColorNumber.RED,
  [ColorId.GREEN]: ColorNumber.GREEN,
  [ColorId.BLUE]: ColorNumber.BLUE
};
module.exports = { ...dummy, [hello]: "'world'", ...dummy };
```

### Diagnostics

```javascript
✔ No errors
```

