# Kataw parser test case

## Input

`````js
`foo${bar}baz`
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
                            "kind": 134299649,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 6,
                            "end": 9
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 9
                    }
                ],
                "tail": {
                    "kind": 458761,
                    "text": "baz",
                    "rawText": "baz",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 14
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 14
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "`foo${bar}baz`",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript
`foo${bar}baz`;
```

### Diagnostics

```javascript
✔ No errors
```

