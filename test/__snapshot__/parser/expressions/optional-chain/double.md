# Kataw parser test case

## Input

`````js
a?.?.b
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "start": 3,
                    "end": 5
                },
                "member": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "start": 1,
                        "end": 3
                    },
                    "member": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 0,
                        "end": 1
                    },
                    "chain": {
                        "kind": 302,
                        "chain": null,
                        "flags": 32,
                        "start": 3,
                        "end": 3
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 3
                },
                "chain": {
                    "kind": 302,
                    "chain": {
                        "kind": 536871114,
                        "chain": null,
                        "expression": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 5,
                            "end": 6
                        },
                        "flags": 32,
                        "start": 5,
                        "end": 6
                    },
                    "flags": 32,
                    "start": 5,
                    "end": 6
                },
                "flags": 32,
                "start": 0,
                "end": 6
            },
            "flags": 16,
            "start": 0,
            "end": 6
        }
    ],
    "isModule": false,
    "source": "a?.?.b",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 6
}
```

### Printed

```javascript

?.;
```

### Diagnostics

```javascript
✔ No errors
```

