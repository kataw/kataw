# Kataw parser test case

## Input

`````js
x({a=b}=c);
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
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 125,
                            "left": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 205,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 3,
                                                "end": 4
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "start": 5,
                                                "end": 6
                                            },
                                            "flags": 32,
                                            "start": 3,
                                            "end": 6
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 3,
                                    "end": 6
                                },
                                "flags": 48,
                                "start": 2,
                                "end": 7
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 7,
                                "end": 8
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "start": 8,
                                "end": 9
                            },
                            "flags": 32,
                            "start": 2,
                            "end": 9
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 2,
                    "end": 9
                },
                "flags": 268435488,
                "start": 0,
                "end": 10
            },
            "flags": 16,
            "start": 0,
            "end": 11
        }
    ],
    "isModule": false,
    "source": "x({a=b}=c);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 11
}
```

### Printed

```javascript

x({ a = b } = c);
```

### Diagnostics

```javascript
✔ No errors
```

