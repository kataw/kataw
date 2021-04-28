# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: for-in lhs
> :: case: async a => b
## Input

`````js
for (async a => b in x) ;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 12,
                    "start": 0,
                    "end": 15
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 768,
                            "start": 10,
                            "end": 12
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 256,
                        "start": 5,
                        "end": 12
                    }
                ],
                "asyncToken": {
                    "kind": 82031,
                    "flags": 5,
                    "start": 512,
                    "end": 10
                },
                "returnType": null,
                "contents": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 768,
                        "start": 15,
                        "end": 17
                    },
                    "operatorToken": {
                        "kind": 21006388,
                        "flags": 512,
                        "start": 17,
                        "end": 20
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 768,
                        "start": 20,
                        "end": 22
                    },
                    "flags": 256,
                    "start": 15,
                    "end": 22
                },
                "flags": 2304,
                "start": 5,
                "end": 22
            },
            "condition": null,
            "incrementor": {
                "kind": 16637,
                "text": "",
                "flags": 12,
                "start": 22,
                "end": 22
            },
            "statement": {
                "kind": 168,
                "flags": 128,
                "start": 23,
                "end": 25
            },
            "flags": 128,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "text": "for (async a => b in x) ;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 22, end: 23

```

