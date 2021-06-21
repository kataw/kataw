# Kataw parser test case

## Input

`````js
while (true) { break /* Multiline
Comment */there; }

while (true) { break // Comment
there; }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "expression": {
                "kind": 24752947,
                "flags": 96,
                "start": 7,
                "end": 11
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
                                "flags": 80,
                                "start": 14,
                                "end": 20
                            },
                            "label": null,
                            "flags": 16,
                            "start": 14,
                            "end": 20
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 134299649,
                                "text": "there",
                                "rawText": "there",
                                "flags": 96,
                                "start": 20,
                                "end": 49
                            },
                            "flags": 16,
                            "start": 20,
                            "end": 50
                        }
                    ],
                    "flags": 16,
                    "start": 14,
                    "end": 50
                },
                "flags": 16,
                "start": 12,
                "end": 52
            },
            "flags": 80,
            "start": 0,
            "end": 52
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 81,
                "start": 52,
                "end": 59
            },
            "expression": {
                "kind": 24752947,
                "flags": 96,
                "start": 61,
                "end": 65
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
                                "flags": 80,
                                "start": 68,
                                "end": 74
                            },
                            "label": null,
                            "flags": 16,
                            "start": 68,
                            "end": 74
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 134299649,
                                "text": "there",
                                "rawText": "there",
                                "flags": 96,
                                "start": 74,
                                "end": 91
                            },
                            "flags": 16,
                            "start": 74,
                            "end": 92
                        }
                    ],
                    "flags": 16,
                    "start": 68,
                    "end": 92
                },
                "flags": 16,
                "start": 66,
                "end": 94
            },
            "flags": 81,
            "start": 52,
            "end": 94
        }
    ],
    "isModule": false,
    "source": "while (true) { break /* Multiline\nComment */there; }\n\nwhile (true) { break // Comment\nthere; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 94
}
```

### Printed

```javascript

 while (true) { break;/* Multiline
Comment */ /* Multiline
Comment */there; } while (true) { break;// Comment
 // Comment
there; } 
```

### Diagnostics

```javascript
✔ No errors
```

