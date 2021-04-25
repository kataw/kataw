# Kataw parser test case

## Input

`````js
switch (x) { default: continue foo; }
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
                "flags": 768,
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
                        "kind": 170,
                        "defaultKeyword": {
                            "kind": 4194387,
                            "flags": 768,
                            "start": 12,
                            "end": 20
                        },
                        "statements": [
                            {
                                "kind": 172,
                                "continueKeyword": {
                                    "kind": 37757009,
                                    "flags": 768,
                                    "start": 21,
                                    "end": 30
                                },
                                "label": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 768,
                                    "start": 30,
                                    "end": 34
                                },
                                "flags": 128,
                                "start": 21,
                                "end": 35
                            }
                        ],
                        "flags": 128,
                        "start": 12,
                        "end": 35
                    }
                ],
                "flags": 128,
                "start": 10,
                "end": 37
            },
            "flags": 128,
            "start": 0,
            "end": 37
        }
    ],
    "isModule": false,
    "text": "switch (x) { default: continue foo; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ A 'continue' statement can only be used within an enclosing iteration statement. - start: 21, end: 30

```

