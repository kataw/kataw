# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-28
- From: d
- Path: l
> :: test: template tail
> :: case: x => ok
## Input

`````js
`a ${x => ok} b`.length
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
                    "kind": 227,
                    "spans": [
                        {
                            "kind": 65764,
                            "rawText": "a ",
                            "text": "a ",
                            "expression": {
                                "kind": 271,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 6,
                                    "end": 9
                                },
                                "typeParameters": null,
                                "parameters": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 5,
                                    "end": 6
                                },
                                "asyncKeyword": null,
                                "returnType": null,
                                "contents": {
                                    "kind": 134299649,
                                    "text": "ok",
                                    "rawText": "ok",
                                    "flags": 96,
                                    "start": 9,
                                    "end": 12
                                },
                                "flags": 32,
                                "start": 5,
                                "end": 12
                            },
                            "flags": 32,
                            "start": 0,
                            "end": 12
                        }
                    ],
                    "tail": {
                        "kind": 458761,
                        "text": " b",
                        "rawText": " b",
                        "flags": 96,
                        "start": 12,
                        "end": 16
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 16
                },
                "expression": {
                    "kind": 134299649,
                    "text": "length",
                    "rawText": "length",
                    "flags": 96,
                    "start": 17,
                    "end": 23
                },
                "flags": 536870944,
                "start": 0,
                "end": 23
            },
            "flags": 16,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "`a ${x => ok} b`.length",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

`a ${x =>  ok} b`.length;
```

### Diagnostics

```javascript
✔ No errors
```

