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

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "text": 2739128,
                "rawText": "0o12345670",
                "flags": 4195072,
                "start": 0,
                "end": 10
            },
            "flags": 128,
            "start": 0,
            "end": 12
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "text": 2739128,
                "rawText": "0O12345670",
                "flags": 4195073,
                "start": 12,
                "end": 23
            },
            "flags": 128,
            "start": 12,
            "end": 25
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "text": 0,
                "rawText": "0o0",
                "flags": 4195073,
                "start": 25,
                "end": 29
            },
            "flags": 128,
            "start": 25,
            "end": 31
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "text": 1,
                "rawText": "0o1",
                "flags": 4195073,
                "start": 31,
                "end": 35
            },
            "flags": 128,
            "start": 31,
            "end": 37
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "text": 2,
                "rawText": "0o2",
                "flags": 4195073,
                "start": 37,
                "end": 41
            },
            "flags": 128,
            "start": 37,
            "end": 43
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "text": 3,
                "rawText": "0o3",
                "flags": 4195073,
                "start": 43,
                "end": 47
            },
            "flags": 128,
            "start": 43,
            "end": 49
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "text": 4,
                "rawText": "0o4",
                "flags": 4195073,
                "start": 49,
                "end": 53
            },
            "flags": 128,
            "start": 49,
            "end": 55
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "text": 5,
                "rawText": "0o5",
                "flags": 4195073,
                "start": 55,
                "end": 59
            },
            "flags": 128,
            "start": 55,
            "end": 61
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "text": 6,
                "rawText": "0o6",
                "flags": 4195073,
                "start": 61,
                "end": 65
            },
            "flags": 128,
            "start": 61,
            "end": 67
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "text": 7,
                "rawText": "0o7",
                "flags": 4195073,
                "start": 67,
                "end": 71
            },
            "flags": 128,
            "start": 67,
            "end": 73
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "text": 1,
                "rawText": "0o01",
                "flags": 4195073,
                "start": 73,
                "end": 78
            },
            "flags": 128,
            "start": 73,
            "end": 80
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "text": 10,
                "rawText": "0o12",
                "flags": 4195073,
                "start": 80,
                "end": 85
            },
            "flags": 128,
            "start": 80,
            "end": 87
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "text": 19,
                "rawText": "0o23",
                "flags": 4195073,
                "start": 87,
                "end": 92
            },
            "flags": 128,
            "start": 87,
            "end": 94
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "text": 28,
                "rawText": "0o3_4",
                "flags": 5243649,
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
                "kind": 81921,
                "text": 37,
                "rawText": "0o45",
                "flags": 4195073,
                "start": 102,
                "end": 107
            },
            "flags": 128,
            "start": 102,
            "end": 109
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "text": 46,
                "rawText": "0o56",
                "flags": 4195073,
                "start": 109,
                "end": 114
            },
            "flags": 128,
            "start": 109,
            "end": 116
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "text": 55,
                "rawText": "0o6_7",
                "flags": 5243649,
                "start": 116,
                "end": 122
            },
            "flags": 128,
            "start": 116,
            "end": 124
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "text": 56,
                "rawText": "0o70",
                "flags": 4195073,
                "start": 124,
                "end": 129
            },
            "flags": 128,
            "start": 124,
            "end": 129
        }
    ],
    "isModule": false,
    "text": "0o12345670\n;\n0O12345670\n;\n0o0\n;\n0o1\n;\n0o2\n;\n0o3\n;\n0o4\n;\n0o5\n;\n0o6\n;\n0o7\n;\n0o01\n;\n0o12\n;\n0o23\n;\n0o3_4\n;\n0o45\n;\n0o56\n;\n0o6_7\n;\n0o70\n",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "code": 1,
            "error": "Unexpected token.",
            "start": 94,
            "end": 95
        },
        {
            "kind": 2,
            "source": 0,
            "code": 1,
            "error": "Unexpected token.",
            "start": 116,
            "end": 117
        }
    ],
    "start": 0,
    "end": 130
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

