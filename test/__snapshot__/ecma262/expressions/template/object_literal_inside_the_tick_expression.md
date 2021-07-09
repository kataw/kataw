# Kataw parser test case

## Input

`````js
`foo${{}}baz`
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
                "kind": 227,
                "spans": [
                    {
                        "kind": 65764,
                        "rawText": "foo",
                        "text": "foo",
                        "expression": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 7
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 6,
                            "end": 8
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 8
                    }
                ],
                "tail": {
                    "kind": 458761,
                    "text": "baz",
                    "rawText": "baz",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 13
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 13
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "`foo${{}}baz`",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript
`foo${{}}baz`;
```

### Diagnostics

```javascript
✔ No errors
```

