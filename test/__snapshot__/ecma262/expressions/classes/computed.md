# Kataw parser test case

## Input

`````js
class A { [x=y](foo) {} }
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
                "text": "A",
                "rawText": "A",
                "flags": 96,
                "transformFlags": 0,
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
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 125,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 11,
                                            "end": 12
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 12,
                                            "end": 13
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 13,
                                            "end": 14
                                        },
                                        "flags": 0,
                                        "transformFlags": 128,
                                        "start": 11,
                                        "end": 14
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 9,
                                    "end": 15
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [
                                        {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 16,
                                            "end": 19
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 16,
                                    "end": 20
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 22,
                                        "end": 22
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 20,
                                    "end": 23
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 23
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 23
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 23
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 25
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "class A { [x=y](foo) {} }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript
class A {
  [x = y](foo) {}
}
```

### Diagnostics

```javascript
✔ No errors
```

