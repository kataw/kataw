# Kataw parser test case

## Input

`````js
 foo: while (x) {
  break /* comment 1 */ foo;
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
                "end": 4
            },
            "colonToken": {
                "kind": 21,
                "flags": 64,
                "start": 4,
                "end": 5
            },
            "statement": {
                "kind": 154,
                "whileKeyword": {
                    "kind": 37757028,
                    "flags": 80,
                    "start": 5,
                    "end": 11
                },
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 13,
                    "end": 14
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
                                    "start": 17,
                                    "end": 25
                                },
                                "label": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 25,
                                    "end": 45
                                },
                                "flags": 16,
                                "start": 17,
                                "end": 46
                            }
                        ],
                        "flags": 17,
                        "start": 17,
                        "end": 46
                    },
                    "flags": 16,
                    "start": 15,
                    "end": 48
                },
                "flags": 80,
                "start": 5,
                "end": 48
            },
            "flags": 16,
            "start": 0,
            "end": 48
        }
    ],
    "isModule": false,
    "source": " foo: while (x) {\n  break /* comment 1 */ foo;\n}\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 49
}
```

### Printed

```javascript

  foo: while (x) {
    break/* comment 1 */ foo;
  }

```

### Diagnostics

```javascript
✔ No errors
```

