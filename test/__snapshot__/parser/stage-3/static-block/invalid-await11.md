# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, next: true }
`````

## Input

`````js
async function foo() {
  class C {
    static foo() {}
    static {
      await 42;
    }
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
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 5,
                "end": 14
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 14,
                "end": 18
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 18,
                "end": 20
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
                                "start": 22,
                                "end": 30
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "C",
                                "rawText": "C",
                                "flags": 96,
                                "start": 30,
                                "end": 32
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
                                            "generatorToken": null,
                                            "staticKeyword": {
                                                "kind": 8388716,
                                                "flags": 64,
                                                "start": 34,
                                                "end": 45
                                            },
                                            "asyncKeyword": null,
                                            "setKeyword": null,
                                            "getKeyword": null,
                                            "method": {
                                                "kind": 209,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 96,
                                                    "start": 45,
                                                    "end": 49
                                                },
                                                "typeParameters": null,
                                                "formalParameters": {
                                                    "kind": 214,
                                                    "formalParameterList": [],
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "start": 50,
                                                    "end": 51
                                                },
                                                "returnType": null,
                                                "contents": {
                                                    "kind": 216,
                                                    "functionStatementList": {
                                                        "kind": 217,
                                                        "directives": [],
                                                        "statements": [],
                                                        "flags": 32,
                                                        "start": 53,
                                                        "end": 53
                                                    },
                                                    "flags": 32,
                                                    "start": 51,
                                                    "end": 54
                                                },
                                                "flags": 0,
                                                "start": 49,
                                                "end": 54
                                            },
                                            "flags": 0,
                                            "start": 45,
                                            "end": 54
                                        },
                                        {
                                            "kind": 305,
                                            "decorators": null,
                                            "declaredKeyword": null,
                                            "staticKeyword": null,
                                            "block": {
                                                "kind": 124,
                                                "block": {
                                                    "kind": 249,
                                                    "statements": [
                                                        {
                                                            "kind": 120,
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "await",
                                                                "rawText": "await",
                                                                "flags": 96,
                                                                "start": 67,
                                                                "end": 79
                                                            },
                                                            "flags": 16,
                                                            "start": 67,
                                                            "end": 79
                                                        },
                                                        {
                                                            "kind": 120,
                                                            "expression": {
                                                                "kind": 201392130,
                                                                "text": 42,
                                                                "rawText": "42",
                                                                "flags": 96,
                                                                "start": 79,
                                                                "end": 82
                                                            },
                                                            "flags": 16,
                                                            "start": 79,
                                                            "end": 83
                                                        }
                                                    ],
                                                    "flags": 17,
                                                    "start": 67,
                                                    "end": 83
                                                },
                                                "flags": 54,
                                                "start": 0,
                                                "end": 89
                                            },
                                            "flags": 32,
                                            "start": 54,
                                            "end": 89
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 34,
                                    "end": 89
                                },
                                "flags": 32,
                                "start": 32,
                                "end": 93
                            },
                            "flags": 17,
                            "start": 22,
                            "end": 93
                        }
                    ],
                    "flags": 33,
                    "start": 22,
                    "end": 93
                },
                "flags": 32,
                "start": 20,
                "end": 95
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 95
        }
    ],
    "isModule": false,
    "source": "async function foo() {\n  class C {\n    static foo() {}\n    static {\n      await 42;\n    }\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 95
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 79, end: 82

```

