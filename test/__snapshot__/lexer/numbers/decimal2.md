# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: false, next: true, module: true }
`````

## Input

`````js
0e1
;
1e2
;
2e3
;
3e4
;
4e5
;
5e6
;
6e7
;
7e8
;
8e9
;
9e0
;
10e10
;
21e21
;
32e32
;
43e43
;
54e54
;
65e65
;
76e79
;
87e87
;
98e98
;
19e19
;
123e123
;
456e456
;
7890e789
;
1234567890e1234567890
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
                "value": 100,
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
                "value": 2000,
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
                "value": 30000,
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
                "value": 400000,
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
                "value": 5000000,
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
                "value": 60000000,
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
                "value": 700000000,
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
                "value": 8000000000,
                "autofix": 0,
                "flags": 768,
                "start": 47,
                "end": 51
            },
            "autofix": 0,
            "flags": 128,
            "start": 47,
            "end": 53
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 9,
                "autofix": 0,
                "flags": 768,
                "start": 53,
                "end": 57
            },
            "autofix": 0,
            "flags": 128,
            "start": 53,
            "end": 59
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 100000000000,
                "autofix": 0,
                "flags": 768,
                "start": 59,
                "end": 65
            },
            "autofix": 0,
            "flags": 128,
            "start": 59,
            "end": 67
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 2.1e+22,
                "autofix": 0,
                "flags": 768,
                "start": 67,
                "end": 73
            },
            "autofix": 0,
            "flags": 128,
            "start": 67,
            "end": 75
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 3.2e+33,
                "autofix": 0,
                "flags": 768,
                "start": 75,
                "end": 81
            },
            "autofix": 0,
            "flags": 128,
            "start": 75,
            "end": 83
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 4.3e+44,
                "autofix": 0,
                "flags": 768,
                "start": 83,
                "end": 89
            },
            "autofix": 0,
            "flags": 128,
            "start": 83,
            "end": 91
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 5.4e+55,
                "autofix": 0,
                "flags": 768,
                "start": 91,
                "end": 97
            },
            "autofix": 0,
            "flags": 128,
            "start": 91,
            "end": 99
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 6.5e+66,
                "autofix": 0,
                "flags": 768,
                "start": 99,
                "end": 105
            },
            "autofix": 0,
            "flags": 128,
            "start": 99,
            "end": 107
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 7.6e+80,
                "autofix": 0,
                "flags": 768,
                "start": 107,
                "end": 113
            },
            "autofix": 0,
            "flags": 128,
            "start": 107,
            "end": 115
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 8.7e+88,
                "autofix": 0,
                "flags": 768,
                "start": 115,
                "end": 121
            },
            "autofix": 0,
            "flags": 128,
            "start": 115,
            "end": 123
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 9.8e+99,
                "autofix": 0,
                "flags": 768,
                "start": 123,
                "end": 129
            },
            "autofix": 0,
            "flags": 128,
            "start": 123,
            "end": 131
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 190000000000000000000,
                "autofix": 0,
                "flags": 768,
                "start": 131,
                "end": 137
            },
            "autofix": 0,
            "flags": 128,
            "start": 131,
            "end": 139
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 1.23e+125,
                "autofix": 0,
                "flags": 768,
                "start": 139,
                "end": 147
            },
            "autofix": 0,
            "flags": 128,
            "start": 139,
            "end": 149
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": null,
                "autofix": 0,
                "flags": 768,
                "start": 149,
                "end": 157
            },
            "autofix": 0,
            "flags": 128,
            "start": 149,
            "end": 159
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": null,
                "autofix": 0,
                "flags": 768,
                "start": 159,
                "end": 168
            },
            "autofix": 0,
            "flags": 128,
            "start": 159,
            "end": 170
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": null,
                "autofix": 0,
                "flags": 768,
                "start": 170,
                "end": 192
            },
            "autofix": 0,
            "flags": 128,
            "start": 170,
            "end": 192
        }
    ],
    "isModule": true,
    "text": "0e1\n;\n1e2\n;\n2e3\n;\n3e4\n;\n4e5\n;\n5e6\n;\n6e7\n;\n7e8\n;\n8e9\n;\n9e0\n;\n10e10\n;\n21e21\n;\n32e32\n;\n43e43\n;\n54e54\n;\n65e65\n;\n76e79\n;\n87e87\n;\n98e98\n;\n19e19\n;\n123e123\n;\n456e456\n;\n7890e789\n;\n1234567890e1234567890",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 192
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

