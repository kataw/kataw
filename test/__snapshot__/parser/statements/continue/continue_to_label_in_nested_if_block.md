# Kataw parser test case

## Input

`````js
foo: while (true) if (x) { continue foo; }
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
                    "kind": 164,
                    "ifKeyword": {
                        "kind": 37757019,
                        "flags": 80,
                        "start": 17,
                        "end": 20
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 22,
                        "end": 23
                    },
                    "consequent": {
                        "kind": 124,
                        "block": {
                            "kind": 249,
                            "statements": [
                                {
                                    "kind": 172,
                                    "continueKeyword": {
                                        "kind": 37757009,
                                        "flags": 80,
                                        "start": 26,
                                        "end": 35
                                    },
                                    "label": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "start": 35,
                                        "end": 39
                                    },
                                    "flags": 16,
                                    "start": 26,
                                    "end": 40
                                }
                            ],
                            "flags": 16,
                            "start": 26,
                            "end": 40
                        },
                        "flags": 16,
                        "start": 24,
                        "end": 42
                    },
                    "elseKeyword": null,
                    "alternate": null,
                    "flags": 80,
                    "start": 17,
                    "end": 42
                },
                "flags": 80,
                "start": 4,
                "end": 42
            },
            "flags": 16,
            "start": 0,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "foo: while (true) if (x) { continue foo; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript

foo: while (true) if (x) {
      continue foo;
    }
```

### Diagnostics

```javascript
✔ No errors
```

