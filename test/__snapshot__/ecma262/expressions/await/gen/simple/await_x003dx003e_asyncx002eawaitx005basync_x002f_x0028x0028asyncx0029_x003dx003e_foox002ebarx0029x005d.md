# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/await/gen/simple
> :: test: simple
> :: case: await => async.await[async / ((async) => foo.bar)]
## Options

`````js
{}
`````
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
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 134299649,
                    "text": "await",
                    "rawText": "await",
                    "flags": 96,
                    "start": 0,
                    "end": 5
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 5,
                    "end": 8
                },
                "contents": {
                    "kind": 130,
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
                        "flags": 96,
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
                            "flags": 96,
                            "start": 26,
                            "end": 28
                        },
                        "right": {
                            "kind": 121,
                            "expression": {
                                "kind": 271,
                                "asyncKeyword": null,
                                "typeParameters": null,
                                "arrowPatameterList": {
                                    "kind": 342,
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
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 31,
                                    "end": 37
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 37,
                                    "end": 40
                                },
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
                                    "flags": 96,
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
                    "flags": 536870944,
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

await => async.await[async / ((async) => foo.bar)];

```

### Diagnostics

```javascript
✔ No errors
```

