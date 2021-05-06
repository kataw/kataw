# Kataw parser test case

## Input

`````js
switch (x) { case x: {continue;} }
`````

## Output
### CST

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
                "flags": 96,
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
                            "flags": 0,
                            "start": 12,
                            "end": 17
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 17,
                            "end": 19
                        },
                        "statements": [
                            {
                                "kind": 249,
                                "block": {
                                    "kind": 124,
                                    "statements": [
                                        {
                                            "kind": 172,
                                            "continueKeyword": {
                                                "kind": 37757009,
                                                "flags": 0,
                                                "start": 22,
                                                "end": 30
                                            },
                                            "label": null,
                                            "flags": 16,
                                            "start": 22,
                                            "end": 31
                                        }
                                    ],
                                    "flags": 16,
                                    "start": 22,
                                    "end": 31
                                },
                                "flags": 16,
                                "start": 20,
                                "end": 32
                            }
                        ],
                        "flags": 16,
                        "start": 12,
                        "end": 32
                    }
                ],
                "flags": 16,
                "start": 10,
                "end": 34
            },
            "flags": 16,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "switch (x) { case x: {continue;} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ A 'continue' statement can only be used within an enclosing iteration statement. - start: 22, end: 30

```

