# Kataw parser test case

## Input

`````js
`foo ${a} and ${b} and ${c} baz`
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
                        "rawText": "foo ",
                        "text": "foo ",
                        "expression": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 8
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 8
                    },
                    {
                        "kind": 65764,
                        "rawText": " and ",
                        "text": " and ",
                        "expression": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 17
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 17
                    },
                    {
                        "kind": 65764,
                        "rawText": " and ",
                        "text": " and ",
                        "expression": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 25,
                            "end": 26
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 26
                    }
                ],
                "tail": {
                    "kind": 458761,
                    "text": " baz",
                    "rawText": " baz",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 26,
                    "end": 32
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 32
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "`foo ${a} and ${b} and ${c} baz`",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript
`foo ${a},
 and ${b},
 and ${c} baz`;
```

### Diagnostics

```javascript
✔ No errors
```

