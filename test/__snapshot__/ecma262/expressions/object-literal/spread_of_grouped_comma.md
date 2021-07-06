# Kataw parser test case

## Input

`````js
({...(a, b)})
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
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 224,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 5
                                },
                                "argument": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 132,
                                        "expressions": [
                                            {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 6,
                                                "end": 7
                                            },
                                            {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 8,
                                                "end": 10
                                            }
                                        ],
                                        "flags": 32,
                                        "transformFlags": 1024,
                                        "start": 5,
                                        "end": 11
                                    },
                                    "flags": 5,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 11
                                },
                                "flags": 1073741856,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 11
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 11
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 1,
                    "end": 12
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 34,
                "end": 13
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "({...(a, b)})",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript

({ ...(a, b) });
```

### Diagnostics

```javascript
✔ No errors
```

