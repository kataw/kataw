# Kataw parser test case

## Input

`````js
class Foo {
  @bar [bizz]
  abc() {

  }
}
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
                "flags": 80,
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
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": {
                                "kind": 207,
                                "elements": [
                                    {
                                        "kind": 34611453,
                                        "decoratorToken": {
                                            "kind": 34611453,
                                            "flags": 65,
                                            "start": 11,
                                            "end": 15
                                        },
                                        "expression": {
                                            "kind": 130,
                                            "member": {
                                                "kind": 134299649,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 96,
                                                "start": 15,
                                                "end": 18
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "bizz",
                                                "rawText": "bizz",
                                                "flags": 96,
                                                "start": 20,
                                                "end": 24
                                            },
                                            "flags": 536870944,
                                            "start": 15,
                                            "end": 25
                                        },
                                        "flags": 0,
                                        "start": 15,
                                        "end": 25
                                    }
                                ],
                                "flags": 32,
                                "start": 11,
                                "end": 25
                            },
                            "asteriskToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "abc",
                                    "rawText": "abc",
                                    "flags": 96,
                                    "start": 25,
                                    "end": 31
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 32,
                                    "end": 33
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 33,
                                        "start": 35,
                                        "end": 35
                                    },
                                    "flags": 32,
                                    "start": 33,
                                    "end": 40
                                },
                                "flags": 0,
                                "start": 31,
                                "end": 40
                            },
                            "flags": 0,
                            "start": 11,
                            "end": 40
                        }
                    ],
                    "flags": 32,
                    "start": 11,
                    "end": 40
                },
                "flags": 9,
                "start": 32,
                "end": 42
            },
            "flags": 16,
            "start": 0,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "class Foo {\n  @bar [bizz]\n  abc() {\n\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript

class Foo {
  @bar[bizz]
  abc() {}
}
```

### Diagnostics

```javascript
✔ No errors
```

