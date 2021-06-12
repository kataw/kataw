# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-pass\gen\stand-alone
> :: test: stand-alone
> :: case: var [localVar = defaultValue] = obj
## Input

`````js
var [localVar = defaultValue] = obj
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
                            "kind": 201,
                            "elementList": {
                                "kind": 202,
                                "elements": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "localVar",
                                            "rawText": "localVar",
                                            "flags": 96,
                                            "start": 5,
                                            "end": 13
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 134299649,
                                            "text": "defaultValue",
                                            "rawText": "defaultValue",
                                            "flags": 96,
                                            "start": 15,
                                            "end": 28
                                        },
                                        "flags": 32,
                                        "start": 5,
                                        "end": 28
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 5,
                                "end": 28
                            },
                            "flags": 32,
                            "start": 3,
                            "end": 29
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 96,
                            "start": 31,
                            "end": 35
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 35
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 35
            },
            "flags": 16,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "var [localVar = defaultValue] = obj",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

var [localVar = defaultValue] = obj;
```

### Diagnostics

```javascript
✔ No errors
```

