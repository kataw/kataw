# Kataw parser test case

## Input

`````js
for ((i = 0), (len = arr.length); i < len; i++) {
  console.log(arr[i])
}

for (i = 0, len = arr.length; i < len; i++) {
  console.log(arr[i])
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
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 121,
                        "expression": {
                            "kind": 125,
                            "left": {
                                "kind": 134299649,
                                "text": "i",
                                "rawText": "i",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 6,
                                "end": 7
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 9
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 11
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 5,
                            "end": 11
                        },
                        "flags": 5,
                        "transformFlags": 0,
                        "start": 34,
                        "end": 12
                    },
                    {
                        "kind": 121,
                        "expression": {
                            "kind": 125,
                            "left": {
                                "kind": 134299649,
                                "text": "len",
                                "rawText": "len",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 18
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 18,
                                "end": 20
                            },
                            "right": {
                                "kind": 129,
                                "member": {
                                    "kind": 134299649,
                                    "text": "arr",
                                    "rawText": "arr",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 20,
                                    "end": 24
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "length",
                                    "rawText": "length",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 25,
                                    "end": 31
                                },
                                "flags": 96,
                                "transformFlags": 2,
                                "start": 20,
                                "end": 31
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 13,
                            "end": 31
                        },
                        "flags": 13,
                        "transformFlags": 0,
                        "start": 34,
                        "end": 32
                    }
                ],
                "flags": 32,
                "transformFlags": 1024,
                "start": 0,
                "end": 32
            },
            "condition": {
                "kind": 127,
                "operandToken": {
                    "kind": 196635,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 44,
                    "end": 46
                },
                "operand": {
                    "kind": 134299649,
                    "text": "i",
                    "rawText": "i",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 42,
                    "end": 44
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 42,
                "end": 46
            },
            "incrementor": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "i",
                    "rawText": "i",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 35
                },
                "operatorToken": {
                    "kind": 536971330,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 35,
                    "end": 37
                },
                "right": {
                    "kind": 134299649,
                    "text": "len",
                    "rawText": "len",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 37,
                    "end": 41
                },
                "flags": 96,
                "transformFlags": 1024,
                "start": 33,
                "end": 41
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 134299649,
                                        "text": "console",
                                        "rawText": "console",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 49,
                                        "end": 59
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "log",
                                        "rawText": "log",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 60,
                                        "end": 63
                                    },
                                    "flags": 97,
                                    "transformFlags": 2,
                                    "start": 49,
                                    "end": 63
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 130,
                                            "member": {
                                                "kind": 134299649,
                                                "text": "arr",
                                                "rawText": "arr",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 64,
                                                "end": 67
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "i",
                                                "rawText": "i",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 68,
                                                "end": 69
                                            },
                                            "flags": 536870944,
                                            "transformFlags": 4,
                                            "start": 64,
                                            "end": 70
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 64,
                                    "end": 70
                                },
                                "flags": 268435488,
                                "transformFlags": 1,
                                "start": 49,
                                "end": 71
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 49,
                            "end": 71
                        }
                    ],
                    "flags": 17,
                    "transformFlags": 0,
                    "start": 49,
                    "end": 71
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 47,
                "end": 73
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 73
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "transformFlags": 0,
                "start": 73,
                "end": 78
            },
            "initializer": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 125,
                        "left": {
                            "kind": 134299649,
                            "text": "i",
                            "rawText": "i",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 80,
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
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 83,
                            "end": 85
                        },
                        "flags": 0,
                        "transformFlags": 128,
                        "start": 73,
                        "end": 85
                    },
                    {
                        "kind": 125,
                        "left": {
                            "kind": 134299649,
                            "text": "len",
                            "rawText": "len",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 86,
                            "end": 90
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 90,
                            "end": 92
                        },
                        "right": {
                            "kind": 129,
                            "member": {
                                "kind": 134299649,
                                "text": "arr",
                                "rawText": "arr",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 92,
                                "end": 96
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "length",
                                "rawText": "length",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 97,
                                "end": 103
                            },
                            "flags": 96,
                            "transformFlags": 2,
                            "start": 92,
                            "end": 103
                        },
                        "flags": 0,
                        "transformFlags": 128,
                        "start": 86,
                        "end": 103
                    }
                ],
                "flags": 32,
                "transformFlags": 1024,
                "start": 73,
                "end": 103
            },
            "condition": {
                "kind": 127,
                "operandToken": {
                    "kind": 196635,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 115,
                    "end": 117
                },
                "operand": {
                    "kind": 134299649,
                    "text": "i",
                    "rawText": "i",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 113,
                    "end": 115
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 113,
                "end": 117
            },
            "incrementor": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "i",
                    "rawText": "i",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 104,
                    "end": 106
                },
                "operatorToken": {
                    "kind": 536971330,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 106,
                    "end": 108
                },
                "right": {
                    "kind": 134299649,
                    "text": "len",
                    "rawText": "len",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 108,
                    "end": 112
                },
                "flags": 96,
                "transformFlags": 1024,
                "start": 104,
                "end": 112
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 134299649,
                                        "text": "console",
                                        "rawText": "console",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 120,
                                        "end": 130
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "log",
                                        "rawText": "log",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 131,
                                        "end": 134
                                    },
                                    "flags": 97,
                                    "transformFlags": 2,
                                    "start": 120,
                                    "end": 134
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 130,
                                            "member": {
                                                "kind": 134299649,
                                                "text": "arr",
                                                "rawText": "arr",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 135,
                                                "end": 138
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "i",
                                                "rawText": "i",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 139,
                                                "end": 140
                                            },
                                            "flags": 536870944,
                                            "transformFlags": 4,
                                            "start": 135,
                                            "end": 141
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 135,
                                    "end": 141
                                },
                                "flags": 268435488,
                                "transformFlags": 1,
                                "start": 120,
                                "end": 142
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 120,
                            "end": 142
                        }
                    ],
                    "flags": 17,
                    "transformFlags": 0,
                    "start": 120,
                    "end": 142
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 118,
                "end": 144
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 73,
            "end": 144
        }
    ],
    "isModule": false,
    "source": "for ((i = 0), (len = arr.length); i < len; i++) {\n  console.log(arr[i])\n}\n\nfor (i = 0, len = arr.length; i < len; i++) {\n  console.log(arr[i])\n}\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 145
}
```

### Printed

```javascript

for ((i = 0), (len = arr.length); i++; i  < len)
  {
    console.log(
      arr[i]
    );
  }
for (i = 0, len = arr.length; i++; i  < len)
  {
    console.log(
      arr[i]
    );
  }

```

### Diagnostics

```javascript
✔ No errors
```

