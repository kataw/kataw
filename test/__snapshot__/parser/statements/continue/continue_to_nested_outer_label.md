# Kataw parser test case

## Input

`````js
foo: bar: while (true) continue foo;
`````

## Output

### CST

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
                "flags": 96,
                "start": 0,
                "end": 3
            },
            "colonToken": {
                "kind": 21,
                "flags": 64,
                "start": 3,
                "end": 4
            },
            "statement": {
                "kind": 163,
                "label": {
                    "kind": 134299649,
                    "text": "bar",
                    "rawText": "bar",
                    "flags": 96,
                    "start": 4,
                    "end": 8
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 8,
                    "end": 9
                },
                "statement": {
                    "kind": 154,
                    "whileKeyword": {
                        "kind": 37757028,
                        "flags": 80,
                        "start": 9,
                        "end": 15
                    },
                    "expression": {
                        "kind": 24752947,
                        "flags": 96,
                        "start": 17,
                        "end": 21
                    },
                    "statement": {
                        "kind": 172,
                        "continueKeyword": {
                            "kind": 37757009,
                            "flags": 80,
                            "start": 22,
                            "end": 31
                        },
                        "label": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 31,
                            "end": 35
                        },
                        "flags": 16,
                        "start": 22,
                        "end": 36
                    },
                    "flags": 80,
                    "start": 9,
                    "end": 36
                },
                "flags": 16,
                "start": 4,
                "end": 36
            },
            "flags": 16,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "foo: bar: while (true) continue foo;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

foo: bar: while (true) continue foo;
```

### Diagnostics

```javascript
✔ No errors
```

