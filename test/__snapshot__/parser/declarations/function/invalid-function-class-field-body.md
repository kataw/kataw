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

### Hybrid CST

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
                "flags": 768,
                "start": 0,
                "end": 8
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 768,
                "start": 8,
                "end": 9
            },
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 768,
                "start": 9,
                "end": 13
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 13,
                "end": 15
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
                                "flags": 768,
                                "start": 17,
                                "end": 25
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "C",
                                "rawText": "C",
                                "flags": 768,
                                "start": 25,
                                "end": 27
                            },
                            "typeParameters": null,
                            "classHeritage": null,
                            "members": {
                                "kind": 277,
                                "elements": [
                                    {
                                        "kind": 280,
                                        "decorators": null,
                                        "declaredToken": null,
                                        "staticToken": null,
                                        "asyncKeyword": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "p",
                                            "rawText": "p",
                                            "flags": 768,
                                            "start": 29,
                                            "end": 80
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 229,
                                                "yieldKeyword": {
                                                    "kind": 8454253,
                                                    "flags": 768,
                                                    "start": 82,
                                                    "end": 88
                                                },
                                                "delegate": false,
                                                "asteriskToken": null,
                                                "expression": null,
                                                "flags": 256,
                                                "start": 82,
                                                "end": 88
                                            },
                                            "operatorToken": {
                                                "kind": 34098,
                                                "flags": 768,
                                                "start": 88,
                                                "end": 90
                                            },
                                            "right": {
                                                "kind": 201392130,
                                                "text": 42,
                                                "rawText": "42",
                                                "flags": 768,
                                                "start": 90,
                                                "end": 93
                                            },
                                            "flags": 256,
                                            "start": 82,
                                            "end": 93
                                        },
                                        "flags": 256,
                                        "start": 29,
                                        "end": 93
                                    },
                                    {
                                        "kind": 281,
                                        "flags": 768,
                                        "start": 93,
                                        "end": 94
                                    }
                                ],
                                "flags": 256,
                                "start": 29,
                                "end": 98
                            },
                            "flags": 128,
                            "start": 17,
                            "end": 98
                        }
                    ],
                    "multiline": true,
                    "flags": 256,
                    "start": 17,
                    "end": 98
                },
                "flags": 256,
                "start": 15,
                "end": 100
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 2176,
            "start": 0,
            "end": 100
        }
    ],
    "isModule": false,
    "text": "function* foo() {\n  class C {\n    // here yield is an identifier reference\n    p = yield + 42;\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 100
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

