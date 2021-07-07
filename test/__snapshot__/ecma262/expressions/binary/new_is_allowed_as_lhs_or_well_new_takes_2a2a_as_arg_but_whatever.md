# Kataw parser test case

## Input

`````js
(new x ** 2)
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
                "kind": 121,
                "expression": {
                    "kind": 198,
                    "left": {
                        "kind": 210,
                        "newKeyword": {
                            "kind": 138477661,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 4
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 4,
                            "end": 6
                        },
                        "argumentList": null,
                        "flags": 96,
                        "transformFlags": 2048,
                        "start": 1,
                        "end": 6
                    },
                    "operatorToken": {
                        "kind": 35897,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 9
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 2,
                        "rawText": "2",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 9,
                        "end": 11
                    },
                    "flags": 96,
                    "transformFlags": 5120,
                    "start": 1,
                    "end": 11
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 32,
                "end": 12
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "source": "(new x ** 2)",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 12
}
```

### Printed

```javascript
(new x ** 2);
```

### Diagnostics

```javascript
✔ No errors
```

