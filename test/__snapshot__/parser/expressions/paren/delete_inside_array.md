# Kataw parser test case

## Input

`````js
([delete foo.bar]);
`````

## Output

### Hybrid CST

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
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 4259886,
                                    "flags": 64,
                                    "start": 2,
                                    "end": 8
                                },
                                "expression": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "start": 8,
                                        "end": 12
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "bar",
                                        "rawText": "bar",
                                        "flags": 96,
                                        "start": 13,
                                        "end": 16
                                    },
                                    "flags": 32,
                                    "start": 8,
                                    "end": 16
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 16
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 2,
                        "end": 16
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 17
                },
                "flags": 32,
                "start": 0,
                "end": 18
            },
            "flags": 16,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "([delete foo.bar]);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

