# Kataw parser test case

## Input

`````js
for (;;) {
  break /* comment */;
  continue /* comment */;
}

loop: for (;;) {
  break /* comment */ loop;
  break loop /* comment */;
  continue /* comment */ loop;
  continue loop /* comment */;
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
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "initializer": null,
            "condition": null,
            "incrementor": null,
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
                                "start": 10,
                                "end": 18
                            },
                            "label": null,
                            "flags": 16,
                            "start": 10,
                            "end": 33
                        },
                        {
                            "kind": 172,
                            "continueKeyword": {
                                "kind": 37757009,
                                "flags": 81,
                                "start": 33,
                                "end": 44
                            },
                            "label": null,
                            "flags": 16,
                            "start": 33,
                            "end": 59
                        }
                    ],
                    "flags": 17,
                    "start": 10,
                    "end": 59
                },
                "flags": 16,
                "start": 8,
                "end": 61
            },
            "flags": 80,
            "start": 0,
            "end": 61
        },
        {
            "kind": 163,
            "label": {
                "kind": 134299649,
                "text": "loop",
                "rawText": "loop",
                "flags": 97,
                "start": 61,
                "end": 67
            },
            "colonToken": {
                "kind": 21,
                "flags": 64,
                "start": 67,
                "end": 68
            },
            "statement": {
                "kind": 165,
                "forKeyword": {
                    "kind": 37757017,
                    "flags": 80,
                    "start": 68,
                    "end": 72
                },
                "initializer": null,
                "condition": null,
                "incrementor": null,
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
                                    "start": 79,
                                    "end": 87
                                },
                                "label": {
                                    "kind": 134299649,
                                    "text": "loop",
                                    "rawText": "loop",
                                    "flags": 96,
                                    "start": 87,
                                    "end": 106
                                },
                                "flags": 16,
                                "start": 79,
                                "end": 107
                            },
                            {
                                "kind": 150,
                                "breakKeyword": {
                                    "kind": 37757005,
                                    "flags": 81,
                                    "start": 107,
                                    "end": 115
                                },
                                "label": {
                                    "kind": 134299649,
                                    "text": "loop",
                                    "rawText": "loop",
                                    "flags": 96,
                                    "start": 115,
                                    "end": 120
                                },
                                "flags": 16,
                                "start": 107,
                                "end": 135
                            },
                            {
                                "kind": 172,
                                "continueKeyword": {
                                    "kind": 37757009,
                                    "flags": 81,
                                    "start": 135,
                                    "end": 146
                                },
                                "label": {
                                    "kind": 134299649,
                                    "text": "loop",
                                    "rawText": "loop",
                                    "flags": 96,
                                    "start": 146,
                                    "end": 165
                                },
                                "flags": 16,
                                "start": 135,
                                "end": 166
                            },
                            {
                                "kind": 172,
                                "continueKeyword": {
                                    "kind": 37757009,
                                    "flags": 81,
                                    "start": 166,
                                    "end": 177
                                },
                                "label": {
                                    "kind": 134299649,
                                    "text": "loop",
                                    "rawText": "loop",
                                    "flags": 96,
                                    "start": 177,
                                    "end": 182
                                },
                                "flags": 16,
                                "start": 166,
                                "end": 197
                            }
                        ],
                        "flags": 17,
                        "start": 79,
                        "end": 197
                    },
                    "flags": 16,
                    "start": 77,
                    "end": 199
                },
                "flags": 80,
                "start": 68,
                "end": 199
            },
            "flags": 17,
            "start": 61,
            "end": 199
        }
    ],
    "isModule": false,
    "source": "for (;;) {\n  break /* comment */;\n  continue /* comment */;\n}\n\nloop: for (;;) {\n  break /* comment */ loop;\n  break loop /* comment */;\n  continue /* comment */ loop;\n  continue loop /* comment */;\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 199
}
```

### Printed

```javascript

for (;;)
  {
    break ;
    continue ;
  }
loop:  for (;;)
  {
    break  loop;
    break  loop;
    continue  loop;
    continue  loop;
  }

```

### Diagnostics

```javascript
✔ No errors
```

