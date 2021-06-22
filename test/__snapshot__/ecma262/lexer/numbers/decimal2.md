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

### CST

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
                "rawText": "0e1",
                "flags": 96,
                "start": 0,
                "end": 3
            },
            "flags": 16,
            "start": 0,
            "end": 5
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 100,
                "rawText": "1e2",
                "flags": 97,
                "start": 5,
                "end": 9
            },
            "flags": 16,
            "start": 5,
            "end": 11
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 2000,
                "rawText": "2e3",
                "flags": 97,
                "start": 11,
                "end": 15
            },
            "flags": 16,
            "start": 11,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 30000,
                "rawText": "3e4",
                "flags": 97,
                "start": 17,
                "end": 21
            },
            "flags": 16,
            "start": 17,
            "end": 23
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 400000,
                "rawText": "4e5",
                "flags": 97,
                "start": 23,
                "end": 27
            },
            "flags": 16,
            "start": 23,
            "end": 29
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 5000000,
                "rawText": "5e6",
                "flags": 97,
                "start": 29,
                "end": 33
            },
            "flags": 16,
            "start": 29,
            "end": 35
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 60000000,
                "rawText": "6e7",
                "flags": 97,
                "start": 35,
                "end": 39
            },
            "flags": 16,
            "start": 35,
            "end": 41
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 700000000,
                "rawText": "7e8",
                "flags": 97,
                "start": 41,
                "end": 45
            },
            "flags": 16,
            "start": 41,
            "end": 47
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 8000000000,
                "rawText": "8e9",
                "flags": 97,
                "start": 47,
                "end": 51
            },
            "flags": 16,
            "start": 47,
            "end": 53
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 9,
                "rawText": "9e0",
                "flags": 97,
                "start": 53,
                "end": 57
            },
            "flags": 16,
            "start": 53,
            "end": 59
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 100000000000,
                "rawText": "10e10",
                "flags": 97,
                "start": 59,
                "end": 65
            },
            "flags": 16,
            "start": 59,
            "end": 67
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 2.1e+22,
                "rawText": "21e21",
                "flags": 97,
                "start": 67,
                "end": 73
            },
            "flags": 16,
            "start": 67,
            "end": 75
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 3.2e+33,
                "rawText": "32e32",
                "flags": 97,
                "start": 75,
                "end": 81
            },
            "flags": 16,
            "start": 75,
            "end": 83
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 4.3e+44,
                "rawText": "43e43",
                "flags": 97,
                "start": 83,
                "end": 89
            },
            "flags": 16,
            "start": 83,
            "end": 91
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 5.4e+55,
                "rawText": "54e54",
                "flags": 97,
                "start": 91,
                "end": 97
            },
            "flags": 16,
            "start": 91,
            "end": 99
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 6.5e+66,
                "rawText": "65e65",
                "flags": 97,
                "start": 99,
                "end": 105
            },
            "flags": 16,
            "start": 99,
            "end": 107
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 7.6e+80,
                "rawText": "76e79",
                "flags": 97,
                "start": 107,
                "end": 113
            },
            "flags": 16,
            "start": 107,
            "end": 115
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 8.7e+88,
                "rawText": "87e87",
                "flags": 97,
                "start": 115,
                "end": 121
            },
            "flags": 16,
            "start": 115,
            "end": 123
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 9.8e+99,
                "rawText": "98e98",
                "flags": 97,
                "start": 123,
                "end": 129
            },
            "flags": 16,
            "start": 123,
            "end": 131
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 190000000000000000000,
                "rawText": "19e19",
                "flags": 97,
                "start": 131,
                "end": 137
            },
            "flags": 16,
            "start": 131,
            "end": 139
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1.23e+125,
                "rawText": "123e123",
                "flags": 97,
                "start": 139,
                "end": 147
            },
            "flags": 16,
            "start": 139,
            "end": 149
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": null,
                "rawText": "456e456",
                "flags": 97,
                "start": 149,
                "end": 157
            },
            "flags": 16,
            "start": 149,
            "end": 159
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": null,
                "rawText": "7890e789",
                "flags": 97,
                "start": 159,
                "end": 168
            },
            "flags": 16,
            "start": 159,
            "end": 170
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": null,
                "rawText": "1234567890e1234567890",
                "flags": 97,
                "start": 170,
                "end": 192
            },
            "flags": 16,
            "start": 170,
            "end": 192
        }
    ],
    "isModule": true,
    "source": "0e1\n;\n1e2\n;\n2e3\n;\n3e4\n;\n4e5\n;\n5e6\n;\n6e7\n;\n7e8\n;\n8e9\n;\n9e0\n;\n10e10\n;\n21e21\n;\n32e32\n;\n43e43\n;\n54e54\n;\n65e65\n;\n76e79\n;\n87e87\n;\n98e98\n;\n19e19\n;\n123e123\n;\n456e456\n;\n7890e789\n;\n1234567890e1234567890",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 192
}
```

### Printed

```javascript

0e1;
1e2;
2e3;
3e4;
4e5;
5e6;
6e7;
7e8;
8e9;
9;
10e10;
21e21;
32e32;
43e43;
54e54;
65e65;
76e79;
87e87;
98e98;
19e19;
123e123;
456e456;
7890e789;
1234567890e1234567890;
```

### Diagnostics

```javascript
✔ No errors
```

