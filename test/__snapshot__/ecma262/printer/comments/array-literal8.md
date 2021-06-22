# Kataw parser test case

## Input

`````js
 [,,,,,,/*1*/,,,,,,,,,,,,,,,x,,,,,,,,,,,,]


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
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 2,
                            "end": 2
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 3,
                            "end": 3
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 4,
                            "end": 4
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 5,
                            "end": 5
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 6,
                            "end": 6
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 7,
                            "end": 7
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 8,
                            "end": 8
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 14,
                            "end": 14
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 15,
                            "end": 15
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 16,
                            "end": 16
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 17,
                            "end": 17
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 18,
                            "end": 18
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 19,
                            "end": 19
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 20,
                            "end": 20
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 21,
                            "end": 21
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 22,
                            "end": 22
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 23,
                            "end": 23
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 24,
                            "end": 24
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 25,
                            "end": 25
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 26,
                            "end": 26
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 27,
                            "end": 27
                        },
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 28,
                            "end": 29
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 30,
                            "end": 30
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 31,
                            "end": 31
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 32,
                            "end": 32
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 33,
                            "end": 33
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 34,
                            "end": 34
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 35,
                            "end": 35
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 36,
                            "end": 36
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 37,
                            "end": 37
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 38,
                            "end": 38
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 39,
                            "end": 39
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 40,
                            "end": 40
                        }
                    ],
                    "trailingComma": true,
                    "flags": 32,
                    "start": 2,
                    "end": 41
                },
                "flags": 32,
                "start": 0,
                "end": 42
            },
            "flags": 16,
            "start": 0,
            "end": 42
        }
    ],
    "isModule": false,
    "source": " [,,,,,,/*1*/,,,,,,,,,,,,,,,x,,,,,,,,,,,,]\n\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 44
}
```

### Printed

```javascript

[, , , , , , /*1*/ , , , , , , , , , , , , , , , x, , , , , , , , , , , ,];
```

### Diagnostics

```javascript
✔ No errors
```

