# Kataw parser test case

## Input

`````js
switch(x) { default: default: }
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
                        "kind": 170,
                        "defaultKeyword": {
                            "kind": 4194387,
                            "flags": 0,
                            "start": 11,
                            "end": 19
                        },
                        "statements": [],
                        "flags": 16,
                        "start": 11,
                        "end": 20
                    },
                    {
                        "kind": 170,
                        "defaultKeyword": {
                            "kind": 4194387,
                            "flags": 0,
                            "start": 20,
                            "end": 28
                        },
                        "statements": [],
                        "flags": 16,
                        "start": 20,
                        "end": 29
                    }
                ],
                "flags": 16,
                "start": 9,
                "end": 31
            },
            "flags": 16,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "switch(x) { default: default: }",
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

