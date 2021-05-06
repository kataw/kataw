# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: as static async method in class
> :: case: implements
## Input

`````js
class x {static async implements(){}}
`````

## Output
### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 278,
                        "declareToken": null,
                        "decorators": null,
                        "generatorToken": null,
                        "staticKeyword": {
                            "kind": 8388716,
                            "flags": 64,
                            "start": 9,
                            "end": 15
                        },
                        "asyncKeyword": {
                            "kind": 82031,
                            "flags": 64,
                            "start": 15,
                            "end": 21
                        },
                        "setKeyword": null,
                        "getKeyword": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "implements",
                                "rawText": "implements",
                                "flags": 96,
                                "start": 21,
                                "end": 32
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 33,
                                "end": 34
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 35,
                                    "end": 35
                                },
                                "flags": 32,
                                "start": 34,
                                "end": 36
                            },
                            "flags": 256,
                            "start": 32,
                            "end": 36
                        },
                        "flags": 256,
                        "start": 15,
                        "end": 36
                    }
                ],
                "flags": 32,
                "start": 9,
                "end": 37
            },
            "flags": 16,
            "start": 0,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "class x {static async implements(){}}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

