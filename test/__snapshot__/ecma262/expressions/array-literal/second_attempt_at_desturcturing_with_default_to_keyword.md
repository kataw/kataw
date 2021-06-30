# Kataw parser test case

## Input

`````js
[...{a: true=x} = c]
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
                                                "kind": 219,
                                                "asteriskToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "start": 5,
                                                    "end": 6
                                                },
                                                "right": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 24752947,
                                                        "flags": 96,
                                                        "start": 7,
                                                        "end": 12
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 96,
                                                        "start": 12,
                                                        "end": 13
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 13,
                                                        "end": 14
                                                    },
                                                    "flags": 32,
                                                    "start": 5,
                                                    "end": 14
                                                },
                                                "flags": 32,
                                                "start": 5,
                                                "end": 14
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 5,
                                        "end": 14
                                    },
                                    "flags": 48,
                                    "start": 4,
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
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "start": 17,
                                    "end": 19
                                },
                                "flags": 32,
                                "start": 4,
                                "end": 19
                            },
                            "flags": 1073741856,
                            "start": 1,
                            "end": 19
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 1,
                    "end": 19
                },
                "flags": 32,
                "start": 0,
                "end": 20
            },
            "flags": 16,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "[...{a: true=x} = c]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 12, end: 13
✖ The left-hand side must be a variable or a property access. - start: 4, end: 17

```

