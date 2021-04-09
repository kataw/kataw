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

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 129,
                "member": {
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
                                "rawText": "a ",
                                "text": "a ",
                                "expression": {
                                    "kind": 271,
                                    "typeParameters": null,
                                    "parameters": [
                                        {
                                            "kind": 215,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 81921,
                                                "value": "x",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 10,
                                                "end": 12
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 5,
                                            "end": 12
                                        }
                                    ],
                                    "asyncToken": {
                                        "kind": 82031,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 5,
                                        "end": 10
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "statements": [],
                                            "multiline": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 17,
                                            "end": 17
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 15,
                                        "end": 18
                                    },
                                    "autofix": 0,
                                    "flags": 2304,
                                    "start": 5,
                                    "end": 18
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 0,
                                "end": 18
                            }
                        ],
                        "tail": {
                            "kind": 458761,
                            "rawText": " b",
                            "text": " b",
                            "autofix": 0,
                            "flags": 256,
                            "start": 18,
                            "end": 22
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 0,
                        "end": 22
                    },
                    "optional": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 0,
                    "end": 22
                },
                "expression": {
                    "kind": 81921,
                    "value": "length",
                    "autofix": 0,
                    "flags": 768,
                    "start": 23,
                    "end": 29
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 29
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "text": "`a ${async x => {}} b`.length",
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
            "end": 5
        }
    ],
    "start": 0,
    "end": 29
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: l
> :: test: template tail
> :: case: async x => {}
## Input

`````js
`a ${async x => {}} b`.length
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: l
> :: test: template tail
> :: case: async x => {}
## Input

`````js
`a ${async x => {}} b`.length
`````
```

