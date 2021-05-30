# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Input

`````js
class A {set 9(x){}}
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
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 262,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": {
                                "kind": 16499,
                                "flags": 64,
                                "start": 9,
                                "end": 12
                            },
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 201392130,
                                    "text": 9,
                                    "rawText": "9",
                                    "flags": 96,
                                    "start": 12,
                                    "end": 14
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [
                                        {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 15,
                                            "end": 16
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 608,
                                    "start": 15,
                                    "end": 17
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 18,
                                        "end": 18
                                    },
                                    "flags": 32,
                                    "start": 17,
                                    "end": 19
                                },
                                "flags": 512,
                                "start": 14,
                                "end": 19
                            },
                            "flags": 512,
                            "start": 9,
                            "end": 19
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 19
                },
                "flags": 7,
                "start": 32,
                "end": 20
            },
            "flags": 16,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": true,
    "source": "class A {set 9(x){}}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript

class A {
  set 9(x) {}
}
```

### Diagnostics

```javascript
✔ No errors
```

