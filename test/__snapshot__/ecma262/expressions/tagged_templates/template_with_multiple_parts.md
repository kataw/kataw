# Kataw parser test case

## Input

`````js
foo`x${a}y${b}z`
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
                "kind": 226,
                "member": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 0,
                    "end": 3
                },
                "template": {
                    "kind": 227,
                    "spans": [
                        {
                            "kind": 65764,
                            "rawText": "x",
                            "text": "x",
                            "expression": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 7,
                                "end": 8
                            },
                            "flags": 32,
                            "start": 3,
                            "end": 8
                        },
                        {
                            "kind": 65764,
                            "rawText": "y",
                            "text": "y",
                            "expression": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 12,
                                "end": 13
                            },
                            "flags": 32,
                            "start": 8,
                            "end": 13
                        }
                    ],
                    "tail": {
                        "kind": 458761,
                        "text": "z",
                        "rawText": "z",
                        "flags": 96,
                        "start": 13,
                        "end": 16
                    },
                    "flags": 32,
                    "start": 3,
                    "end": 16
                },
                "flags": 32,
                "start": 0,
                "end": 16
            },
            "flags": 16,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "foo`x${a}y${b}z`",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript

foo` x${a}y${b} z`;

```

### Diagnostics

```javascript
✔ No errors
```

