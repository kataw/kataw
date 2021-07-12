# Kataw parser test case

## Input

`````js
foo: while (true) { continue foo; }
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
                "kind": 154,
                "whileKeyword": {
                    "kind": 37757028,
                    "flags": 80,
                    "start": 4,
                    "end": 10
                },
                "expression": {
                    "kind": 24752947,
                    "flags": 96,
                    "start": 12,
                    "end": 16
                },
                "statement": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [
                            {
                                "kind": 172,
                                "continueKeyword": {
                                    "kind": 37757009,
                                    "flags": 80,
                                    "start": 19,
                                    "end": 28
                                },
                                "label": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 28,
                                    "end": 32
                                },
                                "flags": 16,
                                "start": 19,
                                "end": 33
                            }
                        ],
                        "flags": 16,
                        "start": 19,
                        "end": 33
                    },
                    "flags": 16,
                    "start": 17,
                    "end": 35
                },
                "flags": 80,
                "start": 4,
                "end": 35
            },
            "flags": 16,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "foo: while (true) { continue foo; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

  foo: while (true) {
    continue foo;
  }

```

### Diagnostics

```javascript
✔ No errors
```

