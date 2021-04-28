# Kataw parser test case

## Input

`````js
switch (this.a) { d\u0065fault: break; }

switch (this.a) { c\u0061se 6: break; }
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
                "kind": 129,
                "member": {
                    "kind": 135,
                    "flags": 96,
                    "start": 8,
                    "end": 12
                },
                "expression": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 13,
                    "end": 14
                },
                "flags": 32,
                "start": 8,
                "end": 14
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 170,
                        "defaultKeyword": {
                            "kind": 4194387,
                            "flags": 16384,
                            "start": 17,
                            "end": 30
                        },
                        "statements": [
                            {
                                "kind": 150,
                                "breakKeyword": {
                                    "kind": 37757005,
                                    "flags": 0,
                                    "start": 31,
                                    "end": 37
                                },
                                "label": null,
                                "flags": 16,
                                "start": 31,
                                "end": 38
                            }
                        ],
                        "flags": 16,
                        "start": 17,
                        "end": 38
                    }
                ],
                "flags": 16,
                "start": 15,
                "end": 40
            },
            "flags": 16,
            "start": 0,
            "end": 40
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 1,
                "start": 40,
                "end": 48
            },
            "expression": {
                "kind": 129,
                "member": {
                    "kind": 135,
                    "flags": 96,
                    "start": 50,
                    "end": 54
                },
                "expression": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 55,
                    "end": 56
                },
                "flags": 32,
                "start": 50,
                "end": 56
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 16384,
                            "start": 59,
                            "end": 69
                        },
                        "expression": {
                            "kind": 201392130,
                            "text": 6,
                            "rawText": "6",
                            "flags": 96,
                            "start": 69,
                            "end": 71
                        },
                        "statements": [
                            {
                                "kind": 150,
                                "breakKeyword": {
                                    "kind": 37757005,
                                    "flags": 0,
                                    "start": 72,
                                    "end": 78
                                },
                                "label": null,
                                "flags": 16,
                                "start": 72,
                                "end": 79
                            }
                        ],
                        "flags": 16,
                        "start": 59,
                        "end": 79
                    }
                ],
                "flags": 16,
                "start": 57,
                "end": 81
            },
            "flags": 16,
            "start": 40,
            "end": 81
        }
    ],
    "isModule": false,
    "text": "switch (this.a) { d\\u0065fault: break; }\n\nswitch (this.a) { c\\u0061se 6: break; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 81
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Invalid escaped keyword - start: 30, end: 31
✖ Invalid escaped keyword - start: 69, end: 71

```

