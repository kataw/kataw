# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: conditional_last
> :: case: x => { return x; }
## Input

`````js
bar, x => { return x; };
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
                "kind": 132,
                "expressions": [
                    {
                        "kind": 134299649,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 768,
                        "start": 0,
                        "end": 3
                    },
                    {
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
                            "start": 4,
                            "end": 6
                        },
                        "asyncToken": null,
                        "returnType": null,
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [
                                    {
                                        "kind": 161,
                                        "returnKeyword": {
                                            "kind": 37757022,
                                            "flags": 768,
                                            "start": 11,
                                            "end": 18
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 18,
                                            "end": 20
                                        },
                                        "flags": 128,
                                        "start": 0,
                                        "end": 11
                                    }
                                ],
                                "multiline": false,
                                "flags": 256,
                                "start": 11,
                                "end": 21
                            },
                            "flags": 256,
                            "start": 9,
                            "end": 23
                        },
                        "flags": 256,
                        "start": 4,
                        "end": 23
                    }
                ],
                "flags": 256,
                "start": 0,
                "end": 23
            },
            "flags": 128,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "text": "bar, x => { return x; };",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 24
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: conditional_last
> :: case: x => { return x; }
## Input

`````js
bar, x => { return x; };
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: conditional_last
> :: case: x => { return x; }
## Input

`````js
bar, x => { return x; };
`````
```

