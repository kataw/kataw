# Kataw parser test case

## Input

`````js
`foo${`foo`}baz`
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
                            "kind": 458761,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 134217824,
                            "transformFlags": 0,
                            "start": 6,
                            "end": 11
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 11
                    }
                ],
                "tail": {
                    "kind": 458761,
                    "text": "baz",
                    "rawText": "baz",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 16
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 16
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "`foo${`foo`}baz`",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript
`foo${`foo`}baz`;
```

### Diagnostics

```javascript
✔ No errors
```

