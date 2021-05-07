# Kataw parser test case

## Input

`````js
delete (foo.bar);
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
                "kind": 126,
                "operandToken": {
                    "kind": 4259886,
                    "flags": 64,
                    "start": 0,
                    "end": 6
                },
                "operand": {
                    "kind": 121,
                    "expression": {
                        "kind": 129,
                        "member": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 8,
                            "end": 11
                        },
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
                    },
                    "flags": 32,
                    "start": 6,
                    "end": 16
                },
                "flags": 32,
                "start": 0,
                "end": 16
            },
            "flags": 16,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "delete (foo.bar);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

(foo.bar);
```

### Diagnostics

```javascript
✔ No errors
```

