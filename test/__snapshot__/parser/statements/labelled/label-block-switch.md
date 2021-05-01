# Kataw parser test case

## Input

`````js
a: { b: switch(x) {} }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 163,
            "label": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 0,
                "end": 1
            },
            "labels": [
                {
                    "kind": 256,
                    "label": "a",
                    "loop": false,
                    "isDuplicate": false,
                    "flags": 32,
                    "start": 0,
                    "end": 1
                },
                {
                    "kind": 256,
                    "label": "b",
                    "loop": false,
                    "isDuplicate": false,
                    "flags": 32,
                    "start": 4,
                    "end": 6
                }
            ],
            "colonToken": {
                "kind": 21,
                "flags": 0,
                "start": 1,
                "end": 2
            },
            "statement": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [
                        {
                            "kind": 163,
                            "label": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 4,
                                "end": 6
                            },
                            "labels": [
                                {
                                    "kind": 256,
                                    "label": "a",
                                    "loop": false,
                                    "isDuplicate": false,
                                    "flags": 32,
                                    "start": 0,
                                    "end": 1
                                },
                                {
                                    "kind": 256,
                                    "label": "b",
                                    "loop": false,
                                    "isDuplicate": false,
                                    "flags": 32,
                                    "start": 4,
                                    "end": 6
                                }
                            ],
                            "colonToken": {
                                "kind": 21,
                                "flags": 0,
                                "start": 6,
                                "end": 7
                            },
                            "statement": {
                                "kind": 160,
                                "switchKeyword": {
                                    "kind": 37757024,
                                    "flags": 0,
                                    "start": 7,
                                    "end": 14
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 15,
                                    "end": 16
                                },
                                "caseBlock": {
                                    "kind": 152,
                                    "clauses": [],
                                    "flags": 16,
                                    "start": 17,
                                    "end": 20
                                },
                                "flags": 16,
                                "start": 7,
                                "end": 20
                            },
                            "flags": 16,
                            "start": 4,
                            "end": 20
                        }
                    ],
                    "flags": 16,
                    "start": 4,
                    "end": 20
                },
                "flags": 16,
                "start": 2,
                "end": 22
            },
            "flags": 16,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "a: { b: switch(x) {} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
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

