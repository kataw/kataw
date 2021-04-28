# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Input

`````js
[(x())[y] = a,] = z;
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
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 125,
                                "left": {
                                    "kind": 130,
                                    "member": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 768,
                                                "start": 2,
                                                "end": 3
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 256,
                                                "start": 4,
                                                "end": 4
                                            },
                                            "flags": 256,
                                            "start": 1,
                                            "end": 5
                                        },
                                        "flags": 256,
                                        "start": 1,
                                        "end": 6
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 768,
                                        "start": 7,
                                        "end": 8
                                    },
                                    "flags": 256,
                                    "start": 1,
                                    "end": 9
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 9,
                                    "start": 512,
                                    "end": 11
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 11,
                                    "end": 13
                                },
                                "flags": 256,
                                "start": 1,
                                "end": 13
                            }
                        ],
                        "trailingComma": true,
                        "flags": 256,
                        "start": 1,
                        "end": 14
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 15
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 15,
                    "start": 512,
                    "end": 17
                },
                "right": {
                    "kind": 134299649,
                    "text": "z",
                    "rawText": "z",
                    "flags": 768,
                    "start": 17,
                    "end": 19
                },
                "flags": 256,
                "start": 0,
                "end": 19
            },
            "flags": 128,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": true,
    "text": "[(x())[y] = a,] = z;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

