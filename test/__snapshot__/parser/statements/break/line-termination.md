# Kataw parser test case

## Input

`````js
FOR1 : for(var i=1;i<2;i++){
  LABEL1 : do {
    break
FOR1;
  } while(0);
}

FOR2 : for(var i=1;i<2;i++){
  LABEL2 : do {
    breakFOR2;
  } while(0);
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
            "kind": 163,
            "label": {
                "kind": 134299649,
                "text": "FOR1",
                "rawText": "FOR1",
                "flags": 96,
                "start": 0,
                "end": 4
            },
            "colonToken": {
                "kind": 21,
                "flags": 64,
                "start": 4,
                "end": 6
            },
            "statement": {
                "kind": 165,
                "forKeyword": {
                    "kind": 37757017,
                    "flags": 80,
                    "start": 6,
                    "end": 10
                },
                "initializer": {
                    "kind": 156,
                    "declarations": [
                        {
                            "kind": 157,
                            "binding": {
                                "kind": 134299649,
                                "text": "i",
                                "rawText": "i",
                                "flags": 96,
                                "start": 14,
                                "end": 16
                            },
                            "type": null,
                            "initializer": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 17,
                                "end": 18
                            },
                            "flags": 16,
                            "start": 14,
                            "end": 18
                        }
                    ],
                    "flags": 16,
                    "start": 14,
                    "end": 18
                },
                "condition": {
                    "kind": 127,
                    "operandToken": {
                        "kind": 196635,
                        "flags": 96,
                        "start": 24,
                        "end": 26
                    },
                    "operand": {
                        "kind": 134299649,
                        "text": "i",
                        "rawText": "i",
                        "flags": 96,
                        "start": 23,
                        "end": 24
                    },
                    "flags": 32,
                    "start": 23,
                    "end": 26
                },
                "incrementor": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "i",
                        "rawText": "i",
                        "flags": 96,
                        "start": 19,
                        "end": 20
                    },
                    "operatorToken": {
                        "kind": 536971330,
                        "flags": 96,
                        "start": 20,
                        "end": 21
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 2,
                        "rawText": "2",
                        "flags": 96,
                        "start": 21,
                        "end": 22
                    },
                    "flags": 32,
                    "start": 19,
                    "end": 22
                },
                "statement": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [
                            {
                                "kind": 163,
                                "label": {
                                    "kind": 134299649,
                                    "text": "LABEL1",
                                    "rawText": "LABEL1",
                                    "flags": 96,
                                    "start": 28,
                                    "end": 37
                                },
                                "colonToken": {
                                    "kind": 21,
                                    "flags": 64,
                                    "start": 37,
                                    "end": 39
                                },
                                "statement": {
                                    "kind": 169,
                                    "doKeyword": {
                                        "kind": 4202580,
                                        "flags": 80,
                                        "start": 39,
                                        "end": 42
                                    },
                                    "expression": {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "start": 71,
                                        "end": 72
                                    },
                                    "whileKeyword": {
                                        "kind": 37757028,
                                        "flags": 64,
                                        "start": 64,
                                        "end": 70
                                    },
                                    "statement": {
                                        "kind": 124,
                                        "block": {
                                            "kind": 249,
                                            "statements": [
                                                {
                                                    "kind": 150,
                                                    "breakKeyword": {
                                                        "kind": 37757005,
                                                        "flags": 81,
                                                        "start": 44,
                                                        "end": 54
                                                    },
                                                    "label": null,
                                                    "flags": 16,
                                                    "start": 44,
                                                    "end": 54
                                                },
                                                {
                                                    "kind": 120,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "FOR1",
                                                        "rawText": "FOR1",
                                                        "flags": 96,
                                                        "start": 54,
                                                        "end": 59
                                                    },
                                                    "flags": 16,
                                                    "start": 54,
                                                    "end": 60
                                                }
                                            ],
                                            "flags": 17,
                                            "start": 44,
                                            "end": 60
                                        },
                                        "flags": 16,
                                        "start": 42,
                                        "end": 64
                                    },
                                    "flags": 80,
                                    "start": 39,
                                    "end": 74
                                },
                                "flags": 17,
                                "start": 28,
                                "end": 74
                            }
                        ],
                        "flags": 17,
                        "start": 28,
                        "end": 74
                    },
                    "flags": 16,
                    "start": 27,
                    "end": 76
                },
                "flags": 80,
                "start": 6,
                "end": 76
            },
            "flags": 16,
            "start": 0,
            "end": 76
        },
        {
            "kind": 163,
            "label": {
                "kind": 134299649,
                "text": "FOR2",
                "rawText": "FOR2",
                "flags": 96,
                "start": 76,
                "end": 82
            },
            "colonToken": {
                "kind": 21,
                "flags": 64,
                "start": 82,
                "end": 84
            },
            "statement": {
                "kind": 165,
                "forKeyword": {
                    "kind": 37757017,
                    "flags": 80,
                    "start": 84,
                    "end": 88
                },
                "initializer": {
                    "kind": 156,
                    "declarations": [
                        {
                            "kind": 157,
                            "binding": {
                                "kind": 134299649,
                                "text": "i",
                                "rawText": "i",
                                "flags": 96,
                                "start": 92,
                                "end": 94
                            },
                            "type": null,
                            "initializer": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 95,
                                "end": 96
                            },
                            "flags": 16,
                            "start": 92,
                            "end": 96
                        }
                    ],
                    "flags": 16,
                    "start": 92,
                    "end": 96
                },
                "condition": {
                    "kind": 127,
                    "operandToken": {
                        "kind": 196635,
                        "flags": 96,
                        "start": 102,
                        "end": 104
                    },
                    "operand": {
                        "kind": 134299649,
                        "text": "i",
                        "rawText": "i",
                        "flags": 96,
                        "start": 101,
                        "end": 102
                    },
                    "flags": 32,
                    "start": 101,
                    "end": 104
                },
                "incrementor": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "i",
                        "rawText": "i",
                        "flags": 96,
                        "start": 97,
                        "end": 98
                    },
                    "operatorToken": {
                        "kind": 536971330,
                        "flags": 96,
                        "start": 98,
                        "end": 99
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 2,
                        "rawText": "2",
                        "flags": 96,
                        "start": 99,
                        "end": 100
                    },
                    "flags": 32,
                    "start": 97,
                    "end": 100
                },
                "statement": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [
                            {
                                "kind": 163,
                                "label": {
                                    "kind": 134299649,
                                    "text": "LABEL2",
                                    "rawText": "LABEL2",
                                    "flags": 96,
                                    "start": 106,
                                    "end": 115
                                },
                                "colonToken": {
                                    "kind": 21,
                                    "flags": 64,
                                    "start": 115,
                                    "end": 117
                                },
                                "statement": {
                                    "kind": 169,
                                    "doKeyword": {
                                        "kind": 4202580,
                                        "flags": 80,
                                        "start": 117,
                                        "end": 120
                                    },
                                    "expression": {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "start": 148,
                                        "end": 149
                                    },
                                    "whileKeyword": {
                                        "kind": 37757028,
                                        "flags": 64,
                                        "start": 141,
                                        "end": 147
                                    },
                                    "statement": {
                                        "kind": 124,
                                        "block": {
                                            "kind": 249,
                                            "statements": [
                                                {
                                                    "kind": 120,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "breakFOR2",
                                                        "rawText": "breakFOR2",
                                                        "flags": 96,
                                                        "start": 122,
                                                        "end": 136
                                                    },
                                                    "flags": 16,
                                                    "start": 122,
                                                    "end": 137
                                                }
                                            ],
                                            "flags": 17,
                                            "start": 122,
                                            "end": 137
                                        },
                                        "flags": 16,
                                        "start": 120,
                                        "end": 141
                                    },
                                    "flags": 80,
                                    "start": 117,
                                    "end": 151
                                },
                                "flags": 17,
                                "start": 106,
                                "end": 151
                            }
                        ],
                        "flags": 17,
                        "start": 106,
                        "end": 151
                    },
                    "flags": 16,
                    "start": 105,
                    "end": 153
                },
                "flags": 80,
                "start": 84,
                "end": 153
            },
            "flags": 17,
            "start": 76,
            "end": 153
        }
    ],
    "isModule": false,
    "source": "FOR1 : for(var i=1;i<2;i++){\n  LABEL1 : do {\n    break\nFOR1;\n  } while(0);\n}\n\nFOR2 : for(var i=1;i<2;i++){\n  LABEL2 : do {\n    breakFOR2;\n  } while(0);\n}\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 154
}
```

### Printed

```javascript

FOR1: for (; i++; i  < 2)
  {}
FOR2: for (; i++; i  < 2)
  {}
```

### Diagnostics

```javascript
✔ No errors
```

