# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
@break
class C2 {
  method() {}
}
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
                            "kind": 16637,
                            "text": "",
                            "rawText": "",
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 1
                        },
                        "flags": 0,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 1
                    }
                ],
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 1
            },
            "classKeyword": null,
            "name": null,
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 1
                },
                "flags": 1,
                "transformFlags": 0,
                "start": 32,
                "end": 1
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 1
        },
        {
            "kind": 150,
            "breakKeyword": {
                "kind": 37757005,
                "flags": 80,
                "transformFlags": 0,
                "start": 1,
                "end": 6
            },
            "label": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 1,
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
                                    "end": 26
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
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
                                        "statements": [],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 30,
                                        "end": 30
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 28,
                                    "end": 31
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 26,
                                "end": 31
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 31
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 31
                },
                "flags": 15,
                "transformFlags": 0,
                "start": 32,
                "end": 33
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 6,
            "end": 33
        }
    ],
    "isModule": true,
    "source": "@break\nclass C2 {\n  method() {}\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected. A decorator name can only be an identifier - start: 1, end: 6
✖ A 'break' statement can only be used within an enclosing iteration or switch statement. - start: 6, end: 12

```

