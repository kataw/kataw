# Kataw parser test case

## Input

`````js
class A {
  x () {
    super - 1;
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
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 9,
                                    "end": 13
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 15,
                                    "end": 16
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 198,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 4259935,
                                                            "flags": 97,
                                                            "transformFlags": 0,
                                                            "start": 18,
                                                            "end": 28
                                                        },
                                                        "expression": {
                                                            "kind": 16637,
                                                            "text": "",
                                                            "rawText": "",
                                                            "flags": 64,
                                                            "transformFlags": 0,
                                                            "start": 28,
                                                            "end": 28
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 2,
                                                        "start": 18,
                                                        "end": 28
                                                    },
                                                    "operatorToken": {
                                                        "kind": 134318643,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 28,
                                                        "end": 30
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 30,
                                                        "end": 32
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 5120,
                                                    "start": 18,
                                                    "end": 32
                                                },
                                                "flags": 16,
                                                "transformFlags": 4096,
                                                "start": 18,
                                                "end": 33
                                            }
                                        ],
                                        "flags": 33,
                                        "transformFlags": 0,
                                        "start": 18,
                                        "end": 33
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 16,
                                    "end": 37
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 37
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 37
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 37
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 39
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": false,
    "source": "class A {\n  x () {\n    super - 1;\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' must be followed by an argument list or member access. - start: 18, end: 30
✖ Dot property must be an identifier - start: 28, end: 30

```

