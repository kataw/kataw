# Kataw parser test case

## Input

`````js
[...{a = b} = c] = d;
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
                                "kind": 223,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 64,
                                    "start": 1,
                                    "end": 4
                                },
                                "argument": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 301,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "start": 5,
                                                        "end": 6
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "b",
                                                        "rawText": "b",
                                                        "flags": 96,
                                                        "start": 8,
                                                        "end": 10
                                                    },
                                                    "flags": 32,
                                                    "start": 5,
                                                    "end": 10
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 5,
                                            "end": 10
                                        },
                                        "flags": 48,
                                        "start": 4,
                                        "end": 11
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 96,
                                        "start": 11,
                                        "end": 13
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 96,
                                        "start": 13,
                                        "end": 15
                                    },
                                    "flags": 32,
                                    "start": 4,
                                    "end": 15
                                },
                                "flags": 1073741856,
                                "start": 1,
                                "end": 15
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 1,
                        "end": 15
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 16
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 16,
                    "end": 18
                },
                "right": {
                    "kind": 134299649,
                    "text": "d",
                    "rawText": "d",
                    "flags": 96,
                    "start": 18,
                    "end": 20
                },
                "flags": 32,
                "start": 0,
                "end": 20
            },
            "flags": 16,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "[...{a = b} = c] = d;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  [...{ a = b } = c] = d;

```

### Diagnostics

```javascript
✔ No errors
```

