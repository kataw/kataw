# Kataw parser test case

## Input

`````js
`${y,0}`
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
                        "rawText": "",
                        "text": "",
                        "expression": {
                            "kind": 132,
                            "expressions": [
                                {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 3,
                                    "end": 4
                                },
                                {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 96,
                                    "start": 5,
                                    "end": 6
                                }
                            ],
                            "flags": 32,
                            "start": 3,
                            "end": 6
                        },
                        "flags": 32,
                        "start": 0,
                        "end": 6
                    }
                ],
                "tail": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 96,
                    "start": 6,
                    "end": 8
                },
                "flags": 32,
                "start": 0,
                "end": 8
            },
            "flags": 16,
            "start": 0,
            "end": 8
        }
    ],
    "isModule": false,
    "source": "`${y,0}`",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 8
}
```

### Printed

```javascript

`${y, 0}```;
```

### Diagnostics

```javascript
✔ No errors
```

