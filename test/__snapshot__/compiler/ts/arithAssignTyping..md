# Kataw parser test case

## Input

`````js
class f { }

f += '';
f += 1;
f -= 1;
f *= 1;
f /= 1;
f %= 1;
f &= 1;
f |= 1;
f <<= 1;
f >>= 1;
f >>>= 1;
f ^= 1;
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "class f { }\n\nf += '';\nf += 1;\nf -= 1;\nf *= 1;\nf /= 1;\nf %= 1;\nf &= 1;\nf |= 1;\nf <<= 1;\nf >>= 1;\nf >>>= 1;\nf ^= 1;",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "f",
                    "rawText": "f",
                    "flags": 0,
                    "intersects": false,
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
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 9,
                    "end": 11
                },
                "decorators": null,
                "flags": 16384,
                "intersects": false,
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
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 11,
                        "end": 14
                    },
                    "operator": "+=",
                    "right": {
                        "kind": 4261583,
                        "text": "",
                        "rawText": "",
                        "flags": 16777216,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 20
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 20
                },
                "flags": 0,
                "intersects": false,
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
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 21,
                        "end": 23
                    },
                    "operator": "+=",
                    "right": {
                        "kind": 4261540,
                        "text": 1,
                        "rawText": "1",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 26,
                        "end": 28
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 28
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 21,
                "end": 29
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65550,
                    "left": {
                        "kind": 196712,
                        "text": "f",
                        "rawText": "f",
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 29,
                        "end": 31
                    },
                    "operator": "-=",
                    "right": {
                        "kind": 4261540,
                        "text": 1,
                        "rawText": "1",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 34,
                        "end": 36
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 29,
                    "end": 36
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 29,
                "end": 37
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65550,
                    "left": {
                        "kind": 196712,
                        "text": "f",
                        "rawText": "f",
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 37,
                        "end": 39
                    },
                    "operator": "*=",
                    "right": {
                        "kind": 4261540,
                        "text": 1,
                        "rawText": "1",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 42,
                        "end": 44
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 37,
                    "end": 44
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 37,
                "end": 45
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65550,
                    "left": {
                        "kind": 196712,
                        "text": "f",
                        "rawText": "f",
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 45,
                        "end": 47
                    },
                    "operator": "/=",
                    "right": {
                        "kind": 4261540,
                        "text": 1,
                        "rawText": "1",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 50,
                        "end": 52
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 45,
                    "end": 52
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 45,
                "end": 53
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65550,
                    "left": {
                        "kind": 196712,
                        "text": "f",
                        "rawText": "f",
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 53,
                        "end": 55
                    },
                    "operator": "%=",
                    "right": {
                        "kind": 4261540,
                        "text": 1,
                        "rawText": "1",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 58,
                        "end": 60
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 53,
                    "end": 60
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 53,
                "end": 61
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65550,
                    "left": {
                        "kind": 196712,
                        "text": "f",
                        "rawText": "f",
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 61,
                        "end": 63
                    },
                    "operator": "&=",
                    "right": {
                        "kind": 4261540,
                        "text": 1,
                        "rawText": "1",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 66,
                        "end": 68
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 61,
                    "end": 68
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 61,
                "end": 69
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65550,
                    "left": {
                        "kind": 196712,
                        "text": "f",
                        "rawText": "f",
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 69,
                        "end": 71
                    },
                    "operator": "|=",
                    "right": {
                        "kind": 4261540,
                        "text": 1,
                        "rawText": "1",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 74,
                        "end": 76
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 69,
                    "end": 76
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 69,
                "end": 77
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65550,
                    "left": {
                        "kind": 196712,
                        "text": "f",
                        "rawText": "f",
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 77,
                        "end": 79
                    },
                    "operator": "<<=",
                    "right": {
                        "kind": 4261540,
                        "text": 1,
                        "rawText": "1",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 83,
                        "end": 85
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 77,
                    "end": 85
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 77,
                "end": 86
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65550,
                    "left": {
                        "kind": 196712,
                        "text": "f",
                        "rawText": "f",
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 86,
                        "end": 88
                    },
                    "operator": ">>=",
                    "right": {
                        "kind": 4261540,
                        "text": 1,
                        "rawText": "1",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 92,
                        "end": 94
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 86,
                    "end": 94
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 86,
                "end": 95
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65550,
                    "left": {
                        "kind": 196712,
                        "text": "f",
                        "rawText": "f",
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 95,
                        "end": 97
                    },
                    "operator": ">>>=",
                    "right": {
                        "kind": 4261540,
                        "text": 1,
                        "rawText": "1",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 102,
                        "end": 104
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 95,
                    "end": 104
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 95,
                "end": 105
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65550,
                    "left": {
                        "kind": 196712,
                        "text": "f",
                        "rawText": "f",
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 105,
                        "end": 107
                    },
                    "operator": "^=",
                    "right": {
                        "kind": 4261540,
                        "text": 1,
                        "rawText": "1",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 110,
                        "end": 112
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 105,
                    "end": 112
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 105,
                "end": 113
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 113
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 113
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

