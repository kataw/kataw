# Kataw parser test case

## Input

`````js
null?.fn
  `hello`
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
                    "flags": 0,
                    "start": 4,
                    "end": 6
                },
                "member": {
                    "kind": 269,
                    "text": null,
                    "flags": 96,
                    "start": 0,
                    "end": 4
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
                                "flags": 96,
                                "start": 6,
                                "end": 8
                            },
                            "flags": 32,
                            "start": 6,
                            "end": 8
                        },
                        "flags": 32,
                        "start": 6,
                        "end": 8
                    },
                    "template": {
                        "kind": 458761,
                        "text": "hello",
                        "rawText": "hello",
                        "flags": 96,
                        "start": 8,
                        "end": 18
                    },
                    "flags": 32,
                    "start": 8,
                    "end": 18
                },
                "flags": 32,
                "start": 0,
                "end": 18
            },
            "flags": 16,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "null?.fn\n  `hello`",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Tagged template expressions are not permitted in an optional chain. - start: 8, end: 18

```

