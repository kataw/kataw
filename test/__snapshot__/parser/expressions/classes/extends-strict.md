# Kataw parser test case

## Input

`````js
var C;

class C extends (function B() {
  with ({});
  return B;
}()) {}
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
                            "text": "C",
                            "rawText": "C",
                            "flags": 768,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 128,
                        "start": 3,
                        "end": 5
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 5
            },
            "flags": 128,
            "start": 0,
            "end": 6
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 768,
                "start": 6,
                "end": 13
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 768,
                "start": 13,
                "end": 15
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 279,
                "extendsToken": {
                    "kind": 4194391,
                    "flags": 768,
                    "start": 15,
                    "end": 23
                },
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 131,
                        "expression": {
                            "kind": 177,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 768,
                                "start": 25,
                                "end": 33
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "B",
                                "rawText": "B",
                                "flags": 768,
                                "start": 33,
                                "end": 35
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 35,
                                "end": 37
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 153,
                                            "withKeyword": {
                                                "kind": 37757029,
                                                "flags": 768,
                                                "start": 39,
                                                "end": 46
                                            },
                                            "expression": {
                                                "kind": 220,
                                                "propertyList": {
                                                    "kind": 218,
                                                    "properties": [],
                                                    "trailingComma": false,
                                                    "multiline": false,
                                                    "flags": 0,
                                                    "start": 49,
                                                    "end": 49
                                                },
                                                "flags": 256,
                                                "start": 48,
                                                "end": 50
                                            },
                                            "statement": {
                                                "kind": 168,
                                                "flags": 128,
                                                "start": 51,
                                                "end": 52
                                            },
                                            "flags": 128,
                                            "start": 39,
                                            "end": 52
                                        },
                                        {
                                            "kind": 161,
                                            "returnKeyword": {
                                                "kind": 37757022,
                                                "flags": 768,
                                                "start": 52,
                                                "end": 61
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "B",
                                                "rawText": "B",
                                                "flags": 768,
                                                "start": 61,
                                                "end": 63
                                            },
                                            "flags": 128,
                                            "start": 1,
                                            "end": 52
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 256,
                                    "start": 39,
                                    "end": 64
                                },
                                "flags": 256,
                                "start": 37,
                                "end": 66
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 256,
                            "start": 25,
                            "end": 66
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 67,
                            "end": 67
                        },
                        "flags": 256,
                        "start": 25,
                        "end": 68
                    },
                    "flags": 256,
                    "start": 23,
                    "end": 69
                },
                "typeParameter": null,
                "flags": 128,
                "start": 23,
                "end": 69
            },
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 256,
                "start": 71,
                "end": 72
            },
            "flags": 128,
            "start": 6,
            "end": 72
        }
    ],
    "isModule": false,
    "text": "var C;\n\nclass C extends (function B() {\n  with ({});\n  return B;\n}()) {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 72
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ 'with' statements are not allowed in strict mode. - start: 39, end: 46

```

