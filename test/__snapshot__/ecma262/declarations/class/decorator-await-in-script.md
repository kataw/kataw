# Kataw parser test case

## Input

`````js
@await
class C2 {
   method() {}
}
`````

## Options

### Parser Options

`````js
{ allowTypes : true, script: true }
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
            "decorators": {
                "kind": 207,
                "elements": [
                    {
                        "kind": 34611453,
                        "decoratorToken": {
                            "kind": 34611453,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 1
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "await",
                            "rawText": "await",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 6
                        },
                        "flags": 0,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 6
                    }
                ],
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 6
            },
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 0,
                "end": 12
            },
            "name": {
                "kind": 134299649,
                "text": "C2",
                "rawText": "C2",
                "flags": 96,
                "transformFlags": 0,
                "start": 12,
                "end": 15
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
                                    "text": "method",
                                    "rawText": "method",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 17,
                                    "end": 27
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 28,
                                    "end": 29
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 31,
                                        "end": 31
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 29,
                                    "end": 32
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 27,
                                "end": 32
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 32
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 32
                },
                "flags": 15,
                "transformFlags": 0,
                "start": 32,
                "end": 34
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "@await\nclass C2 {\n   method() {}\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

@ await class C2 {
  method() {}
}
```

### Diagnostics

```javascript
✔ No errors
```

