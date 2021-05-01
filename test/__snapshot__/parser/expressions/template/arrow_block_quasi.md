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
                                "kind": 271,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 0,
                                    "start": 4,
                                    "end": 7
                                },
                                "typeParameters": null,
                                "parameters": {
                                    "kind": 134299649,
                                    "original": "x",
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 3,
                                    "end": 4
                                },
                                "asyncToken": null,
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 9,
                                        "end": 9
                                    },
                                    "flags": 32,
                                    "start": 7,
                                    "end": 10
                                },
                                "flags": 32,
                                "start": 3,
                                "end": 10
                            },
                            "flags": 32,
                            "start": 0,
                            "end": 10
                        }
                    ],
                    "tail": {
                        "kind": 458761,
                        "text": "",
                        "rawText": "",
                        "flags": 96,
                        "start": 10,
                        "end": 12
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 12
                },
                "flags": 32,
                "start": 0,
                "end": 12
            },
            "flags": 16,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "source": "`${x => {}}`",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 12
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

