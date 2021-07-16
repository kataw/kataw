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
                "transformFlags": 0,
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
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 5
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 5
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 5
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 6
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 6,
                "end": 13
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "transformFlags": 0,
                "start": 13,
                "end": 15
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
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 25,
                                    "end": 33
                                },
                                "asteriskToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "B",
                                    "rawText": "B",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 33,
                                    "end": 35
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 36,
                                    "end": 36
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
                                                    "flags": 81,
                                                    "transformFlags": 0,
                                                    "start": 39,
                                                    "end": 46
                                                },
                                                "expression": {
                                                    "kind": 220,
                                                    "propertyList": {
                                                        "kind": 218,
                                                        "properties": [],
                                                        "trailingComma": false,
                                                        "flags": 16,
                                                        "transformFlags": 0,
                                                        "start": 49,
                                                        "end": 49
                                                    },
                                                    "flags": 48,
                                                    "transformFlags": 8,
                                                    "start": 48,
                                                    "end": 50
                                                },
                                                "statement": {
                                                    "kind": 168,
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 51,
                                                    "end": 52
                                                },
                                                "flags": 81,
                                                "transformFlags": 0,
                                                "start": 39,
                                                "end": 52
                                            },
                                            {
                                                "kind": 161,
                                                "returnKeyword": {
                                                    "kind": 37757022,
                                                    "flags": 81,
                                                    "transformFlags": 0,
                                                    "start": 52,
                                                    "end": 61
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "B",
                                                    "rawText": "B",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 61,
                                                    "end": 63
                                                },
                                                "flags": 81,
                                                "transformFlags": 256,
                                                "start": 52,
                                                "end": 64
                                            }
                                        ],
                                        "flags": 33,
                                        "transformFlags": 0,
                                        "start": 39,
                                        "end": 64
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 37,
                                    "end": 66
                                },
                                "returnType": null,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 25,
                                "end": 66
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 67,
                                "end": 67
                            },
                            "flags": 32,
                            "transformFlags": 1,
                            "start": 25,
                            "end": 68
                        },
                        "flags": 23,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 69
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 23,
                    "end": 69
                },
                "body": {
                    "kind": 303,
                    "elements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 71,
                    "end": 71
                },
                "flags": 15,
                "transformFlags": 0,
                "start": 32,
                "end": 72
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 6,
            "end": 72
        }
    ],
    "isModule": false,
    "source": "var C;\n\nclass C extends (function B() {\n  with ({});\n  return B;\n}()) {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 72
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Duplicate identifier - start: 13, end: 15
✖ 'with' statements are not allowed in strict mode. - start: 39, end: 46

```

