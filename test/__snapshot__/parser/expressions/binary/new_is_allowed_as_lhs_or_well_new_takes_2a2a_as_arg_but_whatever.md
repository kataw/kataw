# Kataw parser test case

## Input

`````js
(new x ** 2)
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
                "kind": 121,
                "expression": {
                    "kind": 198,
                    "left": {
                        "kind": 210,
                        "newKeyword": {
                            "kind": 138477661,
                            "flags": 1,
                            "start": 0,
                            "end": 4
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 4,
                            "end": 6
                        },
                        "argumentList": null,
                        "flags": 256,
                        "start": 1,
                        "end": 6
                    },
                    "operatorToken": {
                        "kind": 35897,
                        "flags": 512,
                        "start": 6,
                        "end": 9
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 2,
                        "rawText": "2",
                        "flags": 768,
                        "start": 9,
                        "end": 11
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 11
                },
                "flags": 256,
                "start": 0,
                "end": 12
            },
            "flags": 128,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "text": "(new x ** 2)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 12
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

