# Kataw parser test case

## Input

`````js
var x = {
    "foo"() {
        return bar;
    }
};

`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 209,
                                        "name": {
                                            "kind": 201392131,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 769,
                                            "start": 9,
                                            "end": 19
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "start": 20,
                                            "end": 21
                                        },
                                        "type": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [
                                                    {
                                                        "kind": 161,
                                                        "returnKeyword": {
                                                            "kind": 37757022,
                                                            "flags": 768,
                                                            "start": 23,
                                                            "end": 38
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "bar",
                                                            "rawText": "bar",
                                                            "flags": 768,
                                                            "start": 38,
                                                            "end": 42
                                                        },
                                                        "flags": 128,
                                                        "start": 1,
                                                        "end": 23
                                                    }
                                                ],
                                                "multiline": true,
                                                "flags": 256,
                                                "start": 23,
                                                "end": 43
                                            },
                                            "flags": 256,
                                            "start": 21,
                                            "end": 49
                                        },
                                        "flags": 256,
                                        "start": 19,
                                        "end": 49
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": true,
                                "flags": 1,
                                "start": 9,
                                "end": 49
                            },
                            "flags": 256,
                            "start": 7,
                            "end": 51
                        },
                        "flags": 128,
                        "start": 3,
                        "end": 51
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 51
            },
            "flags": 128,
            "start": 0,
            "end": 52
        }
    ],
    "isModule": false,
    "text": "var x = {\n    \"foo\"() {\n        return bar;\n    }\n};\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 53
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2714}@ No errors
```

