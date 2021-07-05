# Kataw parser test case

## Input

`````js
if (cond) {
  stuff;
} /* comment */ else if (cond) {
  stuff;
}
// comment
else {
  stuff;
}

if (cond) stuff;
// comment
else stuff;
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 80,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 134299649,
                "text": "cond",
                "rawText": "cond",
                "flags": 96,
                "start": 4,
                "end": 8
            },
            "consequent": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 134299649,
                                "text": "stuff",
                                "rawText": "stuff",
                                "flags": 97,
                                "start": 11,
                                "end": 19
                            },
                            "flags": 16,
                            "start": 11,
                            "end": 20
                        }
                    ],
                    "flags": 17,
                    "start": 11,
                    "end": 20
                },
                "flags": 16,
                "start": 9,
                "end": 22
            },
            "elseKeyword": {
                "kind": 4194389,
                "flags": 64,
                "start": 22,
                "end": 41
            },
            "alternate": {
                "kind": 164,
                "ifKeyword": {
                    "kind": 37757019,
                    "flags": 80,
                    "start": 41,
                    "end": 44
                },
                "expression": {
                    "kind": 134299649,
                    "text": "cond",
                    "rawText": "cond",
                    "flags": 96,
                    "start": 46,
                    "end": 50
                },
                "consequent": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "stuff",
                                    "rawText": "stuff",
                                    "flags": 97,
                                    "start": 53,
                                    "end": 61
                                },
                                "flags": 16,
                                "start": 53,
                                "end": 62
                            }
                        ],
                        "flags": 17,
                        "start": 53,
                        "end": 62
                    },
                    "flags": 16,
                    "start": 51,
                    "end": 64
                },
                "elseKeyword": {
                    "kind": 4194389,
                    "flags": 65,
                    "start": 64,
                    "end": 80
                },
                "alternate": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "stuff",
                                    "rawText": "stuff",
                                    "flags": 97,
                                    "start": 82,
                                    "end": 90
                                },
                                "flags": 16,
                                "start": 82,
                                "end": 91
                            }
                        ],
                        "flags": 17,
                        "start": 82,
                        "end": 91
                    },
                    "flags": 16,
                    "start": 80,
                    "end": 93
                },
                "flags": 80,
                "start": 41,
                "end": 93
            },
            "flags": 80,
            "start": 0,
            "end": 93
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 81,
                "start": 93,
                "end": 97
            },
            "expression": {
                "kind": 134299649,
                "text": "cond",
                "rawText": "cond",
                "flags": 96,
                "start": 99,
                "end": 103
            },
            "consequent": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "stuff",
                    "rawText": "stuff",
                    "flags": 96,
                    "start": 104,
                    "end": 110
                },
                "flags": 16,
                "start": 104,
                "end": 111
            },
            "elseKeyword": {
                "kind": 4194389,
                "flags": 65,
                "start": 111,
                "end": 127
            },
            "alternate": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "stuff",
                    "rawText": "stuff",
                    "flags": 96,
                    "start": 127,
                    "end": 133
                },
                "flags": 16,
                "start": 127,
                "end": 134
            },
            "flags": 81,
            "start": 93,
            "end": 134
        }
    ],
    "isModule": false,
    "source": "if (cond) {\n  stuff;\n} /* comment */ else if (cond) {\n  stuff;\n}\n// comment\nelse {\n  stuff;\n}\n\nif (cond) stuff;\n// comment\nelse stuff;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 134
}
```

### Printed

```javascript

if (cond) {
    stuff;
  }
else  if (cond) {
    stuff;
  }
else  {
    stuff;
  }
if (cond) stuff;
else  stuff;

```

### Diagnostics

```javascript
✔ No errors
```

