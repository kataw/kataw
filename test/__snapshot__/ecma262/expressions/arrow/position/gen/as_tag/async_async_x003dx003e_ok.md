# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/arrow/position/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/arrow/position/gen/as_tag
> :: test: as tag
> :: case: async async => ok
## Options

`````js
{}
`````
## Input

`````js
async async => ok`foo`
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
                "parameters": {
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
                    "kind": 226,
                    "member": {
                        "kind": 134299649,
                        "text": "ok",
                        "rawText": "ok",
                        "flags": 96,
                        "start": 14,
                        "end": 17
                    },
                    "template": {
                        "kind": 458761,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 134217824,
                        "start": 17,
                        "end": 22
                    },
                    "flags": 32,
                    "start": 14,
                    "end": 22
                },
                "flags": 288,
                "start": 0,
                "end": 22
            },
            "flags": 16,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "async async => ok`foo`",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

async async =>  ok`foo`;
```

### Diagnostics

```javascript
✔ No errors
```

