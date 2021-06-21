# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input

`````js
x = 0;
x.y = 0;
x[y] = 0;
[,] = 0;
[x] = 0;
[x = y] = 0;
[...x] = 0;
({...x} = 0);
({x = 0} = 0);
({x: y = 0} = 0);
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 3,
                    "end": 5
                },
                "flags": 32,
                "start": 0,
                "end": 5
            },
            "flags": 16,
            "start": 0,
            "end": 6
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 129,
                    "member": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 6,
                        "end": 8
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 9,
                        "end": 10
                    },
                    "flags": 536870944,
                    "start": 6,
                    "end": 10
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 10,
                    "end": 12
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 12,
                    "end": 14
                },
                "flags": 32,
                "start": 6,
                "end": 14
            },
            "flags": 16,
            "start": 6,
            "end": 15
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 130,
                    "member": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 15,
                        "end": 17
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 18,
                        "end": 19
                    },
                    "flags": 536870944,
                    "start": 15,
                    "end": 20
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 20,
                    "end": 22
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 22,
                    "end": 24
                },
                "flags": 32,
                "start": 15,
                "end": 24
            },
            "flags": 16,
            "start": 15,
            "end": 25
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 230,
                                "flags": 96,
                                "start": 27,
                                "end": 27
                            }
                        ],
                        "trailingComma": true,
                        "flags": 32,
                        "start": 27,
                        "end": 28
                    },
                    "flags": 33,
                    "start": 25,
                    "end": 29
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 29,
                    "end": 31
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 31,
                    "end": 33
                },
                "flags": 32,
                "start": 25,
                "end": 33
            },
            "flags": 16,
            "start": 25,
            "end": 34
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 36,
                                "end": 37
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 36,
                        "end": 37
                    },
                    "flags": 33,
                    "start": 34,
                    "end": 38
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 38,
                    "end": 40
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 40,
                    "end": 42
                },
                "flags": 32,
                "start": 34,
                "end": 42
            },
            "flags": 16,
            "start": 34,
            "end": 43
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 45,
                                    "end": 46
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 46,
                                    "end": 48
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 48,
                                    "end": 50
                                },
                                "flags": 32,
                                "start": 45,
                                "end": 50
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 45,
                        "end": 50
                    },
                    "flags": 33,
                    "start": 43,
                    "end": 51
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 51,
                    "end": 53
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 53,
                    "end": 55
                },
                "flags": 32,
                "start": 43,
                "end": 55
            },
            "flags": 16,
            "start": 43,
            "end": 56
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 223,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 64,
                                    "start": 58,
                                    "end": 61
                                },
                                "argument": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 61,
                                    "end": 62
                                },
                                "flags": 32,
                                "start": 58,
                                "end": 62
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 58,
                        "end": 62
                    },
                    "flags": 33,
                    "start": 56,
                    "end": 63
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 63,
                    "end": 65
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 65,
                    "end": 67
                },
                "flags": 32,
                "start": 56,
                "end": 67
            },
            "flags": 16,
            "start": 56,
            "end": 68
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 224,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 64,
                                        "start": 71,
                                        "end": 74
                                    },
                                    "argument": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 74,
                                        "end": 75
                                    },
                                    "flags": 32,
                                    "start": 71,
                                    "end": 75
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 71,
                            "end": 75
                        },
                        "flags": 48,
                        "start": 70,
                        "end": 76
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 76,
                        "end": 78
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 0,
                        "rawText": "0",
                        "flags": 96,
                        "start": 78,
                        "end": 80
                    },
                    "flags": 32,
                    "start": 70,
                    "end": 80
                },
                "flags": 32,
                "start": 68,
                "end": 81
            },
            "flags": 16,
            "start": 68,
            "end": 82
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 301,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 85,
                                        "end": 86
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "start": 88,
                                        "end": 90
                                    },
                                    "flags": 32,
                                    "start": 85,
                                    "end": 90
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 85,
                            "end": 90
                        },
                        "flags": 48,
                        "start": 84,
                        "end": 91
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 91,
                        "end": 93
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 0,
                        "rawText": "0",
                        "flags": 96,
                        "start": 93,
                        "end": 95
                    },
                    "flags": 32,
                    "start": 84,
                    "end": 95
                },
                "flags": 32,
                "start": 82,
                "end": 96
            },
            "flags": 16,
            "start": 82,
            "end": 97
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 100,
                                        "end": 101
                                    },
                                    "right": {
                                        "kind": 125,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 102,
                                            "end": 104
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 96,
                                            "start": 104,
                                            "end": 106
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 96,
                                            "start": 106,
                                            "end": 108
                                        },
                                        "flags": 32,
                                        "start": 100,
                                        "end": 108
                                    },
                                    "flags": 32,
                                    "start": 100,
                                    "end": 108
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 100,
                            "end": 108
                        },
                        "flags": 48,
                        "start": 99,
                        "end": 109
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 109,
                        "end": 111
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 0,
                        "rawText": "0",
                        "flags": 96,
                        "start": 111,
                        "end": 113
                    },
                    "flags": 32,
                    "start": 99,
                    "end": 113
                },
                "flags": 32,
                "start": 97,
                "end": 114
            },
            "flags": 16,
            "start": 97,
            "end": 115
        }
    ],
    "isModule": false,
    "source": "x = 0;\nx.y = 0;\nx[y] = 0;\n[,] = 0;\n[x] = 0;\n[x = y] = 0;\n[...x] = 0;\n({...x} = 0);\n({x = 0} = 0);\n({x: y = 0} = 0);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 115
}
```

### Printed

```javascript

 x=0;, x.y=0;, x[y]=0;, []=0;, [x]=0;, [x=y]=0;, [...x]=0;, ({  }=0);, ({ x = 0 }=0);, ({ x : y=0 }=0); 
```

### Diagnostics

```javascript
✔ No errors
```

