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
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "colonToken": {
                "kind": 21,
                "flags": 64,
                "transformFlags": 0,
                "start": 3,
                "end": 4
            },
            "statement": {
                "kind": 154,
                "whileKeyword": {
                    "kind": 37757028,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 10
                },
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 16
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
                                    "transformFlags": 0,
                                    "start": 35,
                                    "end": 43
                                },
                                "label": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 43,
                                    "end": 63
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 35,
                                "end": 64
                            }
                        ],
                        "flags": 17,
                        "transformFlags": 0,
                        "start": 35,
                        "end": 64
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 66
                },
                "flags": 80,
                "transformFlags": 0,
                "start": 4,
                "end": 66
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 66
        }
    ],
    "isModule": false,
    "source": "foo: while (\n  x\n  // comment 1\n) {\n  break /* comment 2 */ foo;\n}\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 67
}
```

### Printed

```javascript
foo:  while (x) {
    break foo;
  }
```

### Diagnostics

```javascript
✔ No errors
```

