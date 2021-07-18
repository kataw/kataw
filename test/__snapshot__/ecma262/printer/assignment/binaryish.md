# Kataw parser test case

## Input

`````js
const computedDescriptionLines = (showConfirm &&
  descriptionLinesConfirming) ||
  (focused && !loading && descriptionLinesFocused) ||
  descriptionLines;

computedDescriptionLines = (focused &&
  !loading &&
  descriptionLinesFocused) ||
  descriptionLines;
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "computedDescriptionLines",
                            "rawText": "computedDescriptionLines",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 30
                        },
                        "type": null,
                        "initializer": {
                            "kind": 198,
                            "left": {
                                "kind": 198,
                                "left": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "showConfirm",
                                            "rawText": "showConfirm",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 34,
                                            "end": 45
                                        },
                                        "operatorToken": {
                                            "kind": 33594,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 45,
                                            "end": 48
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "descriptionLinesConfirming",
                                            "rawText": "descriptionLinesConfirming",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 48,
                                            "end": 77
                                        },
                                        "flags": 96,
                                        "transformFlags": 5120,
                                        "start": 32,
                                        "end": 77
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 78
                                },
                                "operatorToken": {
                                    "kind": 33339,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 78,
                                    "end": 81
                                },
                                "right": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "focused",
                                                "rawText": "focused",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 85,
                                                "end": 92
                                            },
                                            "operatorToken": {
                                                "kind": 33594,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 92,
                                                "end": 95
                                            },
                                            "right": {
                                                "kind": 126,
                                                "operandToken": {
                                                    "kind": 65584,
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 95,
                                                    "end": 97
                                                },
                                                "operand": {
                                                    "kind": 134299649,
                                                    "text": "loading",
                                                    "rawText": "loading",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 97,
                                                    "end": 104
                                                },
                                                "flags": 32,
                                                "transformFlags": 16384,
                                                "start": 95,
                                                "end": 104
                                            },
                                            "flags": 96,
                                            "transformFlags": 5120,
                                            "start": 81,
                                            "end": 104
                                        },
                                        "operatorToken": {
                                            "kind": 33594,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 104,
                                            "end": 107
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "descriptionLinesFocused",
                                            "rawText": "descriptionLinesFocused",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 107,
                                            "end": 131
                                        },
                                        "flags": 96,
                                        "transformFlags": 5120,
                                        "start": 81,
                                        "end": 131
                                    },
                                    "flags": 81,
                                    "transformFlags": 0,
                                    "start": 33,
                                    "end": 132
                                },
                                "flags": 32,
                                "transformFlags": 5120,
                                "start": 32,
                                "end": 132
                            },
                            "operatorToken": {
                                "kind": 33339,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 132,
                                "end": 135
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "descriptionLines",
                                "rawText": "descriptionLines",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 135,
                                "end": 154
                            },
                            "flags": 32,
                            "transformFlags": 5120,
                            "start": 32,
                            "end": 154
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 5,
                        "end": 154
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 5,
                "end": 154
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 155
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "computedDescriptionLines",
                    "rawText": "computedDescriptionLines",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 155,
                    "end": 181
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 181,
                    "end": 183
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 121,
                        "expression": {
                            "kind": 198,
                            "left": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "focused",
                                    "rawText": "focused",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 185,
                                    "end": 192
                                },
                                "operatorToken": {
                                    "kind": 33594,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 192,
                                    "end": 195
                                },
                                "right": {
                                    "kind": 126,
                                    "operandToken": {
                                        "kind": 65584,
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 195,
                                        "end": 199
                                    },
                                    "operand": {
                                        "kind": 134299649,
                                        "text": "loading",
                                        "rawText": "loading",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 199,
                                        "end": 206
                                    },
                                    "flags": 32,
                                    "transformFlags": 16384,
                                    "start": 195,
                                    "end": 206
                                },
                                "flags": 96,
                                "transformFlags": 5120,
                                "start": 183,
                                "end": 206
                            },
                            "operatorToken": {
                                "kind": 33594,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 206,
                                "end": 209
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "descriptionLinesFocused",
                                "rawText": "descriptionLinesFocused",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 209,
                                "end": 235
                            },
                            "flags": 96,
                            "transformFlags": 5120,
                            "start": 183,
                            "end": 235
                        },
                        "flags": 183,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 236
                    },
                    "operatorToken": {
                        "kind": 33339,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 236,
                        "end": 239
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "descriptionLines",
                        "rawText": "descriptionLines",
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 239,
                        "end": 258
                    },
                    "flags": 183,
                    "transformFlags": 5120,
                    "start": 183,
                    "end": 258
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 155,
                "end": 258
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 155,
            "end": 259
        }
    ],
    "isModule": false,
    "source": "const computedDescriptionLines = (showConfirm &&\n  descriptionLinesConfirming) ||\n  (focused && !loading && descriptionLinesFocused) ||\n  descriptionLines;\n\ncomputedDescriptionLines = (focused &&\n  !loading &&\n  descriptionLinesFocused) ||\n  descriptionLines;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 259
}
```

### Printed

```javascript
const computedDescriptionLines =
    (showConfirm && descriptionLinesConfirming) ||
    (focused && !loading && descriptionLinesFocused) ||
    descriptionLines
  ;
computedDescriptionLines =
  (focused && !loading && descriptionLinesFocused) || descriptionLines
;

```

### Diagnostics

```javascript
✔ No errors
```

