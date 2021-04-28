# Kataw parser test case

## Input

`````js
`${x => x}`
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
                    "flags": 12,
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
                                "kind": 271,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 4,
                                    "start": 0,
                                    "end": 7
                                },
                                "typeParameters": null,
                                "parameters": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 3,
                                    "end": 4
                                },
                                "asyncToken": null,
                                "returnType": null,
                                "contents": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 7,
                                    "end": 9
                                },
                                "flags": 256,
                                "start": 3,
                                "end": 9
                            },
                            "flags": 256,
                            "start": 0,
                            "end": 9
                        }
                    ],
                    "tail": {
                        "kind": 458761,
                        "text": "",
                        "rawText": "",
                        "flags": 768,
                        "start": 9,
                        "end": 11
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 11
                },
                "flags": 256,
                "start": 0,
                "end": 11
            },
            "flags": 128,
            "start": 0,
            "end": 11
        }
    ],
    "isModule": false,
    "text": "`${x => x}`",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 11
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 0, end: 3

```

