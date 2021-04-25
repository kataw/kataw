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
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": 7,
                "rawText": "07",
                "flags": 2097920,
                "start": 0,
                "end": 2
            },
            "flags": 128,
            "start": 0,
            "end": 4
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": 8,
                "rawText": "08",
                "flags": 2097921,
                "start": 4,
                "end": 7
            },
            "flags": 128,
            "start": 4,
            "end": 9
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": 8,
                "rawText": "00008",
                "flags": 2097921,
                "start": 9,
                "end": 15
            },
            "flags": 128,
            "start": 9,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": 53,
                "rawText": "065",
                "flags": 2097921,
                "start": 17,
                "end": 21
            },
            "flags": 128,
            "start": 17,
            "end": 23
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": 2,
                "rawText": "02",
                "flags": 2097921,
                "start": 23,
                "end": 26
            },
            "flags": 128,
            "start": 23,
            "end": 28
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": 62,
                "rawText": "076",
                "flags": 2097921,
                "start": 28,
                "end": 32
            },
            "flags": 128,
            "start": 28,
            "end": 34
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": 0,
                "rawText": "000",
                "flags": 2097921,
                "start": 34,
                "end": 38
            },
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
                "flags": 128,
                "start": 42,
                "end": 42
            },
            "flags": 128,
            "start": 40,
            "end": 43
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 134299649,
                    "text": 1,
                    "rawText": "01",
                    "flags": 2097920,
                    "start": 44,
                    "end": 46
                },
                "flags": 256,
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
                "kind": 134299649,
                "text": 8,
                "rawText": "00008",
                "flags": 2097921,
                "start": 49,
                "end": 55
            },
            "flags": 128,
            "start": 49,
            "end": 57
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": 26,
                "rawText": "032",
                "flags": 2097921,
                "start": 57,
                "end": 61
            },
            "flags": 128,
            "start": 57,
            "end": 63
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": 8,
                "rawText": "0x8",
                "flags": 16777985,
                "start": 63,
                "end": 67
            },
            "flags": 128,
            "start": 63,
            "end": 69
        }
    ],
    "isModule": false,
    "text": "07\n;\n08\n;\n00008\n;\n065\n;\n02\n;\n076\n;\n000\n;\n{}(01)\n;\n00008\n;\n032\n;\n0x8\n;\n",
    "fileName": "__root__",
    "flags": 0,
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
@{x2714}@ No errors
```

