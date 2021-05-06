# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: l
> :: test: template tail
> :: case: async x => {}
## Input

`````js
`a ${async x => {}} b`.length
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
                "kind": 129,
                "member": {
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
                                        "start": 12,
                                        "end": 15
                                    },
                                    "typeParameters": null,
                                    "parameters": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 10,
                                        "end": 12
                                    },
                                    "asyncToken": {
                                        "kind": 82031,
                                        "flags": 64,
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
                                            "flags": 32,
                                            "start": 17,
                                            "end": 17
                                        },
                                        "flags": 32,
                                        "start": 15,
                                        "end": 18
                                    },
                                    "flags": 288,
                                    "start": 5,
                                    "end": 18
                                },
                                "flags": 32,
                                "start": 0,
                                "end": 18
                            }
                        ],
                        "tail": {
                            "kind": 458761,
                            "text": " b",
                            "rawText": " b",
                            "flags": 96,
                            "start": 18,
                            "end": 22
                        },
                        "flags": 32,
                        "start": 0,
                        "end": 22
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 22
                },
                "expression": {
                    "kind": 134299649,
                    "text": "length",
                    "rawText": "length",
                    "flags": 96,
                    "start": 23,
                    "end": 29
                },
                "flags": 32,
                "start": 0,
                "end": 29
            },
            "flags": 16,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "`a ${async x => {}} b`.length",
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
✖ Expression expected - start: 0, end: 5

```

