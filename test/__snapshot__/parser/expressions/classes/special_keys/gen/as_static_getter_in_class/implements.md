# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-21
- From: d
- Path: s
> :: test: as static getter in class
> :: case: implements
## Input

`````js
class x {static get implements(){}}
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
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 262,
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
                            "asyncKeyword": null,
                            "setKeyword": {
                                "kind": 16498,
                                "flags": 64,
                                "start": 15,
                                "end": 19
                            },
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "implements",
                                    "rawText": "implements",
                                    "flags": 96,
                                    "start": 19,
                                    "end": 30
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 1024,
                                    "start": 31,
                                    "end": 32
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 33,
                                        "end": 33
                                    },
                                    "flags": 32,
                                    "start": 32,
                                    "end": 34
                                },
                                "flags": 1024,
                                "start": 30,
                                "end": 34
                            },
                            "flags": 1024,
                            "start": 15,
                            "end": 34
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 34
                },
                "flags": 7,
                "start": 32,
                "end": 35
            },
            "flags": 16,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "class x {static get implements(){}}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

class x {
  static get static implements() {}
}
```

### Diagnostics

```javascript
✔ No errors
```

