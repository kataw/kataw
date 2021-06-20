# Kataw parser test case

## Input

`````js
foo: while (
  x
  // comment 1
) {
  break /* comment 2 */ foo;
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
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 12,
                    "end": 13
                },
                "statement": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [
                            {
                                "kind": 150,
                                "breakKeyword": {
                                    "kind": 37757005,
                                    "flags": 81,
                                    "start": 16,
                                    "end": 24
                                },
                                "label": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 24,
                                    "end": 44
                                },
                                "flags": 16,
                                "start": 16,
                                "end": 45
                            }
                        ],
                        "flags": 17,
                        "start": 16,
                        "end": 45
                    },
                    "flags": 16,
                    "start": 14,
                    "end": 47
                },
                "flags": 80,
                "start": 4,
                "end": 47
            },
            "flags": 16,
            "start": 0,
            "end": 47
        }
    ],
    "isModule": false,
    "source": "foo: while (x) {\n  break /* comment 1 */ foo;\n}\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript

 foo: while (x) { break/* comment 1 */ foo; }
```

### Diagnostics

```javascript
✔ No errors
```

