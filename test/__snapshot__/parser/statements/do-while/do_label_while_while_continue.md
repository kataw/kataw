# Kataw parser test case

## Input

`````js
do wow: while (x) while (x) continue wow;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 768,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "autofix": 0,
                "flags": 12,
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
                    "flags": 768,
                    "start": 2,
                    "end": 6
                },
                "statement": {
                    "kind": 154,
                    "whileKeyword": {
                        "kind": 37757028,
                        "flags": 768,
                        "start": 7,
                        "end": 13
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 768,
                        "start": 15,
                        "end": 16
                    },
                    "statement": {
                        "kind": 154,
                        "whileKeyword": {
                            "kind": 37757028,
                            "flags": 768,
                            "start": 17,
                            "end": 23
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 25,
                            "end": 26
                        },
                        "statement": {
                            "kind": 172,
                            "continueKeyword": {
                                "kind": 37757009,
                                "flags": 768,
                                "start": 27,
                                "end": 36
                            },
                            "label": {
                                "kind": 134299649,
                                "text": "wow",
                                "rawText": "wow",
                                "flags": 768,
                                "start": 36,
                                "end": 40
                            },
                            "flags": 128,
                            "start": 27,
                            "end": 41
                        },
                        "flags": 128,
                        "start": 17,
                        "end": 41
                    },
                    "flags": 128,
                    "start": 7,
                    "end": 41
                },
                "flags": 128,
                "start": 2,
                "end": 41
            },
            "flags": 128,
            "start": 0,
            "end": 41
        }
    ],
    "isModule": false,
    "text": "do wow: while (x) while (x) continue wow;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 41
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Unexpected token. - start: 41, end: 41
@{x2716}@ Unexpected token. - start: 41, end: 41
@{x2716}@ Expression expected - start: 41, end: 41
@{x2716}@ Unexpected token. - start: 41, end: 41

```

