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

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 2,
                "rawText": "0b10",
                "flags": 524384,
                "transformFlags": 0,
                "start": 0,
                "end": 4
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 6
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 2,
                "rawText": "0B10",
                "flags": 524384,
                "transformFlags": 0,
                "start": 6,
                "end": 11
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 6,
            "end": 13
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0b0",
                "flags": 524384,
                "transformFlags": 0,
                "start": 13,
                "end": 17
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 13,
            "end": 19
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1,
                "rawText": "0b1",
                "flags": 524384,
                "transformFlags": 0,
                "start": 19,
                "end": 23
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 19,
            "end": 25
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0b00",
                "flags": 524384,
                "transformFlags": 0,
                "start": 25,
                "end": 30
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 25,
            "end": 32
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 3,
                "rawText": "0b11",
                "flags": 524384,
                "transformFlags": 0,
                "start": 32,
                "end": 37
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 32,
            "end": 39
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1,
                "rawText": "0b0_1",
                "flags": 589920,
                "transformFlags": 0,
                "start": 39,
                "end": 45
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 39,
            "end": 47
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 2,
                "rawText": "0b10",
                "flags": 524384,
                "transformFlags": 0,
                "start": 47,
                "end": 52
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 47,
            "end": 54
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 616642771244373,
                "rawText": "0b10001100001101010101010101010101010101010101010101",
                "flags": 524384,
                "transformFlags": 0,
                "start": 54,
                "end": 107
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 54,
            "end": 109
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 616642771244373,
                "rawText": "0b1000_11000011_01010101_010_101010101010101010_101010101",
                "flags": 589920,
                "transformFlags": 0,
                "start": 109,
                "end": 167
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 109,
            "end": 167
        }
    ],
    "isModule": false,
    "source": "0b10\n;\n0B10\n;\n0b0\n;\n0b1\n;\n0b00\n;\n0b11\n;\n0b0_1\n;\n0b10\n;\n0b10001100001101010101010101010101010101010101010101\n;\n0b1000_11000011_01010101_010_101010101010101010_101010101",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 167
}
```

### Printed

```javascript
0b10;
0b10;

0b0;

0b1;

0b00;

0b11;

0b0_1;

0b10;

0b10001100001101010101010101010101010101010101010101;

0b1000_11000011_01010101_010_101010101010101010_101010101;

```

### Diagnostics

```javascript
✔ No errors
```

