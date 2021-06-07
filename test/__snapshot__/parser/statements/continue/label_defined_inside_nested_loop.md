# Kataw parser test case

## Input

`````js
while (true)
  while (true) {
    x: continue x;
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
                "kind": 154,
                "whileKeyword": {
                    "kind": 37757028,
                    "flags": 81,
                    "start": 12,
                    "end": 20
                },
                "expression": {
                    "kind": 24752947,
                    "flags": 96,
                    "start": 22,
                    "end": 26
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
                                    "flags": 96,
                                    "start": 29,
                                    "end": 35
                                },
                                "colonToken": {
                                    "kind": 21,
                                    "flags": 64,
                                    "start": 35,
                                    "end": 36
                                },
                                "statement": {
                                    "kind": 172,
                                    "continueKeyword": {
                                        "kind": 37757009,
                                        "flags": 80,
                                        "start": 36,
                                        "end": 45
                                    },
                                    "label": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 45,
                                        "end": 47
                                    },
                                    "flags": 16,
                                    "start": 36,
                                    "end": 48
                                },
                                "flags": 17,
                                "start": 29,
                                "end": 48
                            }
                        ],
                        "flags": 17,
                        "start": 29,
                        "end": 48
                    },
                    "flags": 16,
                    "start": 27,
                    "end": 52
                },
                "flags": 16,
                "start": 12,
                "end": 52
            },
            "flags": 16,
            "start": 0,
            "end": 52
        }
    ],
    "isModule": false,
    "source": "while (true)\n  while (true) {\n    x: continue x;\n  }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 52
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ A 'continue' statement can only jump to a label of an enclosing iteration statement. - start: 36, end: 48

```

