# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, next: true }
`````

## Input

`````js
function * g() {
  class C {
    static {
      yield;
    }
  }
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
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 96,
                "start": 10,
                "end": 12
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 12,
                "end": 14
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 178,
                            "declareKeyword": null,
                            "decorators": null,
                            "classKeyword": {
                                "kind": 37822544,
                                "flags": 81,
                                "start": 16,
                                "end": 24
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "C",
                                "rawText": "C",
                                "flags": 96,
                                "start": 24,
                                "end": 26
                            },
                            "typeParameters": null,
                            "tail": {
                                "kind": 277,
                                "classHeritage": null,
                                "body": {
                                    "kind": 262,
                                    "elements": [
                                        {
                                            "kind": 263,
                                            "decorators": null,
                                            "declaredKeyword": null,
                                            "staticKeyword": null,
                                            "block": {
                                                "kind": 124,
                                                "block": {
                                                    "kind": 249,
                                                    "statements": [
                                                        {
                                                            "kind": 120,
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "yield",
                                                                "rawText": "yield",
                                                                "flags": 96,
                                                                "start": 41,
                                                                "end": 53
                                                            },
                                                            "flags": 16,
                                                            "start": 41,
                                                            "end": 54
                                                        }
                                                    ],
                                                    "flags": 17,
                                                    "start": 41,
                                                    "end": 54
                                                },
                                                "flags": 16,
                                                "start": 28,
                                                "end": 60
                                            },
                                            "flags": 32,
                                            "start": 28,
                                            "end": 60
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 28,
                                    "end": 60
                                },
                                "flags": 26,
                                "start": 32,
                                "end": 64
                            },
                            "flags": 16,
                            "start": 16,
                            "end": 64
                        }
                    ],
                    "flags": 33,
                    "start": 16,
                    "end": 64
                },
                "flags": 32,
                "start": 14,
                "end": 66
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 66
        }
    ],
    "isModule": false,
    "source": "function * g() {\n  class C {\n    static {\n      yield;\n    }\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 66
}
```

### Printed

```javascript

function * g() {
  class C {
     ;
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

