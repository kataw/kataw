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
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "start": 0,
                "end": 1
            },
            "flags": 16,
            "start": 0,
            "end": 3
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1,
                "rawText": "1",
                "flags": 97,
                "start": 3,
                "end": 5
            },
            "flags": 16,
            "start": 3,
            "end": 7
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 2,
                "rawText": "2",
                "flags": 97,
                "start": 7,
                "end": 9
            },
            "flags": 16,
            "start": 7,
            "end": 11
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 3,
                "rawText": "3",
                "flags": 97,
                "start": 11,
                "end": 13
            },
            "flags": 16,
            "start": 11,
            "end": 15
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 4,
                "rawText": "4",
                "flags": 97,
                "start": 15,
                "end": 17
            },
            "flags": 16,
            "start": 15,
            "end": 19
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 5,
                "rawText": "5",
                "flags": 97,
                "start": 19,
                "end": 21
            },
            "flags": 16,
            "start": 19,
            "end": 23
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 6,
                "rawText": "6",
                "flags": 97,
                "start": 23,
                "end": 25
            },
            "flags": 16,
            "start": 23,
            "end": 27
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 7,
                "rawText": "7",
                "flags": 97,
                "start": 27,
                "end": 29
            },
            "flags": 16,
            "start": 27,
            "end": 31
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 8,
                "rawText": "8",
                "flags": 97,
                "start": 31,
                "end": 33
            },
            "flags": 16,
            "start": 31,
            "end": 35
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 9,
                "rawText": "9",
                "flags": 97,
                "start": 35,
                "end": 37
            },
            "flags": 16,
            "start": 35,
            "end": 39
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 10,
                "rawText": "1_0",
                "flags": 65633,
                "start": 39,
                "end": 43
            },
            "flags": 16,
            "start": 39,
            "end": 45
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 21,
                "rawText": "21",
                "flags": 97,
                "start": 45,
                "end": 48
            },
            "flags": 16,
            "start": 45,
            "end": 50
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 32,
                "rawText": "32",
                "flags": 97,
                "start": 50,
                "end": 53
            },
            "flags": 16,
            "start": 50,
            "end": 55
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 43,
                "rawText": "43",
                "flags": 97,
                "start": 55,
                "end": 58
            },
            "flags": 16,
            "start": 55,
            "end": 60
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 54,
                "rawText": "54",
                "flags": 97,
                "start": 60,
                "end": 63
            },
            "flags": 16,
            "start": 60,
            "end": 65
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 65,
                "rawText": "65",
                "flags": 97,
                "start": 65,
                "end": 68
            },
            "flags": 16,
            "start": 65,
            "end": 70
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 76,
                "rawText": "76",
                "flags": 97,
                "start": 70,
                "end": 73
            },
            "flags": 16,
            "start": 70,
            "end": 75
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 87,
                "rawText": "87",
                "flags": 97,
                "start": 75,
                "end": 78
            },
            "flags": 16,
            "start": 75,
            "end": 80
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 98,
                "rawText": "98",
                "flags": 97,
                "start": 80,
                "end": 83
            },
            "flags": 16,
            "start": 80,
            "end": 85
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 19,
                "rawText": "19",
                "flags": 97,
                "start": 85,
                "end": 88
            },
            "flags": 16,
            "start": 85,
            "end": 90
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 123,
                "rawText": "12_3",
                "flags": 65633,
                "start": 90,
                "end": 95
            },
            "flags": 16,
            "start": 90,
            "end": 97
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 456,
                "rawText": "456",
                "flags": 97,
                "start": 97,
                "end": 101
            },
            "flags": 16,
            "start": 97,
            "end": 103
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 7890,
                "rawText": "7890",
                "flags": 97,
                "start": 103,
                "end": 108
            },
            "flags": 16,
            "start": 103,
            "end": 110
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1234567890,
                "rawText": "123_4_5_67890",
                "flags": 65633,
                "start": 110,
                "end": 124
            },
            "flags": 16,
            "start": 110,
            "end": 124
        }
    ],
    "isModule": false,
    "text": "0\n;\n1\n;\n2\n;\n3\n;\n4\n;\n5\n;\n6\n;\n7\n;\n8\n;\n9\n;\n1_0\n;\n21\n;\n32\n;\n43\n;\n54\n;\n65\n;\n76\n;\n87\n;\n98\n;\n19\n;\n12_3\n;\n456\n;\n7890\n;\n123_4_5_67890",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 124
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

