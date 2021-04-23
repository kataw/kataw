# Kataw parser test case

## Input

`````js
`a ${async ()=>{}} b`
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
                            "rawText": "a ",
                            "text": "a ",
                            "expression": {
                                "kind": 271,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 768,
                                    "start": 13,
                                    "end": 15
                                },
                                "typeParameters": null,
                                "parameters": [],
                                "asyncToken": {
                                    "kind": 82031,
                                    "flags": 768,
                                    "start": 5,
                                    "end": 10
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 16,
                                        "end": 16
                                    },
                                    "flags": 256,
                                    "start": 15,
                                    "end": 17
                                },
                                "flags": 2304,
                                "start": 5,
                                "end": 17
                            },
                            "flags": 256,
                            "start": 0,
                            "end": 17
                        }
                    ],
                    "tail": {
                        "kind": 458761,
                        "text": " b",
                        "rawText": " b",
                        "flags": 768,
                        "start": 17,
                        "end": 21
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 21
                },
                "flags": 256,
                "start": 0,
                "end": 21
            },
            "flags": 128,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "text": "`a ${async ()=>{}} b`",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

