# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: l
> :: test: call tail
> :: case: x => ok
## Input

`````js
foo(x => ok).bar
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
                                    "start": 5,
                                    "end": 8
                                },
                                "typeParameters": null,
                                "parameters": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 4,
                                    "end": 5
                                },
                                "asyncToken": null,
                                "returnType": null,
                                "contents": {
                                    "kind": 134299649,
                                    "text": "ok",
                                    "rawText": "ok",
                                    "flags": 768,
                                    "start": 8,
                                    "end": 11
                                },
                                "flags": 256,
                                "start": 4,
                                "end": 11
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 4,
                        "end": 11
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 12
                },
                "expression": {
                    "kind": 134299649,
                    "text": "bar",
                    "rawText": "bar",
                    "flags": 768,
                    "start": 13,
                    "end": 16
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 16
            },
            "flags": 128,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "text": "foo(x => ok).bar",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 16
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: l
> :: test: call tail
> :: case: x => ok
## Input

`````js
foo(x => ok).bar
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: l
> :: test: call tail
> :: case: x => ok
## Input

`````js
foo(x => ok).bar
`````
```

