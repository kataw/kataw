# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: e
> :: test: double
> :: case: async (x, y) => ok
## Options

`````js
{}
`````
## Input

`````js
async (x, y) => ok async (x, y) => ok
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
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
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
            "returnType": null,
            "arrowToken": {
                "kind": 10,
                "flags": 64,
                "start": 12,
                "end": 15
            },
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
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 18,
                "end": 24
            },
            "typeParameters": null,
            "parameters": [
                {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 26,
                    "end": 27
                },
                {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 96,
                    "start": 28,
                    "end": 30
                }
            ],
            "returnType": null,
            "arrowToken": {
                "kind": 10,
                "flags": 64,
                "start": 31,
                "end": 34
            },
            "contents": {
                "kind": 134299649,
                "text": "ok",
                "rawText": "ok",
                "flags": 96,
                "start": 34,
                "end": 37
            },
            "flags": 288,
            "start": 18,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "async (x, y) => ok async (x, y) => ok",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript

 (x, y) =>ok (x, y) =>ok 
```

### Diagnostics

```javascript
✔ No errors
```

