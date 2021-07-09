# Kataw parser test case

## Input

`````js
@foo
export default class MyComponent {
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
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 1
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 4
                        },
                        "flags": 0,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 4
                    }
                ],
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 4
            },
            "classKeyword": null,
            "name": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "transformFlags": 0,
                "start": 4,
                "end": 4
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 4
                },
                "flags": 4,
                "transformFlags": 0,
                "start": 32,
                "end": 4
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 0,
            "end": 4
        },
        {
            "kind": 258,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 81,
                "transformFlags": 0,
                "start": 4,
                "end": 11
            },
            "defaultKeyword": {
                "kind": 4194387,
                "flags": 80,
                "transformFlags": 0,
                "start": 4,
                "end": 19
            },
            "declaration": {
                "kind": 178,
                "declareKeyword": null,
                "decorators": null,
                "classKeyword": {
                    "kind": 37822544,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 25
                },
                "name": {
                    "kind": 134299649,
                    "text": "MyComponent",
                    "rawText": "MyComponent",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 25,
                    "end": 37
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
                                                "start": 39,
                                                "end": 43
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "task",
                                                "rawText": "task",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 43,
                                                "end": 47
                                            },
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 43,
                                            "end": 47
                                        }
                                    ],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 39,
                                    "end": 47
                                },
                                "staticKeyword": null,
                                "asyncKeyword": null,
                                "setKeyword": null,
                                "getKeyword": null,
                                "asteriskToken": {
                                    "kind": 67143222,
                                    "flags": 65,
                                    "transformFlags": 32,
                                    "start": 47,
                                    "end": 51
                                },
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 51,
                                        "end": 54
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 55,
                                        "end": 56
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
                                            "start": 58,
                                            "end": 58
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 56,
                                        "end": 62
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 54,
                                    "end": 62
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 39,
                                "end": 62
                            }
                        ],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 39,
                        "end": 62
                    },
                    "flags": 37,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 64
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 19,
                "end": 64
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 4,
            "end": 64
        }
    ],
    "isModule": false,
    "source": "@foo\nexport default class MyComponent {\n  @task\n  *foo() {\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 64
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Binding identifier expected - start: 4, end: 11
✖ The `export` keyword can only be used with the module goal - start: 4, end: 11

```

