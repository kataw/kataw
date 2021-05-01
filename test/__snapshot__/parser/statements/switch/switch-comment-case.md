# Kataw parser test case

## Input

`````js
switch(x) /* comment */ { case y: foo }
`````

## Options

### Parser Options

`````js
{}
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
                "original": "x",
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 7,
                "end": 8
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 0,
                            "start": 25,
                            "end": 30
                        },
                        "expression": {
                            "kind": 134299649,
                            "original": "y",
                            "text": "y",
                            "rawText": " y",
                            "flags": 96,
                            "start": 30,
                            "end": 32
                        },
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 134299649,
                                    "original": "foo",
                                    "text": "foo",
                                    "rawText": " foo",
                                    "flags": 96,
                                    "start": 33,
                                    "end": 37
                                },
                                "flags": 16,
                                "start": 33,
                                "end": 37
                            }
                        ],
                        "flags": 16,
                        "start": 25,
                        "end": 37
                    }
                ],
                "flags": 16,
                "start": 9,
                "end": 39
            },
            "flags": 16,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": false,
    "source": "switch(x) /* comment */ { case y: foo }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 39
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

