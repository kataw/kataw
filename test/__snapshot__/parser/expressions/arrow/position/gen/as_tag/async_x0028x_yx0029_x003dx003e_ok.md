# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: as tag
> :: case: async (x, y) => ok
## Input

`````js
async (x, y) => ok`foo`
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 768,
                "start": 12,
                "end": 15
            },
            "typeParameters": null,
            "parameters": [
                {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 7,
                    "end": 8
                },
                {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 768,
                    "start": 9,
                    "end": 11
                }
            ],
            "asyncToken": {
                "kind": 82031,
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "returnType": null,
            "contents": {
                "kind": 226,
                "member": {
                    "kind": 134299649,
                    "text": "ok",
                    "rawText": "ok",
                    "flags": 768,
                    "start": 15,
                    "end": 18
                },
                "template": {
                    "kind": 458761,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 768,
                    "start": 18,
                    "end": 23
                },
                "flags": 256,
                "start": 15,
                "end": 23
            },
            "flags": 2304,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "text": "async (x, y) => ok`foo`",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
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

