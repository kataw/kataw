# Kataw parser test case

## Input

`````js
switch (x) { case y: break; default: return; }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 0,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 8,
                "end": 9
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 12,
                            "start": 0,
                            "end": 17
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 768,
                            "start": 17,
                            "end": 19
                        },
                        "statements": [
                            {
                                "kind": 150,
                                "breakKeyword": {
                                    "kind": 37757005,
                                    "flags": 20,
                                    "start": 0,
                                    "end": 26
                                },
                                "label": null,
                                "flags": 128,
                                "start": 20,
                                "end": 27
                            }
                        ],
                        "flags": 128,
                        "start": 12,
                        "end": 27
                    },
                    {
                        "kind": 170,
                        "defaultKeyword": {
                            "kind": 4194387,
                            "flags": 27,
                            "start": 0,
                            "end": 35
                        },
                        "statements": [
                            {
                                "kind": 161,
                                "returnKeyword": {
                                    "kind": 37757022,
                                    "flags": 36,
                                    "start": 0,
                                    "end": 43
                                },
                                "expression": null,
                                "flags": 128,
                                "start": 0,
                                "end": 36
                            }
                        ],
                        "flags": 128,
                        "start": 27,
                        "end": 44
                    }
                ],
                "flags": 128,
                "start": 10,
                "end": 46
            },
            "flags": 128,
            "start": 0,
            "end": 46
        }
    ],
    "isModule": false,
    "text": "switch (x) { case y: break; default: return; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 46
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ A return statement can only be used within a function_body - start: 36, end: 43

```

