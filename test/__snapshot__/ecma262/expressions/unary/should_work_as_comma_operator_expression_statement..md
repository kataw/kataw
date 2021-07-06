# Kataw parser test case

## Input

`````js
delete foo.bar, z;
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
                "kind": 132,
                "expressions": [
                    {
                        "kind": 126,
                        "operandToken": {
                            "kind": 4259886,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 6
                        },
                        "operand": {
                            "kind": 129,
                            "member": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 6,
                                "end": 10
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 11,
                                "end": 14
                            },
                            "flags": 96,
                            "transformFlags": 2,
                            "start": 6,
                            "end": 14
                        },
                        "flags": 32,
                        "transformFlags": 1024,
                        "start": 0,
                        "end": 14
                    },
                    {
                        "kind": 134299649,
                        "text": "z",
                        "rawText": "z",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 17
                    }
                ],
                "flags": 32,
                "transformFlags": 1024,
                "start": 0,
                "end": 17
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "delete foo.bar, z;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript
delete foo.bar, z;
```

### Diagnostics

```javascript
✔ No errors
```

