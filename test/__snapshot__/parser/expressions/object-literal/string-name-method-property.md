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

### CST

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
                "flags": 80,
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
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 351,
                                        "asyncKeyword": null,
                                        "asteriskToken": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 201392131,
                                                "text": "foo",
                                                "rawText": "\"foo\"",
                                                "flags": 97,
                                                "start": 9,
                                                "end": 19
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 33,
                                                "start": 20,
                                                "end": 21
                                            },
                                            "returnType": null,
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
                                                                "flags": 81,
                                                                "start": 23,
                                                                "end": 38
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "bar",
                                                                "rawText": "bar",
                                                                "flags": 96,
                                                                "start": 38,
                                                                "end": 42
                                                            },
                                                            "flags": 81,
                                                            "start": 23,
                                                            "end": 43
                                                        }
                                                    ],
                                                    "flags": 33,
                                                    "start": 23,
                                                    "end": 43
                                                },
                                                "flags": 32,
                                                "start": 21,
                                                "end": 49
                                            },
                                            "flags": 33,
                                            "start": 19,
                                            "end": 49
                                        },
                                        "flags": 32,
                                        "start": 9,
                                        "end": 49
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 17,
                                "start": 9,
                                "end": 49
                            },
                            "flags": 49,
                            "start": 7,
                            "end": 51
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 51
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 51
            },
            "flags": 16,
            "start": 0,
            "end": 52
        }
    ],
    "isModule": false,
    "source": "var x = {\n    \"foo\"() {\n        return bar;\n    }\n};\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 53
}
```

### Printed

```javascript

 var x = { "foo"() {
    return bar;
    } }; 
```

### Diagnostics

```javascript
✔ No errors
```

