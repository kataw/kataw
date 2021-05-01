# Kataw parser test case

## Input

`````js
switch([x = y]) { case y: foo }
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
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 125,
                            "left": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 8,
                                "end": 9
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 9,
                                "end": 11
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": " y",
                                "flags": 96,
                                "start": 11,
                                "end": 13
                            },
                            "flags": 32,
                            "start": 8,
                            "end": 13
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 8,
                    "end": 13
                },
                "flags": 32,
                "start": 7,
                "end": 14
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 0,
                            "start": 17,
                            "end": 22
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": " y",
                            "flags": 96,
                            "start": 22,
                            "end": 24
                        },
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": " foo",
                                    "flags": 96,
                                    "start": 25,
                                    "end": 29
                                },
                                "flags": 16,
                                "start": 25,
                                "end": 29
                            }
                        ],
                        "flags": 16,
                        "start": 17,
                        "end": 29
                    }
                ],
                "flags": 16,
                "start": 15,
                "end": 31
            },
            "flags": 16,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "switch([x = y]) { case y: foo }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
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

