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
    "kind": 196,
    "source": "0e-100\n;\n1e-100\n;\n0E-100\n;\n1E-100\n;\n0.e-100\n;\n1.e-100\n;\n0.E-100\n;\n1.E-100\n;\n0.1e-100\n;\n1.1e-100\n;\n0.1E-100\n;\n1.1E-100\n;\n.0e-100\n;\n.1e-100\n;\n.0E-100\n;\n.1E-100",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261540,
                    "text": 0,
                    "rawText": "0e-100",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 6
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261540,
                    "text": 1e-100,
                    "rawText": "1e-100",
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 15
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 8,
                "end": 17
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261540,
                    "text": 0,
                    "rawText": "0E-100",
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 24
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 17,
                "end": 26
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261540,
                    "text": 1e-100,
                    "rawText": "1E-100",
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 26,
                    "end": 33
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 26,
                "end": 35
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261540,
                    "text": 0,
                    "rawText": "0.e-100",
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 35,
                    "end": 43
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 35,
                "end": 45
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261540,
                    "text": 1e-100,
                    "rawText": "1.e-100",
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 45,
                    "end": 53
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 45,
                "end": 55
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261540,
                    "text": 0,
                    "rawText": "0.E-100",
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 55,
                    "end": 63
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 55,
                "end": 65
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261540,
                    "text": 1e-100,
                    "rawText": "1.E-100",
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 65,
                    "end": 73
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 65,
                "end": 75
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261540,
                    "text": 1e-101,
                    "rawText": "0.1e-100",
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 75,
                    "end": 84
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 75,
                "end": 86
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261540,
                    "text": 1.1e-100,
                    "rawText": "1.1e-100",
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 86,
                    "end": 95
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 86,
                "end": 97
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261540,
                    "text": 1e-101,
                    "rawText": "0.1E-100",
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 97,
                    "end": 106
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 97,
                "end": 108
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261540,
                    "text": 1.1e-100,
                    "rawText": "1.1E-100",
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 108,
                    "end": 117
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 108,
                "end": 119
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261540,
                    "text": 0,
                    "rawText": ".0e-100",
                    "flags": 17408,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 119,
                    "end": 127
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 119,
                "end": 129
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261540,
                    "text": 1e-101,
                    "rawText": ".1e-100",
                    "flags": 17408,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 129,
                    "end": 137
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 129,
                "end": 139
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261540,
                    "text": 0,
                    "rawText": ".0E-100",
                    "flags": 17408,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 139,
                    "end": 147
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 139,
                "end": 149
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261540,
                    "text": 1e-101,
                    "rawText": ".1E-100",
                    "flags": 17408,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 149,
                    "end": 157
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 149,
                "end": 157
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 157
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
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

