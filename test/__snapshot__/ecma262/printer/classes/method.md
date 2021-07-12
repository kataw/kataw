# Kataw parser test case

## Input

`````js

class C {
  name/*comment*/() {
  }
};


({
  name/*comment*/() {
  }
});

`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 0,
                "end": 6
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "transformFlags": 0,
                "start": 6,
                "end": 8
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "name",
                                    "rawText": "name",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 10,
                                    "end": 17
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 29,
                                    "end": 30
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 33,
                                        "transformFlags": 0,
                                        "start": 32,
                                        "end": 32
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 30,
                                    "end": 36
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 17,
                                "end": 36
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 10,
                            "end": 36
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 36
                },
                "flags": 8,
                "transformFlags": 0,
                "start": 32,
                "end": 38
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 0,
            "end": 38
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 38,
            "end": 39
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
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
                                        "kind": 134299649,
                                        "text": "name",
                                        "rawText": "name",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 44,
                                        "end": 51
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 33,
                                        "transformFlags": 0,
                                        "start": 63,
                                        "end": 64
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 33,
                                            "transformFlags": 0,
                                            "start": 66,
                                            "end": 66
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 64,
                                        "end": 70
                                    },
                                    "flags": 33,
                                    "transformFlags": 0,
                                    "start": 51,
                                    "end": 70
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 44,
                                "end": 70
                            }
                        ],
                        "trailingComma": false,
                        "flags": 17,
                        "transformFlags": 0,
                        "start": 44,
                        "end": 70
                    },
                    "flags": 49,
                    "transformFlags": 8,
                    "start": 43,
                    "end": 72
                },
                "flags": 39,
                "transformFlags": 0,
                "start": 35,
                "end": 73
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 39,
            "end": 74
        }
    ],
    "isModule": false,
    "source": "\nclass C {\n  name/*comment*/() {\n  }\n};\n\n\n({\n  name/*comment*/() {\n  }\n});\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 75
}
```

### Printed

```javascript
class C {
  name /*comment*/() {}
}
({
    name /*comment*/() {}
  });

```

### Diagnostics

```javascript
✔ No errors
```

