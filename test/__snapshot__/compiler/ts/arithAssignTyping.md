# Kataw parser test case

## Input

`````js
class f { }

f += ''; // error
f += 1; // error
f -= 1; // error
f *= 1; // error
f /= 1; // error
f %= 1; // error
f &= 1; // error
f |= 1; // error
f <<= 1; // error
f >>= 1; // error
f >>>= 1; // error
f ^= 1; // error
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "class f { }\n\nf += ''; // error\nf += 1; // error\nf -= 1; // error\nf *= 1; // error\nf /= 1; // error\nf %= 1; // error\nf &= 1; // error\nf |= 1; // error\nf <<= 1; // error\nf >>= 1; // error\nf >>>= 1; // error\nf ^= 1; // error",
    "filename": "",
    "statements": [
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "f",
                "rawText": "f",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": null,
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [],
                "flags": 32768,
                "symbol": null,
                "transformFlags": 1,
                "start": 9,
                "end": 11
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 1,
            "start": 0,
            "end": 11
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "f",
                    "rawText": "f",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 14
                },
                "operator": "+=",
                "right": {
                    "kind": 4261583,
                    "text": "",
                    "rawText": "",
                    "flags": 33554432,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 20
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 11,
                "end": 20
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 11,
            "end": 21
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "f",
                    "rawText": "f",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 32
                },
                "operator": "+=",
                "right": {
                    "kind": 4261540,
                    "text": 1,
                    "rawText": "1",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 35,
                    "end": 37
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 21,
                "end": 37
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 21,
            "end": 38
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "f",
                    "rawText": "f",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 38,
                    "end": 49
                },
                "operator": "-=",
                "right": {
                    "kind": 4261540,
                    "text": 1,
                    "rawText": "1",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 52,
                    "end": 54
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 38,
                "end": 54
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 38,
            "end": 55
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "f",
                    "rawText": "f",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 55,
                    "end": 66
                },
                "operator": "*=",
                "right": {
                    "kind": 4261540,
                    "text": 1,
                    "rawText": "1",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 69,
                    "end": 71
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 55,
                "end": 71
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 55,
            "end": 72
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "f",
                    "rawText": "f",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 72,
                    "end": 83
                },
                "operator": "/=",
                "right": {
                    "kind": 4261540,
                    "text": 1,
                    "rawText": "1",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 86,
                    "end": 88
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 72,
                "end": 88
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 72,
            "end": 89
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "f",
                    "rawText": "f",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 89,
                    "end": 100
                },
                "operator": "%=",
                "right": {
                    "kind": 4261540,
                    "text": 1,
                    "rawText": "1",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 103,
                    "end": 105
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 89,
                "end": 105
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 89,
            "end": 106
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "f",
                    "rawText": "f",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 106,
                    "end": 117
                },
                "operator": "&=",
                "right": {
                    "kind": 4261540,
                    "text": 1,
                    "rawText": "1",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 120,
                    "end": 122
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 106,
                "end": 122
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 106,
            "end": 123
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "f",
                    "rawText": "f",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 123,
                    "end": 134
                },
                "operator": "|=",
                "right": {
                    "kind": 4261540,
                    "text": 1,
                    "rawText": "1",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 137,
                    "end": 139
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 123,
                "end": 139
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 123,
            "end": 140
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "f",
                    "rawText": "f",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 140,
                    "end": 151
                },
                "operator": "<<=",
                "right": {
                    "kind": 4261540,
                    "text": 1,
                    "rawText": "1",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 155,
                    "end": 157
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 140,
                "end": 157
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 140,
            "end": 158
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "f",
                    "rawText": "f",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 158,
                    "end": 169
                },
                "operator": ">>=",
                "right": {
                    "kind": 4261540,
                    "text": 1,
                    "rawText": "1",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 173,
                    "end": 175
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 158,
                "end": 175
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 158,
            "end": 176
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "f",
                    "rawText": "f",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 176,
                    "end": 187
                },
                "operator": ">>>=",
                "right": {
                    "kind": 4261540,
                    "text": 1,
                    "rawText": "1",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 192,
                    "end": 194
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 176,
                "end": 194
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 176,
            "end": 195
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "f",
                    "rawText": "f",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 195,
                    "end": 206
                },
                "operator": "^=",
                "right": {
                    "kind": 4261540,
                    "text": 1,
                    "rawText": "1",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 209,
                    "end": 211
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 195,
                "end": 211
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 195,
            "end": 212
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 221
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

