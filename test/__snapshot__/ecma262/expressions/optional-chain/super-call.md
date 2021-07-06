# Kataw parser test case

## Input

`````js
class x extends y {
  constructor() {
    super?.(foo)
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
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 80,
                        "transformFlags": 0,
                        "start": 7,
                        "end": 15
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 17
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 17
                },
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
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 19,
                                    "end": 33
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 2048,
                                    "transformFlags": 0,
                                    "start": 34,
                                    "end": 35
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
                                                    "kind": 205,
                                                    "chainToken": {
                                                        "kind": 393240,
                                                        "flags": 64,
                                                        "transformFlags": 0,
                                                        "start": 47,
                                                        "end": 49
                                                    },
                                                    "member": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 4259935,
                                                            "flags": 97,
                                                            "transformFlags": 0,
                                                            "start": 37,
                                                            "end": 47
                                                        },
                                                        "expression": {
                                                            "kind": 16637,
                                                            "text": "",
                                                            "rawText": "",
                                                            "flags": 64,
                                                            "transformFlags": 0,
                                                            "start": 47,
                                                            "end": 47
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 2,
                                                        "start": 37,
                                                        "end": 47
                                                    },
                                                    "chain": {
                                                        "kind": 302,
                                                        "chain": {
                                                            "kind": 204,
                                                            "chain": null,
                                                            "typeArguments": null,
                                                            "argumentList": {
                                                                "kind": 256,
                                                                "elements": [
                                                                    {
                                                                        "kind": 134299649,
                                                                        "text": "foo",
                                                                        "rawText": "foo",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 50,
                                                                        "end": 53
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 50,
                                                                "end": 53
                                                            },
                                                            "flags": 268435488,
                                                            "transformFlags": 1,
                                                            "start": 49,
                                                            "end": 54
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 49,
                                                        "end": 54
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 37,
                                                    "end": 54
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 37,
                                                "end": 54
                                            }
                                        ],
                                        "flags": 33,
                                        "transformFlags": 0,
                                        "start": 37,
                                        "end": 54
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 35,
                                    "end": 58
                                },
                                "flags": 2048,
                                "transformFlags": 0,
                                "start": 33,
                                "end": 58
                            },
                            "flags": 2048,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 58
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 58
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 60
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 60
        }
    ],
    "isModule": false,
    "source": "class x extends y {\n  constructor() {\n    super?.(foo)\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 60
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' must be followed by an argument list or member access. - start: 37, end: 49
✖ Dot property must be an identifier - start: 47, end: 49

```

