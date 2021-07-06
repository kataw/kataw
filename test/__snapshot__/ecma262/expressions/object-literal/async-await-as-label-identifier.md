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
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 7
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 351,
                                        "asyncKeyword": {
                                            "kind": 82031,
                                            "flags": 353,
                                            "transformFlags": 0,
                                            "start": 11,
                                            "end": 19
                                        },
                                        "asteriskToken": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "method",
                                                "rawText": "method",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 19,
                                                "end": 26
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 289,
                                                "transformFlags": 0,
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
                                                                    "transformFlags": 0,
                                                                    "start": 30,
                                                                    "end": 40
                                                                },
                                                                "expression": {
                                                                    "kind": 16637,
                                                                    "text": "",
                                                                    "rawText": "",
                                                                    "flags": 64,
                                                                    "transformFlags": 0,
                                                                    "start": 40,
                                                                    "end": 40
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 30,
                                                                "end": 40
                                                            },
                                                            "colonToken": {
                                                                "kind": 21,
                                                                "flags": 64,
                                                                "transformFlags": 0,
                                                                "start": 40,
                                                                "end": 41
                                                            },
                                                            "statement": {
                                                                "kind": 168,
                                                                "flags": 16,
                                                                "transformFlags": 0,
                                                                "start": 41,
                                                                "end": 43
                                                            },
                                                            "flags": 17,
                                                            "transformFlags": 0,
                                                            "start": 30,
                                                            "end": 43
                                                        }
                                                    ],
                                                    "flags": 33,
                                                    "transformFlags": 0,
                                                    "start": 30,
                                                    "end": 43
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 28,
                                                "end": 47
                                            },
                                            "flags": 289,
                                            "transformFlags": 0,
                                            "start": 26,
                                            "end": 47
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 11,
                                        "end": 47
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 17,
                                "transformFlags": 0,
                                "start": 11,
                                "end": 47
                            },
                            "flags": 49,
                            "transformFlags": 8,
                            "start": 9,
                            "end": 49
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 3,
                        "end": 49
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 49
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 50
        }
    ],
    "isModule": false,
    "source": "var obj = {\n  async method() {\n    await: ;\n  }\n};",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
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

