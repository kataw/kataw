# Kataw parser test case

## Input

`````js
`foo${`foo${bar}baz`}baz`
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
                                        "start": 12,
                                        "end": 15
                                    },
                                    "flags": 32,
                                    "start": 6,
                                    "end": 15
                                }
                            ],
                            "tail": {
                                "kind": 458761,
                                "text": "baz",
                                "rawText": "baz",
                                "flags": 96,
                                "start": 15,
                                "end": 20
                            },
                            "flags": 32,
                            "start": 6,
                            "end": 20
                        },
                        "flags": 32,
                        "start": 0,
                        "end": 20
                    }
                ],
                "tail": {
                    "kind": 458761,
                    "text": "baz",
                    "rawText": "baz",
                    "flags": 96,
                    "start": 20,
                    "end": 25
                },
                "flags": 32,
                "start": 0,
                "end": 25
            },
            "flags": 16,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "`foo${`foo${bar}baz`}baz`",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript

 ; 
```

### Diagnostics

```javascript
✔ No errors
```

