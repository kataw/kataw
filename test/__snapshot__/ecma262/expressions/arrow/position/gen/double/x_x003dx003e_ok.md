# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/arrow/position/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/arrow/position/gen/double
> :: test: double
> :: case: x => ok
## Options

`````js
{}
`````
## Input

`````js
x => ok x => ok
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
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 1,
                    "end": 4
                },
                "contents": {
                    "kind": 134299649,
                    "text": "ok",
                    "rawText": "ok",
                    "flags": 96,
                    "start": 4,
                    "end": 7
                },
                "flags": 32,
                "start": 0,
                "end": 7
            },
            "flags": 16,
            "start": 0,
            "end": 7
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 7,
                    "end": 9
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 9,
                    "end": 12
                },
                "contents": {
                    "kind": 134299649,
                    "text": "ok",
                    "rawText": "ok",
                    "flags": 96,
                    "start": 12,
                    "end": 15
                },
                "flags": 32,
                "start": 7,
                "end": 15
            },
            "flags": 16,
            "start": 7,
            "end": 15
        }
    ],
    "isModule": false,
    "source": "x => ok x => ok",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 7, end: 9

```

