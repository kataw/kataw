# Kataw parser test case

## Input

`````js
{ a(); bt(); }
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
                        "kind": 120,
                        "expression": {
                            "kind": 131,
                            "expression": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 768,
                                "start": 1,
                                "end": 3
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 4,
                                "end": 4
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 5
                        },
                        "flags": 128,
                        "start": 1,
                        "end": 6
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 131,
                            "expression": {
                                "kind": 134299649,
                                "text": "bt",
                                "rawText": "bt",
                                "flags": 768,
                                "start": 6,
                                "end": 9
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 10,
                                "end": 10
                            },
                            "flags": 256,
                            "start": 6,
                            "end": 11
                        },
                        "flags": 128,
                        "start": 6,
                        "end": 12
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 12
            },
            "flags": 128,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "text": "{ a(); bt(); }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
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

