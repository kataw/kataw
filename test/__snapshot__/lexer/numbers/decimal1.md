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
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 1.2,
                "autofix": 0,
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 5
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 2.3,
                "autofix": 0,
                "flags": 768,
                "start": 5,
                "end": 9
            },
            "autofix": 0,
            "flags": 128,
            "start": 5,
            "end": 11
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 3.4,
                "autofix": 0,
                "flags": 768,
                "start": 11,
                "end": 15
            },
            "autofix": 0,
            "flags": 128,
            "start": 11,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 4.5,
                "autofix": 0,
                "flags": 768,
                "start": 17,
                "end": 21
            },
            "autofix": 0,
            "flags": 128,
            "start": 17,
            "end": 23
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 5.6,
                "autofix": 0,
                "flags": 768,
                "start": 23,
                "end": 27
            },
            "autofix": 0,
            "flags": 128,
            "start": 23,
            "end": 29
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 6.7,
                "autofix": 0,
                "flags": 768,
                "start": 29,
                "end": 33
            },
            "autofix": 0,
            "flags": 128,
            "start": 29,
            "end": 35
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 7.8,
                "autofix": 0,
                "flags": 768,
                "start": 35,
                "end": 39
            },
            "autofix": 0,
            "flags": 128,
            "start": 35,
            "end": 41
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 8.9,
                "autofix": 0,
                "flags": 768,
                "start": 41,
                "end": 45
            },
            "autofix": 0,
            "flags": 128,
            "start": 41,
            "end": 47
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 9.1,
                "autofix": 0,
                "flags": 768,
                "start": 47,
                "end": 52
            },
            "autofix": 0,
            "flags": 128,
            "start": 47,
            "end": 54
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 10.23,
                "autofix": 0,
                "flags": 768,
                "start": 54,
                "end": 60
            },
            "autofix": 0,
            "flags": 128,
            "start": 54,
            "end": 62
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 21.45,
                "autofix": 0,
                "flags": 768,
                "start": 62,
                "end": 68
            },
            "autofix": 0,
            "flags": 128,
            "start": 62,
            "end": 70
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 32.56,
                "autofix": 0,
                "flags": 768,
                "start": 70,
                "end": 76
            },
            "autofix": 0,
            "flags": 128,
            "start": 70,
            "end": 78
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 43.78,
                "autofix": 0,
                "flags": 768,
                "start": 78,
                "end": 84
            },
            "autofix": 0,
            "flags": 128,
            "start": 78,
            "end": 86
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 54.98,
                "autofix": 0,
                "flags": 768,
                "start": 86,
                "end": 92
            },
            "autofix": 0,
            "flags": 128,
            "start": 86,
            "end": 94
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 65.91,
                "autofix": 0,
                "flags": 768,
                "start": 94,
                "end": 100
            },
            "autofix": 0,
            "flags": 128,
            "start": 94,
            "end": 102
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 76.05,
                "autofix": 0,
                "flags": 768,
                "start": 102,
                "end": 108
            },
            "autofix": 0,
            "flags": 128,
            "start": 102,
            "end": 110
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 87.04,
                "autofix": 0,
                "flags": 768,
                "start": 110,
                "end": 116
            },
            "autofix": 0,
            "flags": 128,
            "start": 110,
            "end": 118
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 98.54,
                "autofix": 0,
                "flags": 768,
                "start": 118,
                "end": 124
            },
            "autofix": 0,
            "flags": 128,
            "start": 118,
            "end": 126
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 19.37,
                "autofix": 0,
                "flags": 768,
                "start": 126,
                "end": 132
            },
            "autofix": 0,
            "flags": 128,
            "start": 126,
            "end": 134
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 123.012,
                "autofix": 0,
                "flags": 768,
                "start": 134,
                "end": 142
            },
            "autofix": 0,
            "flags": 128,
            "start": 134,
            "end": 144
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 456.345,
                "autofix": 0,
                "flags": 768,
                "start": 144,
                "end": 152
            },
            "autofix": 0,
            "flags": 128,
            "start": 144,
            "end": 154
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 7890.6789,
                "autofix": 0,
                "flags": 768,
                "start": 154,
                "end": 164
            },
            "autofix": 0,
            "flags": 128,
            "start": 154,
            "end": 166
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 1234567890.0987654,
                "autofix": 0,
                "flags": 768,
                "start": 166,
                "end": 188
            },
            "autofix": 0,
            "flags": 128,
            "start": 166,
            "end": 188
        }
    ],
    "isModule": false,
    "text": "1.2\n;\n2.3\n;\n3.4\n;\n4.5\n;\n5.6\n;\n6.7\n;\n7.8\n;\n8.9\n;\n9.10\n;\n10.23\n;\n21.45\n;\n32.56\n;\n43.78\n;\n54.98\n;\n65.91\n;\n76.05\n;\n87.04\n;\n98.54\n;\n19.37\n;\n123.012\n;\n456.345\n;\n7890.6789\n;\n1234567890.0987654321",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 188
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

