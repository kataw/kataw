# Kataw parser test case

## Input

`````js
async () => { \u{61}wait: x }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 0,
                "start": 8,
                "end": 11
            },
            "typeParameters": null,
            "parameters": [],
            "asyncToken": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "returnType": null,
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 163,
                            "label": {
                                "kind": 208,
                                "awaitToken": {
                                    "kind": 82032,
                                    "flags": 8192,
                                    "start": 13,
                                    "end": 24
                                },
                                "expression": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 68,
                                    "start": 24,
                                    "end": 24
                                },
                                "flags": 32,
                                "start": 13,
                                "end": 24
                            },
                            "statement": {
                                "kind": 120,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 25,
                                    "end": 27
                                },
                                "flags": 16,
                                "start": 25,
                                "end": 27
                            },
                            "flags": 16,
                            "start": 13,
                            "end": 27
                        }
                    ],
                    "multiline": false,
                    "flags": 32,
                    "start": 13,
                    "end": 27
                },
                "flags": 32,
                "start": 11,
                "end": 29
            },
            "flags": 288,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "text": "async () => { \\u{61}wait: x }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 24, end: 25

```

