# Kataw parser test case

## Input

`````js
foo: { while(z) continue foo }
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
            "labels": [
                {
                    "kind": 256,
                    "label": "foo",
                    "iterationStatement": false,
                    "flags": 16,
                    "start": 0,
                    "end": 3
                }
            ],
            "colonToken": {
                "kind": 21,
                "flags": 0,
                "start": 3,
                "end": 4
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 154,
                            "whileKeyword": {
                                "kind": 37757028,
                                "flags": 0,
                                "start": 6,
                                "end": 12
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "z",
                                "rawText": "z",
                                "flags": 96,
                                "start": 13,
                                "end": 14
                            },
                            "statement": {
                                "kind": 172,
                                "continueKeyword": {
                                    "kind": 37757009,
                                    "flags": 0,
                                    "start": 15,
                                    "end": 24
                                },
                                "label": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 24,
                                    "end": 28
                                },
                                "flags": 16,
                                "start": 15,
                                "end": 28
                            },
                            "flags": 16,
                            "start": 6,
                            "end": 28
                        }
                    ],
                    "flags": 16,
                    "start": 6,
                    "end": 28
                },
                "flags": 16,
                "start": 4,
                "end": 30
            },
            "flags": 16,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "foo: { while(z) continue foo }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

foo: {
  while (z) continue foo;
}
```

### Diagnostics

```javascript
✔ No errors
```

