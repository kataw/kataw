# Kataw parser test case

## Input

`````js
foo()?.bar
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "member": {
                    "kind": 131,
                    "expression": {
                        "kind": 81921,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 768,
                        "start": 0,
                        "end": 3
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 4,
                        "end": 4
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 5
                },
                "chain": {
                    "kind": 206,
                    "chain": {
                        "kind": 202,
                        "chain": null,
                        "expression": {
                            "kind": 81921,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 768,
                            "start": 7,
                            "end": 10
                        },
                        "flags": 256,
                        "start": 7,
                        "end": 10
                    },
                    "flags": 256,
                    "start": 7,
                    "end": 10
                },
                "flags": 256,
                "start": 0,
                "end": 10
            },
            "flags": 128,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "text": "foo()?.bar",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 10
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

