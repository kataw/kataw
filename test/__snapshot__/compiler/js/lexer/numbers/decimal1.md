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
    "kind": 196,
    "source": "1.2\n;\n2.3\n;\n3.4\n;\n4.5\n;\n5.6\n;\n6.7\n;\n7.8\n;\n8.9\n;\n9.10\n;\n10.23\n;\n21.45\n;\n32.56\n;\n43.78\n;\n54.98\n;\n65.91\n;\n76.05\n;\n87.04\n;\n98.54\n;\n19.37\n;\n123.012\n;\n456.345\n;\n7890.6789\n;\n1234567890.0987654321",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261540,
                    "text": 1.2,
                    "rawText": "1.2",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 0,
                    "end": 3
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 5
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261540,
                    "text": 2.3,
                    "rawText": "2.3",
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 5,
                    "end": 9
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 5,
                "end": 11
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261540,
                    "text": 3.4,
                    "rawText": "3.4",
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 11,
                    "end": 15
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 11,
                "end": 17
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261540,
                    "text": 4.5,
                    "rawText": "4.5",
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 17,
                    "end": 21
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 17,
                "end": 23
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261540,
                    "text": 5.6,
                    "rawText": "5.6",
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 23,
                    "end": 27
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 23,
                "end": 29
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261540,
                    "text": 6.7,
                    "rawText": "6.7",
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 29,
                    "end": 33
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 29,
                "end": 35
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261540,
                    "text": 7.8,
                    "rawText": "7.8",
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 35,
                    "end": 39
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 35,
                "end": 41
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261540,
                    "text": 8.9,
                    "rawText": "8.9",
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 41,
                    "end": 45
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 41,
                "end": 47
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261540,
                    "text": 9.1,
                    "rawText": "9.10",
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 47,
                    "end": 52
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 47,
                "end": 54
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261540,
                    "text": 10.23,
                    "rawText": "10.23",
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 54,
                    "end": 60
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 54,
                "end": 62
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261540,
                    "text": 21.45,
                    "rawText": "21.45",
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 62,
                    "end": 68
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 62,
                "end": 70
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261540,
                    "text": 32.56,
                    "rawText": "32.56",
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 70,
                    "end": 76
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 70,
                "end": 78
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261540,
                    "text": 43.78,
                    "rawText": "43.78",
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 78,
                    "end": 84
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 78,
                "end": 86
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261540,
                    "text": 54.98,
                    "rawText": "54.98",
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 86,
                    "end": 92
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 86,
                "end": 94
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261540,
                    "text": 65.91,
                    "rawText": "65.91",
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 94,
                    "end": 100
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 94,
                "end": 102
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261540,
                    "text": 76.05,
                    "rawText": "76.05",
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 102,
                    "end": 108
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 102,
                "end": 110
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261540,
                    "text": 87.04,
                    "rawText": "87.04",
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 110,
                    "end": 116
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 110,
                "end": 118
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261540,
                    "text": 98.54,
                    "rawText": "98.54",
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 118,
                    "end": 124
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 118,
                "end": 126
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261540,
                    "text": 19.37,
                    "rawText": "19.37",
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 126,
                    "end": 132
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 126,
                "end": 134
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261540,
                    "text": 123.012,
                    "rawText": "123.012",
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 134,
                    "end": 142
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 134,
                "end": 144
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261540,
                    "text": 456.345,
                    "rawText": "456.345",
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 144,
                    "end": 152
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 144,
                "end": 154
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261540,
                    "text": 7890.6789,
                    "rawText": "7890.6789",
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 154,
                    "end": 164
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 154,
                "end": 166
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261540,
                    "text": 1234567890.0987654,
                    "rawText": "1234567890.0987654321",
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 166,
                    "end": 188
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 166,
                "end": 188
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 188
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
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

