# Kataw parser test case

## Input

`````js
pa\u0073s();
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
                    "text": "pass",
                    "rawText": "pa\\u0073s",
                    "flags": 16480,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 9
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 10
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 0,
                "end": 11
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "source": "pa\\u0073s();",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 12
}
```

### Printed

```javascript
pa\u0073s();
```

### Diagnostics

```javascript
✔ No errors
```

