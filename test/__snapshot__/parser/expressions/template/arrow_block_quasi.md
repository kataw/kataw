# Kataw parser test case

## Input

`````js
`${x => {}}`
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
                "kind": 226,
                "member": {
                    "kind": 253,
                    "text": "",
                    "autofix": 0,
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
                                "typeParameters": null,
                                "parameters": {
                                    "kind": 81921,
                                    "value": "x",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 3,
                                    "end": 4
                                },
                                "asyncToken": null,
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "statements": [],
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 9,
                                        "end": 9
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 7,
                                    "end": 10
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 3,
                                "end": 10
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 0,
                            "end": 10
                        }
                    ],
                    "tail": {
                        "kind": 458761,
                        "rawText": "",
                        "text": "",
                        "autofix": 0,
                        "flags": 256,
                        "start": 10,
                        "end": 12
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 0,
                    "end": 12
                },
                "optional": false,
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 12
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "text": "`${x => {}}`",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 0,
            "end": 3
        }
    ],
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

