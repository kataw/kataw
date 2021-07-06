# Kataw parser test case

## Input

`````js
foo: do { bar: do continue bar;while(z) } while(z)
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
                "kind": 169,
                "doKeyword": {
                    "kind": 4202580,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 7
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
                                    "text": "bar",
                                    "rawText": "bar",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 9,
                                    "end": 13
                                },
                                "colonToken": {
                                    "kind": 21,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 13,
                                    "end": 14
                                },
                                "statement": {
                                    "kind": 169,
                                    "doKeyword": {
                                        "kind": 4202580,
                                        "flags": 80,
                                        "transformFlags": 0,
                                        "start": 14,
                                        "end": 17
                                    },
                                    "statement": {
                                        "kind": 172,
                                        "continueKeyword": {
                                            "kind": 37757009,
                                            "flags": 80,
                                            "transformFlags": 0,
                                            "start": 17,
                                            "end": 26
                                        },
                                        "label": {
                                            "kind": 134299649,
                                            "text": "bar",
                                            "rawText": "bar",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 26,
                                            "end": 30
                                        },
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 17,
                                        "end": 31
                                    },
                                    "whileKeyword": {
                                        "kind": 37757028,
                                        "flags": 80,
                                        "transformFlags": 0,
                                        "start": 31,
                                        "end": 36
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 37,
                                        "end": 38
                                    },
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 14,
                                    "end": 39
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 39
                            }
                        ],
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 9,
                        "end": 39
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 41
                },
                "whileKeyword": {
                    "kind": 37757028,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 41,
                    "end": 47
                },
                "expression": {
                    "kind": 134299649,
                    "text": "z",
                    "rawText": "z",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 48,
                    "end": 49
                },
                "flags": 80,
                "transformFlags": 0,
                "start": 4,
                "end": 50
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 50
        }
    ],
    "isModule": false,
    "source": "foo: do { bar: do continue bar;while(z) } while(z)",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 50
}
```

### Printed

```javascript

foo:  do  {
    bar:  do  continue  bar;
    while (z);
  }
while (z);
```

### Diagnostics

```javascript
✔ No errors
```

