# Kataw parser test case

## Input

`````js
{`foo ${a} and ${b} and ${c} baz`}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
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
                                        "start": 8,
                                        "end": 9
                                    },
                                    "flags": 32,
                                    "start": 1,
                                    "end": 9
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
                                        "start": 17,
                                        "end": 18
                                    },
                                    "flags": 32,
                                    "start": 9,
                                    "end": 18
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
                                        "start": 26,
                                        "end": 27
                                    },
                                    "flags": 32,
                                    "start": 18,
                                    "end": 27
                                }
                            ],
                            "tail": {
                                "kind": 458761,
                                "text": " baz",
                                "rawText": " baz",
                                "flags": 96,
                                "start": 27,
                                "end": 33
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 33
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 33
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 33
            },
            "flags": 16,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "{`foo ${a} and ${b} and ${c} baz`}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

{
  `foo ${a},
   and ${b},
   and ${c} baz`;
}
```

### Diagnostics

```javascript
✔ No errors
```

