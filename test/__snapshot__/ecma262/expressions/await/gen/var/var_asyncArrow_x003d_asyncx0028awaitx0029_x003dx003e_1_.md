# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/await/gen/var
> :: test: var
> :: case: var asyncArrow = async(await) => 1;
## Options

`````js
{}
`````
## Input

`````js
var await; var f = (async function() { var asyncArrow = async(await) => 1; });
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
                                "end": 68
                            },
                            "flags": 18,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 68
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 14,
                        "end": 68
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 14,
                "end": 68
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 10,
            "end": 68
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1,
                "rawText": "1",
                "flags": 96,
                "transformFlags": 0,
                "start": 71,
                "end": 73
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 71,
            "end": 74
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 77,
            "end": 78
        }
    ],
    "isModule": false,
    "source": "var await; var f = (async function() { var asyncArrow = async(await) => 1; });",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 78
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 67, end: 68
✖ Variable declaration not allowed at this location - start: 68, end: 71
✖ Expected a `;` - start: 68, end: 71
✖ Variable declaration not allowed at this location - start: 68, end: 71
✖ Declaration or statement expected - start: 74, end: 76
✖ Declaration or statement expected - start: 76, end: 77

```

