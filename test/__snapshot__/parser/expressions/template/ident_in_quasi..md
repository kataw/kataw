# Kataw parser test case

## Input

`````js
`${n
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
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
                    "start": 0,
                    "end": 0
                },
                "template": {
                    "kind": 227,
                    "spans": [
                        {
                            "kind": 228,
                            "rawText": "",
                            "text": "",
                            "expression": {
                                "kind": 134299649,
                                "text": "n",
                                "rawText": "n",
                                "flags": 96,
                                "start": 3,
                                "end": 4
                            },
                            "flags": 32,
                            "start": 0,
                            "end": 4
                        }
                    ],
                    "tail": {
                        "kind": 458761,
                        "text": "",
                        "rawText": "n",
                        "flags": 96,
                        "start": 4,
                        "end": 4
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 4
                },
                "flags": 32,
                "start": 0,
                "end": 4
            },
            "flags": 16,
            "start": 0,
            "end": 4
        }
    ],
    "isModule": false,
    "source": "`${n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 4
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 0, end: 3
✖ Unterminated template literal - start: 4, end: 4

```

