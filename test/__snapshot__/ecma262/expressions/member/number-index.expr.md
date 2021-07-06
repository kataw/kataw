# Kataw parser test case

## Input

`````js
123..toString(10)
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
                    "kind": 129,
                    "member": {
                        "kind": 201392130,
                        "text": 123,
                        "rawText": "123.",
                        "flags": 32864,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 4
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "toString",
                        "rawText": "toString",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 13
                    },
                    "flags": 32864,
                    "transformFlags": 2,
                    "start": 0,
                    "end": 13
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 201392130,
                            "text": 10,
                            "rawText": "10",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 16
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 16
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 0,
                "end": 17
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "123..toString(10)",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

123..toString(10);
```

### Diagnostics

```javascript
✔ No errors
```

