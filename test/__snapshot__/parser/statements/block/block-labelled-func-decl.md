# Kataw parser test case

## Input

`````js
{ foo: bar: function f(){} }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 163,
                        "label": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 1,
                            "end": 5
                        },
                        "labels": [
                            {
                                "kind": 256,
                                "label": "foo",
                                "iterationStatement": false,
                                "flags": 16,
                                "start": 1,
                                "end": 5
                            },
                            {
                                "kind": 256,
                                "label": "bar",
                                "iterationStatement": false,
                                "flags": 16,
                                "start": 6,
                                "end": 10
                            }
                        ],
                        "colonToken": {
                            "kind": 21,
                            "flags": 0,
                            "start": 5,
                            "end": 6
                        },
                        "statement": {
                            "kind": 163,
                            "label": {
                                "kind": 134299649,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 96,
                                "start": 6,
                                "end": 10
                            },
                            "labels": [
                                {
                                    "kind": 256,
                                    "label": "foo",
                                    "iterationStatement": false,
                                    "flags": 16,
                                    "start": 1,
                                    "end": 5
                                },
                                {
                                    "kind": 256,
                                    "label": "bar",
                                    "iterationStatement": false,
                                    "flags": 16,
                                    "start": 6,
                                    "end": 10
                                }
                            ],
                            "colonToken": {
                                "kind": 21,
                                "flags": 0,
                                "start": 10,
                                "end": 11
                            },
                            "statement": {
                                "kind": 176,
                                "declareKeyword": null,
                                "asyncKeyword": null,
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 0,
                                    "start": 11,
                                    "end": 20
                                },
                                "generatorToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 20,
                                    "end": 22
                                },
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 22,
                                    "end": 24
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 25,
                                        "end": 25
                                    },
                                    "flags": 32,
                                    "start": 24,
                                    "end": 26
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 16,
                                "start": 11,
                                "end": 26
                            },
                            "flags": 16,
                            "start": 6,
                            "end": 26
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 26
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 26
            },
            "flags": 16,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "{ foo: bar: function f(){} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

{
  foo: bar: function f() {}
}
```

### Diagnostics

```javascript
✔ No errors
```

