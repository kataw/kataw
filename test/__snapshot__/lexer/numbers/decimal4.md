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
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0,
                "original": ".0",
                "rawText": ".0",
                "flags": 32864,
                "start": 0,
                "end": 2
            },
            "flags": 16,
            "start": 0,
            "end": 4
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0.1,
                "original": ".1",
                "rawText": "\n.1",
                "flags": 32865,
                "start": 4,
                "end": 7
            },
            "flags": 16,
            "start": 4,
            "end": 9
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0.2,
                "original": ".2",
                "rawText": "\n.2",
                "flags": 32865,
                "start": 9,
                "end": 12
            },
            "flags": 16,
            "start": 9,
            "end": 14
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0.3,
                "original": ".3",
                "rawText": "\n.3",
                "flags": 32865,
                "start": 14,
                "end": 17
            },
            "flags": 16,
            "start": 14,
            "end": 19
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0.4,
                "original": ".4",
                "rawText": "\n.4",
                "flags": 32865,
                "start": 19,
                "end": 22
            },
            "flags": 16,
            "start": 19,
            "end": 24
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0.5,
                "original": ".5",
                "rawText": "\n.5",
                "flags": 32865,
                "start": 24,
                "end": 27
            },
            "flags": 16,
            "start": 24,
            "end": 29
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0.6,
                "original": ".6",
                "rawText": "\n.6",
                "flags": 32865,
                "start": 29,
                "end": 32
            },
            "flags": 16,
            "start": 29,
            "end": 34
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0.7,
                "original": ".7",
                "rawText": "\n.7",
                "flags": 32865,
                "start": 34,
                "end": 37
            },
            "flags": 16,
            "start": 34,
            "end": 39
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0.8,
                "original": ".8",
                "rawText": "\n.8",
                "flags": 32865,
                "start": 39,
                "end": 42
            },
            "flags": 16,
            "start": 39,
            "end": 44
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0.9,
                "original": ".9",
                "rawText": "\n.9",
                "flags": 32865,
                "start": 44,
                "end": 47
            },
            "flags": 16,
            "start": 44,
            "end": 49
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0.1,
                "original": ".10",
                "rawText": "\n.10",
                "flags": 32865,
                "start": 49,
                "end": 53
            },
            "flags": 16,
            "start": 49,
            "end": 55
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0.21,
                "original": ".21",
                "rawText": "\n.21",
                "flags": 32865,
                "start": 55,
                "end": 59
            },
            "flags": 16,
            "start": 55,
            "end": 61
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0.32,
                "original": ".32",
                "rawText": "\n.32",
                "flags": 32865,
                "start": 61,
                "end": 65
            },
            "flags": 16,
            "start": 61,
            "end": 67
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0.43,
                "original": ".43",
                "rawText": "\n.43",
                "flags": 32865,
                "start": 67,
                "end": 71
            },
            "flags": 16,
            "start": 67,
            "end": 73
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0.54,
                "original": ".54",
                "rawText": "\n.54",
                "flags": 32865,
                "start": 73,
                "end": 77
            },
            "flags": 16,
            "start": 73,
            "end": 79
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0.65,
                "original": ".65",
                "rawText": "\n.65",
                "flags": 32865,
                "start": 79,
                "end": 83
            },
            "flags": 16,
            "start": 79,
            "end": 85
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0.76,
                "original": ".76",
                "rawText": "\n.76",
                "flags": 32865,
                "start": 85,
                "end": 89
            },
            "flags": 16,
            "start": 85,
            "end": 91
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0.87,
                "original": ".87",
                "rawText": "\n.87",
                "flags": 32865,
                "start": 91,
                "end": 95
            },
            "flags": 16,
            "start": 91,
            "end": 97
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0.98,
                "original": ".98",
                "rawText": "\n.98",
                "flags": 32865,
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
                "text": 0.19,
                "original": ".19",
                "rawText": "\n.19",
                "flags": 32865,
                "start": 103,
                "end": 107
            },
            "flags": 16,
            "start": 103,
            "end": 109
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0.123,
                "original": ".123",
                "rawText": "\n.123",
                "flags": 32865,
                "start": 109,
                "end": 114
            },
            "flags": 16,
            "start": 109,
            "end": 116
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0.456,
                "original": ".456",
                "rawText": "\n.456",
                "flags": 32865,
                "start": 116,
                "end": 121
            },
            "flags": 16,
            "start": 116,
            "end": 123
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0.789,
                "original": ".7890",
                "rawText": "\n.7890",
                "flags": 32865,
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
                "text": 0.123456789,
                "original": ".1234567890",
                "rawText": "\n.1234567890",
                "flags": 32865,
                "start": 131,
                "end": 143
            },
            "flags": 16,
            "start": 131,
            "end": 145
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0,
                "original": ".0000",
                "rawText": "\n.0000",
                "flags": 32865,
                "start": 145,
                "end": 151
            },
            "flags": 16,
            "start": 145,
            "end": 151
        }
    ],
    "isModule": false,
    "source": ".0\n;\n.1\n;\n.2\n;\n.3\n;\n.4\n;\n.5\n;\n.6\n;\n.7\n;\n.8\n;\n.9\n;\n.10\n;\n.21\n;\n.32\n;\n.43\n;\n.54\n;\n.65\n;\n.76\n;\n.87\n;\n.98\n;\n.19\n;\n.123\n;\n.456\n;\n.7890\n;\n.1234567890\n;\n.0000",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 151
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

