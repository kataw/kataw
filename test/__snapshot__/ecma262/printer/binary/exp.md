# Kataw parser test case

## Input

`````js
a ** b ** c;
(a ** b) ** c;
a.b ** c;
(-a) ** b;
a ** -b;
-(a**b);
(a * b) ** c;
a ** (b * c);
(a % b) ** c;

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
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 35897,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 4
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 4,
                        "end": 6
                    },
                    "operatorToken": {
                        "kind": 35897,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 9
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 9,
                        "end": 11
                    },
                    "flags": 96,
                    "transformFlags": 5120,
                    "start": 6,
                    "end": 11
                },
                "flags": 96,
                "transformFlags": 5120,
                "start": 0,
                "end": 11
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 12
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 15
                        },
                        "operatorToken": {
                            "kind": 35897,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 18
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 18,
                            "end": 20
                        },
                        "flags": 96,
                        "transformFlags": 5120,
                        "start": 12,
                        "end": 20
                    },
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 21
                },
                "operatorToken": {
                    "kind": 35897,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 24
                },
                "right": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 24,
                    "end": 26
                },
                "flags": 33,
                "transformFlags": 5120,
                "start": 12,
                "end": 26
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 12,
            "end": 27
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 129,
                    "member": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 27,
                        "end": 29
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 30,
                        "end": 31
                    },
                    "flags": 97,
                    "transformFlags": 2,
                    "start": 27,
                    "end": 31
                },
                "operatorToken": {
                    "kind": 35897,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 31,
                    "end": 34
                },
                "right": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 34,
                    "end": 36
                },
                "flags": 97,
                "transformFlags": 5120,
                "start": 27,
                "end": 36
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 27,
            "end": 37
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 134318643,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 39,
                            "end": 40
                        },
                        "operand": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 40,
                            "end": 41
                        },
                        "flags": 32,
                        "transformFlags": 16384,
                        "start": 39,
                        "end": 41
                    },
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 37,
                    "end": 42
                },
                "operatorToken": {
                    "kind": 35897,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 42,
                    "end": 45
                },
                "right": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 45,
                    "end": 47
                },
                "flags": 33,
                "transformFlags": 5120,
                "start": 37,
                "end": 47
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 37,
            "end": 48
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 48,
                    "end": 50
                },
                "operatorToken": {
                    "kind": 35897,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 50,
                    "end": 53
                },
                "right": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 134318643,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 53,
                        "end": 55
                    },
                    "operand": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 55,
                        "end": 56
                    },
                    "flags": 32,
                    "transformFlags": 16384,
                    "start": 53,
                    "end": 56
                },
                "flags": 97,
                "transformFlags": 5120,
                "start": 48,
                "end": 56
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 48,
            "end": 57
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 134318643,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 57,
                    "end": 59
                },
                "operand": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 60,
                            "end": 61
                        },
                        "operatorToken": {
                            "kind": 35897,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 61,
                            "end": 63
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 63,
                            "end": 64
                        },
                        "flags": 96,
                        "transformFlags": 5120,
                        "start": 59,
                        "end": 64
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 59,
                    "end": 65
                },
                "flags": 32,
                "transformFlags": 16384,
                "start": 57,
                "end": 65
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 57,
            "end": 66
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 68,
                            "end": 69
                        },
                        "operatorToken": {
                            "kind": 201360950,
                            "flags": 96,
                            "transformFlags": 32,
                            "start": 69,
                            "end": 71
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 71,
                            "end": 73
                        },
                        "flags": 96,
                        "transformFlags": 5120,
                        "start": 66,
                        "end": 73
                    },
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 66,
                    "end": 74
                },
                "operatorToken": {
                    "kind": 35897,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 74,
                    "end": 77
                },
                "right": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 77,
                    "end": 79
                },
                "flags": 33,
                "transformFlags": 5120,
                "start": 66,
                "end": 79
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 66,
            "end": 80
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 80,
                    "end": 82
                },
                "operatorToken": {
                    "kind": 35897,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 82,
                    "end": 85
                },
                "right": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 87,
                            "end": 88
                        },
                        "operatorToken": {
                            "kind": 201360950,
                            "flags": 96,
                            "transformFlags": 32,
                            "start": 88,
                            "end": 90
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 90,
                            "end": 92
                        },
                        "flags": 96,
                        "transformFlags": 5120,
                        "start": 85,
                        "end": 92
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 85,
                    "end": 93
                },
                "flags": 97,
                "transformFlags": 5120,
                "start": 80,
                "end": 93
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 80,
            "end": 94
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 96,
                            "end": 97
                        },
                        "operatorToken": {
                            "kind": 35639,
                            "flags": 96,
                            "transformFlags": 32,
                            "start": 97,
                            "end": 99
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 99,
                            "end": 101
                        },
                        "flags": 96,
                        "transformFlags": 5120,
                        "start": 94,
                        "end": 101
                    },
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 94,
                    "end": 102
                },
                "operatorToken": {
                    "kind": 35897,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 102,
                    "end": 105
                },
                "right": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 105,
                    "end": 107
                },
                "flags": 33,
                "transformFlags": 5120,
                "start": 94,
                "end": 107
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 94,
            "end": 108
        }
    ],
    "isModule": false,
    "source": "a ** b ** c;\n(a ** b) ** c;\na.b ** c;\n(-a) ** b;\na ** -b;\n-(a**b);\n(a * b) ** c;\na ** (b * c);\n(a % b) ** c;\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 109
}
```

### Printed

```javascript
a ** b ** c;
(a ** b) ** c;

a.b ** c;

(-a) ** b;

a ** -b;

-(a ** b);

(a * b) ** c;

a ** (b * c);

(a % b) ** c;

```

### Diagnostics

```javascript
✔ No errors
```

