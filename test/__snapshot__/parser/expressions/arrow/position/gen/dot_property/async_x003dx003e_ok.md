# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: dot property
> :: case: async => ok
## Input

`````js
async => ok.x
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
                    "flags": 0,
                    "start": 5,
                    "end": 8
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "async",
                    "rawText": "async",
                    "flags": 96,
                    "start": 0,
                    "end": 5
                },
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 0,
                    "end": 5
                },
                "returnType": null,
                "contents": {
                    "kind": 129,
                    "member": {
                        "kind": 134299649,
                        "text": "ok",
                        "rawText": "ok",
                        "flags": 96,
                        "start": 8,
                        "end": 11
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 12,
                        "end": 13
                    },
                    "flags": 32,
                    "start": 8,
                    "end": 13
                },
                "flags": 288,
                "start": 0,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "async => ok.x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript

async async =>  ok.x;
```

### Diagnostics

```javascript
✔ No errors
```

