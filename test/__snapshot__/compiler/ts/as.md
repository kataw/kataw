# Kataw parser test case

## Input

`````js
x as T;
x < y as boolean; // (x < y) as boolean;
x as boolean <= y; // (x as boolean) <= y;
x === 1 as number; // x === (1 as number);
x as any as T;
x as boolean ?? y; // (x as boolean) ?? y;
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "x as T;\nx < y as boolean; // (x < y) as boolean;\nx as boolean <= y; // (x as boolean) <= y;\nx === 1 as number; // x === (1 as number);\nx as any as T;\nx as boolean ?? y; // (x as boolean) ?? y;",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 73738,
                "expression": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "type": {
                    "kind": 134226156,
                    "typeName": {
                        "kind": 196711,
                        "text": "T",
                        "rawText": "T",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 4,
                        "end": 6
                    },
                    "typeArguments": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 4,
                    "end": 7
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 1,
                "end": 6
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 7
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 73738,
                "expression": {
                    "kind": 65563,
                    "left": {
                        "kind": 196712,
                        "text": "x",
                        "rawText": "x",
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 7,
                        "end": 9
                    },
                    "operator": "<",
                    "right": {
                        "kind": 196712,
                        "text": "y",
                        "rawText": "y",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 11,
                        "end": 13
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 13
                },
                "type": {
                    "kind": 4268070,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 16,
                    "end": 24
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 13,
                "end": 24
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 7,
            "end": 25
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65563,
                "left": {
                    "kind": 73738,
                    "expression": {
                        "kind": 196712,
                        "text": "x",
                        "rawText": "x",
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 25,
                        "end": 50
                    },
                    "type": {
                        "kind": 4268070,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 53,
                        "end": 61
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 50,
                    "end": 61
                },
                "operator": "<=",
                "right": {
                    "kind": 196712,
                    "text": "y",
                    "rawText": "y",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 64,
                    "end": 66
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 25,
                "end": 66
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 25,
            "end": 67
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 73738,
                "expression": {
                    "kind": 65563,
                    "left": {
                        "kind": 196712,
                        "text": "x",
                        "rawText": "x",
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 67,
                        "end": 93
                    },
                    "operator": "===",
                    "right": {
                        "kind": 4261540,
                        "text": 1,
                        "rawText": "1",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 97,
                        "end": 99
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 67,
                    "end": 99
                },
                "type": {
                    "kind": 4202657,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 102,
                    "end": 109
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 99,
                "end": 109
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 67,
            "end": 110
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 73738,
                "expression": {
                    "kind": 73738,
                    "expression": {
                        "kind": 196712,
                        "text": "x",
                        "rawText": "x",
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 110,
                        "end": 136
                    },
                    "type": {
                        "kind": 4202498,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 139,
                        "end": 143
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 136,
                    "end": 143
                },
                "type": {
                    "kind": 134226156,
                    "typeName": {
                        "kind": 196711,
                        "text": "T",
                        "rawText": "T",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 146,
                        "end": 148
                    },
                    "typeArguments": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 146,
                    "end": 149
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 143,
                "end": 148
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 110,
            "end": 149
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65563,
                "left": {
                    "kind": 73738,
                    "expression": {
                        "kind": 196712,
                        "text": "x",
                        "rawText": "x",
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 149,
                        "end": 151
                    },
                    "type": {
                        "kind": 4268070,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 154,
                        "end": 162
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 151,
                    "end": 162
                },
                "operator": "??",
                "right": {
                    "kind": 196712,
                    "text": "y",
                    "rawText": "y",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 165,
                    "end": 167
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 34,
                "start": 149,
                "end": 167
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 149,
            "end": 168
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 192
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

