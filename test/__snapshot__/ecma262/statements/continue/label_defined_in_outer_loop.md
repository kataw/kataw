# Kataw parser test case

## Input

`````js
while (true) {
  x: while (true) continue x;
}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "expression": {
                "kind": 24752947,
                "flags": 96,
                "start": 7,
                "end": 11
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 163,
                            "label": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 97,
                                "start": 14,
                                "end": 18
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "start": 18,
                                "end": 19
                            },
                            "statement": {
                                "kind": 154,
                                "whileKeyword": {
                                    "kind": 37757028,
                                    "flags": 80,
                                    "start": 19,
                                    "end": 25
                                },
                                "expression": {
                                    "kind": 24752947,
                                    "flags": 96,
                                    "start": 27,
                                    "end": 31
                                },
                                "statement": {
                                    "kind": 172,
                                    "continueKeyword": {
                                        "kind": 37757009,
                                        "flags": 80,
                                        "start": 32,
                                        "end": 41
                                    },
                                    "label": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 41,
                                        "end": 43
                                    },
                                    "flags": 16,
                                    "start": 32,
                                    "end": 44
                                },
                                "flags": 80,
                                "start": 19,
                                "end": 44
                            },
                            "flags": 17,
                            "start": 14,
                            "end": 44
                        }
                    ],
                    "flags": 17,
                    "start": 14,
                    "end": 44
                },
                "flags": 16,
                "start": 12,
                "end": 46
            },
            "flags": 80,
            "start": 0,
            "end": 46
        }
    ],
    "isModule": false,
    "source": "while (true) {\n  x: while (true) continue x;\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 46
}
```

### Printed

```javascript

  while (true) {
    x: while (true)
      continue x;
  }

```

### Diagnostics

```javascript
✔ No errors
```

