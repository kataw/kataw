# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: l
> :: test: call tail
> :: case: async x => ok
## Input

`````js
foo(async x => ok).bar
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
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 768,
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
                                    "flags": 768,
                                    "start": 11,
                                    "end": 14
                                },
                                "typeParameters": null,
                                "parameters": [
                                    {
                                        "kind": 215,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 9,
                                            "end": 11
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 256,
                                        "start": 4,
                                        "end": 11
                                    }
                                ],
                                "asyncToken": {
                                    "kind": 82031,
                                    "flags": 768,
                                    "start": 4,
                                    "end": 9
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 134299649,
                                    "text": "ok",
                                    "rawText": "ok",
                                    "flags": 768,
                                    "start": 14,
                                    "end": 17
                                },
                                "flags": 2304,
                                "start": 4,
                                "end": 17
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 4,
                        "end": 17
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 18
                },
                "expression": {
                    "kind": 134299649,
                    "text": "bar",
                    "rawText": "bar",
                    "flags": 768,
                    "start": 19,
                    "end": 22
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 22
            },
            "flags": 128,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "text": "foo(async x => ok).bar",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: l
> :: test: call tail
> :: case: async x => ok
## Input

`````js
foo(async x => ok).bar
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: l
> :: test: call tail
> :: case: async x => ok
## Input

`````js
foo(async x => ok).bar
`````
```

