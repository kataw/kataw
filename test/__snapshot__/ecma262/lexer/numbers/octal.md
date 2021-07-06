# Kataw parser test case

## Input

`````js
0o12345670
;
0O12345670
;
0o0
;
0o1
;
0o2
;
0o3
;
0o4
;
0o5
;
0o6
;
0o7
;
0o01
;
0o12
;
0o23
;
0o3_4
;
0o45
;
0o56
;
0o6_7
;
0o70

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
                "text": 2739128,
                "rawText": "0o12345670",
                "flags": 262240,
                "transformFlags": 0,
                "start": 0,
                "end": 10
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 12
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 2739128,
                "rawText": "0O12345670",
                "flags": 262240,
                "transformFlags": 0,
                "start": 12,
                "end": 23
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 12,
            "end": 25
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0o0",
                "flags": 262240,
                "transformFlags": 0,
                "start": 25,
                "end": 29
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 25,
            "end": 31
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1,
                "rawText": "0o1",
                "flags": 262240,
                "transformFlags": 0,
                "start": 31,
                "end": 35
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 31,
            "end": 37
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 2,
                "rawText": "0o2",
                "flags": 262240,
                "transformFlags": 0,
                "start": 37,
                "end": 41
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 37,
            "end": 43
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 3,
                "rawText": "0o3",
                "flags": 262240,
                "transformFlags": 0,
                "start": 43,
                "end": 47
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 43,
            "end": 49
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 4,
                "rawText": "0o4",
                "flags": 262240,
                "transformFlags": 0,
                "start": 49,
                "end": 53
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 49,
            "end": 55
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 5,
                "rawText": "0o5",
                "flags": 262240,
                "transformFlags": 0,
                "start": 55,
                "end": 59
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 55,
            "end": 61
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 6,
                "rawText": "0o6",
                "flags": 262240,
                "transformFlags": 0,
                "start": 61,
                "end": 65
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 61,
            "end": 67
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 7,
                "rawText": "0o7",
                "flags": 262240,
                "transformFlags": 0,
                "start": 67,
                "end": 71
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 67,
            "end": 73
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1,
                "rawText": "0o01",
                "flags": 262240,
                "transformFlags": 0,
                "start": 73,
                "end": 78
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 73,
            "end": 80
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 10,
                "rawText": "0o12",
                "flags": 262240,
                "transformFlags": 0,
                "start": 80,
                "end": 85
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 80,
            "end": 87
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 19,
                "rawText": "0o23",
                "flags": 262240,
                "transformFlags": 0,
                "start": 87,
                "end": 92
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 87,
            "end": 94
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 28,
                "rawText": "0o3_4",
                "flags": 327776,
                "transformFlags": 0,
                "start": 94,
                "end": 100
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 94,
            "end": 102
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 37,
                "rawText": "0o45",
                "flags": 262240,
                "transformFlags": 0,
                "start": 102,
                "end": 107
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 102,
            "end": 109
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 46,
                "rawText": "0o56",
                "flags": 262240,
                "transformFlags": 0,
                "start": 109,
                "end": 114
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 109,
            "end": 116
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 55,
                "rawText": "0o6_7",
                "flags": 327776,
                "transformFlags": 0,
                "start": 116,
                "end": 122
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 116,
            "end": 124
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 56,
                "rawText": "0o70",
                "flags": 262240,
                "transformFlags": 0,
                "start": 124,
                "end": 129
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 124,
            "end": 129
        }
    ],
    "isModule": false,
    "source": "0o12345670\n;\n0O12345670\n;\n0o0\n;\n0o1\n;\n0o2\n;\n0o3\n;\n0o4\n;\n0o5\n;\n0o6\n;\n0o7\n;\n0o01\n;\n0o12\n;\n0o23\n;\n0o3_4\n;\n0o45\n;\n0o56\n;\n0o6_7\n;\n0o70\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 130
}
```

### Printed

```javascript

0o12345670;
0o12345670;

0o0;

0o1;

0o2;

0o3;

0o4;

0o5;

0o6;

0o7;

0o01;

0o12;

0o23;

0o3_4;

0o45;

0o56;

0o6_7;

0o70;

```

### Diagnostics

```javascript
✔ No errors
```

