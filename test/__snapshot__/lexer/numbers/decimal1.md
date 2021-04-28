# Kataw parser test case

## Input

`````js
1.2
;
2.3
;
3.4
;
4.5
;
5.6
;
6.7
;
7.8
;
8.9
;
9.10
;
10.23
;
21.45
;
32.56
;
43.78
;
54.98
;
65.91
;
76.05
;
87.04
;
98.54
;
19.37
;
123.012
;
456.345
;
7890.6789
;
1234567890.0987654321
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1.2,
                "rawText": "1.2",
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "flags": 128,
            "start": 0,
            "end": 5
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 2.3,
                "rawText": "2.3",
                "flags": 769,
                "start": 5,
                "end": 9
            },
            "flags": 128,
            "start": 5,
            "end": 11
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 3.4,
                "rawText": "3.4",
                "flags": 769,
                "start": 11,
                "end": 15
            },
            "flags": 128,
            "start": 11,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 4.5,
                "rawText": "4.5",
                "flags": 769,
                "start": 17,
                "end": 21
            },
            "flags": 128,
            "start": 17,
            "end": 23
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 5.6,
                "rawText": "5.6",
                "flags": 769,
                "start": 23,
                "end": 27
            },
            "flags": 128,
            "start": 23,
            "end": 29
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 6.7,
                "rawText": "6.7",
                "flags": 769,
                "start": 29,
                "end": 33
            },
            "flags": 128,
            "start": 29,
            "end": 35
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 7.8,
                "rawText": "7.8",
                "flags": 769,
                "start": 35,
                "end": 39
            },
            "flags": 128,
            "start": 35,
            "end": 41
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 8.9,
                "rawText": "8.9",
                "flags": 769,
                "start": 41,
                "end": 45
            },
            "flags": 128,
            "start": 41,
            "end": 47
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 9.1,
                "rawText": "9.10",
                "flags": 769,
                "start": 47,
                "end": 52
            },
            "flags": 128,
            "start": 47,
            "end": 54
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 10.23,
                "rawText": "10.23",
                "flags": 769,
                "start": 54,
                "end": 60
            },
            "flags": 128,
            "start": 54,
            "end": 62
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 21.45,
                "rawText": "21.45",
                "flags": 769,
                "start": 62,
                "end": 68
            },
            "flags": 128,
            "start": 62,
            "end": 70
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 32.56,
                "rawText": "32.56",
                "flags": 769,
                "start": 70,
                "end": 76
            },
            "flags": 128,
            "start": 70,
            "end": 78
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 43.78,
                "rawText": "43.78",
                "flags": 769,
                "start": 78,
                "end": 84
            },
            "flags": 128,
            "start": 78,
            "end": 86
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 54.98,
                "rawText": "54.98",
                "flags": 769,
                "start": 86,
                "end": 92
            },
            "flags": 128,
            "start": 86,
            "end": 94
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 65.91,
                "rawText": "65.91",
                "flags": 769,
                "start": 94,
                "end": 100
            },
            "flags": 128,
            "start": 94,
            "end": 102
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 76.05,
                "rawText": "76.05",
                "flags": 769,
                "start": 102,
                "end": 108
            },
            "flags": 128,
            "start": 102,
            "end": 110
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 87.04,
                "rawText": "87.04",
                "flags": 769,
                "start": 110,
                "end": 116
            },
            "flags": 128,
            "start": 110,
            "end": 118
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 98.54,
                "rawText": "98.54",
                "flags": 769,
                "start": 118,
                "end": 124
            },
            "flags": 128,
            "start": 118,
            "end": 126
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 19.37,
                "rawText": "19.37",
                "flags": 769,
                "start": 126,
                "end": 132
            },
            "flags": 128,
            "start": 126,
            "end": 134
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 123.012,
                "rawText": "123.012",
                "flags": 769,
                "start": 134,
                "end": 142
            },
            "flags": 128,
            "start": 134,
            "end": 144
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 456.345,
                "rawText": "456.345",
                "flags": 769,
                "start": 144,
                "end": 152
            },
            "flags": 128,
            "start": 144,
            "end": 154
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 7890.6789,
                "rawText": "7890.6789",
                "flags": 769,
                "start": 154,
                "end": 164
            },
            "flags": 128,
            "start": 154,
            "end": 166
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1234567890.0987654,
                "rawText": "1234567890.0987654321",
                "flags": 769,
                "start": 166,
                "end": 188
            },
            "flags": 128,
            "start": 166,
            "end": 188
        }
    ],
    "isModule": false,
    "text": "1.2\n;\n2.3\n;\n3.4\n;\n4.5\n;\n5.6\n;\n6.7\n;\n7.8\n;\n8.9\n;\n9.10\n;\n10.23\n;\n21.45\n;\n32.56\n;\n43.78\n;\n54.98\n;\n65.91\n;\n76.05\n;\n87.04\n;\n98.54\n;\n19.37\n;\n123.012\n;\n456.345\n;\n7890.6789\n;\n1234567890.0987654321",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 188
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

