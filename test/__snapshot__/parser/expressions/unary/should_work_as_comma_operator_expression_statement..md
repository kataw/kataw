# Kataw parser test case

## Input

`````js
delete foo.bar, z;
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
                "kind": 132,
                "expressions": [
                    {
                        "kind": 126,
                        "operandToken": {
                            "kind": 4259886,
                            "flags": 64,
                            "start": 0,
                            "end": 6
                        },
                        "expression": {
                            "kind": 129,
                            "member": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "start": 6,
                                "end": 10
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 96,
                                "start": 11,
                                "end": 14
                            },
                            "flags": 32,
                            "start": 6,
                            "end": 14
                        },
                        "flags": 32,
                        "start": 0,
                        "end": 14
                    },
                    {
                        "kind": 134299649,
                        "text": "z",
                        "rawText": "z",
                        "flags": 96,
                        "start": 15,
                        "end": 17
                    }
                ],
                "flags": 32,
                "start": 0,
                "end": 17
            },
            "flags": 16,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "text": "delete foo.bar, z;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
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

