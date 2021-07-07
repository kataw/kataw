# Kataw parser test case

## Input

`````js
function* foo() {
  class C {
    // here yield is an identifier reference
    p = yield + 42;
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
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "transformFlags": 32,
                "start": 8,
                "end": 9
            },
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 9,
                "end": 13
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 14,
                "end": 14
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 178,
                            "declareKeyword": null,
                            "decorators": null,
                            "classKeyword": {
                                "kind": 37822544,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 17,
                                "end": 25
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "C",
                                "rawText": "C",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 25,
                                "end": 27
                            },
                            "typeParameters": null,
                            "tail": {
                                "kind": 277,
                                "classHeritage": null,
                                "body": {
                                    "kind": 303,
                                    "elements": [
                                        {
                                            "kind": 280,
                                            "decorators": null,
                                            "declaredToken": null,
                                            "staticKeyword": null,
                                            "asyncKeyword": null,
                                            "key": {
                                                "kind": 134299649,
                                                "text": "p",
                                                "rawText": "p",
                                                "flags": 97,
                                                "transformFlags": 0,
                                                "start": 29,
                                                "end": 80
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": {
                                                "kind": 229,
                                                "yieldKeyword": {
                                                    "kind": 8454253,
                                                    "flags": 64,
                                                    "transformFlags": 0,
                                                    "start": 82,
                                                    "end": 88
                                                },
                                                "delegate": false,
                                                "asteriskToken": null,
                                                "expression": {
                                                    "kind": 126,
                                                    "operandToken": {
                                                        "kind": 99634,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 88,
                                                        "end": 90
                                                    },
                                                    "operand": {
                                                        "kind": 201392130,
                                                        "text": 42,
                                                        "rawText": "42",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 90,
                                                        "end": 93
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 1024,
                                                    "start": 88,
                                                    "end": 93
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 82,
                                                "end": 93
                                            },
                                            "flags": 32,
                                            "transformFlags": 128,
                                            "start": 29,
                                            "end": 93
                                        },
                                        {
                                            "kind": 1108353041,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 93,
                                            "end": 94
                                        }
                                    ],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 29,
                                    "end": 94
                                },
                                "flags": 27,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 98
                            },
                            "flags": 17,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 98
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 98
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 15,
                "end": 100
            },
            "returnType": null,
            "flags": 272,
            "transformFlags": 0,
            "start": 0,
            "end": 100
        }
    ],
    "isModule": false,
    "source": "function* foo() {\n  class C {\n    // here yield is an identifier reference\n    p = yield + 42;\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 100
}
```

### Printed

```javascript
function *foo() {
  class C {
    p = yield +42;;
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

