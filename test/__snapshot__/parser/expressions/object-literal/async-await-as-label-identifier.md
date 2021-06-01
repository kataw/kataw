# Kataw parser test case

## Input

`````js
var obj = {
  async method() {
    await: ;
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
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 96,
                            "start": 3,
                            "end": 7
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 257,
                                        "asyncKeyword": {
                                            "kind": 82031,
                                            "flags": 64,
                                            "start": 11,
                                            "end": 19
                                        },
                                        "generatorToken": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "method",
                                                "rawText": "method",
                                                "flags": 96,
                                                "start": 19,
                                                "end": 26
                                            },
                                            "typeParameters": null,
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 288,
                                                "start": 27,
                                                "end": 28
                                            },
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [
                                                        {
                                                            "kind": 163,
                                                            "label": {
                                                                "kind": 208,
                                                                "awaitKeyword": {
                                                                    "kind": 82196,
                                                                    "flags": 65,
                                                                    "start": 30,
                                                                    "end": 40
                                                                },
                                                                "expression": {
                                                                    "kind": 16637,
                                                                    "text": "",
                                                                    "flags": 64,
                                                                    "start": 40,
                                                                    "end": 40
                                                                },
                                                                "flags": 32,
                                                                "start": 30,
                                                                "end": 40
                                                            },
                                                            "colonToken": {
                                                                "kind": 21,
                                                                "flags": 64,
                                                                "start": 40,
                                                                "end": 41
                                                            },
                                                            "statement": {
                                                                "kind": 168,
                                                                "flags": 16,
                                                                "start": 41,
                                                                "end": 43
                                                            },
                                                            "flags": 17,
                                                            "start": 30,
                                                            "end": 43
                                                        }
                                                    ],
                                                    "flags": 33,
                                                    "start": 30,
                                                    "end": 43
                                                },
                                                "flags": 32,
                                                "start": 28,
                                                "end": 47
                                            },
                                            "flags": 288,
                                            "start": 26,
                                            "end": 47
                                        },
                                        "flags": 32,
                                        "start": 11,
                                        "end": 47
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 17,
                                "start": 11,
                                "end": 47
                            },
                            "flags": 49,
                            "start": 9,
                            "end": 49
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 49
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 49
            },
            "flags": 16,
            "start": 0,
            "end": 50
        }
    ],
    "isModule": false,
    "source": "var obj = {\n  async method() {\n    await: ;\n  }\n};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 50
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 40, end: 41
✖ Identifier expected. 'await' is a reserved word in strict mode and module goal and cannot be used as an label - start: 30, end: 41

```

