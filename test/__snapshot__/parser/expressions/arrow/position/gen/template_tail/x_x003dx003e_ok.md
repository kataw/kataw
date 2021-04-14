# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: l
> :: test: template tail
> :: case: x => ok
## Input

`````js
`a ${x => ok} b`.length
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
                "kind": 129,
                "member": {
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
                                        "start": 6,
                                        "end": 9
                                    },
                                    "typeParameters": null,
                                    "parameters": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 768,
                                        "start": 5,
                                        "end": 6
                                    },
                                    "asyncToken": null,
                                    "returnType": null,
                                    "contents": {
                                        "kind": 134299649,
                                        "text": "ok",
                                        "rawText": "ok",
                                        "flags": 768,
                                        "start": 9,
                                        "end": 12
                                    },
                                    "flags": 256,
                                    "start": 5,
                                    "end": 12
                                },
                                "flags": 256,
                                "start": 0,
                                "end": 12
                            }
                        ],
                        "tail": {
                            "kind": 458761,
                            "text": " b",
                            "rawText": " b",
                            "flags": 768,
                            "start": 12,
                            "end": 16
                        },
                        "flags": 256,
                        "start": 0,
                        "end": 16
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 16
                },
                "expression": {
                    "kind": 134299649,
                    "text": "length",
                    "rawText": "length",
                    "flags": 768,
                    "start": 17,
                    "end": 23
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 23
            },
            "flags": 128,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "text": "`a ${x => ok} b`.length",
    "fileName": "__root__",
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
    "end": 23
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: l
> :: test: template tail
> :: case: x => ok
## Input

`````js
`a ${x => ok} b`.length
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: l
> :: test: template tail
> :: case: x => ok
## Input

`````js
`a ${x => ok} b`.length
`````
```

