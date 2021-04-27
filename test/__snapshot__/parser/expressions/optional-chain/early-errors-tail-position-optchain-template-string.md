# Kataw parser test case

## Input

`````js
a?.fn`hello`;
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
                    "text": "a",
                    "rawText": "a",
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "chain": {
                    "kind": 226,
                    "member": {
                        "kind": 206,
                        "chain": {
                            "kind": 202,
                            "chain": null,
                            "expression": {
                                "kind": 134299649,
                                "text": "fn",
                                "rawText": "fn",
                                "flags": 768,
                                "start": 3,
                                "end": 5
                            },
                            "flags": 256,
                            "start": 3,
                            "end": 5
                        },
                        "flags": 256,
                        "start": 3,
                        "end": 5
                    },
                    "template": {
                        "kind": 458761,
                        "text": "hello",
                        "rawText": "hello",
                        "flags": 768,
                        "start": 5,
                        "end": 12
                    },
                    "flags": 256,
                    "start": 5,
                    "end": 12
                },
                "flags": 256,
                "start": 0,
                "end": 12
            },
            "flags": 128,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "text": "a?.fn`hello`;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Tagged template expressions are not permitted in an optional chain. - start: 5, end: 12

```

