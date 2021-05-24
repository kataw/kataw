# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-21
- From: d
- Path: s
> :: test: as static method in class
> :: case: true
## Input

`````js
class x {static true(){}}
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
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "true",
                                    "rawText": "true",
                                    "flags": 96,
                                    "start": 15,
                                    "end": 20
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 21,
                                    "end": 22
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 23,
                                        "end": 23
                                    },
                                    "flags": 32,
                                    "start": 22,
                                    "end": 24
                                },
                                "flags": 0,
                                "start": 20,
                                "end": 24
                            },
                            "flags": 0,
                            "start": 15,
                            "end": 24
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 24
                },
                "flags": 7,
                "start": 32,
                "end": 25
            },
            "flags": 16,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "class x {static true(){}}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript

class x {
  static static true() {}
}
```

### Diagnostics

```javascript
✔ No errors
```

