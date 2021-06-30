# Kataw parser test case

## Input

`````js
a?.fn`hello`;
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
                    "kind": 226,
                    "member": {
                        "kind": 302,
                        "chain": {
                            "kind": 202,
                            "chain": null,
                            "expression": {
                                "kind": 134299649,
                                "text": "fn",
                                "rawText": "fn",
                                "flags": 96,
                                "start": 3,
                                "end": 5
                            },
                            "flags": 536870944,
                            "start": 3,
                            "end": 5
                        },
                        "flags": 32,
                        "start": 3,
                        "end": 5
                    },
                    "template": {
                        "kind": 458761,
                        "text": "hello",
                        "rawText": "hello",
                        "flags": 134217824,
                        "start": 5,
                        "end": 12
                    },
                    "flags": 32,
                    "start": 5,
                    "end": 12
                },
                "flags": 32,
                "start": 0,
                "end": 12
            },
            "flags": 16,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "a?.fn`hello`;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Tagged template expressions are not permitted in an optional chain. - start: 5, end: 12

```

