# Kataw parser test case

## Input

`````js
foo: break foo;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 163,
            "label": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "statement": {
                "kind": 150,
                "breakKeyword": {
                    "kind": 37757005,
                    "flags": 4,
                    "start": 0,
                    "end": 10
                },
                "label": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 768,
                    "start": 10,
                    "end": 14
                },
                "flags": 128,
                "start": 4,
                "end": 15
            },
            "flags": 128,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": false,
    "text": "foo: break foo;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 15
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

