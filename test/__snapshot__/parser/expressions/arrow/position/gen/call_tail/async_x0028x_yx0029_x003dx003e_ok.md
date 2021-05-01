# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: l
> :: test: call tail
> :: case: async (x, y) => ok
## Input

`````js
foo(async (x, y) => ok).bar
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
                                    "start": 16,
                                    "end": 19
                                },
                                "typeParameters": null,
                                "parameters": [
                                    {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 11,
                                        "end": 12
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 13,
                                        "end": 15
                                    }
                                ],
                                "asyncToken": {
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
                                    "start": 19,
                                    "end": 22
                                },
                                "flags": 288,
                                "start": 4,
                                "end": 22
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 4,
                        "end": 22
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 23
                },
                "expression": {
                    "kind": 134299649,
                    "text": "bar",
                    "rawText": "bar",
                    "flags": 96,
                    "start": 24,
                    "end": 27
                },
                "flags": 32,
                "start": 0,
                "end": 27
            },
            "flags": 16,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "foo(async (x, y) => ok).bar",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

