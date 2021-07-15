# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/await/gen/var
> :: test: var
> :: case: var asyncArrow = async(...await) => {};
## Options

`````js
{}
`````
## Input

`````js
var await; var f = (async function() { var asyncArrow = async(...await) => {}; });
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
                "transformFlags": 0,
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
                            "transformFlags": 0,
                            "start": 3,
                            "end": 9
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 9
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 9
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 10
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "transformFlags": 0,
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
                            "transformFlags": 0,
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
                                "transformFlags": 1024,
                                "start": 18,
                                "end": 71
                            },
                            "flags": 18,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 71
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 14,
                        "end": 71
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 14,
                "end": 71
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 10,
            "end": 71
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 76,
                "end": 76
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 74,
            "end": 77
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 77,
            "end": 78
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 81,
            "end": 82
        }
    ],
    "isModule": false,
    "source": "var await; var f = (async function() { var asyncArrow = async(...await) => {}; });",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 82
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 70, end: 71
✖ Variable declaration not allowed at this location - start: 71, end: 74
✖ Expected a `;` - start: 71, end: 74
✖ Variable declaration not allowed at this location - start: 71, end: 74
✖ Declaration or statement expected - start: 78, end: 80
✖ Declaration or statement expected - start: 80, end: 81

```

