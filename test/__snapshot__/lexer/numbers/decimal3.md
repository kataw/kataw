# Kataw parser test case

## Input

`````js
0e-100
;
1e-100
;
0E-100
;
1E-100
;
0.e-100
;
1.e-100
;
0.E-100
;
1.E-100
;
0.1e-100
;
1.1e-100
;
0.1E-100
;
1.1E-100
;
.0e-100
;
.1e-100
;
.0E-100
;
.1E-100
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
                "kind": 134299649,
                "text": 0,
                "rawText": "0e-100",
                "flags": 768,
                "start": 0,
                "end": 6
            },
            "flags": 128,
            "start": 0,
            "end": 8
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": 1e-100,
                "rawText": "1e-100",
                "flags": 769,
                "start": 8,
                "end": 15
            },
            "flags": 128,
            "start": 8,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": 0,
                "rawText": "0E-100",
                "flags": 769,
                "start": 17,
                "end": 24
            },
            "flags": 128,
            "start": 17,
            "end": 26
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": 1e-100,
                "rawText": "1E-100",
                "flags": 769,
                "start": 26,
                "end": 33
            },
            "flags": 128,
            "start": 26,
            "end": 35
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": 0,
                "rawText": "0.e-100",
                "flags": 769,
                "start": 35,
                "end": 43
            },
            "flags": 128,
            "start": 35,
            "end": 45
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": 1e-100,
                "rawText": "1.e-100",
                "flags": 769,
                "start": 45,
                "end": 53
            },
            "flags": 128,
            "start": 45,
            "end": 55
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": 0,
                "rawText": "0.E-100",
                "flags": 769,
                "start": 55,
                "end": 63
            },
            "flags": 128,
            "start": 55,
            "end": 65
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": 1e-100,
                "rawText": "1.E-100",
                "flags": 769,
                "start": 65,
                "end": 73
            },
            "flags": 128,
            "start": 65,
            "end": 75
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": 1e-101,
                "rawText": "0.1e-100",
                "flags": 769,
                "start": 75,
                "end": 84
            },
            "flags": 128,
            "start": 75,
            "end": 86
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": 1.1e-100,
                "rawText": "1.1e-100",
                "flags": 769,
                "start": 86,
                "end": 95
            },
            "flags": 128,
            "start": 86,
            "end": 97
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": 1e-101,
                "rawText": "0.1E-100",
                "flags": 769,
                "start": 97,
                "end": 106
            },
            "flags": 128,
            "start": 97,
            "end": 108
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": 1.1e-100,
                "rawText": "1.1E-100",
                "flags": 769,
                "start": 108,
                "end": 117
            },
            "flags": 128,
            "start": 108,
            "end": 119
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": 0,
                "rawText": ".0e-100",
                "flags": 525057,
                "start": 119,
                "end": 127
            },
            "flags": 128,
            "start": 119,
            "end": 129
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": 1e-101,
                "rawText": ".1e-100",
                "flags": 525057,
                "start": 129,
                "end": 137
            },
            "flags": 128,
            "start": 129,
            "end": 139
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": 0,
                "rawText": ".0E-100",
                "flags": 525057,
                "start": 139,
                "end": 147
            },
            "flags": 128,
            "start": 139,
            "end": 149
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": 1e-101,
                "rawText": ".1E-100",
                "flags": 525057,
                "start": 149,
                "end": 157
            },
            "flags": 128,
            "start": 149,
            "end": 157
        }
    ],
    "isModule": false,
    "text": "0e-100\n;\n1e-100\n;\n0E-100\n;\n1E-100\n;\n0.e-100\n;\n1.e-100\n;\n0.E-100\n;\n1.E-100\n;\n0.1e-100\n;\n1.1e-100\n;\n0.1E-100\n;\n1.1E-100\n;\n.0e-100\n;\n.1e-100\n;\n.0E-100\n;\n.1E-100",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 157
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

