# Kataw parser test case

## Input

`````js
`a ${()=>{}} b`
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
                            "rawText": "a ",
                            "text": "a ",
                            "expression": {
                                "kind": 271,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 0,
                                    "start": 7,
                                    "end": 9
                                },
                                "typeParameters": null,
                                "parameters": [],
                                "asyncToken": null,
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 10,
                                        "end": 10
                                    },
                                    "flags": 32,
                                    "start": 9,
                                    "end": 11
                                },
                                "flags": 32,
                                "start": 5,
                                "end": 11
                            },
                            "flags": 32,
                            "start": 0,
                            "end": 11
                        }
                    ],
                    "tail": {
                        "kind": 458761,
                        "text": " b",
                        "rawText": " b",
                        "flags": 96,
                        "start": 11,
                        "end": 15
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 15
                },
                "flags": 32,
                "start": 0,
                "end": 15
            },
            "flags": 16,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": false,
    "source": "`a ${()=>{}} b`",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 0, end: 5

```

