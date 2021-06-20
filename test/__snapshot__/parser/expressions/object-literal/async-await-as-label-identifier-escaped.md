# Kataw parser test case

## Input

`````js
var obj = {
  async method() {
    \u0061wait: ;
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
                                                "start": 19,
                                                "end": 26
                                            },
                                            "typeParameters": null,
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 289,
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
                                                                    "flags": 16449,
                                                                    "start": 30,
                                                                    "end": 45
                                                                },
                                                                "expression": {
                                                                    "kind": 16637,
                                                                    "text": "",
                                                                    "rawText": "",
                                                                    "flags": 64,
                                                                    "start": 45,
                                                                    "end": 45
                                                                },
                                                                "flags": 32,
                                                                "start": 30,
                                                                "end": 45
                                                            },
                                                            "colonToken": {
                                                                "kind": 21,
                                                                "flags": 64,
                                                                "start": 45,
                                                                "end": 46
                                                            },
                                                            "statement": {
                                                                "kind": 168,
                                                                "flags": 16,
                                                                "start": 46,
                                                                "end": 48
                                                            },
                                                            "flags": 16401,
                                                            "start": 30,
                                                            "end": 48
                                                        }
                                                    ],
                                                    "flags": 16417,
                                                    "start": 30,
                                                    "end": 48
                                                },
                                                "flags": 32,
                                                "start": 28,
                                                "end": 52
                                            },
                                            "flags": 289,
                                            "start": 26,
                                            "end": 52
                                        },
                                        "flags": 32,
                                        "start": 11,
                                        "end": 52
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 17,
                                "start": 11,
                                "end": 52
                            },
                            "flags": 49,
                            "start": 9,
                            "end": 54
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 54
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 54
            },
            "flags": 16,
            "start": 0,
            "end": 55
        }
    ],
    "isModule": false,
    "source": "var obj = {\n  async method() {\n    \\u0061wait: ;\n  }\n};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 55
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'await' keyword must not contain escaped characters - start: 30, end: 45
✖ Identifier expected - start: 45, end: 46
✖ Unicode escapes at the start of labels should not allow keywords - start: 30, end: 46

```

