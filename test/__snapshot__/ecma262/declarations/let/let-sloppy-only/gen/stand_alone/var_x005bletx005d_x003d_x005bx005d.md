# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/declarations/let/let-sloppy-only/autogen.md
- Path: kataw/test/__snapshot__/ecma262/declarations/let/let-sloppy-only/gen/stand_alone
> :: test: stand alone
> :: case: var [let] = []
## Options

`````js
{}
`````
## Input

`````js
var [let] = []
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
                            "kind": 201,
                            "elementList": {
                                "kind": 324,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "let",
                                        "rawText": "let",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 8
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 8
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 9
                        },
                        "type": null,
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 13
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 11,
                            "end": 14
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 14
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 14
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "var [let] = []",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript
var [let] = [];
```

### Diagnostics

```javascript
✔ No errors
```

