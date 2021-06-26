# Kataw parser test case

## Input

`````js
[...new A()]
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
                                "kind": 210,
                                "newKeyword": {
                                    "kind": 138477661,
                                    "flags": 96,
                                    "start": 4,
                                    "end": 7
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "A",
                                    "rawText": "A",
                                    "flags": 96,
                                    "start": 7,
                                    "end": 9
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 10,
                                    "end": 10
                                },
                                "flags": 96,
                                "start": 4,
                                "end": 11
                            },
                            "flags": 1073741856,
                            "start": 1,
                            "end": 11
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 1,
                    "end": 11
                },
                "flags": 32,
                "start": 0,
                "end": 12
            },
            "flags": 16,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "source": "[...new A()]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 12
}
```

### Printed

```javascript

[...new  A()];
```

### Diagnostics

```javascript
✔ No errors
```

