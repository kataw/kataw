# Kataw parser test case

## Input

`````js
type x = a[][];
type x = a[]\n[];
type x = []\n[];
type x = [][]\na;
type x = \na[];
type x = [];
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "type x = a[][];\ntype x = a[]\\n[];\ntype x = []\\n[];\ntype x = [][]\\na;\ntype x = \\na[];\ntype x = [];",
    "filename": "",
    "statements": [
        {
            "kind": 8417,
            "name": {
                "kind": 196712,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 4,
                "end": 6
            },
            "type": {
                "kind": 8199,
                "elementType": {
                    "kind": 8199,
                    "elementType": {
                        "kind": 134226156,
                        "typeName": {
                            "kind": 196711,
                            "text": "a",
                            "rawText": "a",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 10
                        },
                        "typeArguments": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 8,
                        "end": 11
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 8,
                    "end": 13
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 8,
                "end": 15
            },
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 0,
            "end": 15
        },
        {
            "kind": 8417,
            "name": {
                "kind": 196712,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 20,
                "end": 22
            },
            "type": {
                "kind": 8199,
                "elementType": {
                    "kind": 134226156,
                    "typeName": {
                        "kind": 196711,
                        "text": "a",
                        "rawText": "a",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 24,
                        "end": 26
                    },
                    "typeArguments": null,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 24,
                    "end": 27
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 24,
                "end": 29
            },
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 15,
            "end": 28
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 67174980,
                "member": {
                    "kind": 196712,
                    "text": "n",
                    "rawText": "n",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 29,
                    "end": 30
                },
                "expression": {
                    "kind": 131322,
                    "text": "",
                    "flags": 3,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 30,
                    "end": 30
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 30,
                "end": 32
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 29,
            "end": 33
        },
        {
            "kind": 8417,
            "name": {
                "kind": 196712,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 38,
                "end": 40
            },
            "type": {
                "kind": 134226144,
                "elementTypes": [],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 42,
                "end": 45
            },
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 33,
            "end": 45
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 67174980,
                "member": {
                    "kind": 196712,
                    "text": "n",
                    "rawText": "n",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 46,
                    "end": 47
                },
                "expression": {
                    "kind": 131322,
                    "text": "",
                    "flags": 3,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 47,
                    "end": 47
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 47,
                "end": 49
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 46,
            "end": 50
        },
        {
            "kind": 8417,
            "name": {
                "kind": 196712,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 55,
                "end": 57
            },
            "type": {
                "kind": 8199,
                "elementType": {
                    "kind": 134226144,
                    "elementTypes": [],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 59,
                    "end": 62
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 59,
                "end": 65
            },
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 50,
            "end": 64
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "na",
                "rawText": "na",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 65,
                "end": 67
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 65,
            "end": 68
        },
        {
            "kind": 8417,
            "name": {
                "kind": 196712,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 73,
                "end": 75
            },
            "type": {
                "kind": 134226156,
                "typeName": {
                    "kind": 196712,
                    "text": "",
                    "rawText": "",
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 77,
                    "end": 77
                },
                "typeArguments": null,
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 77,
                "end": 79
            },
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 68,
            "end": 77
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 67174980,
                "member": {
                    "kind": 196712,
                    "text": "na",
                    "rawText": "na",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 79,
                    "end": 81
                },
                "expression": {
                    "kind": 131322,
                    "text": "",
                    "flags": 3,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 81,
                    "end": 81
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 81,
                "end": 83
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 79,
            "end": 84
        },
        {
            "kind": 8417,
            "name": {
                "kind": 196712,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 89,
                "end": 91
            },
            "type": {
                "kind": 134226144,
                "elementTypes": [],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 93,
                "end": 96
            },
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 84,
            "end": 97
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "message": "Invalid character",
            "start": 28,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "An element access expression should take an argument",
            "start": 31,
            "length": 0
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Invalid character",
            "start": 45,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "An element access expression should take an argument",
            "start": 48,
            "length": 0
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Invalid character",
            "start": 64,
            "length": 0
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Invalid character",
            "start": 78,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "An element access expression should take an argument",
            "start": 82,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 97
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

