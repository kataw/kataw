# Kataw parser test case

## Input

`````js
0b10
;
0B10
;
0b0
;
0b1
;
0b00
;
0b11
;
0b0_1
;
0b10
;
0b10001100001101010101010101010101010101010101010101
;
0b1000_11000011_01010101_010_101010101010101010_101010101
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
                "value": 2,
                "autofix": 0,
                "flags": 768,
                "start": 0,
                "end": 4
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 6
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 2,
                "autofix": 0,
                "flags": 768,
                "start": 6,
                "end": 11
            },
            "autofix": 0,
            "flags": 128,
            "start": 6,
            "end": 13
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 0,
                "autofix": 0,
                "flags": 768,
                "start": 13,
                "end": 17
            },
            "autofix": 0,
            "flags": 128,
            "start": 13,
            "end": 19
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 1,
                "autofix": 0,
                "flags": 768,
                "start": 19,
                "end": 23
            },
            "autofix": 0,
            "flags": 128,
            "start": 19,
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
                "end": 30
            },
            "autofix": 0,
            "flags": 128,
            "start": 25,
            "end": 32
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 3,
                "autofix": 0,
                "flags": 768,
                "start": 32,
                "end": 37
            },
            "autofix": 0,
            "flags": 128,
            "start": 32,
            "end": 39
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 1,
                "autofix": 0,
                "flags": 768,
                "start": 39,
                "end": 45
            },
            "autofix": 0,
            "flags": 128,
            "start": 39,
            "end": 47
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 2,
                "autofix": 0,
                "flags": 768,
                "start": 47,
                "end": 52
            },
            "autofix": 0,
            "flags": 128,
            "start": 47,
            "end": 54
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 616642771244373,
                "autofix": 0,
                "flags": 768,
                "start": 54,
                "end": 107
            },
            "autofix": 0,
            "flags": 128,
            "start": 54,
            "end": 109
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 616642771244373,
                "autofix": 0,
                "flags": 768,
                "start": 109,
                "end": 167
            },
            "autofix": 0,
            "flags": 128,
            "start": 109,
            "end": 167
        }
    ],
    "isModule": false,
    "text": "0b10\n;\n0B10\n;\n0b0\n;\n0b1\n;\n0b00\n;\n0b11\n;\n0b0_1\n;\n0b10\n;\n0b10001100001101010101010101010101010101010101010101\n;\n0b1000_11000011_01010101_010_101010101010101010_101010101",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "code": 1,
            "error": "Unexpected token.",
            "start": 39,
            "end": 40
        },
        {
            "kind": 2,
            "source": 0,
            "code": 1,
            "error": "Unexpected token.",
            "start": 109,
            "end": 110
        }
    ],
    "start": 0,
    "end": 167
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

