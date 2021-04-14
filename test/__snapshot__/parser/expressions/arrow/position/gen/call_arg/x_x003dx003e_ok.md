# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: call arg
> :: case: x => ok
## Input

`````js
foo(x => ok)
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
                "kind": 131,
                "expression": {
                    "kind": 81921,
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
                                "kind": 81921,
                                "text": "x",
                                "rawText": "x",
                                "flags": 768,
                                "start": 4,
                                "end": 5
                            },
                            "asyncToken": null,
                            "returnType": null,
                            "contents": {
                                "kind": 81921,
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
            "flags": 128,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "text": "foo(x => ok)",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 12
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: call arg
> :: case: x => ok
## Input

`````js
foo(x => ok)
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: call arg
> :: case: x => ok
## Input

`````js
foo(x => ok)
`````
```

