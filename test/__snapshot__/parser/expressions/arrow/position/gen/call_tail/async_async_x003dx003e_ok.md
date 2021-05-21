# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-21
- From: d
- Path: l
> :: test: call tail
> :: case: async async => ok
## Input

`````js
foo(async async => ok).bar
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
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "start": 0,
                        "end": 3
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 271,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 0,
                                    "start": 15,
                                    "end": 18
                                },
                                "typeParameters": null,
                                "parameters": {
                                    "kind": 134299649,
                                    "text": "async",
                                    "rawText": "async",
                                    "flags": 96,
                                    "start": 9,
                                    "end": 15
                                },
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 64,
                                    "start": 4,
                                    "end": 9
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 134299649,
                                    "text": "ok",
                                    "rawText": "ok",
                                    "flags": 96,
                                    "start": 18,
                                    "end": 21
                                },
                                "flags": 288,
                                "start": 4,
                                "end": 21
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 4,
                        "end": 21
                    },
                    "flags": 268435488,
                    "start": 0,
                    "end": 22
                },
                "expression": {
                    "kind": 134299649,
                    "text": "bar",
                    "rawText": "bar",
                    "flags": 96,
                    "start": 23,
                    "end": 26
                },
                "flags": 536870944,
                "start": 0,
                "end": 26
            },
            "flags": 16,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "foo(async async => ok).bar",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript

foo(async async =>  ok).bar;
```

### Diagnostics

```javascript
✔ No errors
```

