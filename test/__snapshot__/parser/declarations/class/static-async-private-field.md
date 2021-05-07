# Kataw parser test case

## Input

`````js
class C { static async*#aaa(){} }
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
                "text": "C",
                "rawText": "C",
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
                        "generatorToken": {
                            "kind": 67143222,
                            "flags": 64,
                            "start": 22,
                            "end": 23
                        },
                        "staticKeyword": {
                            "kind": 8388716,
                            "flags": 64,
                            "start": 9,
                            "end": 16
                        },
                        "asyncKeyword": {
                            "kind": 82031,
                            "flags": 64,
                            "start": 16,
                            "end": 22
                        },
                        "setKeyword": null,
                        "getKeyword": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 67174651,
                                "text": "#aaa",
                                "flags": 96,
                                "start": 23,
                                "end": 27
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 384,
                                "start": 28,
                                "end": 29
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 30,
                                    "end": 30
                                },
                                "flags": 32,
                                "start": 29,
                                "end": 31
                            },
                            "flags": 384,
                            "start": 27,
                            "end": 31
                        },
                        "flags": 384,
                        "start": 16,
                        "end": 31
                    }
                ],
                "flags": 32,
                "start": 9,
                "end": 33
            },
            "flags": 16,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "class C { static async*#aaa(){} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

class {
  async static static () {}
}
```

### Diagnostics

```javascript
✔ No errors
```

