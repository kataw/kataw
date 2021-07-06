# Kataw parser test case

## Input

`````js
delete /foo/.bar;
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
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 6
                },
                "operand": {
                    "kind": 129,
                    "member": {
                        "kind": 371,
                        "text": "/foo/",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 12
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 13,
                        "end": 16
                    },
                    "flags": 96,
                    "transformFlags": 2,
                    "start": 6,
                    "end": 16
                },
                "flags": 32,
                "transformFlags": 1024,
                "start": 0,
                "end": 16
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "delete /foo/.bar;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript
delete /foo/.bar;
```

### Diagnostics

```javascript
✔ No errors
```

