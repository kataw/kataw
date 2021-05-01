# Kataw parser test case

## Input

`````js
y`${y,0}`
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 226,
                "member": {
                    "kind": 134299649,
                    "original": "y",
                    "text": "y",
                    "rawText": "y",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "template": {
                    "kind": 227,
                    "spans": [
                        {
                            "kind": 228,
                            "rawText": "",
                            "text": "",
                            "expression": {
                                "kind": 132,
                                "expressions": [
                                    {
                                        "kind": 134299649,
                                        "original": "y",
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 4,
                                        "end": 5
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 0,
                                        "original": "0",
                                        "rawText": "0",
                                        "flags": 96,
                                        "start": 6,
                                        "end": 7
                                    }
                                ],
                                "flags": 32,
                                "start": 4,
                                "end": 7
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 7
                        }
                    ],
                    "tail": {
                        "kind": 458761,
                        "text": "",
                        "rawText": "",
                        "flags": 96,
                        "start": 7,
                        "end": 9
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 9
                },
                "flags": 32,
                "start": 0,
                "end": 9
            },
            "flags": 16,
            "start": 0,
            "end": 9
        }
    ],
    "isModule": false,
    "source": "y`${y,0}`",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 9
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

