# Kataw parser test case

## Input

`````js
(x) = (y) += z;
(x) = (y) = z;
(x) += (y) = z;
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
                "kind": 125,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 2
                    },
                    "flags": 0,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 3
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 5
                },
                "right": {
                    "kind": 125,
                    "left": {
                        "kind": 121,
                        "expression": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 8
                        },
                        "flags": 5,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 9
                    },
                    "operatorToken": {
                        "kind": 4130,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 9,
                        "end": 12
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "z",
                        "rawText": "z",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 12,
                        "end": 14
                    },
                    "flags": 0,
                    "transformFlags": 128,
                    "start": 5,
                    "end": 14
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 14
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 15
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 18
                    },
                    "flags": 15,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 19
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 21
                },
                "right": {
                    "kind": 125,
                    "left": {
                        "kind": 121,
                        "expression": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 23,
                            "end": 24
                        },
                        "flags": 21,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 25
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 25,
                        "end": 27
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "z",
                        "rawText": "z",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 27,
                        "end": 29
                    },
                    "flags": 0,
                    "transformFlags": 128,
                    "start": 21,
                    "end": 29
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 15,
                "end": 29
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 15,
            "end": 30
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 33
                    },
                    "flags": 30,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 34
                },
                "operatorToken": {
                    "kind": 4130,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 34,
                    "end": 37
                },
                "right": {
                    "kind": 125,
                    "left": {
                        "kind": 121,
                        "expression": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 39,
                            "end": 40
                        },
                        "flags": 37,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 41
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 41,
                        "end": 43
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "z",
                        "rawText": "z",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 43,
                        "end": 45
                    },
                    "flags": 0,
                    "transformFlags": 128,
                    "start": 37,
                    "end": 45
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 30,
                "end": 45
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 30,
            "end": 46
        }
    ],
    "isModule": false,
    "source": "(x) = (y) += z;\n(x) = (y) = z;\n(x) += (y) = z;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 46
}
```

### Printed

```javascript
(x) = (y) += z;
(x) = (y) = z;

(x) += (y) = z;

```

### Diagnostics

```javascript
✔ No errors
```

