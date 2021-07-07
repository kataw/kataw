# Kataw parser test case

## Input

`````js
a?.0:b

a?.1:b

a?.2:b

a?.3:b

a?.4:b

a?.5:b

a?.6:b

a?.7:b

a?.8:b

a?.9:b
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
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 3
                },
                "consequent": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 4
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 5
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 6
                },
                "flags": 96,
                "transformFlags": 4096,
                "start": 0,
                "end": 6
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 6
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 9
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 11
                },
                "consequent": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 12
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 13
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 14
                },
                "flags": 97,
                "transformFlags": 4096,
                "start": 6,
                "end": 14
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 6,
            "end": 14
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 17
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 19
                },
                "consequent": {
                    "kind": 201392130,
                    "text": 2,
                    "rawText": "2",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 20
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 21
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 22
                },
                "flags": 97,
                "transformFlags": 4096,
                "start": 14,
                "end": 22
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 14,
            "end": 22
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 22,
                    "end": 25
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 25,
                    "end": 27
                },
                "consequent": {
                    "kind": 201392130,
                    "text": 3,
                    "rawText": "3",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 27,
                    "end": 28
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 28,
                    "end": 29
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 29,
                    "end": 30
                },
                "flags": 97,
                "transformFlags": 4096,
                "start": 22,
                "end": 30
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 22,
            "end": 30
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 30,
                    "end": 33
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 35
                },
                "consequent": {
                    "kind": 201392130,
                    "text": 4,
                    "rawText": "4",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 35,
                    "end": 36
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 36,
                    "end": 37
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 37,
                    "end": 38
                },
                "flags": 97,
                "transformFlags": 4096,
                "start": 30,
                "end": 38
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 30,
            "end": 38
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 38,
                    "end": 41
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 41,
                    "end": 43
                },
                "consequent": {
                    "kind": 201392130,
                    "text": 5,
                    "rawText": "5",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 43,
                    "end": 44
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 44,
                    "end": 45
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 45,
                    "end": 46
                },
                "flags": 97,
                "transformFlags": 4096,
                "start": 38,
                "end": 46
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 38,
            "end": 46
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 46,
                    "end": 49
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 49,
                    "end": 51
                },
                "consequent": {
                    "kind": 201392130,
                    "text": 6,
                    "rawText": "6",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 51,
                    "end": 52
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 52,
                    "end": 53
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 53,
                    "end": 54
                },
                "flags": 97,
                "transformFlags": 4096,
                "start": 46,
                "end": 54
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 46,
            "end": 54
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 54,
                    "end": 57
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 57,
                    "end": 59
                },
                "consequent": {
                    "kind": 201392130,
                    "text": 7,
                    "rawText": "7",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 59,
                    "end": 60
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 60,
                    "end": 61
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 61,
                    "end": 62
                },
                "flags": 97,
                "transformFlags": 4096,
                "start": 54,
                "end": 62
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 54,
            "end": 62
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 62,
                    "end": 65
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 65,
                    "end": 67
                },
                "consequent": {
                    "kind": 201392130,
                    "text": 8,
                    "rawText": "8",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 67,
                    "end": 68
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 68,
                    "end": 69
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 69,
                    "end": 70
                },
                "flags": 97,
                "transformFlags": 4096,
                "start": 62,
                "end": 70
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 62,
            "end": 70
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 70,
                    "end": 73
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 73,
                    "end": 75
                },
                "consequent": {
                    "kind": 201392130,
                    "text": 9,
                    "rawText": "9",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 75,
                    "end": 76
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 76,
                    "end": 77
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 77,
                    "end": 78
                },
                "flags": 97,
                "transformFlags": 4096,
                "start": 70,
                "end": 78
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 70,
            "end": 78
        }
    ],
    "isModule": false,
    "source": "a?.0:b\n\na?.1:b\n\na?.2:b\n\na?.3:b\n\na?.4:b\n\na?.5:b\n\na?.6:b\n\na?.7:b\n\na?.8:b\n\na?.9:b",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 78
}
```

### Printed

```javascript
a ? 0 : b;
a ? 1 : b;

a ? 2 : b;

a ? 3 : b;

a ? 4 : b;

a ? 5 : b;

a ? 6 : b;

a ? 7 : b;

a ? 8 : b;

a ? 9 : b;

```

### Diagnostics

```javascript
✔ No errors
```

