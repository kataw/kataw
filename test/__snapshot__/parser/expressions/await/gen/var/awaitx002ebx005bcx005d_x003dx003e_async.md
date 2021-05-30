# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-30
- From: kataw7/test\__snapshot__/parser/expressions/await/autogen.md
- Path: kataw7/test\__snapshot__\parser\expressions\await\gen\var
> :: test: var
> :: case: await.b[c] => async
## Input

`````js
var await; var f = (async function() { await.b[c] => async });
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "await",
                            "rawText": "await",
                            "flags": 96,
                            "start": 3,
                            "end": 9
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 9
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 9
            },
            "flags": 16,
            "start": 0,
            "end": 10
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 10,
                "end": 14
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 14,
                            "end": 16
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 121,
                            "expression": {
                                "kind": 132,
                                "flags": 32,
                                "start": 18,
                                "end": 49
                            },
                            "flags": 32,
                            "start": 18,
                            "end": 49
                        },
                        "flags": 16,
                        "start": 14,
                        "end": 49
                    }
                ],
                "flags": 16,
                "start": 14,
                "end": 49
            },
            "flags": 16,
            "start": 10,
            "end": 49
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 52,
                "end": 58
            },
            "flags": 16,
            "start": 52,
            "end": 58
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 61,
            "end": 62
        }
    ],
    "isModule": false,
    "source": "var await; var f = (async function() { await.b[c] => async });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 62
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 44, end: 45
✖ Expected a `;` - start: 49, end: 52
✖ ',' expected - start: 49, end: 52
✖ Declaration or statement expected - start: 58, end: 60
✖ Declaration or statement expected - start: 60, end: 61

```

