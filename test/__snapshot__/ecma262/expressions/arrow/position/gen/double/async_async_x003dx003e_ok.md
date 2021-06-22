# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/arrow/position/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/arrow/position/gen/double
> :: test: double
> :: case: async async => ok
## Options

`````js
{}
`````
## Input

`````js
async async => ok async async => ok
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
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 0,
                    "end": 5
                },
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 134299649,
                    "text": "async",
                    "rawText": "async",
                    "flags": 96,
                    "start": 5,
                    "end": 11
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 11,
                    "end": 14
                },
                "contents": {
                    "kind": 134299649,
                    "text": "ok",
                    "rawText": "ok",
                    "flags": 96,
                    "start": 14,
                    "end": 17
                },
                "flags": 288,
                "start": 0,
                "end": 17
            },
            "flags": 16,
            "start": 0,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 17,
                    "end": 23
                },
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 134299649,
                    "text": "async",
                    "rawText": "async",
                    "flags": 96,
                    "start": 23,
                    "end": 29
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 29,
                    "end": 32
                },
                "contents": {
                    "kind": 134299649,
                    "text": "ok",
                    "rawText": "ok",
                    "flags": 96,
                    "start": 32,
                    "end": 35
                },
                "flags": 288,
                "start": 17,
                "end": 35
            },
            "flags": 16,
            "start": 17,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "async async => ok async async => ok",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 17, end: 23

```

