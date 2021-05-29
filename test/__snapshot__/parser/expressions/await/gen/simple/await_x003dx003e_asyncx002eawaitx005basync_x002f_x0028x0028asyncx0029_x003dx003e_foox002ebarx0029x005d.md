# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-29
- From: d
- Path: e
> :: test: simple
> :: case: await => async.await[async / ((async) => foo.bar)]
## Input

`````js
await => async.await[async / ((async) => foo.bar)]
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
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 5,
                    "end": 8
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "await",
                    "rawText": "await",
                    "flags": 96,
                    "start": 0,
                    "end": 5
                },
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 536871042,
                    "member": {
                        "kind": 129,
                        "member": {
                            "kind": 134299649,
                            "text": "async",
                            "rawText": "async",
                            "flags": 96,
                            "start": 8,
                            "end": 14
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "await",
                            "rawText": "await",
                            "flags": 96,
                            "start": 15,
                            "end": 20
                        },
                        "flags": 536870944,
                        "start": 8,
                        "end": 20
                    },
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "async",
                            "rawText": "async",
                            "flags": 96,
                            "start": 21,
                            "end": 26
                        },
                        "operatorToken": {
                            "kind": 35640,
                            "flags": 64,
                            "start": 26,
                            "end": 28
                        },
                        "right": {
                            "kind": 121,
                            "expression": {
                                "kind": 271,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 37,
                                    "end": 40
                                },
                                "typeParameters": null,
                                "parameters": [
                                    {
                                        "kind": 134299649,
                                        "text": "async",
                                        "rawText": "async",
                                        "flags": 96,
                                        "start": 31,
                                        "end": 36
                                    }
                                ],
                                "asyncKeyword": null,
                                "returnType": null,
                                "contents": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "start": 40,
                                        "end": 44
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "bar",
                                        "rawText": "bar",
                                        "flags": 96,
                                        "start": 45,
                                        "end": 48
                                    },
                                    "flags": 536870944,
                                    "start": 40,
                                    "end": 48
                                },
                                "flags": 32,
                                "start": 30,
                                "end": 48
                            },
                            "flags": 32,
                            "start": 28,
                            "end": 49
                        },
                        "flags": 32,
                        "start": 21,
                        "end": 49
                    },
                    "flags": 32,
                    "start": 8,
                    "end": 50
                },
                "flags": 32,
                "start": 0,
                "end": 50
            },
            "flags": 16,
            "start": 0,
            "end": 50
        }
    ],
    "isModule": false,
    "source": "await => async.await[async / ((async) => foo.bar)]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 50
}
```

### Printed

```javascript

await =>  ;
```

### Diagnostics

```javascript
✔ No errors
```

