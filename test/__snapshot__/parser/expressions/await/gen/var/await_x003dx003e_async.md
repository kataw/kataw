# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/expressions/await/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\await\gen\var
> :: test: var
> :: case: await => async
## Input

`````js
var await; var f = (async function() { await => async });
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
                                "expressions": [],
                                "flags": 32,
                                "start": 18,
                                "end": 44
                            },
                            "flags": 32,
                            "start": 18,
                            "end": 44
                        },
                        "flags": 16,
                        "start": 14,
                        "end": 44
                    }
                ],
                "flags": 16,
                "start": 14,
                "end": 44
            },
            "flags": 16,
            "start": 10,
            "end": 44
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 47,
                "end": 53
            },
            "flags": 16,
            "start": 47,
            "end": 53
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 56,
            "end": 57
        }
    ],
    "isModule": false,
    "source": "var await; var f = (async function() { await => async });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 57
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 44, end: 47
✖ ',' expected - start: 44, end: 47
✖ Declaration or statement expected - start: 53, end: 55
✖ Declaration or statement expected - start: 55, end: 56

```

