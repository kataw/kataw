# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-05
- From: kataw8/test\__snapshot__/parser/misc/escaped-keywords/autogen.md
- Path: kataw8/test\__snapshot__\parser\misc\escaped-keywords\gen\strict_mode
> :: test: strict mode
> :: case: var x = cl\u0061ss {}
## Input

`````js
var x = cl\u0061ss {}
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
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 189,
                            "decorators": null,
                            "classKeyword": {
                                "kind": 37822544,
                                "flags": 16448,
                                "start": 7,
                                "end": 18
                            },
                            "name": null,
                            "typeParameters": null,
                            "tail": {
                                "kind": 277,
                                "classHeritage": null,
                                "body": {
                                    "kind": 262,
                                    "elements": [],
                                    "flags": 32,
                                    "start": 20,
                                    "end": 20
                                },
                                "flags": 18,
                                "start": 32,
                                "end": 21
                            },
                            "flags": 32,
                            "start": 7,
                            "end": 21
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 21
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 21
            },
            "flags": 16,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "var x = cl\\u0061ss {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

var x = class  {};
```

### Diagnostics

```javascript
✔ No errors
```

