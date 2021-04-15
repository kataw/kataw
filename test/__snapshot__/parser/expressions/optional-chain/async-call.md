# Kataw parser test case

## Input

`````js
async?.(foo)
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
                "kind": 205,
                "member": {
                    "kind": 134299649,
                    "text": "async",
                    "rawText": "async",
                    "flags": 768,
                    "start": 0,
                    "end": 5
                },
                "chain": {
                    "kind": 206,
                    "chain": {
                        "kind": 204,
                        "chain": null,
                        "argumentList": {
                            "kind": 256,
                            "elements": [
                                {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 768,
                                    "start": 8,
                                    "end": 11
                                }
                            ],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 8,
                            "end": 11
                        },
                        "flags": 256,
                        "start": 7,
                        "end": 12
                    },
                    "flags": 256,
                    "start": 7,
                    "end": 12
                },
                "flags": 256,
                "start": 0,
                "end": 12
            },
            "flags": 128,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "text": "async?.(foo)",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 12
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

