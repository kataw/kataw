# Kataw parser test case

## Input

`````js
{length: 3000}/*{ StatementListItem }*/;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 163,
                        "label": {
                            "kind": 134299649,
                            "text": "length",
                            "rawText": "length",
                            "flags": 96,
                            "start": 1,
                            "end": 7
                        },
                        "labels": [
                            {
                                "kind": 256,
                                "label": "length",
                                "iterationStatement": false,
                                "flags": 16,
                                "start": 1,
                                "end": 7
                            }
                        ],
                        "colonToken": {
                            "kind": 21,
                            "flags": 0,
                            "start": 7,
                            "end": 8
                        },
                        "statement": {
                            "kind": 120,
                            "expression": {
                                "kind": 201392130,
                                "text": 3000,
                                "rawText": "3000",
                                "flags": 96,
                                "start": 8,
                                "end": 13
                            },
                            "flags": 16,
                            "start": 8,
                            "end": 13
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 13
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 14
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 14,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "{length: 3000}/*{ StatementListItem }*/;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

