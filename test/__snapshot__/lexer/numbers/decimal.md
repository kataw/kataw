# Kataw parser test case

## Input

`````js
0
;
1
;
2
;
3
;
4
;
5
;
6
;
7
;
8
;
9
;
1_0
;
21
;
32
;
43
;
54
;
65
;
76
;
87
;
98
;
19
;
12_3
;
456
;
7890
;
123_4_5_67890
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
                "value": 0,
                "autofix": 0,
                "flags": 768,
                "start": 0,
                "end": 1
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 3
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 1,
                "autofix": 0,
                "flags": 768,
                "start": 3,
                "end": 5
            },
            "autofix": 0,
            "flags": 128,
            "start": 3,
            "end": 7
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 2,
                "autofix": 0,
                "flags": 768,
                "start": 7,
                "end": 9
            },
            "autofix": 0,
            "flags": 128,
            "start": 7,
            "end": 11
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 3,
                "autofix": 0,
                "flags": 768,
                "start": 11,
                "end": 13
            },
            "autofix": 0,
            "flags": 128,
            "start": 11,
            "end": 15
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 4,
                "autofix": 0,
                "flags": 768,
                "start": 15,
                "end": 17
            },
            "autofix": 0,
            "flags": 128,
            "start": 15,
            "end": 19
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 5,
                "autofix": 0,
                "flags": 768,
                "start": 19,
                "end": 21
            },
            "autofix": 0,
            "flags": 128,
            "start": 19,
            "end": 23
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 6,
                "autofix": 0,
                "flags": 768,
                "start": 23,
                "end": 25
            },
            "autofix": 0,
            "flags": 128,
            "start": 23,
            "end": 27
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 7,
                "autofix": 0,
                "flags": 768,
                "start": 27,
                "end": 29
            },
            "autofix": 0,
            "flags": 128,
            "start": 27,
            "end": 31
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 8,
                "autofix": 0,
                "flags": 768,
                "start": 31,
                "end": 33
            },
            "autofix": 0,
            "flags": 128,
            "start": 31,
            "end": 35
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 9,
                "autofix": 0,
                "flags": 768,
                "start": 35,
                "end": 37
            },
            "autofix": 0,
            "flags": 128,
            "start": 35,
            "end": 39
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 10,
                "autofix": 0,
                "flags": 768,
                "start": 39,
                "end": 43
            },
            "autofix": 0,
            "flags": 128,
            "start": 39,
            "end": 45
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 21,
                "autofix": 0,
                "flags": 768,
                "start": 45,
                "end": 48
            },
            "autofix": 0,
            "flags": 128,
            "start": 45,
            "end": 50
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 32,
                "autofix": 0,
                "flags": 768,
                "start": 50,
                "end": 53
            },
            "autofix": 0,
            "flags": 128,
            "start": 50,
            "end": 55
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 43,
                "autofix": 0,
                "flags": 768,
                "start": 55,
                "end": 58
            },
            "autofix": 0,
            "flags": 128,
            "start": 55,
            "end": 60
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 54,
                "autofix": 0,
                "flags": 768,
                "start": 60,
                "end": 63
            },
            "autofix": 0,
            "flags": 128,
            "start": 60,
            "end": 65
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 65,
                "autofix": 0,
                "flags": 768,
                "start": 65,
                "end": 68
            },
            "autofix": 0,
            "flags": 128,
            "start": 65,
            "end": 70
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 76,
                "autofix": 0,
                "flags": 768,
                "start": 70,
                "end": 73
            },
            "autofix": 0,
            "flags": 128,
            "start": 70,
            "end": 75
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 87,
                "autofix": 0,
                "flags": 768,
                "start": 75,
                "end": 78
            },
            "autofix": 0,
            "flags": 128,
            "start": 75,
            "end": 80
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 98,
                "autofix": 0,
                "flags": 768,
                "start": 80,
                "end": 83
            },
            "autofix": 0,
            "flags": 128,
            "start": 80,
            "end": 85
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 19,
                "autofix": 0,
                "flags": 768,
                "start": 85,
                "end": 88
            },
            "autofix": 0,
            "flags": 128,
            "start": 85,
            "end": 90
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 123,
                "autofix": 0,
                "flags": 768,
                "start": 90,
                "end": 95
            },
            "autofix": 0,
            "flags": 128,
            "start": 90,
            "end": 97
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 456,
                "autofix": 0,
                "flags": 768,
                "start": 97,
                "end": 101
            },
            "autofix": 0,
            "flags": 128,
            "start": 97,
            "end": 103
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 7890,
                "autofix": 0,
                "flags": 768,
                "start": 103,
                "end": 108
            },
            "autofix": 0,
            "flags": 128,
            "start": 103,
            "end": 110
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 1234567890,
                "autofix": 0,
                "flags": 768,
                "start": 110,
                "end": 124
            },
            "autofix": 0,
            "flags": 128,
            "start": 110,
            "end": 124
        }
    ],
    "isModule": false,
    "text": "0\n;\n1\n;\n2\n;\n3\n;\n4\n;\n5\n;\n6\n;\n7\n;\n8\n;\n9\n;\n1_0\n;\n21\n;\n32\n;\n43\n;\n54\n;\n65\n;\n76\n;\n87\n;\n98\n;\n19\n;\n12_3\n;\n456\n;\n7890\n;\n123_4_5_67890",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 124
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

