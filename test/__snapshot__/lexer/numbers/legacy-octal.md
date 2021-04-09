# Kataw parser test case

## Input

`````js
07
;
08
;
00008
;
065
;
02
;
076
;
000
;
{}(01)
;
00008
;
032
;
0x8
;

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
                "value": 7,
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
                "value": 8,
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
                "value": 8,
                "autofix": 0,
                "flags": 768,
                "start": 9,
                "end": 15
            },
            "autofix": 0,
            "flags": 128,
            "start": 9,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 53,
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
                "value": 2,
                "autofix": 0,
                "flags": 768,
                "start": 23,
                "end": 26
            },
            "autofix": 0,
            "flags": 128,
            "start": 23,
            "end": 28
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 62,
                "autofix": 0,
                "flags": 768,
                "start": 28,
                "end": 32
            },
            "autofix": 0,
            "flags": 128,
            "start": 28,
            "end": 34
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 0,
                "autofix": 0,
                "flags": 768,
                "start": 34,
                "end": 38
            },
            "autofix": 0,
            "flags": 128,
            "start": 34,
            "end": 40
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "autofix": 0,
                "flags": 128,
                "start": 42,
                "end": 42
            },
            "autofix": 0,
            "flags": 128,
            "start": 40,
            "end": 43
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 81921,
                    "value": 1,
                    "autofix": 0,
                    "flags": 768,
                    "start": 44,
                    "end": 46
                },
                "autofix": 0,
                "flags": 256,
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
                "value": 8,
                "autofix": 0,
                "flags": 768,
                "start": 49,
                "end": 55
            },
            "autofix": 0,
            "flags": 128,
            "start": 49,
            "end": 57
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 26,
                "autofix": 0,
                "flags": 768,
                "start": 57,
                "end": 61
            },
            "autofix": 0,
            "flags": 128,
            "start": 57,
            "end": 63
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 8,
                "autofix": 0,
                "flags": 768,
                "start": 63,
                "end": 67
            },
            "autofix": 0,
            "flags": 128,
            "start": 63,
            "end": 69
        }
    ],
    "isModule": false,
    "text": "07\n;\n08\n;\n00008\n;\n065\n;\n02\n;\n076\n;\n000\n;\n{}(01)\n;\n00008\n;\n032\n;\n0x8\n;\n",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 70
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

