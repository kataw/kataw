# Kataw parser test case

## Input

`````js
[...{x} /= y];
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
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 5,
                                                "end": 6
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 5,
                                        "end": 6
                                    },
                                    "flags": 48,
                                    "start": 4,
                                    "end": 7
                                },
                                "operatorToken": {
                                    "kind": 4133,
                                    "flags": 64,
                                    "start": 7,
                                    "end": 10
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 10,
                                    "end": 12
                                },
                                "flags": 32,
                                "start": 4,
                                "end": 12
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 12
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 1,
                    "end": 12
                },
                "flags": 32,
                "start": 0,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "[...{x} /= y];",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expression exprected. A compound assignment or an logical assignment cannot follow an object literal - start: 7, end: 10

```

