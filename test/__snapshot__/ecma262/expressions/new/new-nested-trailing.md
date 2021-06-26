# Kataw parser test case

## Input

`````js
new (x().y)();
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
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 96,
                    "start": 0,
                    "end": 3
                },
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 129,
                        "member": {
                            "kind": 131,
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 5,
                                "end": 6
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 7,
                                "end": 7
                            },
                            "flags": 268435488,
                            "start": 3,
                            "end": 8
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 9,
                            "end": 10
                        },
                        "flags": 268435488,
                        "start": 3,
                        "end": 10
                    },
                    "flags": 32,
                    "start": 3,
                    "end": 11
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 12,
                    "end": 12
                },
                "flags": 96,
                "start": 0,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "new (x().y)();",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript

new  (x().y)();
```

### Diagnostics

```javascript
✔ No errors
```

