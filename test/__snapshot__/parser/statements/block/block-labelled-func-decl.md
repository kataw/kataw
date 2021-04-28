# Kataw parser test case

## Input

`````js
{ foo: bar: function f(){} }
`````

## Output

### Hybrid CST

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
                            "flags": 768,
                            "start": 1,
                            "end": 5
                        },
                        "statement": {
                            "kind": 163,
                            "label": {
                                "kind": 134299649,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 768,
                                "start": 6,
                                "end": 10
                            },
                            "statement": {
                                "kind": 176,
                                "declareKeyword": null,
                                "asyncKeyword": null,
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 768,
                                    "start": 11,
                                    "end": 20
                                },
                                "generatorToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 768,
                                    "start": 20,
                                    "end": 22
                                },
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 22,
                                    "end": 24
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 25,
                                        "end": 25
                                    },
                                    "flags": 256,
                                    "start": 24,
                                    "end": 26
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 128,
                                "start": 11,
                                "end": 26
                            },
                            "flags": 128,
                            "start": 6,
                            "end": 26
                        },
                        "flags": 128,
                        "start": 1,
                        "end": 26
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 26
            },
            "flags": 128,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "text": "{ foo: bar: function f(){} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
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

