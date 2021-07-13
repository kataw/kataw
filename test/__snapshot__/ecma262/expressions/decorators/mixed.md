# Kataw parser test case

## Input

`````js
// https://github.com/prettier/prettier/issues/6747

@foo
class MyComponent {
  @task
  *foo() {
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
            "decorators": {
                "kind": 207,
                "elements": [
                    {
                        "kind": 34611453,
                        "decoratorToken": {
                            "kind": 34611453,
                            "flags": 65,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 54
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 54,
                            "end": 57
                        },
                        "flags": 0,
                        "transformFlags": 0,
                        "start": 54,
                        "end": 57
                    }
                ],
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 57
            },
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 0,
                "end": 63
            },
            "name": {
                "kind": 134299649,
                "text": "MyComponent",
                "rawText": "MyComponent",
                "flags": 96,
                "transformFlags": 0,
                "start": 63,
                "end": 75
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
                                            "transformFlags": 0,
                                            "start": 77,
                                            "end": 81
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "task",
                                            "rawText": "task",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 81,
                                            "end": 85
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 81,
                                        "end": 85
                                    }
                                ],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 77,
                                "end": 85
                            },
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": {
                                "kind": 67143222,
                                "flags": 65,
                                "transformFlags": 32,
                                "start": 85,
                                "end": 89
                            },
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 89,
                                    "end": 92
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 93,
                                    "end": 94
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
                                        "start": 96,
                                        "end": 96
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 94,
                                    "end": 100
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 92,
                                "end": 100
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 77,
                            "end": 100
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 77,
                    "end": 100
                },
                "flags": 75,
                "transformFlags": 0,
                "start": 32,
                "end": 102
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 0,
            "end": 102
        }
    ],
    "isModule": false,
    "source": "// https://github.com/prettier/prettier/issues/6747\n\n@foo\nclass MyComponent {\n  @task\n  *foo() {\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 102
}
```

### Printed

```javascript
// https://github.com/prettier/prettier/issues/6747
// https://github.com/prettier/prettier/issues/6747
@foo
class MyComponent {
  @task *foo() {}
}
```

### Diagnostics

```javascript
✔ No errors
```

