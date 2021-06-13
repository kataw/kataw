# Kataw parser test case

## Input

`````js
[x().y = a + b] = z
`````

## Options

### Parser Options

`````js
{}
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
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 125,
                                "left": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 131,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 1,
                                            "end": 2
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 3,
                                            "end": 3
                                        },
                                        "flags": 268435488,
                                        "start": 1,
                                        "end": 4
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 5,
                                        "end": 6
                                    },
                                    "flags": 536870944,
                                    "start": 1,
                                    "end": 6
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 6,
                                    "end": 8
                                },
                                "right": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 8,
                                        "end": 10
                                    },
                                    "operatorToken": {
                                        "kind": 99634,
                                        "flags": 96,
                                        "start": 10,
                                        "end": 12
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 12,
                                        "end": 14
                                    },
                                    "flags": 32,
                                    "start": 8,
                                    "end": 14
                                },
                                "flags": 32,
                                "start": 1,
                                "end": 14
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 1,
                        "end": 14
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 15
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 15,
                    "end": 17
                },
                "right": {
                    "kind": 134299649,
                    "text": "z",
                    "rawText": "z",
                    "flags": 96,
                    "start": 17,
                    "end": 19
                },
                "flags": 32,
                "start": 0,
                "end": 19
            },
            "flags": 16,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "[x().y = a + b] = z",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript

[x().y = a + b] = z;
```

### Diagnostics

```javascript
✔ No errors
```

