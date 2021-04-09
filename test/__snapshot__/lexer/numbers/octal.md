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
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 2739128,
                "autofix": 0,
                "flags": 768,
                "start": 0,
                "end": 10
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 12
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 2739128,
                "autofix": 0,
                "flags": 768,
                "start": 12,
                "end": 23
            },
            "autofix": 0,
            "flags": 128,
            "start": 12,
            "end": 25
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 0,
                "autofix": 0,
                "flags": 768,
                "start": 25,
                "end": 29
            },
            "autofix": 0,
            "flags": 128,
            "start": 25,
            "end": 31
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 1,
                "autofix": 0,
                "flags": 768,
                "start": 31,
                "end": 35
            },
            "autofix": 0,
            "flags": 128,
            "start": 31,
            "end": 37
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 2,
                "autofix": 0,
                "flags": 768,
                "start": 37,
                "end": 41
            },
            "autofix": 0,
            "flags": 128,
            "start": 37,
            "end": 43
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 3,
                "autofix": 0,
                "flags": 768,
                "start": 43,
                "end": 47
            },
            "autofix": 0,
            "flags": 128,
            "start": 43,
            "end": 49
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 4,
                "autofix": 0,
                "flags": 768,
                "start": 49,
                "end": 53
            },
            "autofix": 0,
            "flags": 128,
            "start": 49,
            "end": 55
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 5,
                "autofix": 0,
                "flags": 768,
                "start": 55,
                "end": 59
            },
            "autofix": 0,
            "flags": 128,
            "start": 55,
            "end": 61
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 6,
                "autofix": 0,
                "flags": 768,
                "start": 61,
                "end": 65
            },
            "autofix": 0,
            "flags": 128,
            "start": 61,
            "end": 67
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 7,
                "autofix": 0,
                "flags": 768,
                "start": 67,
                "end": 71
            },
            "autofix": 0,
            "flags": 128,
            "start": 67,
            "end": 73
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 1,
                "autofix": 0,
                "flags": 768,
                "start": 73,
                "end": 78
            },
            "autofix": 0,
            "flags": 128,
            "start": 73,
            "end": 80
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 10,
                "autofix": 0,
                "flags": 768,
                "start": 80,
                "end": 85
            },
            "autofix": 0,
            "flags": 128,
            "start": 80,
            "end": 87
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 19,
                "autofix": 0,
                "flags": 768,
                "start": 87,
                "end": 92
            },
            "autofix": 0,
            "flags": 128,
            "start": 87,
            "end": 94
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 28,
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
                "value": 37,
                "autofix": 0,
                "flags": 768,
                "start": 102,
                "end": 107
            },
            "autofix": 0,
            "flags": 128,
            "start": 102,
            "end": 109
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 46,
                "autofix": 0,
                "flags": 768,
                "start": 109,
                "end": 114
            },
            "autofix": 0,
            "flags": 128,
            "start": 109,
            "end": 116
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 55,
                "autofix": 0,
                "flags": 768,
                "start": 116,
                "end": 122
            },
            "autofix": 0,
            "flags": 128,
            "start": 116,
            "end": 124
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 56,
                "autofix": 0,
                "flags": 768,
                "start": 124,
                "end": 129
            },
            "autofix": 0,
            "flags": 128,
            "start": 124,
            "end": 129
        }
    ],
    "isModule": false,
    "text": "0o12345670\n;\n0O12345670\n;\n0o0\n;\n0o1\n;\n0o2\n;\n0o3\n;\n0o4\n;\n0o5\n;\n0o6\n;\n0o7\n;\n0o01\n;\n0o12\n;\n0o23\n;\n0o3_4\n;\n0o45\n;\n0o56\n;\n0o6_7\n;\n0o70\n",
    "fileName": "__root__",
    "autofix": 0,
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

