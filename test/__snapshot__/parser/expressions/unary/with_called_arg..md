# Kataw parser test case

## Input

`````js
new + x()
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
                    "kind": 126,
                    "operandToken": {
                        "kind": 34098,
                        "flags": 64,
                        "start": 3,
                        "end": 5
                    },
                    "operand": {
                        "kind": 131,
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 5,
                            "end": 7
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 8,
                            "end": 8
                        },
                        "flags": 268435488,
                        "start": 5,
                        "end": 9
                    },
                    "flags": 32,
                    "start": 3,
                    "end": 9
                },
                "argumentList": null,
                "flags": 32,
                "start": 0,
                "end": 9
            },
            "flags": 16,
            "start": 0,
            "end": 9
        }
    ],
    "isModule": false,
    "source": "new + x()",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 9
}
```

### Printed

```javascript

new  +x()();
```

### Diagnostics

```javascript
✔ No errors
```

