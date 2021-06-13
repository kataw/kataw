# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, next: true }
`````

## Input

`````js
switch (0) {
  default: {
    class C {
      static foo() {}
      static {
        break;
      }
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
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 80,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "start": 8,
                "end": 9
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 170,
                        "defaultKeyword": {
                            "kind": 4194387,
                            "flags": 81,
                            "start": 12,
                            "end": 22
                        },
                        "statements": [
                            {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 178,
                                            "declareKeyword": null,
                                            "decorators": null,
                                            "classKeyword": {
                                                "kind": 37822544,
                                                "flags": 81,
                                                "start": 25,
                                                "end": 35
                                            },
                                            "name": {
                                                "kind": 134299649,
                                                "text": "C",
                                                "rawText": "C",
                                                "flags": 96,
                                                "start": 35,
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
                                                            "decorators": null,
                                                            "generatorToken": null,
                                                            "staticKeyword": {
                                                                "kind": 8388716,
                                                                "flags": 64,
                                                                "start": 39,
                                                                "end": 52
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
                                                                    "start": 52,
                                                                    "end": 56
                                                                },
                                                                "typeParameters": null,
                                                                "formalParameters": {
                                                                    "kind": 214,
                                                                    "formalParameterList": [],
                                                                    "trailingComma": false,
                                                                    "flags": 0,
                                                                    "start": 57,
                                                                    "end": 58
                                                                },
                                                                "returnType": null,
                                                                "contents": {
                                                                    "kind": 216,
                                                                    "functionStatementList": {
                                                                        "kind": 217,
                                                                        "directives": [],
                                                                        "statements": [],
                                                                        "flags": 32,
                                                                        "start": 60,
                                                                        "end": 60
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 58,
                                                                    "end": 61
                                                                },
                                                                "flags": 0,
                                                                "start": 56,
                                                                "end": 61
                                                            },
                                                            "flags": 0,
                                                            "start": 52,
                                                            "end": 61
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
                                                                            "kind": 150,
                                                                            "breakKeyword": {
                                                                                "kind": 37757005,
                                                                                "flags": 81,
                                                                                "start": 76,
                                                                                "end": 90
                                                                            },
                                                                            "label": null,
                                                                            "flags": 16,
                                                                            "start": 76,
                                                                            "end": 91
                                                                        }
                                                                    ],
                                                                    "flags": 17,
                                                                    "start": 76,
                                                                    "end": 91
                                                                },
                                                                "flags": 61,
                                                                "start": 0,
                                                                "end": 99
                                                            },
                                                            "flags": 32,
                                                            "start": 61,
                                                            "end": 99
                                                        }
                                                    ],
                                                    "flags": 32,
                                                    "start": 39,
                                                    "end": 99
                                                },
                                                "flags": 37,
                                                "start": 32,
                                                "end": 105
                                            },
                                            "flags": 17,
                                            "start": 25,
                                            "end": 105
                                        }
                                    ],
                                    "flags": 17,
                                    "start": 25,
                                    "end": 105
                                },
                                "flags": 16,
                                "start": 23,
                                "end": 109
                            }
                        ],
                        "flags": 16,
                        "start": 12,
                        "end": 109
                    }
                ],
                "flags": 16,
                "start": 10,
                "end": 111
            },
            "flags": 80,
            "start": 0,
            "end": 111
        }
    ],
    "isModule": false,
    "source": "switch (0) {\n  default: {\n    class C {\n      static foo() {}\n      static {\n        break;\n      }\n    }\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 111
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ A 'break' statement can only be used within an enclosing iteration or switch statement. - start: 90, end: 91

```

