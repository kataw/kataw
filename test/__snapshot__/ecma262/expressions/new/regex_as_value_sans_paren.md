# Kataw parser test case

## Input

`````js
f(new /z/)
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
                    "text": "f",
                    "rawText": "f",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 210,
                            "newKeyword": {
                                "kind": 138477661,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 5
                            },
                            "expression": {
                                "kind": 371,
                                "text": "/z/",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 9
                            },
                            "argumentList": null,
                            "flags": 96,
                            "transformFlags": 2048,
                            "start": 2,
                            "end": 9
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 9
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 0,
                "end": 10
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "source": "f(new /z/)",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 10
}
```

### Printed

```javascript
f(new /z/);
```

### Diagnostics

```javascript
✔ No errors
```

