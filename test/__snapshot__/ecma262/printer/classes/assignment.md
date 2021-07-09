# Kataw parser test case

## Input

`````js
module.exports = class A extends B {
  method () {
    console.log("foo");
  }
};
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 129,
                    "member": {
                        "kind": 134299649,
                        "text": "module",
                        "rawText": "module",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 6
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "exports",
                        "rawText": "exports",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 7,
                        "end": 14
                    },
                    "flags": 96,
                    "transformFlags": 2,
                    "start": 0,
                    "end": 14
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 16
                },
                "right": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 16,
                        "end": 22
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "A",
                        "rawText": "A",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 22,
                        "end": 24
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
                                "start": 24,
                                "end": 32
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "B",
                                "rawText": "B",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 34
                            },
                            "typeParameter": null,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 34
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
                                            "text": "method",
                                            "rawText": "method",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 36,
                                            "end": 45
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 47,
                                            "end": 48
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
                                                            "kind": 131,
                                                            "expression": {
                                                                "kind": 129,
                                                                "member": {
                                                                    "kind": 134299649,
                                                                    "text": "console",
                                                                    "rawText": "console",
                                                                    "flags": 97,
                                                                    "transformFlags": 0,
                                                                    "start": 50,
                                                                    "end": 62
                                                                },
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": "log",
                                                                    "rawText": "log",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 63,
                                                                    "end": 66
                                                                },
                                                                "flags": 97,
                                                                "transformFlags": 2,
                                                                "start": 50,
                                                                "end": 66
                                                            },
                                                            "argumentList": {
                                                                "kind": 256,
                                                                "elements": [
                                                                    {
                                                                        "kind": 201392131,
                                                                        "text": "foo",
                                                                        "rawText": "\"foo\"",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 67,
                                                                        "end": 72
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 67,
                                                                "end": 72
                                                            },
                                                            "flags": 268435488,
                                                            "transformFlags": 1,
                                                            "start": 50,
                                                            "end": 73
                                                        },
                                                        "flags": 16,
                                                        "transformFlags": 4096,
                                                        "start": 50,
                                                        "end": 74
                                                    }
                                                ],
                                                "flags": 33,
                                                "transformFlags": 0,
                                                "start": 50,
                                                "end": 74
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 48,
                                            "end": 78
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 45,
                                        "end": 78
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 36,
                                    "end": 78
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 36,
                            "end": 78
                        },
                        "flags": 24,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 80
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 80
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 80
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 81
        }
    ],
    "isModule": false,
    "source": "module.exports = class A extends B {\n  method () {\n    console.log(\"foo\");\n  }\n};",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 81
}
```

### Printed

```javascript
module.exports = class A extends B {
  method() {
    console.log("\"foo\"");
  }
};
```

### Diagnostics

```javascript
✔ No errors
```

