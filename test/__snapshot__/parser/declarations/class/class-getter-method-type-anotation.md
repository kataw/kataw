# Kataw parser test case

## Input

`````js
class Foo {get fooProp():number{}}
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
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
                "text": "Foo",
                "rawText": "Foo",
                "flags": 96,
                "start": 5,
                "end": 9
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
                            "setKeyword": {
                                "kind": 16498,
                                "flags": 64,
                                "start": 11,
                                "end": 14
                            },
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "fooProp",
                                    "rawText": "fooProp",
                                    "flags": 96,
                                    "start": 14,
                                    "end": 22
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 1024,
                                    "start": 23,
                                    "end": 24
                                },
                                "type": {
                                    "kind": 139,
                                    "type": {
                                        "kind": 134234345,
                                        "flags": 64,
                                        "start": 25,
                                        "end": 31
                                    },
                                    "flags": 0,
                                    "start": 22,
                                    "end": 31
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 32,
                                        "end": 32
                                    },
                                    "flags": 32,
                                    "start": 31,
                                    "end": 33
                                },
                                "flags": 1024,
                                "start": 22,
                                "end": 33
                            },
                            "flags": 1024,
                            "start": 11,
                            "end": 33
                        }
                    ],
                    "flags": 32,
                    "start": 11,
                    "end": 33
                },
                "flags": 9,
                "start": 32,
                "end": 34
            },
            "flags": 16,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "class Foo {get fooProp():number{}}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

class Foo {
  get fooProp() {}
}
```

### Diagnostics

```javascript
✔ No errors
```

