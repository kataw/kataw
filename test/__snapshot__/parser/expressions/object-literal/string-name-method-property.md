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
    "statements": [
        {
            "kind": 155,
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 81921,
                            "value": "x",
                            "autofix": 0,
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
                                            "kind": 67174403,
                                            "value": "foo",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 9,
                                            "end": 19
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 20,
                                            "end": 21
                                        },
                                        "type": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "statements": [
                                                    {
                                                        "kind": 161,
                                                        "expression": {
                                                            "kind": 81921,
                                                            "value": "bar",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 38,
                                                            "end": 42
                                                        },
                                                        "autofix": 0,
                                                        "flags": 128,
                                                        "start": 1,
                                                        "end": 23
                                                    }
                                                ],
                                                "multiline": true,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 23,
                                                "end": 43
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 21,
                                            "end": 49
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 19,
                                        "end": 49
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": true,
                                "autofix": 0,
                                "flags": 1,
                                "start": 9,
                                "end": 49
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 7,
                            "end": 51
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 3,
                        "end": 51
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 3,
                "end": 51
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 52
        }
    ],
    "isModule": false,
    "text": "var x = {\n    \"foo\"() {\n        return bar;\n    }\n};\n",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
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

```

