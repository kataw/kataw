# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-28
- From: d
- Path: e
> :: test: comma double
> :: case: async (x, y) => ok
## Input

`````js
async (x, y) => ok, async (x, y) => ok
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 64,
                "start": 12,
                "end": 15
            },
            "typeParameters": null,
            "parameters": [
                {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 7,
                    "end": 8
                },
                {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 96,
                    "start": 9,
                    "end": 11
                }
            ],
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "returnType": null,
            "contents": {
                "kind": 134299649,
                "text": "ok",
                "rawText": "ok",
                "flags": 96,
                "start": 15,
                "end": 18
            },
            "flags": 288,
            "start": 0,
            "end": 18
        },
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 64,
                "start": 32,
                "end": 35
            },
            "typeParameters": null,
            "parameters": [
                {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 27,
                    "end": 28
                },
                {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 96,
                    "start": 29,
                    "end": 31
                }
            ],
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 19,
                "end": 25
            },
            "returnType": null,
            "contents": {
                "kind": 134299649,
                "text": "ok",
                "rawText": "ok",
                "flags": 96,
                "start": 35,
                "end": 38
            },
            "flags": 288,
            "start": 19,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "async (x, y) => ok, async (x, y) => ok",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Declaration or statement expected - start: 18, end: 19

```

