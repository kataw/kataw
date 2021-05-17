# Kataw parser test case

## Input

`````js
class x { "construct\u{6f}r"(){} }
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
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 201392131,
                                    "text": "constructor",
                                    "rawText": "\"construct\\u{6f}r\"",
                                    "flags": 8288,
                                    "start": 9,
                                    "end": 28
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 29,
                                    "end": 30
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 31,
                                        "end": 31
                                    },
                                    "flags": 32,
                                    "start": 30,
                                    "end": 32
                                },
                                "flags": 0,
                                "start": 28,
                                "end": 32
                            },
                            "flags": 0,
                            "start": 9,
                            "end": 32
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 32
                },
                "flags": 32,
                "start": 7,
                "end": 34
            },
            "flags": 16,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "class x { \"construct\\u{6f}r\"(){} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

class x {
  "\"construct\u{6f}r\""() {}
}
```

### Diagnostics

```javascript
✔ No errors
```

