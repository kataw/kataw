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
    "kind": 2243,
    "source": "0b10\n;\n0B10\n;\n0b0\n;\n0b1\n;\n0b00\n;\n0b11\n;\n0b0_1\n;\n0b10\n;\n0b10001100001101010101010101010101010101010101010101\n;\n0b1000_11000011_01010101_010_101010101010101010_101010101",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261540,
                "text": 2,
                "rawText": "0b10",
                "flags": 256,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 4
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 6
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261540,
                "text": 2,
                "rawText": "0B10",
                "flags": 33024,
                "symbol": null,
                "transformFlags": 0,
                "start": 6,
                "end": 11
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 6,
            "end": 13
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261540,
                "text": 0,
                "rawText": "0b0",
                "flags": 33024,
                "symbol": null,
                "transformFlags": 0,
                "start": 13,
                "end": 17
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 13,
            "end": 19
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261540,
                "text": 1,
                "rawText": "0b1",
                "flags": 33024,
                "symbol": null,
                "transformFlags": 0,
                "start": 19,
                "end": 23
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 19,
            "end": 25
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261540,
                "text": 0,
                "rawText": "0b00",
                "flags": 33024,
                "symbol": null,
                "transformFlags": 0,
                "start": 25,
                "end": 30
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 25,
            "end": 32
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261540,
                "text": 3,
                "rawText": "0b11",
                "flags": 33024,
                "symbol": null,
                "transformFlags": 0,
                "start": 32,
                "end": 37
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 32,
            "end": 39
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261540,
                "text": 1,
                "rawText": "0b0_1",
                "flags": 16810240,
                "symbol": null,
                "transformFlags": 0,
                "start": 39,
                "end": 45
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 39,
            "end": 47
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261540,
                "text": 2,
                "rawText": "0b10",
                "flags": 33024,
                "symbol": null,
                "transformFlags": 0,
                "start": 47,
                "end": 52
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 47,
            "end": 54
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261540,
                "text": 616642771244373,
                "rawText": "0b10001100001101010101010101010101010101010101010101",
                "flags": 33024,
                "symbol": null,
                "transformFlags": 0,
                "start": 54,
                "end": 107
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 54,
            "end": 109
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261540,
                "text": 616642771244373,
                "rawText": "0b1000_11000011_01010101_010_101010101010101010_101010101",
                "flags": 16810240,
                "symbol": null,
                "transformFlags": 0,
                "start": 109,
                "end": 167
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 109,
            "end": 167
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "message": "Numeric separators are not allowed at the end of numeric literals",
            "start": 45,
            "length": 1
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Numeric separators are not allowed at the end of numeric literals",
            "start": 167,
            "length": 1
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
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

