# Kataw parser test case

## Input

`````js
class x {*f(await){}}
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
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "start": 9,
                                "end": 10
                            },
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 10,
                                    "end": 11
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [
                                        {
                                            "kind": 134299649,
                                            "text": "await",
                                            "rawText": "await",
                                            "flags": 96,
                                            "start": 12,
                                            "end": 17
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 96,
                                    "start": 12,
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
                                "flags": 0,
                                "start": 11,
                                "end": 20
                            },
                            "flags": 0,
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
    "source": "class x {*f(await){}}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

class x {
  * f(await) {}
}
```

### Diagnostics

```javascript
✔ No errors
```

