# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-28
- From: d
- Path: s
> :: test: as setter in class
> :: case: in
## Input

`````js
class x {set in(x){}}
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
                "flags": 80,
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
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": {
                                "kind": 16499,
                                "flags": 64,
                                "start": 9,
                                "end": 12
                            },
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "in",
                                    "rawText": "in",
                                    "flags": 96,
                                    "start": 12,
                                    "end": 15
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [
                                        {
                                            "kind": 215,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 16,
                                                "end": 17
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 16,
                                            "end": 17
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 544,
                                    "start": 16,
                                    "end": 18
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 19,
                                        "end": 19
                                    },
                                    "flags": 32,
                                    "start": 18,
                                    "end": 20
                                },
                                "flags": 512,
                                "start": 15,
                                "end": 20
                            },
                            "flags": 512,
                            "start": 9,
                            "end": 20
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 20
                },
                "flags": 7,
                "start": 32,
                "end": 21
            },
            "flags": 16,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "class x {set in(x){}}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

class x {
  set in(x) {}
}
```

### Diagnostics

```javascript
✔ No errors
```

