# Kataw parser test case

## Input

`````js
class Foo {
	static *bar() {
	}
}
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
                            "decorators": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 11,
                                "end": 19
                            },
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "start": 19,
                                "end": 21
                            },
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "bar",
                                    "rawText": "bar",
                                    "flags": 96,
                                    "start": 21,
                                    "end": 24
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 25,
                                    "end": 26
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 33,
                                        "start": 28,
                                        "end": 28
                                    },
                                    "flags": 32,
                                    "start": 26,
                                    "end": 31
                                },
                                "flags": 0,
                                "start": 24,
                                "end": 31
                            },
                            "flags": 0,
                            "start": 19,
                            "end": 31
                        }
                    ],
                    "flags": 32,
                    "start": 11,
                    "end": 31
                },
                "flags": 9,
                "start": 32,
                "end": 33
            },
            "flags": 16,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "class Foo {\n\tstatic *bar() {\n\t}\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

class Foo {
  static * bar() {}
}
```

### Diagnostics

```javascript
✔ No errors
```

