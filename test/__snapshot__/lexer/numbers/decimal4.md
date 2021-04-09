# Kataw parser test case

## Input

`````js
.0
;
.1
;
.2
;
.3
;
.4
;
.5
;
.6
;
.7
;
.8
;
.9
;
.10
;
.21
;
.32
;
.43
;
.54
;
.65
;
.76
;
.87
;
.98
;
.19
;
.123
;
.456
;
.7890
;
.1234567890
;
.0000
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
                "end": 2
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 4
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 0.1,
                "autofix": 0,
                "flags": 768,
                "start": 4,
                "end": 7
            },
            "autofix": 0,
            "flags": 128,
            "start": 4,
            "end": 9
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 0.2,
                "autofix": 0,
                "flags": 768,
                "start": 9,
                "end": 12
            },
            "autofix": 0,
            "flags": 128,
            "start": 9,
            "end": 14
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 0.3,
                "autofix": 0,
                "flags": 768,
                "start": 14,
                "end": 17
            },
            "autofix": 0,
            "flags": 128,
            "start": 14,
            "end": 19
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 0.4,
                "autofix": 0,
                "flags": 768,
                "start": 19,
                "end": 22
            },
            "autofix": 0,
            "flags": 128,
            "start": 19,
            "end": 24
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 0.5,
                "autofix": 0,
                "flags": 768,
                "start": 24,
                "end": 27
            },
            "autofix": 0,
            "flags": 128,
            "start": 24,
            "end": 29
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 0.6,
                "autofix": 0,
                "flags": 768,
                "start": 29,
                "end": 32
            },
            "autofix": 0,
            "flags": 128,
            "start": 29,
            "end": 34
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 0.7,
                "autofix": 0,
                "flags": 768,
                "start": 34,
                "end": 37
            },
            "autofix": 0,
            "flags": 128,
            "start": 34,
            "end": 39
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 0.8,
                "autofix": 0,
                "flags": 768,
                "start": 39,
                "end": 42
            },
            "autofix": 0,
            "flags": 128,
            "start": 39,
            "end": 44
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 0.9,
                "autofix": 0,
                "flags": 768,
                "start": 44,
                "end": 47
            },
            "autofix": 0,
            "flags": 128,
            "start": 44,
            "end": 49
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 0.1,
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
                "value": 0.21,
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
                "value": 0.32,
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
                "value": 0.43,
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
                "value": 0.54,
                "autofix": 0,
                "flags": 768,
                "start": 73,
                "end": 77
            },
            "autofix": 0,
            "flags": 128,
            "start": 73,
            "end": 79
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 0.65,
                "autofix": 0,
                "flags": 768,
                "start": 79,
                "end": 83
            },
            "autofix": 0,
            "flags": 128,
            "start": 79,
            "end": 85
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 0.76,
                "autofix": 0,
                "flags": 768,
                "start": 85,
                "end": 89
            },
            "autofix": 0,
            "flags": 128,
            "start": 85,
            "end": 91
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 0.87,
                "autofix": 0,
                "flags": 768,
                "start": 91,
                "end": 95
            },
            "autofix": 0,
            "flags": 128,
            "start": 91,
            "end": 97
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 0.98,
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
                "value": 0.19,
                "autofix": 0,
                "flags": 768,
                "start": 103,
                "end": 107
            },
            "autofix": 0,
            "flags": 128,
            "start": 103,
            "end": 109
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 0.123,
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
                "value": 0.456,
                "autofix": 0,
                "flags": 768,
                "start": 116,
                "end": 121
            },
            "autofix": 0,
            "flags": 128,
            "start": 116,
            "end": 123
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 0.789,
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
                "value": 0.123456789,
                "autofix": 0,
                "flags": 768,
                "start": 131,
                "end": 143
            },
            "autofix": 0,
            "flags": 128,
            "start": 131,
            "end": 145
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 0,
                "autofix": 0,
                "flags": 768,
                "start": 145,
                "end": 151
            },
            "autofix": 0,
            "flags": 128,
            "start": 145,
            "end": 151
        }
    ],
    "isModule": false,
    "text": ".0\n;\n.1\n;\n.2\n;\n.3\n;\n.4\n;\n.5\n;\n.6\n;\n.7\n;\n.8\n;\n.9\n;\n.10\n;\n.21\n;\n.32\n;\n.43\n;\n.54\n;\n.65\n;\n.76\n;\n.87\n;\n.98\n;\n.19\n;\n.123\n;\n.456\n;\n.7890\n;\n.1234567890\n;\n.0000",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 151
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

