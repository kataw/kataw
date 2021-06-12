# Kataw parser test case

## Input

`````js
do wow: while (x) while (x) continue wow;
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 80,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 41,
                "end": 41
            },
            "whileKeyword": null,
            "statement": {
                "kind": 163,
                "label": {
                    "kind": 134299649,
                    "text": "wow",
                    "rawText": "wow",
                    "flags": 96,
                    "start": 2,
                    "end": 6
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 6,
                    "end": 7
                },
                "statement": {
                    "kind": 154,
                    "whileKeyword": {
                        "kind": 37757028,
                        "flags": 80,
                        "start": 7,
                        "end": 13
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 15,
                        "end": 16
                    },
                    "statement": {
                        "kind": 154,
                        "whileKeyword": {
                            "kind": 37757028,
                            "flags": 80,
                            "start": 17,
                            "end": 23
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 25,
                            "end": 26
                        },
                        "statement": {
                            "kind": 172,
                            "continueKeyword": {
                                "kind": 37757009,
                                "flags": 80,
                                "start": 27,
                                "end": 36
                            },
                            "label": {
                                "kind": 134299649,
                                "text": "wow",
                                "rawText": "wow",
                                "flags": 96,
                                "start": 36,
                                "end": 40
                            },
                            "flags": 16,
                            "start": 27,
                            "end": 41
                        },
                        "flags": 80,
                        "start": 17,
                        "end": 41
                    },
                    "flags": 80,
                    "start": 7,
                    "end": 41
                },
                "flags": 16,
                "start": 2,
                "end": 41
            },
            "flags": 80,
            "start": 0,
            "end": 41
        }
    ],
    "isModule": false,
    "source": "do wow: while (x) while (x) continue wow;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 41
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing an opening parentheses - '( - start: 40, end: 41

```

