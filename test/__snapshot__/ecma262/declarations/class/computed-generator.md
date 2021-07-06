# Kataw parser test case

## Input

`````js
class Foo {
	*[Symbol.iterator]() {
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
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 96,
                "transformFlags": 0,
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
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": {
                                "kind": 67143222,
                                "flags": 65,
                                "transformFlags": 32,
                                "start": 11,
                                "end": 14
                            },
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "Symbol",
                                            "rawText": "Symbol",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 15,
                                            "end": 21
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "iterator",
                                            "rawText": "iterator",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 22,
                                            "end": 30
                                        },
                                        "flags": 96,
                                        "transformFlags": 2,
                                        "start": 15,
                                        "end": 30
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 14,
                                    "end": 31
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
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
                                        "transformFlags": 0,
                                        "start": 35,
                                        "end": 35
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 33,
                                    "end": 38
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 31,
                                "end": 38
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 38
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 38
                },
                "flags": 9,
                "transformFlags": 0,
                "start": 32,
                "end": 40
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "class Foo {\n\t*[Symbol.iterator]() {\n\t}\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript

class Foo {
  * [Symbol.iterator]() {}
}
```

### Diagnostics

```javascript
✔ No errors
```

