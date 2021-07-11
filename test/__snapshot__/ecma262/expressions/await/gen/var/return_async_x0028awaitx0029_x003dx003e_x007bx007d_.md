# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/await/gen/var
> :: test: var
> :: case: return async (await) => {};
## Options

`````js
{}
`````
## Input

`````js
var await; var f = (async function() { return async (await) => {}; });
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
                        "type": null,
                        "initializer": {
                            "kind": 121,
                            "expression": {
                                "kind": 132,
                                "expressions": [],
                                "flags": 32,
                                "start": 18,
                                "end": 59
                            },
                            "flags": 32,
                            "start": 18,
                            "end": 59
                        },
                        "flags": 16,
                        "start": 14,
                        "end": 59
                    }
                ],
                "flags": 16,
                "start": 14,
                "end": 59
            },
            "flags": 16,
            "start": 10,
            "end": 59
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 64,
                "end": 64
            },
            "flags": 16,
            "start": 62,
            "end": 65
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 65,
            "end": 66
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 69,
            "end": 70
        }
    ],
    "isModule": false,
    "source": "var await; var f = (async function() { return async (await) => {}; });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 70
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 58, end: 59
✖ Expected a `;` - start: 59, end: 62
✖ ',' expected - start: 59, end: 62
✖ Declaration or statement expected - start: 66, end: 68
✖ Declaration or statement expected - start: 68, end: 69

```

