# Kataw parser test case

## Input

`````js
null?.
  `hello`
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
                    "kind": 269,
                    "text": null,
                    "flags": 768,
                    "start": 0,
                    "end": 4
                },
                "chain": {
                    "kind": 206,
                    "chain": {
                        "kind": 226,
                        "member": null,
                        "template": {
                            "kind": 458761,
                            "text": "hello",
                            "rawText": "hello",
                            "flags": 768,
                            "start": 6,
                            "end": 16
                        },
                        "flags": 256,
                        "start": 6,
                        "end": 16
                    },
                    "flags": 256,
                    "start": 6,
                    "end": 16
                },
                "flags": 256,
                "start": 0,
                "end": 16
            },
            "flags": 128,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "text": "null?.\n  `hello`",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Tagged template expressions are not permitted in an optional chain. - start: 6, end: 16

```

